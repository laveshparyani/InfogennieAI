# InfogennieAI

A modern, AI-powered business intelligence platform to analyze and visualize your data with ease. Now featuring a fully redesigned, enterprise-ready UI with beautiful, responsive pages and seamless authentication.

## Project Structure

```
src/
├── components/     # Reusable UI components (e.g., Navbar)
├── pages/          # Page components (Home, Login, Register)
├── assets/         # Static assets (images, fonts, etc.)
├── styles/         # Global styles and Tailwind configuration
├── utils/          # Utility functions
├── hooks/          # Custom React hooks
├── context/        # React context providers
└── services/       # API services and external integrations
```

## Tech Stack

- **Frontend:**
  - React
  - Tailwind CSS
  - Framer Motion (for animations)
  - React Router
- **Backend (to be implemented):**
  - Django or Node.js
  - SQL Database

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## Features

- Modern, animated landing page
- User authentication (Login & Register) with beautiful, glassmorphic UI
- Data visualization and analytics preview (on Home page)
- Responsive design for all devices
- Real-time analytics (UI preview)
- Custom reports (UI preview)
- Data import/export (UI preview)

> **Note:** The Dashboard page and route have been removed for a cleaner, more focused experience. All analytics previews are now part of the Home page. Backend/API integration is planned for future releases.

## Development Guidelines

1. Use the component structure in `src/components`
2. Style with Tailwind CSS and follow the design system
3. Implement responsive design and accessibility best practices
4. Use Framer Motion for smooth UI animations
5. Follow React best practices and document code with comments

## Backend Integration

The frontend is designed to work with a Django/Node.js backend. API endpoints will be integrated as they are developed.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is proprietary and confidential. 