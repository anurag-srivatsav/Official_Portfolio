import React, { useState, useEffect,useRef  } from 'react';
import { motion,useScroll, useTransform  } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Twitter, Mail, MapPin, Download, Code, Award, Briefcase, Coffee, Brain, PenTool as Tool, ExternalLink, MessageSquare,GraduationCap, CalendarDays, School,ArrowLeft, ArrowRight,Eye,Pencil,FileBadge,Rocket,Instagram,Globe ,Pen,Cloud,BarChart2   } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [metricsRef, metricsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

 const projects = [
  {
    title: 'Desktop AI Buddy',
    description: 'An intelligent desktop companion with voice command support, LLM-based conversations, and automated daily tasks.',
    tech: ['Python', 'PyQt5', 'LLM', 'SpeechRecognition', 'Selenium', 'Playwright'],
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1600&q=80',
    github: 'https://github.com/anurag-srivatsav/Desktop_AI',
    demo: 'https://neurodeskai.netlify.app/',
    metrics: {
      loc: '20,000+',
      tech: '10+'
    }
  },
  {
    title: 'MedVision AI',
    description: 'A smart medical app with ML-based image diagnosis and MedCam for real-time medicine identification.',
    tech: ['Python', 'OpenCV', 'Scikit-learn', 'GrabCut', 'Machine Learning'],
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQE8rSKuJ596vQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1716215401306?e=2147483647&v=beta&t=yoqjwiIpvOZtzyLgqldamkK4etpx7ir8ydtUf6yc2ec',
    github: 'https://github.com/anurag-srivatsav/medvision-ai',
    demo: 'https://your-demo-link.com/medvision',
    metrics: {
      loc: '18,000+',
      tech: '9'
    }
  },
  {
    title: 'SpeakTwin Voice Clone',
    description: 'AI-powered voice cloning app using LangChain, Hugging Face, PlayHT, and Google Gen-AI for real-time speech synthesis.',
    tech: ['Python', 'LangChain', 'Streamlit', 'PlayHT', 'Hugging Face'],
    image: 'https://play.ht/blog/wp-content/uploads/2024/08/what-is-an-ai-voice-generator.webp',
    github: 'https://github.com/anurag-srivatsav/speaktwin-voice-clone',
    demo: 'https://echoclone-ai.streamlit.app/',
    metrics: {
      loc: '12,000+',
      tech: '7'
    }
  },
  {
    title: 'Task Manager App',
    description: 'Web app built with Flask and MongoDB for adding tasks, tracking completion, and user authentication.',
    tech: ['Python', 'MongoDB', 'Flask', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80',
    github: 'https://github.com/anurag-srivatsav/task-manager-app',
    demo: 'https://your-demo-link.com/taskmanager',
    metrics: {
      loc: '8,500+',
      tech: '5'
    }
  },
  {
    title: 'Text to HTML Converter',
    description: 'Django-based tool that transforms plain text into HTML code — a productivity booster for web devs.',
    tech: ['Python', 'Django'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
    github: 'https://github.com/anurag-srivatsav/text-to-html-converter',
    demo: 'https://your-demo-link.com/html-converter',
    metrics: {
      loc: '6,000+',
      tech: '3'
    }
  },
  {
    title: 'Cat vs Dog Classifier',
    description: 'Image classification model using CNNs to accurately distinguish between cat and dog images.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    image: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2024/02/Cat-and-Dog-Classification-80.jpg',
    github: 'https://github.com/anurag-srivatsav/cat-dog-classifier',
    demo: 'https://your-demo-link.com/catdog',
    metrics: {
      loc: '10,000+',
      tech: '6'
    }
  },
  {
    title: 'Interactive AI Profile Bot',
    description: 'A chatbot that answers personalized queries about me using real-time responses and knowledge integration.',
    tech: ['Python', 'Streamlit', 'AI Chatbot'],
    image: 'https://anuragsrivatsav.netlify.app/SkillsPics/portfolioBot.jpg',
    github: 'https://github.com/anurag-srivatsav/ai-profile-bot',
    demo: 'https://anuragsportfolioassist.streamlit.app/',
    metrics: {
      loc: '9,000+',
      tech: '4'
    }
  },
  {
    title: 'The Infinite Narrative',
    description: 'Sci-fi storytelling experience exploring timelines, consciousness, and alternate realities in a web setting.',
    tech: ['Web Development', 'Storytelling'],
    image: 'https://anuragsrivatsav.netlify.app/storywebpage.webp',
    github: 'https://github.com/anurag-srivatsav/the-infinite-narrative',
    demo: 'https://mindbending.netlify.app/',
    metrics: {
      loc: '7,500+',
      tech: '3'
    }
  },
  {
    title: 'IGITA - Devine Gods Bot',
    description: 'iGita is the worlds first spiritual AI app blending ancient Indian Itihasas, slokas, and epics like the Ramayana into an interactive divine experience.',
    tech: ['Python', 'RAG', 'LLM', 'Bot Framework'],
    image: 'https://res.cloudinary.com/dvlgixtg8/image/upload/v1739350177/iGita-logo.png',
    github: 'https://github.com/anurag-srivatsav/igita-bot',
    demo: 'https://igita.netlify.app/home.html',
    metrics: {
      loc: '9,500+',
      tech: '5'
    }
  }
];

  const ProjectsCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Handle responsive card count
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCardsToShow(3);
      else if (width >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsToShow, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + cardsToShow, projects.length - cardsToShow)
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 disabled:opacity-30"
        >
          <ArrowLeft />
        </button>
        <h2 className="text-xl font-orbitron font-bold">Projects</h2>
        <button
          onClick={handleNext}
          disabled={currentIndex + cardsToShow >= projects.length}
          className="p-2 disabled:opacity-30"
        >
          <ArrowRight />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
        {projects.slice(currentIndex, currentIndex + cardsToShow).map((project, index) => (
          <motion.div
  key={project.title}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.2 }}
  whileHover={{ scale: 1.03 }}
  className="relative bg-white dark:bg-primary-dark rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group"
>
  {/* Glow behind card on hover */}
  <div className="absolute inset-0 z-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br from-accent-purple/30 to-accent-teal/30"></div>

  <div className="relative z-10">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
    />
    <div className="p-6">
      <h3 className="text-xl font-orbitron font-bold mb-3">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 dark:bg-primary text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-accent-purple hover:opacity-80"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-accent-purple hover:opacity-80"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      </div>
    </div>
  </div>
</motion.div>

        ))}
      </div>
    </div>
  );
};

 const certificates = [
  {
    title: 'Google Cloud Data Analytics Certificate',
    issuer: 'Google Cloud',
    image: 'https://res.cloudinary.com/dvlgixtg8/image/upload/v1718902525/zbeomxgkxnxeqtfb0ohr.png',
    link: "https://www.credly.com/badges/97a889b4-6069-4118-9b29-3f7de7a3cc23"
  },
  {
    title: 'Oracle Generative AI Certified Professional',
    issuer: 'Oracle',
    image: 'https://anuragsrivatsav.netlify.app/oci-removebg-preview.png',
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B10032C2F707BD514D547D772A9983B3BBAE0554318278F137B99606886BC7FC"
  },
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    image: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
   link: "https://learn.microsoft.com/en-us/users/anuragsrivatsav-6772/credentials/b42af8fa0151a887?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'TensorFlow',
    image: 'https://templates.images.credential.net/16589346213183572350230433330388.png',
    link: "https://www.credential.net/d81c83e2-673f-475f-a6dc-bf5ffafc81b7#gs.ak34mm"
  },
  {
    title: 'Oracle Certified Architect Associate',
    issuer: 'Oracle',
    image: 'https://images.credly.com/images/9819ade4-8c28-4f2e-8c19-eac82857b71f/1072-21_Oracle_Cloud_Infrastructure_Architect.png',
     link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B10032C2F707BD514D547D772A9983B33C5B29DDB470072B0A3CDB447E72BBE0"
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Coursera',
    image: 'https://images.credly.com/size/680x680/images/ea3eec65-ddad-4242-9c59-1defac0fa2d9/image.png',
    link: "https://www.credly.com/badges/2e2258c6-8d4b-4be0-ba97-8dfaea5f5116"
  },
  {
    title: 'Advanced Automation Certification Professional',
    issuer: 'Automation Anywhere',
    image: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/116606363',
   link: "https://certificates.automationanywhere.com/a02047c5-a380-4ebb-a15e-44da8fd0a097"
  },
  {
    title: 'CS50s Intro to Programming with Python',
    issuer: 'Harvard University',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png',
    link: "https://certificates.cs50.io/c54c3ae3-1816-42b1-b3db-316da4b49055.pdf"
  },
  {
    title: 'Alteryx Designer Core Certification',
    issuer: 'Alteryx',
    image: 'https://images.credly.com/size/680x680/images/14744318-8d6a-49c3-971d-6a4a0f524925/Certification_Designer_Core.png',
    link:'https://community.alteryx.com/t5/badges/userbadgespage/user-id/605893/page/1'
  },
  {
    title: 'No SQL - MongoDB',
    issuer: 'IBM',
    image: 'https://cdn-icons-png.freepik.com/512/5969/5969147.png',
    link: "https://courses.etrain.skillsnetwork.site/certificates/8a07367606c641cfa29e468a11de8179"
  },
   {
    title: 'Google_Cloud',
    issuer: 'Google',
    image: 'https://res.cloudinary.com/dvlgixtg8/image/upload/v1738738864/bhthtyglusmombge8a07.svg',
    link: "https://www.cloudskillsboost.google/public_profiles/af9d1c52-af78-4f77-8e27-47f02007a0d9"
  }
];


