import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "Mechano",
        subtitle: "Automotive Service Management Platform",
        description:
            "A platform for connecting vehicle owners with repair shops and managing bookings, repair shop information, reviews, users, and service-related data.",
        technologies: [
            "Java 21",
            "Spring Boot",
            "PostgreSQL",
            "Hibernate",
            "Liquibase",
            "Docker",
        ],
        github: "https://github.com/nikolaychv/mechano",
        featured: true,
    },
    {
        title: "Mechano Auth Service",
        subtitle: "Authentication & Authorization Service",
        description:
            "A dedicated authentication service for the Mechano platform, responsible for authentication, JWT token generation, role-based authorization, and securing access to backend resources.",
        technologies: [
            "Java 21",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "PostgreSQL",
            "OpenAPI",
        ],
        github: "https://github.com/nikolaychv/mechano-auth-service",
        featured: false,
    },
];