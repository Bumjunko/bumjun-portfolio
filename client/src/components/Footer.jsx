import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/bumjun-ko-7876543a8", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "https://github.com/Bumjunko", label: "GitHub" },
    { icon: <Mail size={18} />, href: "mailto:bumjunko@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "bumjunko@gmail.com", href: "mailto:bumjunko@gmail.com" },
    { icon: <Phone size={16} />, text: "+1 (325)-277-5140", href: "tel:+13252775140" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Glass background container */}
        <motion.div 
          className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-4 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bumjun Ko</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Computer Science student at Angelo State University building practical web applications and student-facing tools.
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={link.href} 
                      className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm text-gray-600 dark:text-gray-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center justify-center space-x-3 text-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-gray-600 dark:text-gray-400">{info.icon}</span>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-gray-600 dark:text-gray-300"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-300">{info.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-gray-900 dark:text-white font-medium text-sm uppercase tracking-wider">Education</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                B.S. in Computer Science at Angelo State University with a Data Science certificate program in progress.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Web and Mobile Development Certificate Program is also in progress with one course remaining.
              </p>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50 flex flex-col items-center text-xs text-gray-600 dark:text-gray-400 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p>© {currentYear} Bumjun. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookies</a>
              <motion.a
                href="#hero"
                aria-label="Back to top"
                className="p-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
