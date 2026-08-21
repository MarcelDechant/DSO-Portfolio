---
title: WordPress Containerization
description: Containerized WordPress deployment using Docker Compose and MariaDB.
---

# WordPress Containerization 🌐

## Overview

This project demonstrates the containerization and deployment of a WordPress application using Docker Compose.

The goal was to create a reproducible environment consisting of a WordPress application container and a separate MariaDB database container.

The project was created as part of my DevSecOps training and focuses on containerization, service orchestration, networking and environment-based configuration.

## Technologies

- Docker
- Docker Compose
- WordPress
- MariaDB
- Linux
- Environment Variables

## Features

- Containerized WordPress application
- MariaDB database running in a separate container
- Deployment using Docker Compose
- Automatic container networking
- Configuration through environment variables
- Persistent application and database data
- Container lifecycle management with Docker Compose

## Container Architecture

The application consists of two main containers:

- **WordPress container** – runs the WordPress application
- **MariaDB container** – provides the database backend

Docker Compose manages both services and creates a shared network so that the WordPress application can communicate with the database container.

This separation allows the individual services to be managed independently while keeping the overall deployment reproducible.

## Configuration

The application uses an `.env` file for environment-specific configuration.

Configuration values include:

- WordPress host and container ports
- Database name
- Database user
- Database password
- MariaDB root password

Sensitive configuration values are kept outside the application configuration and are provided through environment variables.

## Deployment

The complete environment can be built and started using Docker Compose:

```bash
docker compose up --build -d
```
The running containers can be checked with:

```bash
docker compose ps
``` 

Container logs can be viewed using:

```bash
docker compose logs -f
```

The WordPress application can then be accessed through the configured port of the server.

## Docker Networking

Docker Compose automatically creates a network for the services defined in the Compose configuration.

This allows the WordPress and MariaDB containers to communicate with each other without exposing the database directly to the outside network.

The Docker network can be inspected using:

```bash
docker network ls
```

```bash
docker network inspect wordpress_default
```

## Project Structure

The project follows a Docker Compose based structure:

```text
Wordpress_docker/
│
├── compose.yaml
├── example.env
├── .env
└── README.md
```

## What I Learned

Through this project, I gained practical experience in deploying multi-container applications with Docker Compose.

I learned how different services can be separated into individual containers and connected through Docker networking.

Additionally, I improved my understanding of environment-based configuration, container lifecycle management and persistent data handling.

## Conclusion

The WordPress Containerization project demonstrates how Docker Compose can be used to deploy and manage a multi-container application consisting of a web application and a database.

It was another practical step towards understanding containerized application environments and DevOps workflows.