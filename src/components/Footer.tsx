import { motion } from "framer-motion";
import { Heart, Globe, Briefcase, MessageCircle, ArrowUp } from "lucide-react";

const socials = [
  { icon: <Globe size={16} />, href: "#", label: "Website" },
  { icon: <Briefcase size={16} />, href: "#", label: "Upwork" },
  { icon: <MessageCircle size={16} />, href: "#", label: "Chat" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E4E4E7] bg-[#F4F4F5]">
      {/* Back to top */}
      <div className="flex justify-center -mt-5">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#71717A] shadow-sm transition-all duration-300 hover:border-[#BFDBFE] hover:text-[#2563EB] hover:shadow-md hover:-translate-y-0.5"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Left */}
          <div className="flex items-center gap-1.5 text-sm text-[#71717A]">
            <span>&copy; {new Date().getFullYear()} Sarthak Singh. Built with</span>
            <Heart size={14} className="text-[#2563EB]" />
            <span>in Mumbai</span>
          </div>

          {/* Separator (mobile only) */}
          <div className="h-px w-16 bg-[#E4E4E7] md:hidden" />

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-md text-[#A1A1AA] transition-colors duration-300 hover:bg-white hover:text-[#09090B]"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
