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
    school: "Arizona State University",
    degree: "Bachelor of Science in Computer Science",
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
  description?: string;
  review?: {
    text: string;
    author: string;
    role: string;
    rating: number;
  };
}

export const projects: Project[] = [
  {
    id: "sidewalk",
    title: "Sidewalk",
    subtitle: "Small Business Social & Messaging App",
    tech: ["API Integration", "MapKit", "Push Notifications", "Firebase Realtime Database", "UIKit", "Firebase", "Chat & Messaging", "Swift", "User Authentication", "AWS"],
    cover: "/projects/sidewalk-cover.jpg",
    images: [
      "/projects/sidewalk-1.jpg",
      "/projects/sidewalk-2.jpg",
      "/projects/sidewalk-3.jpg",
    ],
    featured: true,
    appStoreUrl: "https://apps.apple.com/us/app/sidewalk-for-small-business/id1485123981",
    description: "Interactive platform for local businesses to communicate, share best practices, and discover vendors and other businesses in their community. Features: discover tools/vendors/partnerships, local and categorized news feeds, one-on-one relationships with direct communication.",
    review: {
      text: "Sarthak has been an absolute pleasure to work with, and I am definitely going to work with him in the future. He is extremely talented with development and communication and doesn't 'scope creep' you at all. If you need something done on a timeline, this guy is the man. He knows how to work with complex problems and get deep in code, but he's also got the skills to make your app look gorgeous. If you're wondering if Sarthak is the guy for your iOS development job, I can assure you that he is!",
      author: "Client",
      role: "Sidewalk",
      rating: 5.0,
    },
  },
  {
    id: "kleo",
    title: "Kleo",
    subtitle: "Interactive Language Learning App",
    tech: ["Firebase", "iOS", "Push Notifications", "Swift", "AWS Amplify", "SwiftUI", "Flutter", "Product Analytics", "Revenue Management"],
    cover: "/projects/kleo-cover.jpg",
    images: ["/projects/kleo-2.jpg", "/projects/kleo-3.jpg"],
    featured: true,
    description: "CTO and Product Developer at Kleo Language Learning Technologies. Led end-to-end iOS development using Swift. Introduced interactive video technology for learning. Crafted intuitive UI/UX. Sales funnel optimization from install to subscription. A/B testing. Features: HLS Streaming, Speech Recognition, Push Notifications, RevenueCat & SuperWall, Firebase Auth & AWS Amplify. Recognized by Apple — listed as premier language learning app on App Store.",
  },
  {
    id: "parti",
    title: "Parti",
    subtitle: "College Community Social Network",
    tech: ["Firebase", "AWS", "User Authentication", "DynamoDB", "Swift", "MongoDB", "MapKit", "Core Data", "AVKit", "UIKit"],
    cover: "/projects/parti-cover.jpg",
    images: [
      "/projects/parti-1.jpg",
      "/projects/parti-2.jpg",
      "/projects/parti-3.jpg",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/parti/id1441555588",
    description: "Started as front-end developer to complete design and front-end logic. Backend developer left, took full load of the project. Used AWS Amplify with AWS Cognito, DynamoDB using GraphQL. S3 Storage for profile photos. Built chat and messaging feature.",
    review: {
      text: "We have worked with Sarthak for a little bit over 2 months, his knowledge and expertise in development is unmatched. The best developer we have had the privilege of working with in our 3.5 years of development. His ability to adapt to any situation we threw at him is unrivaled, he is one of a kind and was worth every single dollar we invested into him. You will not find another developer on UpWork like Sarthak. During our journey with Sarthak we had a backend developer drop off the project due to unfortunate circumstance. We hired Sarthak as a frontend developer and knowing our situation he jumped on board took the extra responsibility and knocked it out of the park. I never imagined the finished product would look so magnificent and beautiful. The functionality is out of this world with virtually zero bugs. I personally recommend Sarthak.",
      author: "Client",
      role: "Parti",
      rating: 5.0,
    },
  },
  {
    id: "vloggle",
    title: "Vloggle",
    subtitle: "Video Sharing & Social Platform",
    tech: ["Firebase", "AWS", "iOS", "Firebase Realtime Database", "Swift"],
    cover: "/projects/vloggle-cover.jpg",
    images: [
      "/projects/vloggle-1.jpg",
      "/projects/vloggle-2.jpg",
      "/projects/vloggle-3.jpg",
    ],
    websiteUrl: "https://www.vloggleapp.com/",
    description: "iOS app that is a social media for vlogs where they can be recorded, edited, and shared with friends. Vloggle is now a real platform where users can record, edit, share, and watch videos up to ten minutes long.",
  },
  {
    id: "tag",
    title: "Tag",
    subtitle: "Timed Social Challenge App",
    tech: ["Firebase", "Camera", "User Authentication", "MapKit", "Firebase Cloud Firestore", "Firebase Realtime Database", "Swift"],
    cover: "/projects/tag-cover.jpg",
    images: ["/projects/tag-1.jpg", "/projects/tag-2.jpg", "/projects/tag-3.jpg"],
    appStoreUrl: "https://apps.apple.com/us/app/tag-the-app/id1470649775",
    description: "Social media app where users create experiences via photo/video and tag up to 3 people to complete those experiences. A chain of tags accumulates on a single experience. Built from ground up using Firebase Database, Firebase Authentication, Firebase Storage. Custom camera built with AVFoundation framework.",
    review: {
      text: "Sarthak was a terrific developer to work with. His communication was excellent right from the beginning and he was very happy to cooperate and create a contract and working conditions that suited both of us. I designed the User Interface and was quite particular about how it looked and how it flowed but he was always receptive of my thoughts and willing to make changes when I suggested them. Sarthak also offered many new suggestions for the app that significantly improved its quality. This was my first time having an app created so Sarthak walked me through every process and explained everything as he went along so that I understood what was happening and why. The end product looked great and ran perfectly. He was exactly what I was looking for in a developer and I will definitely be going to him for future projects.",
      author: "Client",
      role: "Tag",
      rating: 5.0,
    },
  },
  {
    id: "offline",
    title: "Offline",
    subtitle: "Restaurant Discovery & Community App",
    tech: ["Flutter", "Firebase", "iOS", "Push Notifications", "Swift", "Google Maps", "Calendar", "API Integration", "Android"],
    cover: "/projects/offline-cover.jpg",
    images: ["/projects/offline-1.jpg", "/projects/offline-2.jpg"],
    appStoreUrl: "https://apps.apple.com/us/app/offline-restaurant-club/id1632270215",
    description: "Nationwide community of foodies with a monthly ritual of trying 2 new restaurants every month. Developed mobile app using Flutter. Video Player Integration for restaurant atmosphere previews. Push Notifications for recommendations. Calendar Integration for scheduling visits.",
  },
  {
    id: "metamora",
    title: "MetaMora",
    subtitle: "Short Film Streaming App",
    tech: ["Firebase Cloud Firestore", "Firebase Realtime Database", "AWS Amplify", "Core Data", "AVKit", "UIKit", "Swift", "iOS"],
    cover: "/projects/metamora-cover.jpg",
    images: [
      "/projects/metamora-2.jpg",
      "/projects/metamora-3.jpg",
      "/projects/metamora-4.jpg",
    ],
    appStoreUrl: "https://apps.apple.com/us/app/metamora/id1494059653",
    description: "Short film streaming app. Watch shorts from every sub genre of documentary, live action, and animation. Features: playback memory, personal watch list curation, new shorts added on rolling basis, search by country/language of production.",
    review: {
      text: "Working with Sarthak might have been the most positive experience I've ever had with a contractor. He was responsive, communicative, and the end product was above and beyond my expectations. On top of all that, Sarthak completed the job in a very timely manner and had an outstanding attitude throughout. Don't think I could have been happier with how the job went.",
      author: "Client",
      role: "MetaMora",
      rating: 5.0,
    },
  },
  {
    id: "dailydoer",
    title: "Daily Doer",
    subtitle: "Productivity & Task Management App",
    tech: ["Push Notifications", "Core Data", "iOS", "UI/UX Prototyping", "Swift"],
    cover: "/projects/dailydoer-cover.jpg",
    images: ["/projects/dailydoer-1.jpg", "/projects/dailydoer-2.jpg"],
    appStoreUrl: "https://apps.apple.com/us/app/daily-doer/id1449674634",
    description: "Simple and effective to-do list, aesthetically pleasing. Built with Xcode and Swift using Core Data framework and multiple CocoaPods. UI designed in Sketch.",
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
    role: "Bachelor of Science in Computer Science",
    company: "Arizona State University",
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

export const testimonials = [
  {
    text: "Sarthak was a terrific developer to work with. His communication was excellent right from the beginning and he was very happy to cooperate and create a contract and working conditions that suited both of us. I designed the User Interface and was quite particular about how it looked and how it flowed but he was always receptive of my thoughts and willing to make changes when I suggested them. Sarthak also offered many new suggestions for the app that significantly improved its quality. This was my first time having an app created so Sarthak walked me through every process and explained everything as he went along so that I understood what was happening and why. The end product looked great and ran perfectly. He was exactly what I was looking for in a developer and I will definitely be going to him for future projects.",
    author: "Client",
    role: "Tag, 5.0\u2605",
  },
  {
    text: "We have worked with Sarthak for a little bit over 2 months, his knowledge and expertise in development is unmatched. The best developer we have had the privilege of working with in our 3.5 years of development. His ability to adapt to any situation we threw at him is unrivaled, he is one of a kind and was worth every single dollar we invested into him. You will not find another developer on UpWork like Sarthak. During our journey with Sarthak we had a backend developer drop off the project due to unfortunate circumstance. We hired Sarthak as a frontend developer and knowing our situation he jumped on board took the extra responsibility and knocked it out of the park. I never imagined the finished product would look so magnificent and beautiful. The functionality is out of this world with virtually zero bugs. I personally recommend Sarthak.",
    author: "Client",
    role: "Parti, 5.0\u2605",
  },
  {
    text: "Working with Sarthak might have been the most positive experience I've ever had with a contractor. He was responsive, communicative, and the end product was above and beyond my expectations. On top of all that, Sarthak completed the job in a very timely manner and had an outstanding attitude throughout. Don't think I could have been happier with how the job went.",
    author: "Client",
    role: "MetaMora, 5.0\u2605",
  },
  {
    text: "Sarthak has been an absolute pleasure to work with, and I am definitely going to work with him in the future. He is extremely talented with development and communication and doesn't 'scope creep' you at all. If you need something done on a timeline, this guy is the man. He knows how to work with complex problems and get deep in code, but he's also got the skills to make your app look gorgeous. If you're wondering if Sarthak is the guy for your iOS development job, I can assure you that he is!",
    author: "Client",
    role: "Sidewalk, 5.0\u2605",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "CV", href: "/cv.html" },
  { label: "Contact", href: "#contact" },
];
