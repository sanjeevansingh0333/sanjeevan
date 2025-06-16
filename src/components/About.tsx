
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                Experienced Backend Developer
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  With over 5 years of hands-on experience in backend development, I specialize in 
                  creating robust, scalable applications using Java and Spring Boot. My journey has 
                  taken me from developing IoT solutions to managing enterprise systems handling 
                  millions of users daily.
                </p>
                <p>
                  I'm passionate about clean code, system architecture, and delivering solutions 
                  that exceed client expectations. My experience spans across various industries, 
                  from telecommunications to enterprise software, always with a focus on quality 
                  and performance.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                      B.Sc. Computer Science
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      BSAITM, MDU University
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-2" />
                      Graduated August 2020
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
