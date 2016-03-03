if(Resume.find({}).count() === 0){
      Resume.insert({
      	category: 'education',
      	completed: 'May 2012',
      	school: 'University of Texas at Dallas',
      	location: 'Richardson, Texas',
      	degree: 'Bachelor of Science',
      	specialty: 'Software Engineering',
      	wowDelay: '.1s',
      	display: ''
      });
      Resume.insert({
      	category: 'work',
      	from: '07/2012',
      	to: '07/2014',
      	role: 'Associate Software Engineer',
      	company: 'Fidelity Investments',
      	location: 'Westlake, TX ',
      	projects: ['FundRef', 'DAL', 'SDS', 'CAR', 'SWAP'],
      	environment: ['Windows', 'Linux', 'Java/J2EE', 'HTML', 'JavaScript', 'JQuery', 'AJAX', 'CSS', 'XML/XSD', 'XSLT', 'Shell Scripting', 'Oracle 11g', 'Oracle SQL Developer', 'PL/SQL', 'JDBC', 'iBatis', 'Agile', 'TDD ', 'Selenium', 'Spring MVC', 'REST', 'SOAP', 'SOA', 'OO', 'SVN', 'Bamboo', 'Sonar', 'FishEye/Crucible', 'Ant', 'Eclipse', 'SpringSource', 'Tomcat', 'WinSCP', 'Putty', 'JUnit', 'SoapUI', 'Selenium', 'JIRA', 'HP Quality Center', 'HP Service Manager', 'MS PowerPoint/Word/Excel', 'SharePoint'],
      	wowDelay: '.2s',
      	imgUrl: 'http://i.imgur.com/dR0mBcN.png',
      	highlights: ['Automated test data generation by incorporating real time data through Java code thus reducing testing timeframe and the number of code, scripts, and manual inputs required',
                        'Developed code using JUnits and a Test Driven Development perspective',
                        'Enhanced web applications using JavaScript and AJAX to improve features being used by internal customers resulting in faster performance and better user experience',
                        'Migrated test cases originally written in MS Excel to HP Quality Center, resulting in better usability',
                        'Interfaced with quality assurance team to develop a testing tool using Selenium and Junit testing frameworks, used by both quality assurance and development team for extensive testing',
                        'Identified issues with deployment process, learned and implemented UNIX shell scripts to automate deployment process in application environments to reduce deployment errors and overall execution time',
                        'Led daily meetings as Agile Scrum master between business and development teams to track project progress and address blockers to ensure project deadlines were met',
                        'Primary contact and subject matter expert for vendor orchestration tool IPP and Jasper reports',
                        'Led efforts in integrating with vendor-developed IRA to connect to systems for automating data setup, effectively reducing manual setup process from weeks to minutes',
                        'Developed provisioning user interface using HTML, JavaScript, Spring MVC, which became basis for automated data setup functionality',
                        'Mentored and managed a team of LEAP associates working on business sponsored initiative',
                        'Wrote and published technical application installation/configuration guides on Wiki and SharePoint to educate development team as well as customers on various tools and functionality',
                        'Identified business problem and worked with associates to develop an efficient dashboard solution end to end',
                        'Familiarized with company standard programming paradigms, languages, culture',
                        'Designed solutions using data centric technologies',
                        'Incorporated Agile, analysis, design, development, testing, and software application support']
      });
      Resume.insert({
      	category: 'work',
      	from: '08/2014',
      	to: '08/2015',
      	role: 'Software Engineer',
      	company: 'Fidelity Investments',
      	location: 'Westlake, TX ',
      	projects: ['DAL SDS', 'FEAS', 'IRA', 'FundRef'],
      	environment: ['Windows', 'Linux', 'Java/J2EE', 'HTML', 'JavaScript', 'JQuery', 'AJAX', 'CSS', 'XML/XSD', 'XSLT', 'Shell Scripting', 'Oracle 11g', 'Oracle SQL Developer', 'PL/SQL', 'JDBC', 'iBatis', 'MyBatis', 'Agile', 'TDD ', 'Selenium', 'Spring MVC', 'REST', 'SOAP', 'SOA', 'OO', 'SVN', 'Bamboo', 'Sonar', 'FishEye/Crucible', 'Ant', 'Maven', 'SpringSource', 'Tomcat', 'WinSCP', 'Putty', 'JUnit', 'SoapUI', 'Postman', 'Selenium', 'JIRA', 'HP Quality Center', 'HP Operations Orchestration', 'HP Service Manager', 'MS PowerPoint/Word/Excel', 'SharePoint'],
      	wowDelay: '.3s',
      	imgUrl: 'http://i.imgur.com/dR0mBcN.png',
      	highlights: ['Facilitated quarterly release using SAFe framework through collaborating with architecture leads', 
      				  'Owned vendor product adoption, became subject matter expert and supported clients',
                        'Led  multiple Spring MVC projects, interfaced with global project teams to ensure on time deliverables',
                        'Experienced in analyzing and completing Java, HTML, JavaScript code stubs written by senior developers',
                        'Led efforts during multiple application site migrations, performed UNIX configurations and supported clients',
                        'Documented user stories In JIRA and created developer tasks',
                        'Performed code reviews through FishEye/Crucible for developers to improve quality and efficiency',
                        'Reviewed change requests and collaborated with development teams to prioritize backlogs for releases',
                        'Piloted disaster recovery automation efforts, utilized HP Operations Orchestration studio to create release engineering  processes to minimize manual inputs and reduce resources on call',
                        'Supported multiple projects in testing, development, and maintaining deliverables',
                        'Developed web services using both REST and SOAP to support DAL SDS application, implemented SOA APIs',
                        'Tested web services using both SoapUI as well as Postman',
                        'Wrote JUnits and refactored to improve Sonar nightly build reports',
                        'Worked with quality assurance team to document and prioritize defects documented in HP Quality Center',
                        'Created user interfaces for new functionality for legacy projects using HTML, JavaScript, JQuery, MVC',
                        'Managed branching and merging of project source code in SVN to align with quarterly project releases',
                        'Supported multiple applications through HP Service Manager, handling incident requests in a timely manner',
                        'Documented vendor product setup steps as well as testing procedures through SoapUI and HermesJMS',
                        'Developed user interfaces for FundRef application, modifying form elements from screen to screen',
                        'Developed middle tier for FundRef application, modifying XML bindings between domain and XSD objects']
      });
      Resume.insert({
      	category: 'work',
      	from: '08/2015',
      	to: 'Present',
      	role: 'Software Engineer',
      	company: 'Spireon Inc.',
      	location: 'Irving, TX ',
      	projects: ['Nspire Admin', 'Procon Server', 'Procon Core'],
      	environment: ['Mac OS', 'Linux', 'M2M', 'Groovy', 'Grails', 'Elastic Search', 'CXF', 'HTML', 'JavaScript', 'JQuery', 'AJAX', 'CSS', 'XML', 'MySQL', 'Agile', 'TDD', 'Spring MVC', 'REST', 'SOAP', 'OO', 'GIT', 'Bamboo', 'Cobertura', 'Nexus', 'Maven', 'Tomcat', 'Spock', 'JUnit', 'SoapUI', 'Postman', 'JIRA', 'Pivotal', 'MS PowerPoint/Word/Excel', 'Confluence Wiki'],
      	wowDelay: '.4s',
      	imgUrl: 'http://i.imgur.com/k5TjDGY.png',
      	highlights: ['Migrated legacy code from previous code base, adhering to new coding standards and best practices',
                        'Designed, developed, unit tested, and debugged application features as specified',
                        'Supported development initiatives to enhance the core technology and improve customer experiences',
                        'Traveled to California on multiple occasions to participate in scaled agile (SAFe) planning sessions',
                        'Collaborated with core platform team to design architecture for new features',
                        'Created scripts as workarounds to current application logic gaps',
                        'Documented personal notes whenever possible, updating dev and onboarding guides', 
                        'Created scripts for quicker testing, documented so that QA team members could easily reuse',
                        'Dealt with shifting priorities, worked around resource gaps',
                        'Worked with major carriers to setup m2m services, upgrade APIs, and troubleshoot customer issues',
                        'Designed and developed audit capabilities for carrier service integrations',
                        'Presented on multiple occasions including functional demos to upper management',
                        'Participated in product backlog grooming sessions, including story estimations, tasking, and discussions',
                        'Leveraged acquired technology knowledge to implement product solutions',
                        'Led carrier integration efforts to upgrade carrier APIs and troubleshoot connectivity issues',
                        'Supported other developers whenever possible, including code reviews, swarming, and presentations'
                        ]
      });
      Resume.insert({
      	category: 'qualificationHighlights',
      	highlights: ['5+ years of java development experience using agile methodology',
      	                'Able to build complex solutions on time while working with offsite teams',
      	                'Experience in working on multiple projects, managing time and resources effectively',
      	                'Excellent problem-solver, able to quickly grasp complex systems and identify opportunities for improvements and resolution of critical issues',
      	                'Strong technical and interactive communication skills able to express point of view as well as collaborate and listen',
      	                'Excellent collaboration skills',
      	                'Client-focused, interested in working with technology to solve business problems',
      	                'Quick learner and exceptionally hardworking at every task pursued',
      	                'Flexible and capable of performing well on team-oriented tasks and meeting deadlines',
      	                'Effective leadership skills with respect to influencing team members and delegating abilities',
      	                'Able to adapt and be successful in handling multiple responsibilities and roles in high-stress environments',
      	                'Experienced with working on distributed and N-Tier architecture'
                            ]
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'Languages',
            skills: ['Java/J2EE',
                        'Groovy',
                        'HTML5',
                        'CSS3',
                        'JavaScript',
                        'JSON',
                        'AJAX',
                        'XML/XSD',
                        'XSLT',
                        'Shell Scripting',
                        'Python',
                        'GORM',]
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'Databases',
            skills: ['Oracle 11g',
                        'MySql',
                        'Redis',
                        'ElasticSearch',
                        'MongoDB',
                        'SQL Server',
                        'Oracle SQL Developer',
                        'PL/SQL',
                        'JDBC',
                        'MyBatis']
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'Front End',
            skills: ['JQuery',
                        'AJAX',
                        'Bootstrap',
                        'Blaze',
                        'Handlebars',
                        'NPM',
                        'Bower']
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'Frameworks',
            skills: ['Grails',
                        'Agile',
                        'Angular',
                        'TDD ',
                        'Selenium',
                        'Spring MVC',
                        'SOAP',
                        'REST',
                        'SOA',
                        'OO',
                        'SAFe',
                        'Hibernate',
                        'Struts',
                        'Mean.IO',
                        'CXF',
                        'M2M']
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'Build Tools',
            skills: ['Bamboo',
                        'Cobertura',
                        'Jenkins',
                        'Sonar',
                        'FishEye/Crucible',
                        'Ant',
                        'Maven',
                        'Gradle']
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'Testing',
            skills:  ['JUnit',
                        'Spock',
                        'SoapUI',
                        'Postman',
                        'HermesJMS',
                        'Selenium',
                        'Firebug']
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'General Tools',
            skills: ['JIRA',
                        'HP Quality Center',
                        'HP Operations Orchestration',
                        'HP Service Manager',
                        'MS PowerPoint/Word/Excel',
                        'SharePoint',
                        'Confluence Wiki',
                        'WinSCP',
                        'Putty']
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'Source Control',
            skills: ['GIT',
                        'SVN',
                        'Nexus']
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'IDEs',
            skills: ['IntelliJ',
                        'Eclipse',
                        'SpringSource']
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'Server',
            skills: ['Tomcat',
                        'Node',
                        'Meteor']
      });
      Resume.insert({
            category: 'technicalSkills',
            skillCategory: 'Operating Systems',
            skills: ['Windows',    
                        'Mac OS']
      });
      Resume.insert({
            category: 'technicalSkillCategories',
            categories: ['Languages', 
                        'Databases', 
                        'Frameworks',
                        'General Tools', 
                        'Front End', 
                        'Source Control', 
                        'Build Tools', 
                        'IDEs', 
                        'Server', 
                        'Testing',                   
                        'Operating Systems']
      });
}

