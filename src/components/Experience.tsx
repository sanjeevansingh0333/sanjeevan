
import { Card, CardContent } from '@/components/ui/card';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "IT Analyst",
      company: "TCS Kuala Lumpur",
      period: "Sep 2024 – Present",
      description: "SME for Sales Partner Portal (Enterprise business)",
      highlights: [
        "Portal handles enterprise business with thousands of transactions daily",
        "Led integration of Celcom and Digi customers onto a unified platform after the Dec 2022 merger, supporting 22 million active lines"
      ]
    },
    {
      title: "System Engineer",
      company: "TCS Kuala Lumpur", 
      period: "Jul 2022 – Aug 2024",
      description: "SME for Celcom Dealer & Inventory Management Systems",
      highlights: [
        "Cross-functional collaboration with multiple teams",
        "Delivered high-quality solutions consistently"
      ]
    },
    {
      title: "System Engineer",
      company: "TCS Ahmedabad",
      period: "Jan 2021 – Jun 2022", 
      description: "Developed Dealer & Inventory systems with Java/Spring",
      highlights: [
        "Active participation in Agile ceremonies & sprint planning",
        "Built scalable backend solutions using Spring Boot"
      ]
    },
    {
      title: "Assistant System Engineer",
      company: "TCS Ahmedabad",
      period: "Jan 2020 – Jan 2021",
      description: "Backend integration for IoT Car Tracker (Vodafone Idea)",
      highlights: [
        "Developed IoT integration solutions",
        "Worked with real-time data processing systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                          <Building className="text-blue-600 dark:text-blue-400" size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:w-1/3">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
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

export default Experience;
