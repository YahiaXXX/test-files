import { render, screen, waitFor } from "@testing-library/react";
import UserList from "./UserList";
import { formatUserName } from "./utils";

describe("UserList component", () => {
  test("renders loading initially", () => {
    const fakeFetch = () => new Promise(() => {});
    render(<UserList fetchUsers={fakeFetch} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("renders users after fetch", async () => {
    const users = [
      { id: 1, name: "Alice", email: "alice@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
    ];
    const fakeFetch = jest.fn().mockResolvedValue(users);

    render(<UserList fetchUsers={fakeFetch} />);

    await waitFor(() => expect(screen.getAllByTestId("user-item").length).toBe(2));
    expect(screen.getByText(/Alice/)).toBeInTheDocument();
    expect(screen.getByText(/Bob/)).toBeInTheDocument();
  });

  test("renders 'No users found' if empty array", async () => {
    const fakeFetch = jest.fn().mockResolvedValue([]);

    render(<UserList fetchUsers={fakeFetch} />);

    await waitFor(() => screen.getByText(/No users found/i));
    expect(screen.getByText(/No users found/i)).toBeInTheDocument();
  });

  test("handles formatUserName utility", () => {
    expect(formatUserName({ name: "Alice" })).toBe("ALICE");
    expect(formatUserName({})).toBe("Unknown");
    expect(formatUserName(null)).toBe("Unknown");
  });
});
