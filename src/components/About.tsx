import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Apple,
  Newspaper,
  DollarSign,
  Briefcase,
  GraduationCap,
  Star,
  Award,
} from "lucide-react";
import {
  profile,
  experience,
  awards,
  skills,
  techStack,
} from "../data";

/* ── Icon map for awards ──────────────────────────────── */
const awardIconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy size={20} />,
  apple: <Apple size={20} />,
  newspaper: <Newspaper size={20} />,
  "dollar-sign": <DollarSign size={20} />,
};

/* ── Timeline icon map ────────────────────────────────── */
const timelineIcons = [
  <Star size={16} />,
  <Award size={16} />,
  <Briefcase size={16} />,
  <GraduationCap size={16} />,
];

/* ── Skill Bar ────────────────────────────────────────── */
function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-[#09090B]">{name}</span>
        <span
          className="text-xs font-medium text-[#71717A]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{
            delay,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </div>
  );
}

/* ── About Section ────────────────────────────────────── */
export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const bioRef = useRef<HTMLDivElement>(null);
  const bioInView = useInView(bioRef, { once: true, margin: "-60px" });

  const awardsRef = useRef<HTMLDivElement>(null);
  const awardsInView = useInView(awardsRef, { once: true, margin: "-60px" });

  const techRef = useRef<HTMLDivElement>(null);
  const techInView = useInView(techRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="relative bg-[#FAFAFA] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="section-accent mb-5" />
            <span className="mb-4 inline-block text-sm font-medium tracking-widest text-[#2563EB] uppercase">
              About
            </span>
            <h2
              className="mb-4 text-3xl font-bold text-[#09090B] md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Experience &amp; Expertise
            </h2>
            <div className="section-line mx-auto mb-4 w-24" />
          </motion.div>
        </div>

        {/* Bio + Timeline */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <motion.div
            ref={bioRef}
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            animate={
              bioInView
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3
              className="mb-4 text-xl font-semibold text-[#09090B]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Who I Am
            </h3>
            <p className="mb-6 text-lg leading-[1.8] text-[#3F3F46]">
              {profile.bio}
            </p>
            <div className="card rounded-xl p-4">
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-[#2563EB]" />
                <div>
                  <div className="text-sm font-medium text-[#09090B]">
                    {profile.education.school}
                  </div>
                  <div className="text-xs text-[#71717A]">
                    {profile.education.degree} &bull; {profile.education.years}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div>
            <h3
              className="mb-6 text-xl font-semibold text-[#09090B]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Career Timeline
            </h3>
            <div className="relative space-y-6 pl-8">
              {/* Vertical line */}
              <div className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-[#2563EB]/40 via-[#3B82F6]/20 to-transparent" />

              {experience.map((exp, i) => {
                const ref = useRef<HTMLDivElement>(null);
                const inView = useInView(ref, {
                  once: true,
                  margin: "-40px",
                });

                return (
                  <motion.div
                    key={i}
                    ref={ref}
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[#2563EB] shadow-sm">
                      {timelineIcons[i]}
                    </div>

                    <div className="card card-hover rounded-xl p-4">
                      <span
                        className="mb-1 block text-xs font-medium text-[#2563EB]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {exp.period}
                      </span>
                      <h4 className="mb-0.5 text-sm font-semibold text-[#09090B]">
                        {exp.role}
                      </h4>
                      <span className="mb-2 block text-xs text-[#71717A]">
                        {exp.company}
                      </span>
                      <p className="text-xs leading-relaxed text-[#3F3F46]">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Awards */}
        <motion.div
          ref={awardsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={awardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h3
            className="mb-6 text-center text-xl font-semibold text-[#09090B]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Awards &amp; Recognition
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 16 }}
                animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}
                className="card card-hover rounded-xl p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                  {awardIconMap[award.icon]}
                </div>
                <h4 className="mb-1 text-sm font-semibold text-[#09090B]">
                  {award.title}
                </h4>
                <p className="text-xs text-[#71717A]">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills + Tech Stack */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Skill Bars */}
          <div>
            <h3
              className="mb-6 text-xl font-semibold text-[#09090B]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Core Skills
            </h3>
            <div className="card rounded-xl p-6">
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <motion.div
            ref={techRef}
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            animate={
              techInView
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3
              className="mb-6 text-xl font-semibold text-[#09090B]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tech Stack
            </h3>
            <div className="space-y-5">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <span className="mb-2 block text-xs font-medium tracking-wide text-[#71717A] uppercase">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-[#E4E4E7] bg-[#F4F4F5] px-3 py-1.5 text-xs font-medium text-[#3F3F46] transition-all duration-300 hover:border-[#BFDBFE] hover:bg-white hover:shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
