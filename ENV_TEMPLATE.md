# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here

# Firebase Admin SDK (for server-side operations)
FIREBASE_ADMIN_PROJECT_ID=your_project_id_here
FIREBASE_ADMIN_CLIENT_EMAIL=your_service_account_email_here
FIREBASE_ADMIN_PRIVATE_KEY=your_private_key_here

# AI Assistant Configuration (OpenAI or similar)
OPENAI_API_KEY=your_openai_api_key_here
AI_MODEL=gpt-4o-mini

# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here
JWT_SECRET=your_jwt_secret_key_here

# Email Configuration (for contact form)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here
EMAIL_TO=your_email@gmail.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Abhishek Jaiswal - Portfolio

# Resume Generation
RESUME_GENERATION_DELAY=3000

# Visitor Counter (optional - can use Firebase)
ENABLE_VISITOR_COUNTER=true
```

## Setup Instructions

### 1. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (Email/Password)
5. Enable Storage
6. Get your Firebase config from Project Settings
7. Download the service account key for Admin SDK

### 2. OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an API key
3. Add it to `OPENAI_API_KEY`

### 3. Email Configuration
1. Use Gmail or any SMTP service
2. For Gmail, enable 2FA and create an App Password
3. Add credentials to EMAIL_USER and EMAIL_PASSWORD

### 4. Admin Credentials
1. Set a strong password for ADMIN_PASSWORD
2. Generate a random JWT_SECRET (use: `openssl rand -base64 32`)

## After Setup
Run `npm run dev` to start the development server.
