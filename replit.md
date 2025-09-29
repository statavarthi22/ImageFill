# Overview

This is a full-stack web application built with React and Express, designed for shipping/logistics services. The project uses a modern monorepo structure with TypeScript throughout, featuring a React frontend with shadcn/ui components and an Express backend with PostgreSQL database integration via Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

## Data Storage
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for database schema management
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Project Structure
- **Monorepo Layout**: Shared TypeScript configuration and dependencies
- **Client**: React application in `/client` directory
- **Server**: Express API in `/server` directory  
- **Shared**: Common schemas and types in `/shared` directory
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)

## Development Workflow
- **Hot Reloading**: Vite dev server with HMR for frontend
- **API Development**: Express with tsx for backend hot reloading
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Database**: Drizzle push for schema synchronization

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for Neon
- **drizzle-orm**: TypeScript ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **express**: Node.js web application framework

## UI and Styling
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

## Development Tools
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **drizzle-kit**: Database schema management CLI

## Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle and Zod

## Additional Libraries
- **date-fns**: Date manipulation utility
- **wouter**: Lightweight React router
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel component