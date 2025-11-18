import React, { useEffect, useState } from "react";

export default function UserList({ fetchUsers }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((data) => setUsers(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [fetchUsers]);

  if (loading) return <p>Loading...</p>;
  if (users.length === 0) return <p>No users found</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} data-testid="user-item">
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
