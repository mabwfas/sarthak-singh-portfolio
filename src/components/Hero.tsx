import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowDown,
  Award,
  BadgeCheck,
  DollarSign,
  Star,
  Sparkles,
} from "lucide-react";
import { profile, stats, trustBadges } from "../data";

/* ── Animated Counter ─────────────────────────────────── */
function Counter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-heading)", fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ── Trust Badge Icons ────────────────────────────────── */
const badgeIcons: Record<string, React.ReactNode> = {
  "Top Rated Plus": <Award size={14} />,
  "$900K+ Earned": <DollarSign size={14} />,
  "100% Job Success": <BadgeCheck size={14} />,
  "Apple Featured": <Star size={14} />,
};

/* ── Blur-in Variant ──────────────────────────────────── */
const blurIn = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#FAFAFA] pt-20 gradient-border"
    >
      {/* Dot grid pattern */}
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-[0.3]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        {/* 2-Column Layout: Text Left, Photo Right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* LEFT COLUMN — All Text Content */}
          <div className="flex-1 min-w-0">
            {/* Top Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={blurIn}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4E4E7] bg-white px-4 py-1.5 text-sm text-[#3F3F46] shadow-sm"
            >
              <Sparkles size={14} className="text-[#F59E0B]" />
              <span>Available for new projects</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={blurIn}
              className="mb-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] text-[#09090B]"
              style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.03em" }}
            >
              <span className="gradient-text">{profile.shortTitle}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={blurIn}
              className="mb-4 text-lg text-[#3F3F46] md:text-xl"
            >
              iOS &amp; Android &nbsp;|&nbsp; Flutter &amp; Swift
            </motion.p>

            {/* Tagline */}
            <motion.p
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={blurIn}
              className="mb-8 max-w-xl text-base leading-relaxed text-[#71717A]"
            >
              {profile.tagline}. {profile.bio.split(". ").slice(0, 2).join(". ")}.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={blurIn}
              className="mb-8 flex flex-wrap gap-2"
            >
              {trustBadges.map((badge) => (
                <motion.span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E4E7] bg-white px-3 py-1 text-xs font-medium text-[#3F3F46] shadow-sm transition-all duration-300 hover:border-[#BFDBFE]"
                  whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {badgeIcons[badge]}
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={5}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={blurIn}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                className="btn-primary group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View My Work
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </motion.a>
              <motion.a
                href="/cv.html"
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View CV
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Profile Photo */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={blurIn}
            className="hidden lg:block flex-shrink-0"
            style={{ width: 280 }}
          >
            <div className="overflow-hidden rounded-2xl border border-[#E4E4E7] shadow-lg">
              <img
                src="/sarthak.png"
                alt="Sarthak Singh"
                width={280}
                height={350}
                className="w-full object-cover"
                style={{ height: 350 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card card-hover rounded-xl px-6 py-5 text-center"
            >
              <div className="mb-1 text-3xl font-bold text-[#2563EB] md:text-4xl">
                <Counter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-xs font-medium tracking-wide text-[#71717A] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
