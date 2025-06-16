
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java (SE/EE)", "J2EE", "SQL"]
    },
    {
      title: "Frameworks", 
      skills: ["Spring Boot", "Spring MVC", "Spring REST", "Hibernate", "JDBC"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Azure (AKS, App Services)", "Docker", "Kubernetes", "Jenkins CI/CD"]
    },
    {
      title: "Messaging & APIs",
      skills: ["Apache Kafka", "Microsoft Graph API", "REST APIs"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3"]
    },
    {
      title: "Database",
      skills: ["MySQL", "Hibernate ORM"]
    },
    {
      title: "Tools",
      skills: ["STS", "Eclipse", "VS Code", "Postman", "DBeaver"]
    },
    {
      title: "Methodologies",
      skills: ["Scrum", "Kanban", "Git", "Agile"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-4">Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="bg-white dark:bg-gray-700 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
