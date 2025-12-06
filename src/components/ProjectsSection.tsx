import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  linkedin: string;
  thumbnail: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: 'RAG Chatbot in Bedrock',
    description: 'A chatbot powered by Retrieval-Augmented Generation using Amazon Bedrock, designed to deliver precise, context-aware answers by pulling information from custom knowledge sources.',
    tags: ['Amazon Bedrock', 'RAG', 'LLM', 'Vector Database', 'Knowledge Base', 'Chatbot', 'AI', 'Serverless'],
    github: 'https://github.com/iamamrizejk/AWS/tree/414c4135c60b53d69d9b90ebf04a5253dbe3eb35/Setup%20a%20RAG%20Chatbot%20in%20AWS%20Bedrock',
    linkedin: 'https://www.linkedin.com/posts/amrize-jk_aws-amazonbedrock-chatbot-activity-7299991993617719299-7cws?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '🛒',
    images: ['🛒', '📦', '💳', '📊']
  },
  {
    title: 'AWS Pizza - Chatbot',
    description: 'A smart pizza-ordering chatbot built with Amazon Lex and hosted on AWS S3, enabling users to place orders through natural conversation with automated backend logic using AWS Lambda.',
    tags: ['Amazon Lex', 'AWS Lambda', 'AWS S3', 'JavaScript', 'Chatbot', 'Serverless', 'AI'],
    github: 'https://github.com/iamamrizejk/AWS/tree/main/AWS%20Pizza%20-%20Chatbot',
    linkedin: 'https://www.linkedin.com/posts/amrize-jk_aws-chatbot-ai-activity-7309144318588395520-sXfi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '📊',
    images: ['📊', '📈', '🤖', '📉']
  },
  {
    title: 'Multi-Cloud Data Transfer',
    description: 'A secure multi-cloud sync solution that transfers data between AWS S3 and Google Cloud Storage using identity federation, scheduled jobs, and selective manifest-based file syncing.',
    tags: ['AWS S3', 'Google Cloud Storage', 'Multi-Cloud', 'IAM', 'Cloud Storage Transfer', 'Automation'],
    github: 'https://github.com/iamamrizejk/AWS/tree/main/Multi%20Cloud%20Data%20Transfer%20with%20AWS%20and%20GCP',
    linkedin: 'https://www.linkedin.com/posts/amrize-jk_aws-googlecloud-multicloud-activity-7318453158626611202-0a2R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '📱',
    images: ['📱', '💬', '📅', '📸']
  },
  {
    title: 'Database Series',
    description: 'A practical exploration of AWS relational and NoSQL databases using Aurora and DynamoDB, covering connectivity, data loading, and querying.',
    tags: ['Amazon Aurora', 'DynamoDB', 'AWS RDS', 'EC2', 'SQL', 'NoSQL', 'Database Management', 'Cloud Databases'],
    github: 'https://github.com/iamamrizejk/AWS/tree/main/Database%20Series',
    linkedin: 'https://www.linkedin.com/posts/amrize-jk_aws-amazonrds-mysqlworkbench-activity-7277636711000485889-xm_T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '✅',
    images: ['✅', '📋', '👥', '⚡']
  },
  {
    title: 'Networking Series',
    description: 'A practical AWS networking series covering VPC setup, security, connectivity, peering, monitoring, and secure S3 access using endpoints.',
    tags: ['Amazon VPC', 'Subnets', 'Security Groups', 'VPC Peering', 'VPC Endpoints', 'AWS Cloud Networking'],
    github: 'https://github.com/iamamrizejk/AWS/tree/main/Networking%20Series',
    linkedin: 'https://www.linkedin.com/posts/amrize-jk_aws-cloudcomputing-networking-activity-7258513158577754116-yRZR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '☁️',
    images: ['☁️', '📡', '⚙️', '🔔']
  },
  {
    title: 'DevOps Series',
    description: 'An end-to-end AWS DevOps workflow automating builds, deployments, and CI/CD pipelines using CodeBuild, CodeDeploy, and CloudFormation.',
    tags: ['AWS CodePipeline', 'CodeBuild', 'CodeDeploy', 'CodeArtifact', 'CloudFormation', 'CI/CD', 'DevOps', 'Automation'],
    github: 'https://github.com/iamamrizejk/AWS/tree/main/DevOps%20Series',
    linkedin: 'https://www.linkedin.com/posts/amrize-jk_aws-devops-cloudcomputing-activity-7354446576276131840-no56?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9NX9sBgEKJ8FSjbMFRPfrYnoObeM8AAo8',
    thumbnail: '📚',
    images: ['📚', '🎓', '📹', '🏆']
  }
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-heading font-bold">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-6">
              {/* Image Carousel */}
              <div className="relative aspect-video bg-gradient-accent rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-9xl"
                  >
                    {selectedProject.images[currentImageIndex]}
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation Buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? 'bg-foreground w-8'
                              : 'bg-foreground/30'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2">About This Project</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  asChild
                >
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  asChild
                >
                  <a href={selectedProject.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn Post
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and contributions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                  onClick={() => handleProjectClick(project)}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-full flex flex-col"
                  >
                    {/* Project Thumbnail */}
                    <div className="relative aspect-video bg-gradient-accent rounded-t-xl flex items-center justify-center text-7xl overflow-hidden">
                      <span className="relative z-10">{project.thumbnail}</span>
                    </div>

                    {/* Project Title */}
                    <div className="p-6 flex-1 flex items-center justify-center">
                      <h3 className="text-xl font-heading font-bold text-center group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};