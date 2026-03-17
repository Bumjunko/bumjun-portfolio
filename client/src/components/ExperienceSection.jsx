import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronLeft, ChevronRight, Globe2, ShieldCheck, Sparkles, Users, Wallet } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Student Assistant",
    organization: "Center for International Studies, Angelo State University",
    period: "Aug 2025 - Present",
    status: "Current",
    category: "Operations Support",
    accent: "from-emerald-500 to-teal-600",
    icon: <Globe2 className="h-5 w-5" />,
    description:
      "Support international student operations through document review, schedule coordination, and administrative workflow assistance in a detail-sensitive environment.",
    highlights: [
      "Reviewed and organized I-20, visa, passport, and OPT/CPT documents",
      "Coordinated meetings and supported office scheduling workflows",
      "Worked with international student organizations on campus events",
    ],
    tags: ["Document Accuracy", "Administrative Support", "Schedule Coordination", "Cross-cultural Communication"],
  },
  {
    id: 2,
    title: "President",
    organization: "KSEA Angelo State YG Group",
    period: "Jul 2025 - May 2026",
    status: "Leadership",
    category: "Student Leadership",
    accent: "from-sky-500 to-indigo-600",
    icon: <Users className="h-5 w-5" />,
    description:
      "Lead chapter planning for technical, networking, and outreach events while coordinating communication, promotion, and collaboration with students and external partners.",
    highlights: [
      "Planned and organized monthly technical and community events",
      "Coordinated outreach, communication, and speaker-related logistics",
      "Helped shape chapter content and social media direction",
    ],
    tags: ["Event Planning", "Leadership", "Community Building", "Bilingual Communication"],
  },
  {
    id: 4,
    title: "Treasurer",
    organization: "Korean Student Association, Angelo State University",
    period: "Aug 2025 - Dec 2025",
    status: "Campus Role",
    category: "Student Organization",
    accent: "from-fuchsia-500 to-pink-600",
    icon: <Wallet className="h-5 w-5" />,
    description:
      "Supported student organization operations through fee tracking, fund organization, and event coordination for Korean student community activities on campus.",
    highlights: [
      "Tracked membership fees and organization funds with transparency",
      "Supported coordination for tutoring and cultural events",
      "Helped manage records and logistics for student organization operations",
    ],
    tags: ["Organization", "Event Support", "Record Keeping", "Campus Involvement"],
  },
  {
    id: 3,
    title: "Administrative Specialist",
    organization: "Republic of Korea Army, 51st Infantry Division",
    period: "Oct 2021 - Apr 2023",
    status: "Completed",
    category: "Military Administration",
    accent: "from-amber-500 to-orange-600",
    icon: <ShieldCheck className="h-5 w-5" />,
    description:
      "Handled personnel administration, training coordination, and document preparation in a high-accountability environment requiring consistency, speed, and accuracy.",
    highlights: [
      "Supported reservist mobilization and personnel organization",
      "Coordinated training schedules and administrative records",
      "Maintained reliable documentation under deadline-driven conditions",
    ],
    tags: ["Operations", "Reliability", "Personnel Coordination", "Administrative Records"],
  },
];

const categoryColors = {
  "Operations Support": "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
  "Student Leadership": "from-sky-500/20 to-indigo-600/20 text-sky-600 border-sky-500/30",
  "Military Administration": "from-amber-500/20 to-orange-600/20 text-amber-600 border-amber-500/30",
  "Student Organization": "from-fuchsia-500/20 to-pink-600/20 text-fuchsia-600 border-fuchsia-500/30",
};

