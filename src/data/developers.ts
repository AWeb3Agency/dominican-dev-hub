
export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
  image?: string;
}

export interface Developer {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  location: string;
  github: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
  email?: string;
  skills: string[];
  experience: {
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
  projects: Project[];
}

export const developers: Developer[] = [
  {
    id: "1",
    name: "Enzo Vezzaro",
    title: "Senior Web3 Developer",
    bio: "I am a dynamic and innovative developer, merging creativity with technical expertise to craft unique and impactful digital solutions.",
    image: "https://www.enzovezzaro.com/img/family-photo.jpg?q=80&w=2070&auto=format&fit=crop",
    location: "Santo Domingo, Dominican Republic",
    github: "https://github.com/EnzoVezzaro",
    twitter: "https://x.com/enzo_vezzaro",
    linkedin: "https://www.linkedin.com/in/enzo-vezzaro/",
    website: "https://www.enzovezzaro.com/",
    email: "enzo-vezzaro@live.it",
    skills: ["Solidity", "Ethereum", "React", "TypeScript", "Hardhat", "IPFS", "Web3.js", "Node.js"],
    experience: [
      {
        company: "Eleva SRL",
        position: "Full Stack Engineer",
        duration: "2024 - 2025",
        description: "Led front-end and back-end development, focusing on optimizing user experience and delivering secure, scalable applications."
      },
      {
        company: "Ocean Protocol",
        position: "Web3 Full Stack Engineer",
        duration: "2023 - 2024",
        description: "Building decentralized applications (DApps) and working with blockchain technologies to enhance data sharing and connectivity across industries."
      },
      {
        company: "Expert.ai",
        position: "Full Stack Engineer",
        duration: "2021 - 2023",
        description: "Developed cutting-edge AI solutions integrating advanced NLP technologies into scalable web applications."
      },
      {
        company: "Eleva SRL",
        position: "Full Stack Engineer",
        duration: "2019 - 2021",
        description: "Led front-end and back-end development, focusing on optimizing user experience and delivering secure, scalable applications."
      }
    ],
    projects: [
      {
        id: "enz-1",
        name: "DomBets",
        description: "Web3 sport betting platform designed for the Dominican market and beyond.",
        technologies: ["React", "Node.js", "Vercel", "PrimaDB", "JavaScript", "Ethers.js", "MagicLink", "Infura", "Polygon", "IPFS"],
        url: "https://dom-bets.vercel.app",
        github: "private",
        image: "https://www.enzovezzaro.com/_next/image?url=%2Fimg%2Fportfolio-mock_single_dombets.png&w=1920&q=75"
      },
      {
        id: "enz-2",
        name: "Social Generator",
        description: "A tool designed to automate and optimize content creation for social media platforms, helping users generate engaging posts quickly and efficiently.",
        technologies: ["React", "AI Horde API"],
        url: "https://socialgen-creator.vercel.app/",
        github: "private",
        image: "https://www.enzovezzaro.com/_next/image?url=%2Fimg%2Fportfolio-mock_single_social_gen.png&w=1920&q=75"
      },
      {
        id: "enz-3",
        name: "Chispa AI",
        description: "An innovative AI platform designed exclusively for the Dominican Republic, focused on personalized services and digital transformation.",
        technologies: ["Next.js", "Node.js", "Vercel", "API", "OpenAI"],
        url: "https://chispa-ai.vercel.app/",
        github: "private",
        image: "https://digitalrd.citizenlab.co/uploads/d8f0f30c-439c-49b0-9f82-32bef8a0d6ae/idea_image/image/84bf90bf-b4da-4d08-ae0c-6d60270b100c/large_041e853a-8965-4183-9aab-87b4dfbda02d.png?q=80&w=2232&auto=format&fit=crop"
      },
      {
        id: "enz-4",
        name: "Aletheia Data",
        description: "An open-source initiative aimed at providing easy access to public information through a streamlined platform.",
        technologies: ["Next.js", "Netlify", "AWS", "MongoDB", "JavaScript", "Ethers.js", "MagicLink", "Infura", "Polygon", "IPFS"],
        url: "https://aletheia-data.gitbook.io/aletheia",
        github: "https://github.com/Aletheia-Data",
        image: "https://pbs.twimg.com/media/Fc8zCaKX0AEVRJD.jpg"
      },
      {
        id: "enz-5",
        name: "Aletheia SDK",
        description: "A free and open-source SDK solution designed to simplify the integration of key services and open data available online.",
        technologies: ["JavaScript", "Vercel", "JSDocs", "API", "Node.js"],
        url: "https://aletheia-sdk.netlify.app/",
        github: "https://github.com/enzovezzaro/aletheia-sdk",
        image: "https://pbs.twimg.com/media/GACw61RWQAAQ2kK.jpg"
      }
    ]    
  }
];

export const getDevById = (id: string): Developer | undefined => {
  return developers.find(dev => dev.id === id);
};

export const getProjectById = (devId: string, projectId: string): Project | undefined => {
  const dev = getDevById(devId);
  if (!dev) return undefined;
  return dev.projects.find(project => project.id === projectId);
};
