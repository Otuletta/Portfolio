export const profileData = {
    name: "Oscar Tuletta",
    role: "Software Engineer & Co-Founder",
    location: "Santo Domingo, RD",
    email: "Otuletta@gmail.com",
    socials: {
        github: "https://github.com/Otuletta",
        linkedin: "https://linkedin.com/in/oscar-tuletta",
        twitter: "https://twitter.com/Otuletta",
        instagram: "https://instagram.com/Otuletta"
    }
};

export const projects = [
    {
        id: "odomto",
        name: "ODOMTO",
        logo: "/images/ODOMTO_logo2.png",
        descriptionKey: "project_odomto.description_showcase",
        highlightsKey: "project_odomto.highlights_showcase",
        techKey: "project_odomto.tech_showcase",
        url: "otuletta.com/odomto",
        accent: "#0d9488" // Technical Teal
    },
    {
        id: "salsealo",
        name: "Salséalo",
        logo: "/images/Salsealo3.png",
        descriptionKey: "project_salsealo.description_showcase",
        highlightsKey: "project_salsealo.highlights_showcase",
        techKey: "project_salsealo.tech_showcase",
        url: "otuletta.com/salsealo",
        accent: "#f97316" // Orange
    },
    {
        id: "null",
        name: "NULL",
        logo: "/images/NULL.png",
        descriptionKey: "project_null.description_showcase",
        highlightsKey: "project_null.highlights_showcase",
        techKey: "project_null.tech_showcase",
        url: "otuletta.com/null",
        accent: "#00BFDF" // Cyan Neon
    },
];

// Helper interface for consistency if needed elsewhere
export interface ProjectData {
    id: string;
    name: string;
    logo: string;
    descriptionKey: string;
    highlightsKey: string;
    techKey: string;
    url: string;
    accent: string;
}
