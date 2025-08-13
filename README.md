# E-Commerce Platform
A modern, full-stack e-commerce solution with separate admin dashboard and customer storefront applications.

Preview:
[Admin dashboard](https://e-commerce-ruddy-nine-51.vercel.app/)
[Customer storefront](https://e-commerce-e8lt.vercel.app/)


## Project Structure
This project is organized as a monorepo with two main applications:

- ecommerce-admin : Admin dashboard for store management
- ecommerce-store : Customer-facing storefront
## Features
### Admin Dashboard
- Multi-store management
- Product, category, size, and color management
- Order processing and tracking
- Sales analytics and reporting
- Image upload and management via Cloudinary
- Theme customization (light/dark mode)
### Customer Storefront
- Responsive product browsing
- Category and filter navigation
- Product search
- Shopping cart functionality
- Secure checkout process
- Order history
## Tech Stack
- Framework : Next.js 15+
- Language : TypeScript
- Styling : Tailwind CSS
- Database : PostgreSQL with Prisma ORM
- Authentication : Clerk
- Payment Processing : Stripe
- State Management : Zustand
- UI Components :
  - Admin: Radix UI
  - Store: Headless UI
- Deployment : Vercel
## Getting Started
### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database
- Clerk account for authentication
- Stripe account for payments
- Cloudinary account for image hosting
### Environment Setup
Create .env files in both project directories with the following variables:
 Admin Dashboard
 
```text
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
DATABASE_URL="your-postgresql-connection-string"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
STRIPE_API_KEY="your-stripe-api-key"
FRONTEND_STORE_URL="your-frontend-store-url"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
```


 Store Frontend
 ```text
NEXT_PUBLIC_API_URL="your-admin-api-url"
```
### Installation
1. Clone the repository
2. Install dependencies for both projects
3. Set up the database
4. Start the development servers
5. Access the applications
   - Admin Dashboard: http://localhost:3000
   - Store Frontend: http://localhost:3001 (if running both simultaneously)