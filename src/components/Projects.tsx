import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects, type Project } from "../data";

/* ── Project Card ────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const images = [project.cover, ...project.images];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`card card-hover group relative overflow-hidden ${
        featured ? "md:col-span-1" : ""
      }`}
    >
      {/* Main image with crossfade */}
      <div
        className={`relative overflow-hidden rounded-t-[11px] ${
          featured ? "min-h-[500px]" : "aspect-[3/2]"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[activeImg]}
            src={images[activeImg]}
            alt={`${project.title} - ${project.subtitle}`}
            loading={index === 0 && featured ? undefined : "lazy"}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        {/* Persistent bottom gradient for readability */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Hover icon */}
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 shadow-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ExternalLink size={14} className="text-[#09090B]" />
        </div>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-1.5 px-4 py-2 border-t border-[#E4E4E7] bg-[#F4F4F5]">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImg(i)}
              className={`w-12 h-8 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                i === activeImg
                  ? "border-[#2563EB] shadow-sm"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3
          className="mb-1 flex items-center gap-2 text-lg font-semibold text-[#09090B] transition-colors duration-300 group-hover:text-[#2563EB]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
          {project.title}
        </h3>
        <p className="mb-3 text-sm text-[#71717A]">{project.subtitle}</p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#F4F4F5] px-2.5 py-1 text-[11px] font-medium text-[#3F3F46] transition-all duration-300 hover:bg-[#EFF6FF] hover:text-[#2563EB]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* App Store / Website Links */}
        {(project.appStoreUrl || project.websiteUrl) && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#2563EB]/20 bg-[#EFF6FF] px-3 py-1 text-[11px] font-semibold text-[#2563EB] transition-all duration-200 hover:bg-[#2563EB] hover:text-white"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
                <ExternalLink size={10} />
              </a>
            )}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E4E7] bg-white px-3 py-1 text-[11px] font-semibold text-[#3F3F46] transition-all duration-200 hover:border-[#2563EB]/30 hover:text-[#2563EB]"
              >
                Website
                <ExternalLink size={10} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Stagger Variants ────────────────────────────────── */
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ── Projects Section ─────────────────────────────────── */
export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 inline-block text-sm font-medium tracking-widest text-[#2563EB] uppercase">
              Portfolio
            </span>
            <h2
              className="mb-4 text-3xl font-bold text-[#09090B] md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Featured <span className="gradient-text">Mobile Apps</span>
            </h2>
            <div className="section-line mx-auto mb-4 w-24" />
            <p className="mx-auto max-w-lg text-base text-[#71717A]">
              A selection of mobile applications built for startups and
              businesses across social, education, entertainment, and
              productivity.
            </p>
          </motion.div>
        </div>

        {/* Featured Cards (2-col) */}
        <motion.div
          className="mb-6 grid gap-6 md:grid-cols-2"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              featured
            />
          ))}
        </motion.div>

        {/* Rest of cards (3-col) */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rest.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 2}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
