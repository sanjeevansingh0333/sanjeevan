
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-700">
              <img 
                src="https://i.postimg.cc/j2P6Fpzq/IMG-8908-2.jpg" 
                alt="Das Sanjeevan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              Backend Developer
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Das Sanjeevan
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              5+ years creating robust, scalable applications with Java/Spring Boot. 
              Delivering enterprise solutions that exceed expectations.
            </p>

            <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-8">
              <MapPin size={16} className="mr-2" />
              Kuala Lumpur, Malaysia
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-full font-medium"
                asChild
              >
                <a href="#portfolio">
                  View My Work
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
