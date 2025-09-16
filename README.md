# {{APP_NAME}}

React Native template with Expo, Supabase, NativeWind, and Shadcn/UI components.

## Features

- Expo Router for file-based routing
- Supabase for backend services
- NativeWind for Tailwind CSS styling
- Shadcn/UI components for React Native
- TypeScript support
- ESLint and Prettier configured

## Prerequisites

- Node.js (v18+)
- npm/yarn/pnpm
- Expo CLI: `npm install -g @expo/cli`
- Expo Go app on your phone

## Quick Start

1. Clone and install:

```bash
git clone <repo-url> {{PROJECT_NAME}}
cd {{PROJECT_NAME}}
npm install
```

2. Setup project:

```bash
npm run setup
# Enter your app name (kebab-case) and owner name
```

3. Configure environment:

```bash
# Edit .env with your Supabase credentials
# Get them from: https://app.supabase.com/project/_/settings/api
```

4. Run the app:

```bash
npm start
# Scan QR code with Expo Go app
```

## Project Structure

```
├── app/                 # Expo Router pages
├── components/ui/       # Shadcn/UI components
├── lib/utils.ts         # Utility functions
├── utils/supabase.ts    # Supabase configuration
├── assets/              # Images and assets
└── global.css           # Tailwind styles
```

## Scripts

- `npm start` - Start development server
- `npm run ios` - Open in iOS Simulator
- `npm run android` - Open in Android Emulator
- `npm run web` - Run in browser
- `npm run lint` - Check code quality
- `npm run format` - Fix formatting

## Manual Setup

If not using the setup script, replace these placeholders:

- `{{PROJECT_NAME}}` - Project name (kebab-case)
- `{{APP_NAME}}` - Display name
- `{{APP_SLUG}}` - App slug
- `{{APP_SCHEME}}` - URL scheme
- `{{ANDROID_PACKAGE}}` - Android package name

## Building for Production

1. Install EAS CLI: `npm install -g eas-cli`
2. Initialize: `eas init`
3. Build: `npm run build:prod`

## License

MIT License
