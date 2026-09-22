export type ProjectIcon = "automotive" | "security";

export type Project = {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    highlights: string[];
    github: string;
    featured: boolean;
    icon: ProjectIcon;
};