const techStack = {
  "Skills": [
    
    ]
};
const experiences = [
  {
    icon: Brain,
    title: 'Amazon ML Summer School',
    date: 'September 2023 - October 2023',
    points: [
      'Completed an intensive summer program on advanced ML techniques: CNNs, RNNs, transformers, and reinforcement learning.',
      'Collaborated with Amazon ML scientists on scalable model deployment and AWS tools.',
      'Contributed to research projects, exploring real-world ML pipelines.'
    ],
    proofLink: '#',
  },
  {
    icon: Cloud,
    title: 'Google Cloud Ready Facilitator',
    date: 'February 2022 - Present',
    points: [
      'Mastered BigQuery, ML APIs, AutoML, and Vertex AI through monthly and weekly challenges.',
      'Applied GCP tools in real-world projects to gain hands-on cloud innovation experience.'
    ],
    proofLink: '#',
  },
  {
    icon: Brain,
    title: 'AICTE Google Generative AI Virtual Internship',
    date: 'July 2024 - September 2024',
    points: [
      'Mastered LLMs, responsible AI, and prompt design using Vertex AI and Google Gemini.',
      'Built AI apps using Streamlit and enhanced skills in transformers, BERT, and MLOps.'
    ],
    proofLink: '#',
  },
  {
    icon: BarChart2,
    title: 'Alteryx Data Analytics Virtual Internship',
    date: 'July 2024 - September 2024',
    points: [
      'Mastered data wrangling, blending, and advanced analytics on the Alteryx platform.',
      'Developed end-to-end workflows and streamlined reporting & automation.'
    ],
    proofLink: '#',
  },
  {
    icon: Eye,
    title: 'AI ML Project with IIT Hyderabad & LV Prasad Eye Institute',
    date: 'July 2024 - December 2024',
    points: [
      'Developed AI tele-ophthalmology solution for vision correction and accessibility.',
      'Created deep learning models for eye tracking and remote vision care delivery.'
    ],
    proofLink: '#',
  },
];


  const services = [
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions for your specific business needs.',
      icon: Brain
    },
    {
      title: 'Chatbot Development',
      description: 'Intelligent conversational agents for customer service.',
      icon: MessageSquare
    },
    {
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation.',
      icon: Tool
    },
    {
  title: "Writer for Film & Franchises",
  description: "Creative screenwriter offering compelling stories for short films, feature films, and cinematic franchises. Ready to collaborate and bring your vision to life.",
  icon: Pencil // Use your preferred icon here (e.g., from lucide-react)
}

  ];




  const metrics = [
    { icon: Coffee, label: 'Coffee Consumed', value: '2,009+ cups' },
    { icon: Code, label: 'Lines of Code', value: '27,400+' },
    { icon: Brain, label: 'AI Agents Built', value: '25+' },
    { icon: Tool, label: 'Stories created', value: '50+' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-primary-dark/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-orbitron text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-teal bg-clip-text text-transparent">
            AS
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-primary hover:ring-2 ring-accent-purple transition-all"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-orbitron text-4xl md:text-5xl font-bold mb-6"
            >
              Hi, I'm Anurag Srivastav
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl font-montserrat text-accent-purple mb-6"
            >
              AI Developer & Frontend Engineer
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-gray-600 dark:text-gray-300 mb-8"
            >
              Passionate about creating intelligent solutions and beautiful user experiences. 
              Specializing in AI agent development and modern web applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 mb-8"
            >
              <a
  href="https://drive.google.com/file/d/1i6UtrrrkgXuvi5y2nqsXZXxnNZbmjAWN/view?usp=drive_link"  // replace with your actual PDF link
  target="_blank"
  rel="noopener noreferrer"
  download
>
  <button className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-teal text-white rounded-lg font-montserrat font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
    <Download className="w-5 h-5" />
    Download Resume
  </button>
</a>

            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex gap-4"
            >
              <a href="https://github.com/anurag-srivatsav" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/anuragsrivatsav/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              
              <a href="https://x.com/AnuragSrivatsa4" target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="mailto:anuragsrivatsav4@gmail.com" className="hover:text-accent-purple transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <span className="flex items-center gap-1 text-sm">
                <MapPin className="w-5 h-5" />
                India
              </span>
            </motion.div>
          </div>
          <div className="relative">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_M9p23l.json"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </motion.div>
      </section>


    
    
 

 {/* stats Section */}

      
  <section ref={ref} className="py-20 bg-gray-50 dark:bg-primary">
  <div className="container mx-auto px-6">

    {(() => {
      const stats = [
        { label: 'Projects', count: 22, icon: Briefcase },
        { label: 'Certificates', count: 15, icon: FileBadge },
        { label: 'Internships', count: 3, icon: GraduationCap },
        { label: 'Real-World Projects', count: 3, icon: Rocket },
      ];

      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                className="relative bg-white dark:bg-primary-dark rounded-2xl p-6 text-center shadow-xl border border-purple-200/30 dark:border-purple-500/20 overflow-hidden group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 z-0 rounded-2xl bg-purple-500 blur-2xl opacity-10 group-hover:opacity-30 transition duration-500"></div>

                <div className="relative z-10">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-accent-purple dark:text-accent-teal" />
                  <div className="text-4xl font-orbitron font-bold text-accent-purple dark:text-accent-teal mb-2">
                    <CountUp start={0} end={stat.count} duration={19} />
                    {['Projects', 'Internships', 'Certificates', 'Real-World Projects'].includes(stat.label) ? '+' : ''}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-montserrat tracking-wide text-lg">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      );
    })()}

  </div>
</section>


      {/* Portfolio Section */}
      <section ref={projectsRef} className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">Portfolio</h2>
           <div className="grid grid-cols-2 sm:flex justify-center gap-4 mb-12 px-4">
  {['projects', 'certificates', 'tech', 'services'].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`w-full sm:w-auto text-sm px-6 py-2 rounded-lg font-montserrat transition-all text-center ${
        activeTab === tab
          ? 'bg-accent-purple text-white'
          : 'bg-gray-100 dark:bg-primary text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-dark'
      }`}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  ))}
