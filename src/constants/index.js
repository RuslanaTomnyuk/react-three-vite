import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    html5,
    css,
    sass,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    mysql,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mateAcademy,
    ideainyou,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html5,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "sass",
        icon: sass,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Training projects",
        icon: mateAcademy,
        iconBg: "#383E56",
        date: "December 2021 - May 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "IdeaInYou",
        icon: ideainyou,
        iconBg: "#E6DEDD",
        date: "June 2022 - December 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "IdeaInYou",
        icon: ideainyou,
        iconBg: "#383E56",
        date: "December 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "IdeaInYou",
        icon: ideainyou,
        iconBg: "#E6DEDD",
        date: "Present - Future",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Technology is best when it brings people together.",
        name: "Matt Mullenweg, Social Media Entrepreneur",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Matt_Mullenweg.jpg",
    },
    {
        testimonial:
            "If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.",
        name: "Lyndon B. Johnson, Former President of the United States of America",
        // designation: "CTO",
        // company: "456 Enterprises",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/37_Lyndon_Johnson_3x4.jpg",
    },
    {
        testimonial:
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        name: "Ralph Waldo Emerson, an American poet",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/RWEmerson1859.jpg/64px-RWEmerson1859.jpg",
    },
    {
        testimonial:
            "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
        name: "Bill Gates, Co-founder of Microsoft",
        // designation: "COO",
        // company: "DEF Corp",
        // image: "https://randomuser.me/api/portraits/men/5.jpg",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
