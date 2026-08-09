import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Zaldy Jeg Piraman",
  title: "Hi all, I'm Zaldy",
  description:
   `I'm a Software Engineer and Full-Stack Web Developer with 10+ years of experience building enterprise web applications using C#, ASP.NET Core, Web API, Angular, and SQL Server. I specialize in developing scalable web applications, RESTful APIs, and cloud-based solutions, with experience across healthcare, finance, and e-commerce. I also leverage AI-assisted development tools like GitHub Copilot, Claude, and ChatGPT to improve productivity, code quality, and software delivery`,
  resumeLink:
    "https://www.dropbox.com/scl/fi/cecewfctf1095bgv1o07n/Zaldy-Jeg-Piraman-Resume.pdf?rlkey=e5hqi12nv3zl2xezf9yrwxc7m&st=ch2ygr00&dl=0",
};

export const openSource = {
  githubUserName: "zaldyjegpiraman",
};

export const contact = {};
export const socialLinks: SocialLinksType = {
  google: "https://mail.google.com/mail/u/?authuser=zaldyjeg.piraman@gmail.com",
  twitter: "https://twitter.com/JegZaldy",
  github: "https://github.com/zaldyjegpiraman",
  linkedin: "https://www.linkedin.com/in/zaldy-jeg-piraman",
};


export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
 skills: [
  "⚡ 10+ years building enterprise web applications with ASP.NET Core/MVC, C#, Angular, and TypeScript",
  "⚡ Designing and developing secure RESTful APIs using ASP.NET Core Web API, Entity Framework Core, and SQL Server",
  "⚡ Building scalable enterprise solutions with Azure, Git, CI/CD pipelines, and third-party integrations",
  "⚡ Developing complex business applications using DevExpress, Hangfire, Google APIs, Microsoft Graph API, and PayPal REST API",
  "⚡ Leveraging AI-assisted development tools (GitHub Copilot, Claude, ChatGPT) for faster development, code generation, debugging, testing, documentation, and productivity"
],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

// export const SkillBars: SkillBarsType[] = [
//   {
//     Stack: "Frontend/Design", //Insert stack or technology you have experience in
//     progressPercentage: "85", //Insert relative proficiency in percentage
//   },
//   {
//     Stack: "Backend",
//     progressPercentage: "90",
//   },
//   {
//     Stack: "Programming",
//     progressPercentage: "95",
//   },
// ];



