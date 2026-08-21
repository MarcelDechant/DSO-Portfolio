---
title: Conduit Containerization
description: Containerized full-stack application with Angular, Django and Docker Compose.
---

# Conduit Containerization 🚀

## Overview

This project demonstrates the containerization of a full-stack web application consisting of a frontend and backend service.

The Conduit application is a blogging platform with authentication, routing, CRUD operations and API communication between the frontend and backend.

The project was created as part of my DevSecOps training and focuses on containerization, service orchestration, environment configuration and automated deployment.

## Technologies

- Angular
- Django
- Docker
- Docker Compose
- Linux
- REST API
- Environment Variables
- Git Submodules
- SSH

## Features

- Containerized frontend and backend
- Separate Docker containers for frontend and backend
- Docker Compose for service orchestration
- REST API communication between frontend and backend
- Environment-based configuration
- Automated deployment via SSH
- Git submodules for managing frontend and backend repositories
- Backend administration through Django Admin

## Container Architecture

The application is separated into two main services:

- **Frontend container** – runs the Angular application
- **Backend container** – runs the Django application and provides the REST API

Docker Compose manages both services and their configuration.

The frontend communicates with the backend through the configured API endpoint.

This separation allows the frontend and backend to be developed, deployed and managed independently.

## Configuration

The application uses environment variables to configure the different services.

Configuration values include:

- Django secret key
- Debug mode
- Allowed hosts
- CORS configuration
- Django superuser credentials
- Backend API URL
- External container ports

Separating configuration from the application code makes it easier to use the same application in different environments.

## Docker Deployment

The complete application can be built and started using Docker Compose:

```bash
docker compose up --build -d
```

The Compose configuration manages the frontend and backend containers and their respective settings.

Running containers can be checked with:

```bash
docker compose ps
```

Container logs can be viewed using:

```bash
docker logs <container-name>
```

## Automated Deployment

The project also includes an automated deployment workflow.

The workflow can connect to a remote server via SSH and deploy the application automatically.

This allows the application to be updated without performing the complete deployment process manually.

The deployment workflow demonstrates how containerization can be combined with automation and CI/CD practices.

## Project Structure

The project uses separate repositories for the frontend and backend, which are included as Git submodules:

```text
Conduit/
│
├── conduit-frontend/
│   └── Dockerfile
│
├── conduit-backend/
│   ├── Dockerfile
│   └── entrypoint.sh
│
├── compose.yaml
├── example.env
└── README.md
```
## What I Learned

Through this project, I gained practical experience in containerizing a complete full-stack application with separate frontend and backend services.

I learned how Docker Compose can be used to orchestrate multiple containers and how services can communicate through configured API endpoints.

Additionally, I gained experience with Git submodules, environment-based configuration and automated deployment using SSH.

## Conclusion

The Conduit Containerization project combines full-stack development with DevOps practices.

It demonstrates how frontend and backend applications can be separated into containers, managed with Docker Compose and deployed automatically to a remote server.

This project was an important step towards understanding multi-container architectures, deployment automation and CI/CD workflows.