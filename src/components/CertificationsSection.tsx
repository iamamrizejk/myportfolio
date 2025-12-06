import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  linkedinUrl: string;
  thumbnail: string;
  certificateImage: string;
}

const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'June 2025',
    description: 'Developed strong skills in architecting secure, scalable, and resilient solutions on AWS. Gained hands-on experience across compute, storage, databases, networking, and cost optimization.',
    skills: ['AWS','Serverless','DevOps','Security','Storage','Database','Compute','Resiliency','Networking','Cloud Architecture', 'Cost Optimization'],
    linkedinUrl: 'https://www.linkedin.com/posts/amrize-jk_aws-amazonwebservices-solutionsarchitect-activity-7336689579543953410-a2w1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '☁️',
    certificateImage: '📜'
  },
  {
    title: 'AWS Certified Cloud Practitioner - Foundational',
    issuer: 'Amazon Web Services',
    date: 'January 2025',
    description: 'Built a solid foundation in AWS cloud concepts, global infrastructure, and core service categories. Gained practical understanding of services, frameworks, and cloud operations.',
    skills: ['AWS Services', 'AWS Well-Architected Framework', 'AWS Cloud Adoption Framework', 'AWS global infrastructure', 'AWS shared responsibility model', 'AWS Management and governance'],
    linkedinUrl: 'https://www.linkedin.com/posts/amrize-jk_aws-certified-cloud-practitioner-was-issued-activity-7281287636600680448-BasO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '🎨',
    certificateImage: '📜'
  },
  {
    title: 'OCI 2025 Certified AI Foundations - Associate',
    issuer: 'Oracle',
    date: 'August 2025',
    description: 'Built a solid foundation in Oracle Cloud’s AI concepts, models, and core GenAI services. Developed skills in applying AI for insights, automation, and cloud-based solutions.',
    skills: ['Oracle Cloud Infrastructure','OCI AI Services','Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Large Language Models'],
    linkedinUrl: 'https://www.linkedin.com/posts/amrize-jk_oraclecertified-oraclecloudinfrastructure-activity-7360969566564335619-iksZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '⚛️',
    certificateImage: '📜'
  },
  {
    title: 'Networking Essentials - Fundamentals',
    issuer: 'Cisco Networking Academy',
    date: 'July 2024',
    description: 'Learned core networking fundamentals such as IP addressing, routing, and switching. Gained hands-on skills in configuring, securing, and troubleshooting basic network setups.',
    skills: ['Network Fundamentals', 'IP Addressing & Subnetting', 'Routing & Switching Basics', 'Network Security Essentials', 'LAN/WAN Concepts', 'OSI & TCP/IP Models'],
    linkedinUrl: 'https://www.linkedin.com/posts/amrize-jk_cisco-activity-7213790693515829248-cTOT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '🍃',
    certificateImage: '📜'
  }
];

export const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
                {/* Thumbnail */}
                <div className="w-full aspect-square bg-gradient-accent rounded-xl mb-4 flex items-center justify-center text-6xl relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                  <span className="relative z-10">{cert.thumbnail}</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-heading font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={cert.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        View on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Click indicator */}
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Click for details
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Details Dialog */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-heading font-bold gradient-text">
                {selectedCert?.title}
              </DialogTitle>
            </DialogHeader>

            {selectedCert && (
              <div className="space-y-6">
                {/* Certificate Image */}
                <div className="w-full aspect-video bg-gradient-accent rounded-xl flex items-center justify-center text-9xl">
                  {selectedCert.certificateImage}
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Issued by: <span className="text-muted-foreground">{selectedCert.issuer}</span></span>
                    <span className="text-muted-foreground">{selectedCert.date}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCert.description}
                  </p>

                  {/* Skills */}
                  <div>
                    <h4 className="font-medium mb-2">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      className="flex-1 bg-gradient-accent hover:opacity-90"
                      asChild
                    >
                      <a href={selectedCert.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        View on LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedCert(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};