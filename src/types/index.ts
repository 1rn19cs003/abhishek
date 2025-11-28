export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    images?: string[];
    techStack: TechStack[];
    liveUrl?: string;
    githubUrl?: string;
    category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'other';
    featured: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface TechStack {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';
    usage: string; // How this tech was used in the project
    icon?: string;
}

export interface Skill {
    id: string;
    name: string;
    category: string;
    level: number; // 1-100
    icon?: string;
    order: number;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    current: boolean;
    description: string;
    achievements: string[];
    techStack: string[];
    order: number;
}

export interface Bio {
    id: string;
    name: string;
    title: string;
    tagline: string;
    about: string;
    email: string;
    phone?: string;
    location: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    profileImage?: string;
    resumeUrl?: string;
    updatedAt: Date;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject?: string;
    message: string;
    read: boolean;
    createdAt: Date;
}

export interface Resume {
    id: string;
    name: string;
    url: string;
    type: 'manual' | 'generated';
    uploadedAt: Date;
    isActive: boolean;
}

export interface VisitorStats {
    totalVisits: number;
    uniqueVisitors: number;
    lastUpdated: Date;
}

export interface GameProgress {
    userId: string;
    level: number;
    score: number;
    unlockedFacts: string[];
    completedAt?: Date;
}

export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export interface AdminUser {
    username: string;
    password: string; // hashed
}
