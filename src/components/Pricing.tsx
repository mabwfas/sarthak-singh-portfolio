import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "per app",
    desc: "Perfect for MVP apps, proof-of-concept builds, and single-platform launches",
    features: [
      "Native iOS or Android app",
      "Up to 8 screens",
      "Push notifications",
      "REST API integration",
      "App Store submission",
      "CI/CD via TestFlight & Fastlane",
      "30 days post-launch support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$8,000",
    period: "per app",
    desc: "Full-featured apps for businesses ready to scale on mobile",
    features: [
      "Native iOS + Android (or cross-platform)",
      "In-app purchases & subscriptions",
      "Offline-first with local database",
      "Custom UI/UX design in Figma",
      "Real-time features (WebSocket / Firebase)",
      "Payment gateway integration",
      "Analytics & crash reporting",
      "Performance optimization & caching",
      "90 days post-launch support",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "$20,000+",
    period: "custom scope",
    desc: "Enterprise-grade apps for mission-critical, multi-platform needs",
    features: [
      "Multi-platform (iOS + Android + Watch + Widget)",
      "Custom SDK & framework development",
      "On-device ML & Core ML integration",
      "Advanced security & compliance (HIPAA, PCI-DSS)",
      "Real-time analytics pipeline",
      "White-label & multi-tenant architecture",
      "Load testing & performance SLA",
      "Dedicated technical lead",
      "6 months support & SLA guarantee",
    ],
    highlighted: false,
    cta: "Contact Me",
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

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#FAFAFA] py-24 lg:py-32">
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
            Pricing
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-[#09090B] md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <div className="section-line mx-auto mb-4 w-24" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#71717A]">
            No hidden fees, no scope creep. Pick a plan that fits your project
            or reach out for a custom quote tailored to your exact needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: plan.highlighted
                  ? "0 20px 40px rgba(37,99,235,0.12), 0 8px 16px rgba(0,0,0,0.04)"
                  : "0 10px 25px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`card card-hover relative flex flex-col rounded-xl p-7 ${
                plan.highlighted
                  ? "border-[#2563EB] shadow-lg lg:-translate-y-4"
                  : ""
              }`}
            >
              {/* Recommended Badge */}
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-[#2563EB] px-4 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-sm">
                    Recommended
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className="mb-1 text-lg font-semibold text-[#09090B]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-1 flex items-baseline gap-1">
                <span
                  className="text-4xl font-bold text-[#09090B]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-[#71717A]">/ {plan.period}</span>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-[#71717A]">
                {plan.desc}
              </p>

              {/* Divider */}
              <div className="mb-6 h-px w-full bg-[#E4E4E7]" />

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF]">
                      <Check size={12} className="text-[#2563EB]" />
                    </div>
                    <span className="text-sm text-[#3F3F46]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className={`mt-auto inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                  plan.highlighted
                    ? "bg-[#2563EB] text-white shadow-sm hover:bg-[#1D4ED8]"
                    : "border border-[#E4E4E7] bg-white text-[#09090B] hover:border-[#BFDBFE] hover:text-[#2563EB]"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="mt-10 text-center text-sm text-[#A1A1AA]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Custom quotes available for unique requirements. All prices in USD.
        </motion.p>
      </div>
    </section>
  );
}
