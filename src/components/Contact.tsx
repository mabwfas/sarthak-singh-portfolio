import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, Briefcase, MessageCircle, User, MessageSquare, Sparkles } from "lucide-react";
import { profile } from "../data";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: profile.location,
    href: "#",
  },
];

const socials = [
  { icon: <Globe size={18} />, href: "#", label: "Website" },
  { icon: <Briefcase size={18} />, href: "#", label: "Upwork" },
  { icon: <MessageCircle size={18} />, href: "#", label: "Chat" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-700">
            <Sparkles size={12} />
            Available for projects
          </span>
          <span className="mb-4 mt-2 inline-block text-sm font-medium tracking-widest text-[#2563EB] uppercase">
            Contact
          </span>
          <h2
            className="mb-4 text-3xl font-bold text-[#09090B] md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <div className="section-line mx-auto mb-4 w-24" />
          <p className="mx-auto max-w-lg text-base text-[#71717A]">
            Have a project in mind? I'd love to hear about it. Drop me a message
            and let's discuss how we can bring your idea to life.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr,auto] lg:gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            animate={
              inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}
            }
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="card rounded-xl p-6 md:p-8"
          >
            <div className="mb-5 grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-[#3F3F46]"
                >
                  Name
                </label>
                <div className="relative">
                  <User size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A1A1AA]" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-light focus-ring w-full py-3 pl-10 pr-4 text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-[#3F3F46]"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A1A1AA]" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-light focus-ring w-full py-3 pl-10 pr-4 text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-[#3F3F46]"
              >
                Message
              </label>
              <div className="relative">
                <MessageSquare size={16} className="pointer-events-none absolute left-3.5 top-3.5 text-[#A1A1AA]" />
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  autoComplete="off"
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="input-light focus-ring w-full resize-none py-3 pl-10 pr-4 text-sm"
                />
              </div>
            </div>
            <motion.button
              type="submit"
              className="btn-primary group w-full justify-center md:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Send Message
              <Send
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            animate={
              inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}
            }
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col gap-4 lg:w-72"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                className="card card-hover flex items-center gap-4 rounded-xl p-4"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs font-medium text-[#71717A]">
                    {info.label}
                  </div>
                  <div className="text-sm font-medium text-[#09090B]">
                    {info.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="mt-4">
              <span className="mb-3 block text-xs font-medium text-[#71717A]">
                Follow me
              </span>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white text-[#71717A] shadow-sm transition-all duration-300 hover:border-[#BFDBFE] hover:text-[#09090B] hover:shadow-md"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
