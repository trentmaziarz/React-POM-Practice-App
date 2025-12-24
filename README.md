# React POM Practice App

This is a **small, production‑esque React application** designed specifically for **Page Object Model (POM) and testing practice**.

The app is intentionally simple in UI, but structured like a real project:

* Clear separation of concerns
* Predictable DOM structure
* Stable selectors for automation
* Multiple pages + shared layout

You can use this to:

* Design Page Object Models
* Practice Jest + React Testing Library
* Practice Playwright / Cypress POMs
* Add negative / edge‑case tests

---

## App Overview

**Features**

* Login page (fake auth)
* Dashboard page
* Users list page
* Global navigation
* Reusable components

**No backend** — everything is mocked in‑memory so tests are deterministic.

---

## Project Structure

```
react-pom-practice/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── routes.tsx
│   ├── components/
│   │   ├── NavBar.tsx
│   │   └── Button.tsx
│   ├── pages/
│   │   ├── LoginPage.tsx
│   │   ├── DashboardPage.tsx
│   │   └── UsersPage.tsx
│   ├── services/
│   │   └── authService.ts
│   ├── types/
│   │   └── User.ts
│   ├── index.tsx
│   └── main.css
├── public/
├── README.md
└── package.json
```

---

## Stable Selectors (Important for POM)

Every interactive element includes a **`data-testid`** or semantic role so you can practice **robust selectors**:

Examples:

* `data-testid="login-email"`
* `data-testid="login-submit"`
* `data-testid="nav-users"`

Avoid brittle selectors (CSS chains, text‑only matching).

---

## Pages

### Login Page

* Email input
* Password input
* Submit button
* Error message on invalid credentials

### Dashboard

* Welcome message
* Navigation links

### Users Page

* Static list of users
* Each row has a test id

---

## 🔌 Example Code

### `LoginPage.tsx`

```tsx
import { useState } from 'react';
import { login } from '../services/authService';

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const success = login(email, password);
    if (!success) {
      setError('Invalid credentials');
      return;
    }
    onLogin();
  };

  return (
    <div data-testid="login-page">
      <h1>Login</h1>

      <input
        data-testid="login-email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        data-testid="login-password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button data-testid="login-submit" onClick={handleSubmit}>
        Sign In
      </button>

      {error && <p data-testid="login-error">{error}</p>}
    </div>
  );
}
```

---

### `UsersPage.tsx`

```tsx
import { User } from '../types/User';

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
        {users.map((u) => (
          <li key={u.id} data-testid={`user-row-${u.id}`}>
            {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Practice Goals

### Step 1 – Create Page Objects

Examples:

* `LoginPageObject`
* `NavBarObject`
* `UsersPageObject`

Each object should:

* Encapsulate selectors
* Expose **intent‑based actions** (e.g. `loginAs()`)

### Step 2 – Write Tests

Practice:

* Happy path login
* Invalid login
* Navigation between pages
* Users list assertions

### Step 3 – Refactor

* Remove duplication
* Improve selector strategy
* Add helper methods

---