</div>




           {activeTab === 'projects' && <ProjectsCarousel projects={projects} />}


          {activeTab === 'certificates' && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-2 md:px-4">
    {certificates.map((cert, index) => (
      <motion.div
        key={cert.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03 }}
        className="relative bg-white dark:bg-primary-dark rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 group transition-all duration-300"

      >
        {/* Glow effect */}
       <div className="absolute inset-0 z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/40 to-blue-500/40 blur-lg pointer-events-none"></div>


        <div className="relative z-10">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-48 object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          />

          <div className="px-6 pb-6">
            <h3 className="text-lg font-orbitron font-bold mb-1 text-primary dark:text-white">
              {cert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {cert.issuer}
            </p>

            {/* View Button */}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-accent-purple hover:bg-accent-purple/80 transition rounded-full"
              >
                <Eye className="w-4 h-4" />
                View Certificate
              </a>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
)}


{activeTab === 'tech' && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="py-10 px-4 md:px-8"
  >
    <h3 className="text-2xl font-orbitron font-bold mb-10 text-center text-primary dark:text-white">
      Technology Stack
    </h3>

    <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
      {[
        { src: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg", alt: "arduino" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "aws" },
        { src: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg", alt: "azure" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg", alt: "bootstrap" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", alt: "c" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", alt: "css3" },
        { src: "https://cdn.worldvectorlogo.com/logos/django.svg", alt: "django" },
        { src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", alt: "firebase" },
        { src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", alt: "gcp" },
        { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "git" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", alt: "html5" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "javascript" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", alt: "linux" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", alt: "mongodb" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", alt: "mysql" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", alt: "nodejs" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg", alt: "oracle" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg", alt: "pandas" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "python" },
        { src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", alt: "pytorch" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "react" },
        { src: "https://reactnative.dev/img/header_logo.svg", alt: "reactnative" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", alt: "scikit_learn" },
        { src: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", alt: "seaborn" },
        { src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", alt: "tensorflow" },
    { src: "https://img.icons8.com/color/48/000000/bootstrap.png", alt: "Bootstrap"},
    { src: "https://img.icons8.com/color/48/000000/nodejs.png", alt: "NodeJS"},
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png", alt: "PowerBI"},
    { src: "https://res.cloudinary.com/dvlgixtg8/image/upload/v1718993408/pwjnxo5txf5ipy6psewz.png", alt: "R"},
      ].map((tech, index) => (
        <motion.img
          key={tech.alt}
          src={tech.src}
          alt={tech.alt}
          className="w-12 h-12 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.15 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.03 }}
        />
      ))}
    </div>
  </motion.div>
)}


            {activeTab === 'services' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-4 place-items-center">



                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                   <motion.div
  key={service.title}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.2, duration: 0.5 }}
  whileHover={{ scale: 1.03 }}
  className="relative rounded-2xl overflow-hidden bg-white dark:bg-primary-dark p-6 shadow-md border border-gray-200 dark:border-white/10 group transition-all duration-300"
>
  {/* Glow on hover */}
  <div className="absolute inset-0 z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 pointer-events-none"></div>

  {/* Main Content */}
  <div className="relative z-10">
    <Icon className="w-12 h-12 text-accent-purple mb-4 mx-auto group-hover:animate-pulse transition-transform duration-300" />

    <h3 className="text-lg font-orbitron font-bold mb-2 text-center text-gray-900 dark:text-white">
      {service.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
  </div>
</motion.div>

                  );
                })}
              </div>
            )}
          </motion.div>
        </div>






        
      </section>

    


        

     {/* About Section */}
<section className="py-20 bg-gradient-to-r from-accent-teal/10 to-accent-purple/10 dark:from-black dark:to-primary-dark/70  relative z-10">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      {/* Profile Image */}
      <div className="mb-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-60 h-60 mx-auto rounded-full border-4 border-purple-500 overflow-hidden shadow-2xl shadow-purple-500/30"
        >
          <img
            src="https://res.cloudinary.com/dvlgixtg8/image/upload/v1744353942/whsmpedzdjl63l4jpe7y.png" // Replace with your image path
            alt="Anurag Srivastav"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-orbitron font-bold mb-4 text-gray-800 dark:text-white"
      >
        About Me
      </motion.h2>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-600 dark:text-gray-300 mb-12"
      >
        I'm a passionate AI Developer and Frontend Engineer focused on building intelligent
        solutions with beautiful, intuitive interfaces. I bridge the gap between complex AI
        systems and user-friendly experiences.
      </motion.p>

      {/* Social Media Links */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="flex justify-center gap-6 mb-12"
>
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/anuragsrivatsav/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent-purple hover:text-accent-blue transition-transform transform hover:scale-110"
  >
    <Linkedin className="w-6 h-6" />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/anurag-srivatsav"
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent-purple hover:text-accent-blue transition-transform transform hover:scale-110"
  >
    <Github className="w-6 h-6" />
  </a>

  {/* Twitter */}
  <a
    href="https://x.com/AnuragSrivatsa4"
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent-purple hover:text-accent-blue transition-transform transform hover:scale-110"
  >
    <Twitter className="w-6 h-6" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/anuragsrivatsav4/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent-purple hover:text-accent-blue transition-transform transform hover:scale-110"
  >
    <Instagram className="w-6 h-6" />
  </a>

  {/* Website / Portfolio */}
<a
  href="https://anuragsrivatsav.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-accent-purple hover:text-accent-blue transition-transform transform hover:scale-110"
>
  <Globe className="w-6 h-6" />
</a>
</motion.div>


      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {[
          {
            title: 'AI Development',
            description: 'Creating intelligent systems and agents',
            icon: Brain,
          },
          {
            title: 'Frontend Engineering',
            description: 'Building beautiful user interfaces',
            icon: Code,
          },
          {
            title: 'Automation',
            description: 'Streamlining business processes',
            icon: Tool,
          }, {
      title: 'Movie Writing',
      description: 'Crafting stories for films and series',
      icon: Pen, // Add an appropriate icon (import Pen from Lucide or use another)
    },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/30 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-purple-400/30 transition-shadow duration-300 border border-purple-100 dark:border-purple-500/10"
            >
              <Icon className="w-12 h-12 mx-auto text-accent-purple mb-4" />
              <h3 className="text-lg font-orbitron font-semibold mb-2 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  </div>
</section>

  {/* Metrics Carousel with CountUp & Clean Glow */}
<section ref={metricsRef} className="py-20 bg-gradient-to-r from-accent-purple/10 to-accent-teal/30 dark:from-black dark:to-primary-dark/70 backdrop-blur-sm">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={metricsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {metrics.map((metric, index) => {
        const Icon = metric.icon;

        // Extract the number part for CountUp
        const numericValue = parseInt(metric.value.replace(/[^0-9]/g, ''), 10);
        const suffix = metric.value.replace(/[0-9,]/g, '');

        return (
          <motion.div
            key={metric.label}
            initial={{ scale: 0 }}
            animate={metricsInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
            className="group relative bg-white dark:bg-primary-dark rounded-xl p-6 text-center shadow-xl hover:shadow-2xl transition-shadow border border-purple-200/30 dark:border-purple-500/20"
          >
            {/* Subtle glow effect */}
            <div className="absolute inset-0 z-0 rounded-xl bg-purple-500 blur-2xl opacity-10 group-hover:opacity-30 transition duration-500"></div>

            <div className="relative z-10">
              <Icon className="w-12 h-12 mx-auto text-accent-purple dark:text-accent-teal mb-4 group-hover:scale-110 transition-transform duration-300" />
             <div className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl text-accent-purple dark:text-accent-teal mb-2">

                <CountUp start={0} end={numericValue} duration={15} />
                {suffix}
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-montserrat">
                {metric.label}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

{/* About Company Section */}
<section className="py-20 bg-gradient-to-r from-accent-teal/10 to-accent-purple/10 dark:from-black dark:to-primary-dark/70 backdrop-blur-sm">
<motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight font-orbitron  mb-6"

>
  <span className="text-accent-purple">Our</span>
  <span className="text-gray-800 dark:text-white ml-1">Company</span>
</motion.h1>

  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 items-center gap-12">
      {/* Left - AI GIF */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full flex justify-center"
      >
        <img
          src="https://res.cloudinary.com/dvlgixtg8/image/upload/v1744319313/k76kesipnf8w5d6y9faz.gif" // Replace with your preferred AI GIF link
          alt="AI Robot Animation"
          className="w-[80%] h-auto rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Right - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-gray-900 dark:text-white mb-6">
          About <span className="text-accent-purple">AspireX Labs</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 font-montserrat">
          At AspireX Labs, we blend AI with human insight to create intelligent solutions that elevate productivity, wellness, and creativity. From personalized AI assistants to futuristic healthcare tools, we're pushing boundaries to build the next generation of meaningful tech.
        </p>
        <a
          href="https://aspirexai.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-accent-purple text-white rounded-full text-sm hover:scale-105 transition-transform"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  </div>
</section>

{/* Flagship Projects Section */}
<section className="py-24 bg-gradient-to-br from-accent-purple/10 to-accent-teal/10 dark:from-primary-dark/50 dark:to-black backdrop-blur-md">
  <div className="container mx-auto px-6">
    
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl font-orbitron font-bold text-center text-gray-900 dark:text-white mb-20"
    >
      Our Company's Flagship Projects
    </motion.h2>

    {[
      {
        title: 'NeuroDesk : Meet Your Ultimate Desktop AI Personal Assistant',
        desc: 'An intelligent desktop companion with voice command support, LLM-based conversations, and automated daily tasks.',
        stats: { downloads: '75+', users: '90+', stars: '4.0★' },
        img: 'https://theacademic.com/wp-content/uploads/2024/10/312_article_pic.png',
        link: 'https://neurodeskai.netlify.app/',
      },
      {
        title: 'IGITA - Divine Gods AI',
        desc: 'The world\'s first spiritual AI app blending ancient Indian Itihasas, slokas, and epics like the Ramayana into an immersive experience.',
        stats: { downloads: '51+', users: '120+', stars: '4.1★' },
        img: 'https://www.securities.io/wp-content/uploads/2024/03/DALL%C2%B7E-2024-03-21-09.08.33-A-highly-detailed-and-realistic-image-showing-an-advanced-robot-seated-at-a-modern-sleek-desk-surrounded-by-multiple-screens-displaying-complex-algor.webp',
        link: 'https://igita.netlify.app/home.html',
      },
      {
        title: 'MedVision AI',
        desc: 'A smart medical assistant with ML-based image diagnosis, real-time MedCam scanner, and health tracking features.',
        stats: { downloads: '95+', users: '70+', stars: '4.7★' },
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/top-5-masters-programmes-in-robotics-and-ai-to-study-in-the-uk-251130433-16x9.jpg?VersionId=_HETADBSN4jYeyEzYu9TOpMlYfUILroz',
        link: 'https://sentimentsight.example.com',
      },
    ].map((proj, index) => (
      <motion.div
        key={proj.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.3 }}
        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-12 mb-24`}
      >
        {/* Image */}
        <div className="md:w-1/2 w-full overflow-hidden group rounded-3xl shadow-xl">
          <img
            src={proj.img}
            alt={proj.title}
            className="w-full h-auto rounded-3xl transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-accent-purple font-orbitron mb-4">
            {proj.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg font-montserrat mb-6 leading-relaxed">
            {proj.desc}
          </p>

          {/* Stats */}
          <div className="flex gap-6 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-accent-teal">{proj.stats.downloads}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Downloads</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent-teal">{proj.stats.users}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Users</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-accent-teal">{proj.stats.stars}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Rating</p>
            </div>
          </div>

          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-accent-purple text-white rounded-full text-sm hover:scale-105 transition-transform"
          >
            View Project
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>


    


      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-gray-50 dark:bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-orbitron font-bold mb-8 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-primary-dark rounded-xl p-8 shadow-lg">
                <form className="space-y-6" action="https://formsubmit.co/2110080013aids1@gmail.com"
            method="POST">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-primary focus:ring-2 ring-accent-purple outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-primary focus:ring-2 ring-accent-purple outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-primary focus:ring-2 ring-accent-purple outline-none transition-all"
                    ></textarea>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-teal text-white rounded-lg font-montserrat font-medium hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-accent-purple" />
                  <div>
                    <h3 className="font-orbitron font-bold mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-8 h-8 text-accent-purple" />
                  <div>
                    <h3 className="font-orbitron font-bold mb-1">Email</h3>
                    <a
                      href="igita4u@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-accent-purple transition-colors"
                    >
                      igita4u@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Briefcase className="w-8 h-8 text-accent-purple" />
                  <div>
                    <h3 className="font-orbitron font-bold mb-1">Work Inquiries</h3>
                    <p className="text-gray-600 dark:text-gray-300">Open for Providing AI Services</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

       <footer className="bg-white dark:bg-primary-dark py-8 border-t border-gray-200 dark:border-gray-700 mt-16">
  <div className="container mx-auto px-6 text-center">
    <h3 className="text-2xl font-bold font-orbitron mb-4 text-gray-800 dark:text-white">
      <span className="text-accent-purple">Anurag</span> Srivastav
    </h3>

    {/* First Row - Social Icons */}
    <div className="flex justify-center flex-wrap gap-6 mb-4">
      <a href="https://github.com/anurag-srivatsav" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-accent-purple transition">
        <Github className="w-5 h-5" />
      </a>
      <a href="https://www.linkedin.com/in/anuragsrivatsav/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-accent-purple transition">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="https://x.com/AnuragSrivatsa4" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-accent-purple transition">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="mailto:anuragsrivatsav4@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-accent-purple transition">
        <Mail className="w-5 h-5" />
      </a>
      <a href="https://anuragsrivatsav.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-accent-purple transition">
        <Globe className="w-5 h-5" />
      </a>
    </div>

    {/* Second Row - Image Icons */}
    <div className="flex justify-center gap-6 mb-4">
      <a href="https://huggingface.co/yourusername" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.brandfetch.io/idGqKHD5xE/theme/dark/symbol.svg?k=bfHSJFAPEG" alt="Hugging Face" className="h-10" />
      </a>
      <a href="https://www.credly.com/users/anurag-srivatsav" target="_blank" rel="noopener noreferrer">
        <img src="https://www.svgrepo.com/show/331358/credly.svg" alt="Credly" className="h-10" />
      </a>
      <a href="https://www.credential.net/profile/anuragsrivastavthammera403031/wallet#gs.f8ewcq" target="_blank" rel="noopener noreferrer">
        <img src="https://accredible_temp_credential_images.s3-external-1.amazonaws.com/167085724576703620544817900388.png?cb=1670857323460" alt="Accredible" className="h-10" />
      </a>
      <a href="https://anuragsrivatsav.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img src="https://anuragsrivatsav.netlify.app/footer.ico" alt="mywebsite" className="h-10" />
      </a>
       <a href="https://igita.netlify.app/home.html" target="_blank" rel="noopener noreferrer">
        <img src="https://igita.netlify.app/iGita-logo.png" alt="iGita" className="h-10" />
      </a>
    </div>

   

    <p className="text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Anurag Srivastav. All rights reserved.
    </p>
  </div>
</footer>


      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 p-3 bg-accent-purple rounded-full shadow-lg hover:opacity-90 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Floating Chatbot (Bottom Left) */}
<div>
  {/* Floating Chatbot Toggle Button */}
  <button
    id="chatToggleButton"
    onClick={() => {
      const chatbot = document.getElementById('chatIframeBox');
      const toggleButton = document.getElementById('chatToggleButton');
      chatbot.classList.remove('translate-x-full');
      toggleButton.classList.add('hidden');
    }}
    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 flex items-center justify-center hover:opacity-90 transition-all z-50"
  >
    <img
      src="https://res.cloudinary.com/dvlgixtg8/image/upload/v1728584478/Robo-active.png"
      alt="Chat"
      className="w-20 h-15  object-cover transition-transform duration-300 hover:scale-110 hover:rotate-6"
    />
  </button>

  {/* Chatbot Sidebar */}
  <div
    id="chatIframeBox"
    className="fixed bottom-0 right-0 w-full sm:w-[90%] md:w-[400px] h-[80vh] sm:h-[85vh] md:h-[85vh] rounded-l-2xl sm:rounded-l-xl overflow-hidden shadow-xl border-l-4 border-accent-purple bg-white dark:bg-primary-dark transform translate-x-full transition-transform duration-500 z-40"
  >
    {/* Header with Bot Image + Text + Close */}
    <div className="flex items-center justify-between bg-accent-purple text-white px-4 py-3 text-lg font-semibold">
      <div className="flex items-center space-x-2">
        <img
          src="https://res.cloudinary.com/dvlgixtg8/image/upload/v1728584478/Robo-active.png"
          alt="Bot Icon"
          className="w-6 h-10 rounded-full object-cover"
        />
        <span className="tracking-wide">Bot</span>
      </div>
      <button
        onClick={() => {
          const chatbot = document.getElementById('chatIframeBox');
          const toggleButton = document.getElementById('chatToggleButton');
          chatbot.classList.add('translate-x-full');
          toggleButton.classList.remove('hidden');
        }}
        className="text-white hover:opacity-80 text-2xl font-bold"
        aria-label="Close Chatbot"
      >
        ✕
      </button>
    </div>

    {/* Chat Iframe */}
    <iframe
      src="https://anurag04-portfoliobot.hf.space"
      title="Chatbot"
      className="w-full h-full border-none"
    ></iframe>
  </div>
</div>




    </div>
  );
}

export default App;
