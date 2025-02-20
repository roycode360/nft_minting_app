# NFT App Monorepo

This repository contains a complete NFT minting application, organized as a monorepo with two main projects:

- **Frontend:** A Next.js-based decentralized application (dApp) that allows users to connect their wallet, and mint NFTs.
- **Backend:** A NestJS-based API service for NFT management, using PostgreSQL for persistence.

Both projects are configured to run concurrently from the top level, and Git is set up at the root of this repository for code pushes and version control.

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Projects](#running-the-projects)
  - [Running Frontend and Backend Concurrently](#running-frontend-and-backend-concurrently)

---

## Overview

This monorepo contains the full NFT minting application:

- **Frontend:** Built with Next.js, React Query, Tailwind CSS, and Wagmi and Rainbowkit integration.
- **Backend:** Built with NestJS, TypeScript, and PostgreSQL (using TypeORM).

The projects are designed to work together seamlessly, with a top-level configuration to run and manage both services concurrently.

---

> **Note:**  
> The top-level Git configuration tracks both the frontend and backend directories. All commits and pushes are performed from the root of the repository.

---

## Prerequisites

- **Node.js** (v18.18.0 or higher)
- **npm**
- **Git**
- **MetaMask** browser extension (for frontend wallet integration)
- A valid **Alchemy API Key** (for blockchain interactions)
- A PostgreSQL instance (for the backend)

---

## Installation

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/roycode360/nft_minting_app.git
    cd nft_minting_app
    ```

2.  **Install Frontend Dependencies:**

    ```bash
    cd frontend
    npm install
    ```

3.  **Install Backend Dependencies:**

    ```bash
    cd backend
    npm install
    ```

---

## Environment Variables

## Frontend

Create a .env.local file in the /frontend directory with:

NEXT_PUBLIC_API_URL=http://localhost:8000

## Backend

Create a .env file in the /backend directory with:

DATABASE_URL=<your_local_postgres_db_url>

---

## Running the Projects

From the root of your project, run:

```bash
    npm run dev
```

> **Note:**  
> This command uses concurrently to start both the Next.js frontend and the NestJS backend.
> The frontend is available at http://localhost:3000 & backend at http://localhost:8000

## Submission

Deployed API link (Render): ""

Deployed frontend link (Vercel): ""

Walthrough Video: ""

Project GitHub Repository: ""