export const ExperienceSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollCards = (direction) => {
    const element = scrollRef.current;
    if (!element) return;

    const scrollAmount = Math.min(420, element.clientWidth * 0.9);
    element.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      setCanScrollLeft(scrollLeft > 8);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
    };

    updateScrollState();
    element.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      element.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            My Experience
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Experience
            <span className="block text-primary">Highlights</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A snapshot of the roles where I built strengths in operations support, leadership, communication, and detail-oriented execution.
          </motion.p>
        </motion.div>

        <div className="relative">
          {!canScrollLeft ? (
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-20 bg-gradient-to-l from-background via-background/85 to-transparent lg:block" />
          ) : (
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] hidden w-20 bg-gradient-to-r from-background via-background/85 to-transparent lg:block" />
          )}

          {canScrollLeft ? (
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 lg:flex items-center"
            >
              <button
                type="button"
                onClick={() => scrollCards("left")}
                aria-label="Scroll experience cards left"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/90 text-primary shadow-lg backdrop-blur-sm transition hover:scale-105 hover:border-primary/40"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </motion.div>
          ) : null}

          {canScrollRight ? (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 lg:flex items-center"
            >
              <button
                type="button"
                onClick={() => scrollCards("right")}
                aria-label="Scroll experience cards right"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/90 text-primary shadow-lg backdrop-blur-sm transition hover:scale-105 hover:border-primary/40"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          ) : null}

          <div
            ref={scrollRef}
            className="flex items-stretch gap-8 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex min-w-[320px] self-stretch snap-start sm:min-w-[360px] lg:min-w-[380px]"
            >
              <div className="relative flex h-full flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-lg transition-all duration-500 hover:shadow-xl">
                <div className={`h-2 w-full bg-gradient-to-r ${experience.accent}`} />

                <div className="relative flex flex-1 flex-col px-6 pt-6 pb-[126px]">
                  <div className={`relative flex items-start justify-between gap-3 mb-4 ${experience.id === 1 ? "min-h-[64px]" : experience.id === 3 ? "min-h-[88px]" : experience.id === 4 ? "min-h-[88px]" : "min-h-[64px]"}`}>
                    <div className="flex items-start gap-3 flex-1">
                      <div className="relative left-[-9px] p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                        {experience.icon}
                      </div>
                      <div className="flex-1 text-center">
                        <h3 className="absolute inset-x-0 top-0 text-center text-xl font-bold text-foreground">
                          {experience.id === 3 ? (
                            <>
                              Administrative
                              <br />
                              Specialist
                            </>
                          ) : (
                            experience.title
                          )}
                        </h3>
                        <p className={`absolute inset-x-0 text-center text-sm text-muted-foreground ${experience.id === 1 ? "top-8 px-12" : experience.id === 3 ? "top-16 px-4 whitespace-nowrap" : "top-8 px-12 whitespace-nowrap"}`}>
                          {experience.id === 1 ? (
                            <>
                              Center for International Studies,
                              <br />
                              Angelo State University
                            </>
                          ) : experience.id === 4 ? (
                            <>
                              Korean Student Association,
                              <br />
                              Angelo State University
                            </>
                          ) : (
                            experience.organization
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-0 right-[-12px] rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {experience.status}
                    </div>
                  </div>

                  <div className={`mb-4 flex items-center gap-2 text-sm text-muted-foreground ${experience.id === 1 || experience.id === 3 ? "mt-3" : experience.id === 4 ? "mt-1" : "mt-2"}`}>
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>

                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border bg-gradient-to-r ${categoryColors[experience.category]}`}>
                      {experience.category}
                    </span>
                  </div>

                  <p className="mb-5 text-left text-sm leading-relaxed text-muted-foreground">
                    {experience.description}
                  </p>

                  <div className="mb-5 space-y-2 text-left">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`absolute left-6 right-6 flex min-h-[88px] flex-wrap content-start gap-2 border-t border-border pt-4 ${
                      experience.id === 4 ? "bottom-[42px]" : "bottom-[18px]"
                    }`}
                  >
                    {experience.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/70 border border-border text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4 text-primary" />
            Experience that supports both software roles and operations-driven team environments
          </div>
        </motion.div>
      </div>
    </section>
  );
};
