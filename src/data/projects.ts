import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "Mechano",
        subtitle: "Automotive Service Management Platform",
        description:
            "A backend platform designed to connect vehicle owners with repair shops and provide structured management of bookings, repair shop information, users, reviews, and service-related data.",
        technologies: [
            "Java 21",
            "Spring Boot",
            "PostgreSQL",
            "Hibernate",
            "Liquibase",
            "Docker",
        ],
        highlights: [
            "Repair shop and service management",
            "Booking workflow and status management",
            "Reviews and favorites",
            "User and vehicle-related data management",
            "Database migrations with Liquibase",
            "Dockerized PostgreSQL development environment",
        ],
        github: "https://github.com/nikolaychv/mechano",
        featured: true,
        icon: "automotive",
    },
    {
        title: "Mechano Auth Service",
        subtitle: "Authentication & Authorization Service",
        description:
            "A dedicated authentication service for the Mechano platform, responsible for user authentication, JWT token generation, role-based authorization, and securing access to backend resources.",
        technologies: [
            "Java 21",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "PostgreSQL",
            "OpenAPI",
        ],
        highlights: [
            "JWT-based authentication",
            "Role-based authorization",
            "Protected backend endpoints",
            "Spring Security integration",
            "OpenAPI / Swagger documentation",
            "Integration with the Mechano platform",
        ],
        github: "https://github.com/nikolaychv/mechano-auth-service",
        featured: false,
        icon: "security",
    },
];