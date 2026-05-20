# prompts-JLC.md
# Module 11 - E2E Testing with Cypress
# LTI Project

---

# Prompt 1 — Initial Exercise Analysis

We are going to complete the Module 11 exercise of the AI course.

The exercise statement is located inside:
Session 11 - 005 - Exercise: E2E Testing with Cypress

The project is the LTI recruitment platform developed during previous modules.

Your task is to:

- Analyze the current project structure
- Understand the frontend and backend architecture
- Explain how Cypress should be integrated
- Generate a professional implementation plan for E2E testing

The tests must validate:

- Position Details page loading
- Interview stages rendering
- Candidate rendering
- Drag & drop between stages
- Backend update requests

Use best practices and organize the project like a professional production-ready setup.

---

# Prompt 2 — Cypress Installation and Configuration

Configure Cypress in the frontend project.

Requirements:

- Install Cypress
- Configure cypress.config.js
- Create Cypress folder structure
- Configure support files
- Add npm scripts
- Use modern Cypress E2E structure

The final structure should include:

- cypress/e2e
- cypress/fixtures
- cypress/support

Generate all necessary code and configuration files.

---

# Prompt 3 — Create Cypress Fixtures

Generate reusable Cypress fixtures for the LTI project.

Create:

1. interviewFlow.json
2. candidates.json

The fixtures should simulate:

- A Position named "Senior Frontend Engineer"
- Multiple interview stages
- Multiple candidates assigned to stages

The structure must match the backend API responses.

---

# Prompt 4 — Create Cypress E2E Tests

Generate a complete Cypress E2E test suite for Position Details.

The test suite must validate:

- Position page rendering
- Position title rendering
- Interview stages rendering
- Candidate rendering
- Drag & drop behavior
- PUT backend requests

Requirements:

- Use cy.intercept
- Use fixtures
- Validate API calls
- Follow Cypress best practices

Generate the full code for:
frontend/cypress/e2e/position.cy.js

---

# Prompt 5 — Improve React State Synchronization

Analyze PositionDetails.js.

The current implementation loads interview flow and candidates inside the same useEffect, which may create asynchronous rendering issues.

Refactor the component using:

- one useEffect for interview flow
- one useEffect for candidates

The goal is:

- avoid stale state
- improve rendering consistency
- improve Cypress reliability

Generate the updated React code.

---

# Prompt 6 — PostgreSQL Debugging

The frontend shows:

"The table public.Candidate does not exist in the current database."

Analyze the issue and explain:

- why Prisma connects correctly
- why the schema is missing
- how to apply migrations
- how to validate PostgreSQL tables

Generate all required commands.

---

# Prompt 7 — Prisma Database Initialization

The Position table is empty.

Explain how to:

- inspect PostgreSQL tables
- insert demo data
- create Company
- create InterviewFlow
- create InterviewStep
- create Position
- create Candidate
- create Application

The solution must be compatible with the Prisma schema already defined in the project.

Generate SQL commands for PostgreSQL.

---

# Prompt 8 — Debugging Foreign Keys and Constraints

While creating Application records, PostgreSQL generates foreign key and NOT NULL constraint errors.

Analyze the schema relationships and explain:

- required fields
- foreign keys
- correct insert order
- how InterviewStep IDs are used

Generate corrected SQL INSERT statements.

---

# Prompt 9 — Validate Drag & Drop Persistence

After drag & drop in the frontend:

- validate that the backend receives the update
- validate PostgreSQL persistence
- validate currentInterviewStep changes

Generate SQL queries to verify database state after moving candidates between interview stages.

---

# Prompt 10 — Cypress Drag & Drop Failure

Cypress fails with:

cy.wait('@updateCandidate') timed out

Analyze why the PUT request is never triggered.

Refactor the tests using:

@4tw/cypress-drag-drop

Explain:

- plugin installation
- support configuration
- correct drag selectors
- correct intercept patterns

Generate the updated Cypress code.

---

# Prompt 11 — Video Demonstration Preparation

Generate a professional demo script for recording the exercise submission video.

The video must show:

- Docker containers running
- Backend startup
- Frontend startup
- PostgreSQL validation
- Drag & drop in the UI
- Cypress E2E execution
- Passing tests
- Database persistence

Include:

- exact commands
- recommended order
- what to explain during the demo

---

# Prompt 12 — Git Commit and Pull Request

Generate a professional Git workflow for the final submission.

Include:

- git checkout -b
- git add
- git commit
- git push

Generate:

- professional commit message
- professional PR title
- professional PR description

The PR should describe:

- Cypress integration
- E2E tests
- API intercepts
- Drag & drop validation
- PostgreSQL validation

---

# Prompt 13 — Full Professionalization

Review the entire Module 11 solution.

Provide recommendations for:

- improving Cypress reliability
- improving React rendering
- improving Prisma seeding
- improving E2E maintainability
- improving debugging
- improving test isolation

Use a professional software engineering perspective.
