import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./Contact";
import '@testing-library/jest-dom';
import emailjs from "@emailjs/browser";

// Mock emailjs
jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(),
}));

describe("Contact Component", () => {
  beforeEach(() => {
    emailjs.sendForm.mockReset();
  });

  test("renders contact options", () => {
    render(<Contact />);
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Messenger/i)).toBeInTheDocument();
    expect(screen.getByText(/Whatsapp/i)).toBeInTheDocument();
  });

  test("renders form inputs", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText(/Your Full Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
  });

  test("calls emailjs.sendForm on submit", async () => {
    emailjs.sendForm.mockResolvedValue({ text: "OK" });

    render(<Contact />);

    // Fill form
    fireEvent.change(screen.getByPlaceholderText(/Your Full Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Your Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Your Message/i), {
      target: { value: "Hello there!" },
    });

    // Submit form
    fireEvent.submit(screen.getByRole("button", { name: /Send Message/i }));

    // Wait for async call
    await waitFor(() => expect(emailjs.sendForm).toHaveBeenCalledTimes(1));
  });

  test("shows loader while sending", async () => {
    let resolvePromise;
    emailjs.sendForm.mockImplementation(
      () =>
        new Promise((res) => {
          resolvePromise = res;
        })
    );

    render(<Contact />);
    fireEvent.submit(screen.getByRole("button", { name: /Send Message/i }));

    // Loader should appear
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    // Resolve promise
    resolvePromise({ text: "OK" });

    await waitFor(() =>
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument()
    );
  });
});
