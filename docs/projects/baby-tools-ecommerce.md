---
title: Baby Tools E-Commerce
description: Full-stack e-commerce application developed with Django and Docker.
---

# Baby Tools E-Commerce 🛒

## Overview

The Baby Tools E-Commerce project is a full-stack web application developed with Django for managing and presenting baby products.

The goal of this project was to build a functional online shop with a structured backend, product management and user authentication. The application was developed with a focus on clean backend architecture, database management and deployment using Docker.

The project was later containerized to create a consistent and portable deployment environment.

## Technologies

- Python
- Django
- SQLite
- HTML
- CSS
- JavaScript
- Docker
- Linux

## Features

- Product management with Django
- User registration and authentication
- Login functionality
- Product filtering
- Product detail pages
- Django admin interface for content management
- Containerized deployment using Docker

## Docker Deployment

The application was containerized using Docker to ensure a consistent runtime environment across different systems.

The Docker setup includes:

- Building a dedicated Docker image
- Running the application inside a container
- Configuring external access through port mapping
- Managing and monitoring the running container

## Project Structure

The project follows a Django-based structure:

```text
baby-tools-shop/
│
├── babyshop_app/
│   ├── babyshop/
│   │   ├── settings.py
│   │   └── urls.py
│   └── manage.py
│
├── requirements.txt
├── Dockerfile
└── README.md

```

## What I Learned

Through this project, I gained practical experience in developing a complete Django application, including backend development, database handling, authentication and containerization.

Additionally, I learned how Docker can be used to create reproducible deployment environments and simplify application delivery.

## Conclusion

This project combines backend development with deployment practices and was an important step towards understanding full-stack development and DevOps workflows.