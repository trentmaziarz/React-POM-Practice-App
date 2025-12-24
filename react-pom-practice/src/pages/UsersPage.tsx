import type { User } from '../types/User';

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

export default function UsersPage() {
  return (
    <div data-testid="users-page">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} data-testid={`user-row-${user.id}`}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
