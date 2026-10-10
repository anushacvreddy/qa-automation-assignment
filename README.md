# QA Automation Take-Home Assignment

A small automated test suite built with **Playwright and TypeScript** to test a demo shopping website and a REST API.

## Overview

This project covers the five scenarios requested in the QA Automation take-home assignment.

### UI Tests — SauceDemo

1. **Valid login:** Logs in as `standard_user` and verifies that the Products title is visible.
2. **Locked-out user:** Logs in as `locked_out_user` and verifies that the error message contains "locked out".
3. **Add to cart:** Adds one product to the cart and verifies that the cart badge displays `1`.

### API Tests — ReqRes

4. **Get a user:** Sends `GET /api/users/2` and verifies the status is `200` and the response contains an email.
5. **Create a user:** Sends `POST /api/users` with the name `morpheus` and job `leader`, then verifies the status is `201` and the returned name is `morpheus`.

## Tech Stack

- TypeScript
- Playwright Test
- Node.js and npm
- SauceDemo
- ReqRes API
- dotenv for environment-variable loading

## Project Structure

```text
qa-automation-assignment/
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts
│   │   └── cart.spec.ts
│   └── api/
│       └── users.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Prerequisites

- Node.js 18 or newer
- npm
- A ReqRes account and API key

## Setup

Clone the repository:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/qa-automation-assignment.git
cd qa-automation-assignment
npm install
npx playwright install chromium
```

Create a `.env` file in the project root and add your ReqRes API key:

```text
REQRES_API_KEY=your_actual_api_key
```

Keep the real API key private. The `.env` file is excluded from Git using `.gitignore`.

## Run the Tests

Run the complete suite:

```bash
npx playwright test
```

Run only the UI tests:

```bash
npx playwright test tests/ui
```

Run only the API tests:

```bash
npx playwright test tests/api/users.spec.ts
```

## Test Results

All five required tests passed when run together locally.

- UI tests: 3
- API tests: 2
- Total: 5 passing tests

## Implementation Notes

- Used Playwright's `page` fixture for browser tests and `request` fixture for API tests.
- Used accessible or test-specific locators where appropriate.
- Configured Chromium as the test browser.
- Added assertions for UI elements, HTTP status codes, and response data.
- Loaded the ReqRes API key from a local `.env` file instead of hardcoding it in the tests.

## Learning and AI Assistance

I used the Playwright documentation and AI assistance while learning how to set up the project, use locators and assertions, send API requests, and manage environment variables. I ran the tests locally and checked that all five required scenarios passed. This assignment helped me understand the basics of UI and API automation using Playwright. With more time, I would add the optional scenarios and explore ways to reduce repeated login steps.

## Author
Cv Anusha Reddy
