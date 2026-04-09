import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Requirements deep-dive, user research, competitive analysis & tech stack selection",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes in Figma, interactive prototypes, design system & native component library",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Clean architecture, TDD, CI/CD via Fastlane, weekly TestFlight builds & progress updates",
  },
  {
    num: "04",
    title: "QA & Test",
    desc: "Unit + UI tests, device matrix testing, performance profiling & crash analytics",
  },
  {
    num: "05",
    title: "Launch",
    desc: "ASO optimization, App Store / Play Store submission, monitoring & post-launch support",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Process() {
  return (
    <section id="process" className="relative bg-[#FAFAFA] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-accent mx-auto mb-5" />
          <span className="mb-4 inline-block text-sm font-medium tracking-widest text-[#2563EB] uppercase">
            Process
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-[#09090B] md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            How Every Project Gets{" "}
            <span className="gradient-text">Delivered</span>
          </h2>
          <div className="section-line mx-auto mb-4 w-24" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#71717A]">
            A battle-tested 5-phase workflow refined across 75+ shipped apps.
            Clients get weekly TestFlight builds and daily progress updates at
            every stage.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="card card-hover rounded-xl p-6"
            >
              {/* Number */}
              <span
                className="mb-4 block text-3xl font-bold text-[#2563EB]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.num}
              </span>

              {/* Divider */}
              <div className="mb-4 h-px w-8 bg-[#2563EB]/20" />

              {/* Title */}
              <h3
                className="mb-2 text-lg font-semibold text-[#09090B]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#71717A]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
