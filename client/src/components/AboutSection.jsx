import React, { useState, useEffect } from 'react';
import { Code, User, Download, Calendar, Sparkles, Github, Linkedin, Mail, Star, TrendingUp, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  const achievements = [
    { number: "2", label: "Completed Projects", icon: <TrendingUp className="h-5 w-5" />, suffix: "+" },
    { number: "2", label: "Active Projects", icon: <Zap className="h-5 w-5" />, suffix: "+" },
    { number: "2", label: "Languages", icon: <User className="h-5 w-5" />, suffix: "" },
    { number: "20", label: "Event Organized", icon: <Calendar className="h-5 w-5" />, suffix: "+" }
  ];

  const techStack = [
    { category: "Programming", items: ["C++", "Python", "Java", "JavaScript", "SQL", "HTML/CSS"] },
    { category: "Web & App", items: ["React", "Node.js", "Express.js", "Responsive UI", "Mobile Optimization"] },
    { category: "Data & Tools", items: ["SQLite", "MySQL", "pandas", "scikit-learn", "GitHub", "VS Code"] }
  ];

  const features = ["Responsive UI improvement", "Mobile optimization", "Relational database design", "Bilingual communication", "Document accuracy", "Cross-cultural coordination"];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Bumjunko" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/bumjun-ko-7876543a8" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:bumjunko@gmail.com" }
  ];

  const tabContent = {
    personal: "I am a Computer Science student at Angelo State University now based in San Angelo, Texas. After serving in the Republic of Korea Army, I returned to school with stronger discipline, consistency, and attention to detail.",
    professional: "My strongest work sits at the intersection of web applications, responsive UI, and operational information. I have hands-on experience with React, Node.js, Express.js, SQLite, SQL-based coursework, and student-facing software projects.",
    approach: "I enjoy work that connects technology, users, and operations. That means improving usability, organizing information clearly, and collaborating across technical and non-technical teams in both Korean and English."
  };

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  // Programmatic download function
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume for Website - Bumjun Ko.pdf'; // Must be in public folder
    link.download = 'Resume for Website - Bumjun Ko.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-secondary/5 rounded-full blur-3xl transition-all duration-1500 ease-out" style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-16 right-8 sm:top-20 sm:right-20 animate-float"><div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg rotate-45" /></div>
        <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float animation-delay-2000"><div className="w-5 sm:w-6 h-5 sm:h-6 bg-secondary/20 rounded-full" /></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 px-2 sm:px-6">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6 transition-all duration-500 hover:bg-primary/15 hover:scale-105 group cursor-pointer">
            <div className="relative">
              <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-primary tracking-wide">ABOUT ME</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Transforming</span>
            <span className="block text-primary animate-pulse">Ideas Into Impact</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building practical solutions with <span className="text-primary font-semibold">clarity</span>, <span className="text-primary font-semibold">responsiveness</span>, and <span className="text-primary font-semibold">real user value</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-8">
            {/* About Card */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60 relative overflow-hidden group">
              {/* Decorative Circles */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-secondary rounded-full -translate-x-16 translate-y-16" />
              </div>

              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:scale-105 md:group-hover:scale-110 relative">
                      <img src="/bumjun_picture.jpg" alt="Bumjun Ko" className="w-full h-full object-contain bg-white" />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Bumjun Ko</h2>
                    <p className="text-primary text-base sm:text-lg font-semibold mb-3 sm:mb-4">Computer Science Student | Open to CS Roles</p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {achievements.map((achievement, index) => (
                        <div key={index} className={`p-2 sm:p-3 rounded-xl bg-background/50 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/30 ${counter === index ? 'bg-primary/10 border-primary/50' : ''}`}>
                          <div className="flex items-center gap-2 justify-center md:justify-start">
                            {achievement.icon}
                            <div>
                              <div className="font-bold text-sm sm:text-lg">{achievement.number}{achievement.suffix}</div>
                              <div className="text-[10px] sm:text-xs text-muted-foreground">{achievement.label}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 border-b border-border mb-4 sm:mb-6">
                  {['personal', 'professional', 'approach'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-2 sm:py-3 px-1 sm:px-4 text-[11px] sm:text-base font-medium text-center transition-all duration-300 ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[100px] sm:min-h-[120px]">
                  <AnimatePresence mode="sync">
                    <motion.p
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-left text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                    >
                      {tabContent[activeTab]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Code className="h-4 sm:h-6 w-4 sm:w-6 text-primary" />Tech Stack Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {techStack.map((stack, index) => (
                  <div key={index} className="bg-background/50 border border-border rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-primary/30 hover:scale-105 group">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="p-1 sm:p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300"><Code className="h-3 sm:h-4 w-3 sm:w-4" /></div>
                      <h4 className="font-semibold text-sm sm:text-lg">{stack.category}</h4>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {stack.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />{item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Work Together */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Let's Connect</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <a href="#contact" className="flex-1 block w-full p-3 sm:p-4 bg-primary text-primary-foreground rounded-xl text-center font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg group">
                  <div className="flex items-center justify-center gap-2 sm:gap-3"><User className="h-4 sm:h-5 w-4 sm:w-5 group-hover:scale-110 transition-transform duration-300" />Send a Message</div>
                </a>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="flex-1 block w-full p-3 sm:p-4 border border-border rounded-xl text-center font-semibold transition-all duration-300 hover:bg-accent hover:border-primary/30 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <Download className="h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                    Download Resume
                  </div>
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-background/50 rounded-xl border border-border">
                <h4 className="font-semibold mb-2 text-center text-sm sm:text-base">Quick Connect</h4>
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} className="p-2 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">{social.icon}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Me */}
            <div className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2"><Star className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />Strengths</h3>
              <div className="space-y-2 sm:space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg transition-all duration-300 hover:bg-background/50 hover:scale-105">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" /><span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card/60 border border-border rounded-3xl p-4 sm:p-6 min-h-[110px] sm:min-h-[132px] backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card-70">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm">Available</span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground bg-green-500/10 text-green-600 px-2 py-1 rounded-lg">
                  CS roles in U.S.
                </span>
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground text-center bg-background/50 rounded-lg p-1 sm:p-2">
                Open to software engineering, web app, and operations-adjacent opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};
