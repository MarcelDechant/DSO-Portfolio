---
title: Truck Signs API
description: Containerized Django REST API for managing a truck signs webshop with PostgreSQL and Docker.
---

# Truck Signs API 🚛

## Overview

The Truck Signs API is a containerized backend application developed with Django and Django REST Framework.

The application provides backend functionality for managing a truck signs webshop, including product management, customer orders and database communication.

The project focuses on building a structured backend system with a PostgreSQL database and preparing the application for deployment using Docker containers.

## Technologies

- Python
- Django
- Django REST Framework
- PostgreSQL
- Docker
- Linux
- REST API
- Environment Variables

## Features

- REST API backend for a truck signs webshop
- Product and category management
- Customer order handling
- Database integration with PostgreSQL
- Django admin interface for content management
- Environment-based configuration
- Containerized deployment using Docker

## Backend Architecture

The application uses Django models to structure the webshop data.

Implemented models include:

- Categories for different truck sign products
- Product variations
- Customer lettering options
- Orders
- Payment-related data

The backend provides API endpoints for managing and accessing application data using Django REST Framework.

## Docker Deployment

The application was containerized using Docker to create a reproducible deployment environment.

The Docker setup includes:

- Building a custom Docker image
- Running the Django application inside a container
- Using a PostgreSQL database container
- Managing communication between containers through a Docker network
- Configuring application settings through environment variables

## Security & Configuration

Sensitive configuration data is managed through environment variables.

Examples include:

- Database credentials
- Django secret key
- Allowed hosts
- Application configuration values

This approach prevents sensitive information from being stored directly in the source code.

## Project Structure

The project follows a Django-based backend structure:

```text
truck_signs_api/
│
├── truck_signs_designs/
│   ├── settings/
│   │   ├── base.py
│   │   └── environment configurations
│   │
│   ├── models.py
│   ├── views.py
│   └── urls.py
│
├── Dockerfile
├── requirements.txt
└── README.md
```
## What I Learned

Through this project, I gained practical experience in developing backend APIs with Django REST Framework and connecting applications with PostgreSQL databases.

Additionally, I improved my knowledge of containerized deployments, environment configuration and managing backend applications in a server environment.

## Conclusion

The Truck Signs API project combines backend development with DevOps practices by using Django, PostgreSQL and Docker.

It was an important step towards developing scalable backend services and deploying applications in a structured and secure way.