export const SkillBars: SkillBarsType[] =[
  {
    Stack: "Asp.Net MVC", //Insert stack or technology you have experience in
    progressPercentage: "100", //Insert relative proficiency in percentage
  },
  {
    Stack: "Asp.Net Core",
    progressPercentage: "100",
  },
  {
    Stack: "Asp.Net Web Forms",
    progressPercentage: "60",
  },
  {
    Stack: "C#",
    progressPercentage: "100",
  },
  {
    Stack: "Entity Framework 6.0",
    progressPercentage: "100",
  },
  {
    Stack: "HTML5",
    progressPercentage: "100",
  },
  {
    Stack: "CSS3",
    progressPercentage: "100",
  },
  {
    Stack: "JavaScript",
    progressPercentage: "100",
  },
  {
    Stack: "Bootstrap 3",
    progressPercentage: "100",
  },
  {
    Stack: "JQuery",
    progressPercentage: "100",
  },
  {
    Stack: "AJAX",
    progressPercentage: "100",
  },
  {
    Stack: "Web API",
    progressPercentage: "100",
  },
  {
    Stack: "MSSQL Database",
    progressPercentage: "100",
  },
  {
    Stack: "WORDPRESS",
    progressPercentage: "60",
  },
  {
    Stack: "Angular",
    progressPercentage: "100",
  },
    {
    Stack: "Azure DevOps",
    progressPercentage: "100",
  },
      {
    Stack: "GitHub Copilot",
    progressPercentage: "100",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience : ExperienceType[] =[
  {
    role: "System Analyst / Programmer",
    company: "ICare (Insular Health Care)",
    companyLogo: "/img/icons/common/icare1.jpg",
    date: "Sep 2024 – May 2025",
    desc: "As a Systems Analyst at Insular iCare, I develop and maintain the Magenta Wellness System using C#, ASP.NET Core/MVC, Web API, Angular, and SQL Server. I build new features, enhance enterprise modules, optimize database performance, integrate business processes, resolve production issues, and ensure secure, reliable, and scalable healthcare applications for administrators, clients, and members.",
  },
  {
    role: "Full Stack Web Developer",
    company: "Sourcepass, Inc.",
    companyLogo: "/img/icons/common/sourcepass2.png",
    date: "Aug 2024 – May 2025",
    desc: "As a Full Stack Web Developer at Sourcepass, I was responsible for developing, maintaining, and enhancing the Phortress web application, an enterprise B2B e-commerce platform serving contractors and government organizations in procuring military and defense-related parts. My role included designing and implementing new features, optimizing application performance, developing secure and scalable solutions, integrating third-party services, resolving production issues, and ensuring the platform's reliability, security, and overall user experience while supporting critical business operations.",
  },
  {
    role: "Programmer Analyst at Metrobank",
    company: "Vertere Global Solutions, Inc.",
    companyLogo: "/img/icons/common/vertere.png",
    date: "Nov 2022 – Apr 2024",
    desc: "As a Programmer Analyst at Metrobank, I was responsible for developing, maintaining, and enhancing backend services and enterprise banking applications. I worked on the RFE (Remittance File Exchange) system, a C#/.NET application that processes and converts SWIFT files into the XGate format to support secure and efficient remittance operations. My responsibilities included designing and optimizing backend services, managing and tuning SQL Server databases, implementing system enhancements, integrating new technologies, resolving production issues, and ensuring the reliability, performance, and security of mission-critical banking systems.",
  },
  {
    role: "Junior Developer",
    company: "Yempo Inc.",
    companyLogo: "/img/icons/common/yempo2.png",
    date: "Aug 2019 – Sept 2019",
    desc: "As a Junior Developer, I contributed to the AEL Web App, an Asset Management platform developed in ASP.NET MVC. AEL features a distinctive and robust system designed to enhance business management and distinguish itself from competitors. My responsibilities included troubleshooting various issues and developing code to integrate AEL with the LOC8 API.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "IT Engineer",
    company: "Gulf Networks Security Solution",
    companyLogo: "/img/icons/common/gulfnetworks.jpg",
    date: "Feb 2017 - Aug 2018",
    desc: "As a System Administrator and Full Stack Web Developer, I developed and maintained business web applications, including a WordPress e-commerce website and an ASP.NET Core online survey system. Alongside software development, I managed IT infrastructure by administering servers, networks, workstations, and security systems, while providing technical support, software deployment, system configuration, and troubleshooting to ensure reliable and efficient business operations.",
  },
  {
    role: "Freelance Programmer",
    company: "Cybersoft Content Services Inc.",
    companyLogo: "/img/icons/common/cyber.png",
    date: "May 2016 - Jan 2017",
    desc: "As a Freelance Programmer, I developed Data Mining applications and contributed to the design of the CATS Web Application. My responsibilities included creating a Web Document Viewer capable of displaying various document formats, including PDF, TIFF, JPG, PNG, Text, Word, Excel, PowerPoint, DBF, and XML files. Additionally, I enabled Cybersoft clients to view document statuses and add comments.",
  },
  {
    role: "Software Engineer III",
    company: "PCM Inc.",
    companyLogo: "/img/icons/common/pcm.png",
    date: "Jul 2015 - May 2016",
    desc: "As a Software Engineer, I maintained and enhanced the Opstrack e-Procurement System, ensuring its conversion to a mobile-responsive design. The system, developed in ASP.NET Web Forms with a combination of C# and VB code, is integrated with an MSSQL Database",
  },
  {
    role: "System Developer",
    company: "Wellcom Telecom Supermarket",
    companyLogo: "/img/icons/common/wellcom.jpg",
    date: "Nov 2014 - Jul 2015",
    desc: "As a System Developer, I maintained the Dashboard Web Application, developed a new version of the Sales Performance Web Application using ASP.NET Core, and created a Data Collector Web Application to facilitate the migration of data from the old ERP system to Microsoft Navision.",
  },
  {
    role: "System Developer",
    company: "Cybersoft Content Services Inc.",
    companyLogo: "/img/icons/common/cyber.png",
    date: "Mar 2011 - May 2014",
    desc: "As a System Developer, I created a range of applications including a Data Mining Application, an OCR Application, an Image/Document Converter, and a Productivity Tool. Additionally, I maintained several legacy applications developed in Visual FoxPro and DOS.",
  },
];


export const projects: ProjectType[] = [
  {
    name: "Zaldy's E-Commerce Web Application",
    desc: "An electronic e-commerce store developed using ASP.NET MVC, with an MSSQL Database, hosted on an Amazon EC2 instance.",
    github: "https://github.com/ZaldyJegPiraman/AspMVCECommerce.git",
    link: "http://zaldysecommerce.cloudns.ph/",
    video: "https://bit.ly/3Plxh61",
  },
  {
    name: "Metrobank RFE Application (Remittance File Extractor)",
    desc: "A remittance application developed in C#.NET, featuring comprehensive reporting, a robust database, integration with various services, and support for multiple clients.",
    image:
      "https://www.dropbox.com/scl/fi/allu07gyppwcymj1gegzo/RFE.jpg.png?rlkey=uisnow61sl9p0a2i4hdcwynkd&st=ulfy07hh&dl=0",
  },
  {
    name: "Gulfnetworks CVS Application (Online Survey Application)",
    desc: "A survey application developed in ASP.NET Core and hosted on Microsoft Azure. This application features reporting capabilities, customer account management, and supports multiple clients.",
    image:
      "https://www.dropbox.com/sh/bmsps6rap3vegqu/AACpQFotshu5uNC1dT6fAS8ia?dl=0",
  },
  {
    name: "Gulfnetworks E-Commerce",
    desc: "An electronic e-commerce store developed in WordPress, allowing customers to search for and view products, as well as request quotations",
    image:
      "https://www.dropbox.com/sh/0ho9htvvdi5594s/AABgURhsJtFaX0ZvCPIfO6AEa?dl=0",
  },
  {
    name: "Cybersoft CATS Web Application",
    desc: "A Collaborative Activity Tracking System developed in ASP.NET MVC. This application enables customers to view documents completed by the Cybersoft production team and provides functionality for clients to add comments if any issues are found with the completed documents.",
    // github: "https://github.com/1hanzla100",
    image:
      "https://www.dropbox.com/sh/zwpyc4vt6s57q8e/AADcCO75d6lckhC7h6tTNh7Za?dl=0",
  },
  {
    name: "Cybersoft Application's",
    desc: "It is a suite of applications designed for document classification. The Cybersoft Document Collector organizes and stores documents from various sources, including CDs, cloud drives, local drives, and OCR applications that extract text from images.",
    // github: "https://github.com/1hanzla100",
    image:
      "https://www.dropbox.com/sh/pek3rbmizlin452/AACN00kx4AQuP4YBlsmQCFAEa?dl=0",
  },
  {
    name: "PCM Opstrack Application",
    desc: "An e-Procurement solution developed in ASP.NET Web Forms, designed to ensure secure customer transactions and seamlessly integrated with most ERP systems.",
    image:
      "https://www.dropbox.com/sh/nst4sdnuag5jenj/AACy7HidJXR90-JZtd4f2fFJa?dl=0",
  },
  {
    name: "Wellcom Telecom Dashboard Application",
    desc: "Used for monitoring sales data on a monthly, yearly, or store-specific basis",
    image:
      "https://www.dropbox.com/sh/mc9yijt758070we/AADGX2QGT1sNbwonC1kGFTPsa?dl=0",
  },
  {
    name: "Wellcom Telecom Sales Performance Application",
    desc: "Used to monitor employees' sales history and assess their sales performance.",
    image:
      "https://www.dropbox.com/sh/z0s34dgjlz5zp1j/AACt8h51p_WxcIIPj2IivNnca?dl=0",
  },
  {
    name: "Phortress Web Application",
    desc: "A B2B e-commerce platform. This application facilitates the purchasing and ordering process for contractors and government entities seeking military parts. My role involves ensuring the application's performance, security, and functionality are optimized to meet the needs of its users.",
    image:
      "https://www.dropbox.com/scl/fo/0ez6rs29bkgvhzf4vskwz/ALTQ7ZQV-NOo_sBCN9sx54A?rlkey=tk98msmlor35p23kfmyoftcis&st=kku388yr&dl=0",
  },
  {
    name: "Magenta Wellness Web Application",
    desc: "Is a System—an integrated platform used for managing health insurance services. The system includes a comprehensive set of features such as: Personal Details, Medical History, Dependent Information, Employment Details, Income Information and Current Health Insurance",
    image:
      "https://www.dropbox.com/scl/fo/xq3cxfrilp8xxxz8f22vj/AMNbNP5JT_Bd43QghboSWhY?rlkey=q0ezmbo4sa3mwsn9fkqcjjzhw&st=rr1u2o3p&dl=0",
  },
];
// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hanzla Tauqeer",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
