import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Linkedin } from 'lucide-react';

const experiences = [
  {
    title: 'QA Intern (Upcoming)',
    company: 'Workday',
    period: 'Starting Feb 2026',
    location: 'Guindy, Chennai, India',
    type: 'On-site',
    linkedinUrl: 'https://www.linkedin.com/company/workday/',
  },
  {
    title: 'Chapter Lead',
    company: 'Nextwork',
    period: 'May 2025 - Present',
    location: 'San Francisco, CA, USA',
    type: 'Remote',
    linkedinUrl: 'https://www.linkedin.com/school/itsnextwork/',
  },
  {
    title: 'Vice Captain (Cloud Club)',
    company: 'AWS',
    period: 'May 2025 - Present',
    location: 'Chennai, India',
    type: 'On-site',
    linkedinUrl: 'https://www.linkedin.com/company/amazon-web-services/',
  },
  {
    title: 'Founder (College Club)',
    company: 'Horizon',
    period: 'July 2025 - Present',
    location: 'Chennai, India',
    type: 'Hybrid',
    linkedinUrl: 'https://www.linkedin.com/company/horizoncc/',
  },
  {
    title: 'Business Developer',
    company: 'GetMax Healthcare Pvt Ltd.',
    period: 'Nov 2023 - Dec 2023',
    location: 'Chennai, India',
    type: 'Remote',
    linkedinUrl: 'https://www.linkedin.com/company/getmax-healthcare-pvt-ltd/',
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and leadership roles
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-accent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-accent z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-accent animate-ping opacity-75" />
                </motion.div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-16 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-base text-muted-foreground font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <a
                        href={exp.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        aria-label="View on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>

                    <div className={`space-y-2.5 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{exp.location} · {exp.type}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
