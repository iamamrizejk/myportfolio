import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  category: string;
  level: number;
  description: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: 'AWS',
    category: 'Cloud',
    level: 88,
    description: 'Amazon Web Services - EC2, S3, Lambda, RDS, and cloud infrastructure management for scalable applications.',
    icon: '☁️'
  },
  {
    name: 'GCP',
    category: 'Cloud',
    level: 85,
    description: 'Google Cloud Platform - Compute Engine, Cloud Storage, BigQuery for data-driven applications.',
    icon: '🌐'
  },
  {
    name: 'Azure',
    category: 'Cloud',
    level: 82,
    description: 'Microsoft Azure - Virtual Machines, App Services, Azure DevOps for enterprise cloud solutions.',
    icon: '⚡'
  },
  {
    name: 'Jira',
    category: 'Tools',
    level: 90,
    description: 'Project management, agile workflows, sprint planning, and issue tracking for team collaboration.',
    icon: '📋'
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    level: 92,
    description: 'Version control, branching strategies, pull requests, and collaborative development workflows.',
    icon: '🔀'
  },
  {
    name: 'SQL',
    category: 'Database',
    level: 87,
    description: 'Relational database design, complex queries, optimization, and data modeling with MySQL, PostgreSQL.',
    icon: '🗄️'
  },
  {
    name: 'Jenkins',
    category: 'DevOps',
    level: 84,
    description: 'Continuous integration and deployment, automated testing pipelines, and build automation.',
    icon: '🔧'
  },
  {
    name: 'Selenium',
    category: 'Testing',
    level: 86,
    description: 'Automated browser testing, test script development, and quality assurance frameworks.',
    icon: '🧪'
  },
  {
    name: 'Postman',
    category: 'Tools',
    level: 89,
    description: 'API testing, development, documentation, and automated testing for RESTful services.',
    icon: '📮'
  },
  {
    name: 'Python',
    category: 'Language',
    level: 90,
    description: 'Versatile programming for automation, data analysis, scripting, and backend development.',
    icon: '🐍'
  },
  {
    name: 'Java',
    category: 'Language',
    level: 88,
    description: 'Object-oriented programming, enterprise applications, Spring framework, and robust backend systems.',
    icon: '☕'
  },
  {
    name: 'JavaScript',
    category: 'Language',
    level: 93,
    description: 'Modern ES6+, async programming, frameworks like React, Node.js for full-stack development.',
    icon: '📜'
  }
];

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            <span className="gradient-text">Skills & Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hover over each skill to see proficiency level and detailed expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative group"
            >
              <motion.div
                className="glass-card rounded-2xl p-6 h-full relative overflow-hidden cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={false}
                />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-2">{skill.name}</h3>
                  
                  <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
                    {skill.category}
                  </div>

                  <AnimatePresence mode="wait">
                    {hoveredSkill === skill.name ? (
                      <motion.div
                        key="description"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {skill.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Proficiency</span>
                            <span className="text-primary font-bold">{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-accent"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.p
                        key="preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-muted-foreground text-sm"
                      >
                        Hover to see more details
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-accent rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};