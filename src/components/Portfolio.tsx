
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "Celcom Dealer Management System",
      description: "Enterprise-grade dealer management system handling thousands of daily transactions with improved operational efficiency.",
      techStack: ["Java", "Spring Boot", "MySQL", "Azure"],
      role: "Subject Matter Expert (SME)"
    },
    {
      title: "Celcom Sales Partner Portal", 
      description: "Unified sales platform supporting 22M+ active lines with CI/CD pipelines for rapid deployment.",
      techStack: ["Java", "Spring Boot", "Jenkins", "Docker", "Kubernetes"],
      role: "Subject Matter Expert (SME)"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">Portfolio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                      {project.role}
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-full">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
