# Clean Architecture Boilerplate

⚠️ Under Construction: This boilerplate is currently under development. Some features might be poorly implemented or not work correctly.

##
## Description

Welcome to the Clean Architecture Boilerplate, a full-stack template designed to kickstart your next web application with a scalable and maintainable foundation. This boilerplate follows the principles of Clean Architecture, promoting separation of concerns and testability.

This project integrates a modern React frontend with a NestJS backend, utilizing a suite of powerful tools and libraries to streamline development and ensure code quality.

##
## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)

##
## Features

- Modular Architecture: Clean separation between frontend and backend, adhering to Clean Architecture principles.
- State Management: Efficient data fetching and caching with Tanstack Query.
- UI Components: Styled components using TailwindCSS and Shadcn UI library.
- Type Safety: Schema validation with Zod and auto-generated API clients using OpenAPI.
- Database Integration: Seamless database operations using Prisma ORM.
- Continuous Integration: Pre-commit hooks with Husky, code formatting with Biome, and commit message linting with Commitlint.

##
## Tech Stack

### Frontend

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Tanstack Query](https://tanstack.com/query) - A powerful and flexible data fetching library.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Shadcn](https://ui.shadcn.com/) - A library of components built with Radix UI and TailwindCSS.
- [Zod](https://zod.dev/) - A TypeScript-first schema validation library.

### Backend

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building server-side applications.
- [Prisma](https://prisma.io/) - An ORM for database operations.
- [OpenAPI](https://swagger.io/specification/) - A specification for describing RESTful APIs.
- [OpenAPI Generator](https://openapi-generator.tech/) - A tool for generating API clients and servers.

### Common

- [Docker](https://www.docker.com/) - A platform for building, shipping, and running applications in containers.
- [Biome](https://biomejs.dev/) - A modern and performant JavaScript and TypeScript linter.
- [Husky](https://typicode.github.io/husky/) - A library for managing pre-commit hooks.
- [Commitlint](https://commitlint.js.org/) - A library for managing commit messages.
- [Conventional Commits](https://conventionalcommits.org/) - A specification for managing commit messages.

##
## Getting Started

### Prerequisites

- Node.js (v20.12.0 or later)
- pnpm (v9.0.0 or later)
- Docker (v20.10.0 or later)
- Docker Compose (v2.10.0 or later)
