
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
    name: "Carlos Mejía",
    title: "Senior Blockchain Developer",
    bio: "Passionate Web3 developer with extensive experience in smart contract development and blockchain architecture. I love building decentralized applications that empower users.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2070&auto=format&fit=crop",
    location: "Santo Domingo, Dominican Republic",
    github: "https://github.com/carlosmejia",
    twitter: "https://twitter.com/carlosmejia",
    linkedin: "https://linkedin.com/in/carlosmejia",
    website: "https://carlosmejia.dev",
    email: "contact@carlosmejia.dev",
    skills: ["Solidity", "Ethereum", "React", "TypeScript", "Hardhat", "IPFS", "Web3.js", "Node.js"],
    experience: [
      {
        company: "DeFi Protocol",
        position: "Lead Blockchain Developer",
        duration: "2021 - Present",
        description: "Architecting and developing smart contracts for a decentralized finance protocol with over $10M in TVL."
      },
      {
        company: "NFT Marketplace",
        position: "Smart Contract Engineer",
        duration: "2019 - 2021",
        description: "Developed and audited smart contracts for NFT minting and marketplace functionality."
      }
    ],
    projects: [
      {
        id: "101",
        name: "DeFi Lending Platform",
        description: "A decentralized lending protocol built on Ethereum that allows users to lend and borrow digital assets.",
        technologies: ["Solidity", "Ethereum", "React", "Web3.js"],
        url: "https://defi-lending.example.com",
        github: "https://github.com/carlosmejia/defi-lending",
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop"
      },
      {
        id: "102",
        name: "NFT Marketplace",
        description: "A marketplace for trading digital collectibles on the blockchain with integrated wallet support.",
        technologies: ["Solidity", "IPFS", "NextJS", "Ethers.js"],
        url: "https://nft-market.example.com",
        github: "https://github.com/carlosmejia/nft-marketplace",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "2",
    name: "Maria Rodriguez",
    title: "Full Stack Blockchain Developer",
    bio: "Building the future of Web3 with a focus on user experience and performance. Specialized in creating seamless bridges between traditional web and blockchain technologies.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    location: "Santiago, Dominican Republic",
    github: "https://github.com/mariarodriguez",
    twitter: "https://twitter.com/mariarodriguez",
    linkedin: "https://linkedin.com/in/mariarodriguez",
    website: "https://mariarodriguez.dev",
    email: "hello@mariarodriguez.dev",
    skills: ["Solidity", "React", "GraphQL", "The Graph", "Next.js", "Tailwind CSS", "Ethers.js", "Solana"],
    experience: [
      {
        company: "Web3 Startup",
        position: "Senior Full Stack Developer",
        duration: "2020 - Present",
        description: "Leading development of a cross-chain bridge and accompanying frontend applications."
      },
      {
        company: "Technology Consulting Firm",
        position: "Blockchain Consultant",
        duration: "2018 - 2020",
        description: "Advised enterprises on blockchain integration strategies and implementation."
      }
    ],
    projects: [
      {
        id: "201",
        name: "Cross-Chain Bridge",
        description: "A solution for transferring assets between different blockchain networks with minimal fees.",
        technologies: ["Solidity", "Solana", "React", "The Graph"],
        url: "https://bridge.example.com",
        github: "https://github.com/mariarodriguez/cross-chain-bridge",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop"
      },
      {
        id: "202",
        name: "DAO Governance Tool",
        description: "A framework for decentralized governance that enables transparent voting and proposal management.",
        technologies: ["Solidity", "Next.js", "TypeScript", "Web3.js"],
        url: "https://dao-tools.example.com",
        github: "https://github.com/mariarodriguez/dao-tools",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "3",
    name: "Luis Perez",
    title: "Smart Contract Specialist",
    bio: "Focused on building secure and efficient smart contracts for decentralized applications. Gas optimization enthusiast and security advocate.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    location: "Punta Cana, Dominican Republic",
    github: "https://github.com/luisperez",
    twitter: "https://twitter.com/luisperez",
    linkedin: "https://linkedin.com/in/luisperez",
    website: "https://luisperez.dev",
    email: "luis@smartcontract.dev",
    skills: ["Solidity", "Security Auditing", "Rust", "Ethereum", "Hardhat", "Truffle", "Foundry", "ZK Proofs"],
    experience: [
      {
        company: "Security Audit Firm",
        position: "Smart Contract Auditor",
        duration: "2022 - Present",
        description: "Conducting security audits for high-value DeFi protocols and NFT projects."
      },
      {
        company: "Blockchain Development Agency",
        position: "Solidity Developer",
        duration: "2019 - 2022",
        description: "Developed smart contracts for various clients including DeFi platforms and DAOs."
      }
    ],
    projects: [
      {
        id: "301",
        name: "Secure Vault",
        description: "A multi-signature wallet with advanced security features for managing digital assets.",
        technologies: ["Solidity", "Hardhat", "Ethers.js", "React"],
        url: "https://securevault.example.com",
        github: "https://github.com/luisperez/secure-vault",
        image: "https://images.unsplash.com/photo-1642403711604-3908e90960ce?q=80&w=1936&auto=format&fit=crop"
      },
      {
        id: "302",
        name: "Gas Optimizer",
        description: "A toolkit for optimizing smart contract gas usage with automated suggestions.",
        technologies: ["Solidity", "TypeScript", "Hardhat"],
        url: "https://gas-optimizer.example.com",
        github: "https://github.com/luisperez/gas-optimizer",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop"
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
