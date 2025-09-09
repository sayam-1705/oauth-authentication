# Next.js Google OAuth Authentication

This project is a simple authentication system built with [Next.js](https://nextjs.org) and [NextAuth.js](https://next-auth.js.org) using Google as an OAuth provider.

It demonstrates how to quickly add Google OAuth-based login to a Next.js app, allowing users to sign in with their Google accounts. Upon signing in, users are greeted with their name and an avatar, and are given the option to sign out.

## Features

- Google OAuth authentication with NextAuth.js
- Simple session management with user greeting and logout
- Built with Next.js App Router and React Server Components
- Styled with Tailwind CSS and Geist font

## How it works

1. The app displays a "Sign in with Google" button.
2. Clicking the button triggers the NextAuth.js sign-in flow using the Google provider.
3. Once authenticated, the user's session is managed and their info (name, avatar) is displayed.
4. Users can sign out to end their session.

**Authentication logic:**  
Authentication is handled in `app/api/auth/[...nextauth]/route.ts` using NextAuth.js and the Google provider. Provider credentials are read from environment variables.

User session is managed using NextAuth's `SessionProvider`, and the authentication state is reflected in the UI (see `components/LoginButton.tsx`).

## Getting Started

First, clone the repo and install dependencies:

```bash
git clone https://github.com/sayam-1705/oauth-authentication.git
cd oauth-authentication
npm install
```

Then, create a `.env.local` file at the root of the project with the following content:

```env
# .env.local example
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
```

- You can get your Google client credentials from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
- Generate a random string for `NEXTAUTH_SECRET` (e.g., using `openssl rand -base64 32`).

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

- `app/api/auth/[...nextauth]/route.ts` – NextAuth.js configuration and Google provider setup
- `components/LoginButton.tsx` – Handles sign in/out and displays user info
- `components/SessionProvider.tsx` – Wraps the app with NextAuth's SessionProvider
- `app/layout.tsx` – Wraps the app with authentication context
- `app/page.tsx` – Home page with the login button

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)
- [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
