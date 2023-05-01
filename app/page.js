"use client"

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const gotoTodoClickHandle = () => {
    router.push('/todos')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About me</h1>
      <br/>
      Hello, I am ARAKI YAMAZAKI(John Henry)
      <br/>
      <p>John Henry<br/>
        Hong Kong | topstar991122@gmail.com | https://pro-top-star.firebaseapp.com<br/>
        <br/>
        SUMMARY<br/>
        A senior full stack web developer looking to step up in the creative industry<br/>
        Experienced Full Stack Web Developer with extensive knowledge in Frontend and Backend development, including HTML, CSS, JavaScript, React, Vue.js, Node, MongoDB, MySQL, Laravel, and WordPress. Proven ability to design system architecture and lead teams in business systems. Strong problem-solving skills and able to solve complex technical challenges. Experienced in customer management and working with clients of varying skill levels.
        <br/><br/>
        PROFESSIONAL EXPERIENCE<br/>
        Full stack developer	Sep 2022 - Present<br/>
        Freelancer, Hong Kong<br/>
        - Develop high-quality, scalable web applications using HTML, CSS, JavaScript, React, Vue.js, Next, Node, MongoDB, MySQL, Laravel, and WordPress.
        - Collaborate with clients to understand their business requirements and develop effective solutions.<br/>
        - Work with a wide range of clients and manage projects from start to finish.<br/>
        - Provide technical guidance and support to clients of varying skill levels. <br/>
        - Improve web application performance by 40% through optimized database queries and implementing caching strategies. <br/>
        - Collaborate with cross-functional teams to increase efficiency and decrease development time.<br/>
        - My personality and competitive nature have made me realize that my skills will be beneficial in dealing with clients in sales.<br/>

        <br/>
        Project manager	Aug 2021 - Aug 2022<br/>
        Victor team, Singapore<br/>
        - Designed scalable and optimized web applications using Next, Node, and MongoDB.<br/>
        - Led a team of developers to ensure timely delivery of projects by managing schedules, budgets, and resources.<br/>
        - Managed a team of developers and provided training and mentor-ship to improve their technical skills.<br/>
        - Created RESTful APIs for the web applications to enhance user experience and functionality.<br/>
        - Developed and implemented coding standards and best practices for the team.<br/>
        - Negotiated deadlines and resources with stakeholders to ensure successful project delivery.<br/>
        - Increased revenue by launching new features and improving existing ones.<br/>
        - Collaborated with UX/UI Designers and Product Managers to create modern, user-centered web applications.<br/>
        - Conducted code reviews and provided technical guidance to team members.<br/>
        - Implemented Agile/Scrum methodology to manage project timelines and sprints.<br/><br/>

        Front end developer	Aug 2017 - July 2021<br/>
        Fora Soft Company, Hong Kong<br/>
        - Worked as an intern, gained experience in HTML, CSS, and JavaScript at start.<br/>
        - Contributed to various web development projects, improving my coding skills and knowledge.<br/>
        - Developed complex web applications using HTML, CSS, JavaScript, React, Vue.js, Node, MongoDB, MySQL, Laravel, and WordPress.<br/>
        - Led a team of 5 developers in planning, developing, and delivering web applications.<br/>
        - Designed and implemented REST APIs using Node.js and Express.js.<br/>
        - Led a team of developers and trained/mentored junior members to improve their technical skills.<br/>
        - Volunteered as a mentor to local coding boot-camps, sharing my knowledge and experience with aspiring developers.<br/>
        - Increased revenue by launching new features and improving existing ones while being under budget constraints.<br/>
        - Optimized website performance, including page speed and scalability.<br/><br/>

        EDUCATION<br/>
        Bachelor of Science in Computer Science - Computer Sciences	Sep 2013 - May 2017<br/>
        The University of Hong Kong, Hong Kong<br/>
        GPA: 3.85/4.0<br/><br/>

        SKILLS<br/>
        Expert in: HTML, CSS, SCSS, JavaScript, ES6, TypeScript, Node, React.js, React-Native, React Hook, Vue.js, Next.js, Express.js, MongoDB, MySQL, Python, Django, Shopify, PHP, Laravel, WordPress, AWS, Firebase, CMS, Flutter, Git, Docker, Jira UniTesting, Figma, Adobe Illustrator, Adobe XD, 
        </p>

      <button  onClick={() => gotoTodoClickHandle()}
        type="button" className="mt-32 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        Go to TODO
      </button>
    </main>
  )
}
