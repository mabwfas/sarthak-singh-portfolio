export const profile = {
  name: "Sarthak Singh",
  title: "Award Winning Mobile App Developer | iOS & Android | Flutter & Swift",
  shortTitle: "Award Winning Mobile App Developer",
  tagline: "Top 1% of Talent — Extremely Reliable and Communicative",
  bio: "Top 1% of Talent (Top Rated Plus) on Upwork. 100% Job Success Score. App featured on Apple's Best Language Learning Apps. Featured on Business Insider. 75+ projects, $900K+ earned, 1,700+ hours. Helped clients achieve $2M ARR, $100K+ MRR restaurant app, $1.5M+ ARR fitness app.",
  email: "s27110815@gmail.com",
  phone: "+91 93362 86116",
  location: "Mumbai, India",
  photo: "/sarthak.jpg",
  education: {
    school: "Michigan State University",
    degree: "BEng Computer Science",
    years: "2016 - 2020",
  },
};

export const stats = [
  { label: "Years Experience", value: 8, suffix: "+" },
  { label: "Projects Delivered", value: 75, suffix: "+" },
  { label: "Revenue Earned", value: 900, prefix: "$", suffix: "K+" },
  { label: "Job Success", value: 100, suffix: "%" },
];

export const trustBadges = [
  "Top Rated Plus",
  "$900K+ Earned",
  "100% Job Success",
  "Apple Featured",
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  cover: string;
  images: string[];
  featured?: boolean;
  appStoreUrl?: string;
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    id: "sidewalk",
    title: "Sidewalk",
    subtitle: "Small Business Social & Messaging App",
    tech: ["Swift", "UIKit", "Firebase"],
    cover: "/projects/sidewalk-cover.jpg",
    images: [
      "/projects/sidewalk-1.jpg",
      "/projects/sidewalk-2.jpg",
      "/projects/sidewalk-3.jpg",
    ],
    featured: true,
    appStoreUrl: "https://apps.apple.com/us/app/sidewalk-for-small-business/id1485123981",
  },
  {
    id: "kleo",
    title: "Kleo",
    subtitle: "Interactive Language Learning App",
    tech: ["Swift", "AWS", "AVFoundation"],
    cover: "/projects/kleo-cover.jpg",
    images: ["/projects/kleo-2.jpg", "/projects/kleo-3.jpg"],
    featured: true,
  },
  {
    id: "parti",
    title: "Parti",
    subtitle: "College Community Social Network",
    tech: ["Swift", "MapKit", "Firebase"],
    cover: "/projects/parti-cover.jpg",
    images: [
      "/projects/parti-1.jpg",
      "/projects/parti-2.jpg",
      "/projects/parti-3.jpg",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/parti/id1441555588",
  },
  {
    id: "vloggle",
    title: "Vloggle",
    subtitle: "Video Sharing & Social Platform",
    tech: ["Swift", "Firebase", "AVFoundation"],
    cover: "/projects/vloggle-cover.jpg",
    images: [
      "/projects/vloggle-1.jpg",
      "/projects/vloggle-2.jpg",
      "/projects/vloggle-3.jpg",
    ],
    websiteUrl: "https://www.vloggleapp.com/",
  },
  {
    id: "tag",
    title: "Tag",
    subtitle: "Timed Social Challenge App",
    tech: ["Swift", "Firebase", "AVFoundation"],
    cover: "/projects/tag-cover.jpg",
    images: ["/projects/tag-1.jpg", "/projects/tag-2.jpg", "/projects/tag-3.jpg"],
    appStoreUrl: "https://apps.apple.com/us/app/tag-the-app/id1470649775",
  },
  {
    id: "offline",
    title: "Offline",
    subtitle: "Restaurant Discovery & Community App",
    tech: ["Flutter", "Firebase", "Google Maps", "Push Notifications", "Calendar"],
    cover: "/projects/offline-cover.jpg",
    images: ["/projects/offline-1.jpg", "/projects/offline-2.jpg"],
    appStoreUrl: "https://apps.apple.com/us/app/offline-restaurant-club/id1632270215",
  },
  {
    id: "metamora",
    title: "MetaMora",
    subtitle: "Short Film Streaming App",
    tech: ["Swift", "AVPlayer", "UIKit"],
    cover: "/projects/metamora-cover.jpg",
    images: [
      "/projects/metamora-2.jpg",
      "/projects/metamora-3.jpg",
      "/projects/metamora-4.jpg",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/metamora/id1494059653",
  },
  {
    id: "dailydoer",
    title: "Daily Doer",
    subtitle: "Productivity & Task Management App",
    tech: ["Swift", "Core Data"],
    cover: "/projects/dailydoer-cover.jpg",
    images: ["/projects/dailydoer-1.jpg", "/projects/dailydoer-2.jpg"],
    appStoreUrl: "https://apps.apple.com/us/app/daily-doer/id1449674634",
  },
];

export const experience = [
  {
    period: "2020 - Present",
    role: "Top Rated Plus Freelance Developer",
    company: "Upwork",
    description:
      "Delivered 75+ projects with 100% Job Success Score. Helped clients achieve $2M ARR, built a $100K+ MRR restaurant app, and developed a $1.5M+ ARR fitness app. Earned $900K+ as a top 1% freelancer.",
  },
  {
    period: "2020 - 2023",
    role: "Featured App Developer",
    company: "Apple & Business Insider",
    description:
      "Kleo language learning app featured on Apple's Best Language Learning Apps. Work and expertise highlighted in Business Insider coverage.",
  },
  {
    period: "2018 - 2020",
    role: "iOS & Mobile Developer",
    company: "Early Career",
    description:
      "Built foundational expertise in Swift, UIKit, and mobile architecture. Shipped multiple apps to the App Store and established a reputation for quality and reliability.",
  },
  {
    period: "2016 - 2020",
    role: "BEng Computer Science",
    company: "Michigan State University",
    description:
      "Studied computer science with a focus on software engineering, mobile computing, and user experience design.",
  },
];

export const awards = [
  {
    title: "Top Rated Plus",
    description: "Top 1% of freelancers on Upwork",
    icon: "trophy" as const,
  },
  {
    title: "Apple Featured",
    description: "Best Language Learning Apps",
    icon: "apple" as const,
  },
  {
    title: "Business Insider",
    description: "Featured developer profile",
    icon: "newspaper" as const,
  },
  {
    title: "$900K+ Earned",
    description: "Trusted by global clients",
    icon: "dollar-sign" as const,
  },
];

export const skills = [
  { name: "Swift / SwiftUI", level: 98 },
  { name: "Flutter / Dart", level: 97 },
  { name: "iOS Development", level: 98 },
  { name: "Android Development", level: 95 },
  { name: "Firebase", level: 96 },
  { name: "App Architecture", level: 97 },
];

export const techStack = {
  "Languages": ["Swift", "Dart", "Kotlin", "TypeScript", "Python"],
  "Frameworks": ["SwiftUI", "UIKit", "Flutter", "Jetpack Compose", "React Native"],
  "Backend & Cloud": ["Firebase", "AWS", "Node.js", "REST APIs", "GraphQL"],
  "Tools & Platforms": ["Xcode", "Android Studio", "Git", "CI/CD", "Figma"],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "CV", href: "/cv.html" },
  { label: "Contact", href: "#contact" },
];
