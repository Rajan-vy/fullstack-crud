# Fullstack User CRUD App

A complete full-stack user management application built with:

-  **Backend**: Spring Boot WebFlux + MySQL (Reactive)
-  **Frontend**: Next.js + Tailwind CSS
-  REST API with full CRUD support
-  MySQL database with R2DBC (non-blocking)

---

## Project Structure

fullstack-user-crud/
├── backend/ # Spring Boot WebFlux API
└── frontend/ # Next.js + Tailwind UI

---

## Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/fullstack-user-crud.git
cd fullstack-user-crud

## Backend Setup (Spring Boot WebFlux)
### Requirements
Java 17+
Maven
MySQL (running locally)

create database
CREATE DATABASE user_crud_db;

update backend/src/main/resources/application.properties with your MySQL credentials

spring.r2dbc.url=r2dbc:mysql://localhost:3306/user_crud_db
spring.r2dbc.username=your_username
spring.r2dbc.password=your_password


run backend

cd backend
mvn clean install
mvn spring-boot:run


