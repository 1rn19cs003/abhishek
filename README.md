# Abhishek Jaiswal - Portfolio Website

A modern, full-stack portfolio website built with Next.js 15, Tailwind CSS, and Firebase.

## Features

- 🎨 **Modern UI/UX**: Responsive design with dark mode support
- 🌍 **Internationalization**: English and Hindi support
- 🤖 **AI Assistant**: Interactive chatbot interface
- 🎮 **Gamified About Section**: Unlock fun facts by playing a game
- 📱 **Admin Dashboard**: Manage projects, skills, and messages
- ⚡ **Performance**: Optimized with Next.js App Router and Server Components

## Tech Stack

- **Frontend**: Next.js 15, React, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Firebase Admin SDK
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Deployment**: Vercel (recommended)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Copy the environment variables from `ENV_TEMPLATE.md` to `.env.local` and fill in your credentials.

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

- `src/app`: App Router pages and layouts
- `src/components`: Reusable UI components
- `src/lib`: Firebase and utility configurations
- `src/messages`: Localization JSON files
- `src/types`: TypeScript interfaces

## Admin Access

Navigate to `/admin` to access the admin panel. Default credentials (mock):
- Username: `admin`
- Password: `admin`

(Note: You should update the authentication logic in `src/app/[locale]/admin/page.tsx` to use Firebase Auth before deploying)
