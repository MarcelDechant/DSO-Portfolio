# DevSecOps Portfolio

This repository contains my personal DevSecOps portfolio, built with [Docusaurus](https://docusaurus.io/).

The portfolio presents my technical skills, projects and experience with technologies such as Docker, Linux, Git, Django, REST APIs and DevOps tooling.

The project combines a custom React-based portfolio interface with Docusaurus documentation for presenting individual projects in more detail.

## Repository Description

This repository contains the source code for my DevSecOps portfolio.

The portfolio includes the following sections:

- Header
- Hero / About
- My Skills
- My Project Highlights
- Contact
- Footer

In addition, individual projects are documented using Docusaurus Markdown documentation.

The main purpose of the repository is to present my technical experience and demonstrate practical knowledge in software development, containerization, infrastructure and DevSecOps workflows.

## Table of Contents

- [DevSecOps Portfolio](#devsecops-portfolio)
  - [Repository Description](#repository-description)
  - [Table of Contents](#table-of-contents)
  - [Quickstart](#quickstart)
    - [Prerequisites](#prerequisites)
    - [How to Start](#how-to-start)
  - [Usage](#usage)
    - [Local Development](#local-development)
    - [Building the Project](#building-the-project)
    - [Project Documentation](#project-documentation)
    - [Configuration](#configuration)
  - [Repository Structure](#repository-structure)
  - [Important Directories and Files](#important-directories-and-files)
  - [Deployment](#deployment)
    - [GitHub Pages](#github-pages)
    - [NGINX](#nginx)

## Quickstart

### Prerequisites

The following software is required to run the project locally:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/)
- Git

### How to Start

Clone the repository:

```bash
git clone https://github.com/MarcelDechant/DSO-Portfolio.git
```

Navigate into the project directory:

```bash
cd DSO-Portfolio
```

Install the project dependencies:

```bash
pnpm install
```

Start the local development server:

```bash
pnpm start
```
The portfolio will then be available locally at:

```bash
http://localhost:3000
```
## Usage

### Local Development

Start the Docusaurus development server:

```bash
pnpm start
```

The development server automatically reloads the application when changes are made to the source files.

React components can be modified in:

```bash
src/components/
```

The main portfolio page is located at:

```bash
src/pages/index.tsx
```

### Building the Project

To create a production build of the portfolio:

```bash
pnpm build
```

The generated static files are stored in:

```bash
build/
```

The generated files can then be deployed to a static web server or hosting platform.

### Project Documentation

Individual projects are documented in:

```bash
docs/projects/
```
New project documentation can be added as Markdown files.

For example:

```text
docs/projects/
├── baby-tools-ecommerce.md
├── truck-signs-api.md
├── owasp-juice-shop-security.md
├── minecraft-server-docker.md
└── wordpress-containerization.md
```

### Configuration

The main Docusaurus configuration is located in:

```bash
docusaurus.config.ts
```

This file contains configuration for the site title, URL, deployment settings and other Docusaurus options.

Environment-specific configuration can be provided using environment variables where required.

## Repository Structure

The repository is organized as follows:

```text
DSO-Portfolio/
│
├── docs/
│   └── projects/
│
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
│
├── static/
│
├── docusaurus.config.ts
├── sidebars.ts
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## Important Directories and Files

- `docs/` – Contains project documentation.
- `src/components/` – Contains the React components used by the portfolio.
- `src/pages/` – Contains the portfolio pages.
- `src/css/` – Contains global CSS and Docusaurus styling.
- `static/` – Contains static assets.
- `docusaurus.config.ts` – Main Docusaurus configuration.
- `sidebars.ts` – Configuration for the documentation sidebar.
- `package.json` – Project dependencies and available scripts.
- `pnpm-lock.yaml` – Locked dependency versions.

## Deployment

### GitHub Pages

The portfolio can be deployed to GitHub Pages using the Docusaurus deployment command.

After configuring the GitHub Pages settings in docusaurus.config.ts, the project can be deployed using:

```bash
pnpm deploy
```

When SSH authentication is used:

```bash
USE_SSH=true pnpm deploy
```

Alternatively, a GitHub username can be provided:

```bash
GIT_USER=<your-github-username> pnpm deploy
```

The project can also be deployed automatically through the configured GitHub Actions workflow.

### NGINX

The generated contents of the build/ directory can also be deployed to an NGINX web server.

The project contains additional documentation for deploying Docusaurus with Docker and NGINX:

```bash
docs/guides/deploy-docusaurus-with-docker-and-nginx.md
```

The general deployment process is:

Build the project:

```bash
pnpm build
```

Copy the generated contents of the build/ directory to the web server.
Configure NGINX to serve the generated static files.