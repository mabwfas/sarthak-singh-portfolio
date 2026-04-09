import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Sarthak was a terrific developer to work with. His communication was excellent right from the beginning and he was very happy to cooperate and create a contract and working conditions that suited both of us. I designed the User Interface and was quite particular about how it looked and how it flowed but he was always receptive of my thoughts and willing to make changes when I suggested them. Sarthak also offered many new suggestions for the app that significantly improved its quality. This was my first time having an app created so Sarthak walked me through every process and explained everything as he went along so that I understood what was happening and why. The end product looked great and ran perfectly. He was exactly what I was looking for in a developer and I will definitely be going to him for future projects.",
    author: "Client",
    project: "Tag",
    rating: 5,
  },
  {
    text: "We have worked with Sarthak for a little bit over 2 months, his knowledge and expertise in development is unmatched. The best developer we have had the privilege of working with in our 3.5 years of development. His ability to adapt to any situation we threw at him is unrivaled, he is one of a kind and was worth every single dollar we invested into him. You will not find another developer on UpWork like Sarthak. During our journey with Sarthak we had a backend developer drop off the project due to unfortunate circumstance. We hired Sarthak as a frontend developer and knowing our situation he jumped on board took the extra responsibility and knocked it out of the park. I never imagined the finished product would look so magnificent and beautiful. The functionality is out of this world with virtually zero bugs. I personally recommend Sarthak.",
    author: "Client",
    project: "Parti",
    rating: 5,
  },
  {
    text: "Working with Sarthak might have been the most positive experience I've ever had with a contractor. He was responsive, communicative, and the end product was above and beyond my expectations. On top of all that, Sarthak completed the job in a very timely manner and had an outstanding attitude throughout. Don't think I could have been happier with how the job went.",
    author: "Client",
    project: "MetaMora",
    rating: 5,
  },
  {
    text: "Sarthak has been an absolute pleasure to work with, and I am definitely going to work with him in the future. He is extremely talented with development and communication and doesn't 'scope creep' you at all. If you need something done on a timeline, this guy is the man. He knows how to work with complex problems and get deep in code, but he's also got the skills to make your app look gorgeous. If you're wondering if Sarthak is the guy for your iOS development job, I can assure you that he is!",
    author: "Client",
    project: "Sidewalk",
    rating: 5,
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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-white py-24 lg:py-32"
    >
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
            Testimonials
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-[#09090B] md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <div className="section-line mx-auto mb-4 w-24" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#71717A]">
            Real feedback from clients across 75+ projects. 100% Job Success,
            Top Rated Plus, and consistent on-time delivery.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="card card-hover rounded-xl border-l-[3px] border-l-[#2563EB] p-6"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    className="fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-5 text-sm leading-[1.8] text-[#3F3F46] italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 border-t border-[#E4E4E7] pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFF6FF] text-sm font-semibold text-[#2563EB]">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#09090B]">
                    {t.author}
                  </p>
                  <p
                    className="text-xs text-[#71717A]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Project: {t.project}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
