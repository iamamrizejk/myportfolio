import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Bug, Cloud, ShieldCheck, Rocket, Crown, Users, Hourglass, Lightbulb } from 'lucide-react';

const aboutItems = [
  {
    id: 'designer',
    icon: Palette,
    keyword: 'Designer',
    detail: 'Creating beautiful, intuitive interfaces that users love to interact with.'
  },
  {
    id: 'developer',
    icon: Code,
    keyword: 'Developer',
    detail: 'Crafting applications designed for stability, speed, and future growth.'
  },
  {
  id: 'cloud',
  icon: Cloud,
  keyword: 'Cloud',
  detail: 'Building cloud knowledge through hands-on learning, certifications, and tech meetups.'
  },
  {
  id: 'qa',
  icon: ShieldCheck,
  keyword: 'QA',
  detail: 'Building QA skills by validating features, identifying issues, and contributing to overall product quality.'
  },
  {
  id: 'tester',
  icon: Bug,
  keyword: 'Tester',
  detail: 'Learning to test features carefully and ensure they work as expected through basic validation.'
  },
  {
    id: 'learner',
    icon: Lightbulb,
    keyword: 'Learner',
    detail: 'Continuously exploring new technologies and staying ahead of industry trends.'
  },
  {
    id: 'collaborator',
    icon: Users,
    keyword: 'Collaborator',
    detail: 'Working with teams to bring ideas to life and solve complex problems together.'
  },
  {
  id: 'leader',
  icon: Crown,
  keyword: 'Leader',
  detail: 'Guiding teams with clarity, confidence, and vision to achieve meaningful outcomes.'
  },
  {
  id: 'timeManager',
  icon: Hourglass,
  keyword: 'Time Manager',
  detail: 'Balancing tasks smartly to deliver consistent progress without rushing.'
  },
  {
    id: 'innovator',
    icon: Rocket,
    keyword: 'Innovator',
    detail: 'Pushing boundaries to create solutions that make a real impact.'
  }
];

export const AboutSection = () => {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hover to flip each card and discover what defines me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {aboutItems.map((item, index) => {
            const Icon = item.icon;
            const isFlipped = flippedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setFlippedId(item.id)}
                onHoverEnd={() => setFlippedId(null)}
                onClick={() => setFlippedId(isFlipped ? null : item.id)}
                className="perspective-1000 cursor-pointer h-64 md:h-80"
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="p-4 rounded-full bg-gradient-accent">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-center">
                      {item.keyword}
                    </h3>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 glass-card rounded-2xl p-6 flex items-center justify-center backface-hidden bg-gradient-accent"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-white text-center text-sm md:text-base leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};