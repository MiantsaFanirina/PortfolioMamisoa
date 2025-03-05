import {IconTerminal2} from "@tabler/icons-react";
import {
    ArrowCircleRightIcon, BeakerIcon,
    CloudIcon,
    DatabaseIcon,
    DesktopComputerIcon,
    LightBulbIcon,
    UsersIcon
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import {FaRegCircle} from "react-icons/fa6";

export const FeaturesData = [
    {
        title: "Fullstack Web & Mobile Development",
        description:
            "Creating high-performance web and mobile applications with a focus on modern technologies such as Symfony, Laravel, Next.js, React.js, NestJS, Angular, React Native, and Node.js.",
        icon: <IconTerminal2 />,
    },
    {
        title: "Desktop & Industrial Applications",
        description:
            "Designing desktop applications and automation solutions using .NET C# (Blazor, Minimal API, WPF) and Java (Spring Boot) with a focus on performance and scalability.",
        icon: <DesktopComputerIcon className="w-6 h-6" />, // New icon for desktop applications
    },
    {
        title: "Infrastructure & DevOps Management",
        description:
            "Expertise in deploying and managing infrastructure on cloud platforms like Azure and AWS, along with DevOps practices including CI/CD, monitoring, and logging using Elastic Search Kibana (ELK).",
        icon: <CloudIcon className="w-6 h-6" />, // Cloud icon for cloud infrastructure
    },
    {
        title: "Database Optimization & Security",
        description:
            "Specializing in designing and optimizing MSSQL and MySQL databases, ensuring high availability, performance, and security.",
        icon: <DatabaseIcon className="w-6 h-6" />, // Database icon for database-related services
    },
    {
        title: "Application Architecture & Performance",
        description:
            "Improving existing applications with a focus on scalability, performance, and implementing unit/integration tests to ensure code quality.",
        icon: <ArrowCircleRightIcon className="w-6 h-6" />, // Arrow icon for performance and architecture improvements
    },
    {
        title: "Project Management & Leadership",
        description:
            "Leading teams of developers with strong project management skills, ensuring projects are delivered on time and in alignment with business goals.",
        icon: <UsersIcon className="w-6 h-6" />, // Users icon for leadership and team management
    },
    {
        title: "Digital Transformation Consulting",
        description:
            "Helping businesses modernize their digital tools by recommending the right technologies and optimizing workflows for better efficiency.",
        icon: <LightBulbIcon className="w-6 h-6" />, // Light bulb for innovation and transformation
    },
    {
        title: "Developer Training & Mentorship",
        description:
            "Providing training and mentorship on modern technologies, clean code practices, and DevOps workflows to foster continuous learning and improvement.",
        icon: <BeakerIcon className="w-6 h-6" />, // Beaker icon for training and experimentation
    },
];


export const EducationData = [
    {
        id: 1,
        title: "2020 - Master's Degree in Industrial Computer Science and Networks",
        desc: "University of Technology Specialist in Informatics (T.S.I)",
        className: "md:col-span-2",
    },
    {
        id: 2,
        title: "2017 - Bachelor's Degree in Information Technology",
        desc: "Institut UNIVERS Informatique",
        className: "md:col-span-2", // change to md:col-span-2
    },
    {
        id: 3,
        title: "2012 - Master's Degree in Engineering Informatics",
        desc: "Geneva School of Engineering [E.I.G]",
        className: "md:col-span-2", // change to md:col-span-2
    },
];

export const WorkData = [
    {
        id: 1,
        thumbnail: "March 2022 - December 2024 ",
        title: 'Project Manager for Stock Management',
        content: (
            <div>
                <h1 className={'text-[25px] md:text-3xl lg:text-4xl text-purple-300 relative mb-3 '}>
                    Project Manager for Stock Management
                </h1>

                <h2 className={'text-[20px] md:text-xl lg:text-2xl text-white relative mb-10'}>
                    YHAJA Madagascar Company
                </h2>


                {/*List*/}

                <div className={'flex flex-col gap-2 '}>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300  shrink-0'}/> Developed appropriate stock management strategies
                        for animal feed and cheese.
                    </div>

                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300  shrink-0'}/> <span>Designed a business application using <span
                        className={'font-bold'}>.NET Core C# WPF</span> to track product traceability.</span>
                    </div>

                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300  shrink-0'}/> Trained employees to use the newly developed
                        application.
                    </div>

                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300  shrink-0'}/> Improved the logistics scheduling process.
                    </div>


                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> The application manages various types of loans and debts related to transactions.
                    </div>
                </div>

            </div>
        ),
        className: 'col-span-1'
    },
    {
        id: 2,
        title: 'CEO of Nossidea',
        thumbnail: "2023 - 2024",
        content: (

            <div>
                <h1 className={'text-[25px] md:text-3xl lg:text-4xl text-purple-300 relative mb-10'}>
                    CEO of Nossidea
                </h1>


                {/*List*/}

                <div className={'flex flex-col gap-2 '}>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300'}/> <span>Led the development of a business application for <span className={'font-bold'}>Espace Santika</span> in Madagascar using <span className={'font-bold'}>Symfony, API Platform, and React</span>.
                    </span>
                    </div>
                </div>

            </div>
        ),
        className: 'md:col-span-2'
    },
    {
        id: 3,
        thumbnail: "July 2021 - March 2022",
        title: 'Project Manager for Entrepreneurship and Drinking Water Sales (In Preparation)',
        content: (
            <div>
                <h1 className={'text-[25px] md:text-3xl lg:text-4xl text-purple-300 relative mb-3'}>
                    Project Manager for Entrepreneurship and Drinking Water Sales (In Preparation)
                </h1>

                <h2 className={'text-[20px] md:text-xl lg:text-2xl text-white relative mb-10'}>
                    YHAJA Madagascar Company
                </h2>


                {/*List*/}

                <h2 className={'text-[25px] md:text-lg lg:text-xl text-white relative mb-3 font-bold'}>
                    Feasibility Study and Project Execution Preparation
                </h2>

                <div className={'flex flex-col gap-2 mb-10'}>
                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> Designed project plans, including objectives,
                        budgets, schedules, and resource allocation.
                    </div>

                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> Defined tasks and coordinated their execution with
                        the team.
                    </div>


                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> Managed scheduling, budgeting, and risk assessment
                        during project implementation.
                    </div>

                </div>


                {/*List*/}

                <h2 className={'text-[25px] md:text-lg lg:text-xl text-white relative mb-3 font-bold'}>
                    Drinking Water Production from a Natural Source (River)
                </h2>

                <div className={'flex flex-col gap-2 mb-10'}>
                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> Designed and wired the motor control electrical
                        panel with the team.
                    </div>

                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> <span> Built <span className={'font-bold'}>Archimedean screw decanter machines</span> for
                        water treatment.</span>
                    </div>


                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> Managed communication between various project
                        stakeholders.
                    </div>


                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> Anticipated risks and budget constraints throughout
                        project execution.
                    </div>

                </div>

                {/*List*/}

                <h2 className={'text-[25px] md:text-lg lg:text-xl text-white relative mb-3 font-bold'}>
                    Bottling Process Implementation
                </h2>

                <div className={'flex flex-col gap-2 mb-10'}>
                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> <span>Prepared for the transportation and installation of <span className={'font-bold'}>bottling machines,</span> including <span className={'font-bold'}>control panels, TIA Portal automation, and power systems.</span>
                    </span>
                    </div>

                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> <span>Developed a <span className={'font-bold'}>large ultraviolet filtration system</span> to eliminate particles smaller than one micron.
                        </span>
                    </div>


                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/> <span>Researched the most effective method for water treatment using sodium <span className={'font-bold'}>hypochlorite.</span>
                        </span>
                    </div>

                </div>

            </div>
        ),
        className: 'md:col-span-2'
    },
    {
        id: 4,
        thumbnail: "September 2020 - January 2023",
        title: 'Business Application Developer for Car Rental',
        content: (
            <div>
                <h1 className={'text-[25px] md:text-3xl lg:text-4xl text-purple-300 relative mb-3'}>
                    Business Application Developer for Car Rental
                </h1>

                <h2 className={'text-[20px] md:text-xl lg:text-2xl text-white relative mb-10'}>
                    Aloc-cars, Switzerland
                </h2>


                {/*List*/}

                <h2 className={'text-[25px] md:text-lg lg:text-xl text-white relative mb-3 font-bold'}>
                    Project Management:
                </h2>

                <div className={'flex flex-col gap-2 mb-10'}>
                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>
                            Migrated the application to a <span
                            className={'font-bold'}>microservices architecture</span> using <span
                            className={'font-bold'}>PHP, Java, and .NET Core C#, Docker, load balancing, DevOps,</span> and <span
                            className={'font-bold'}>Minimal API</span>.
                        </span>
                    </div>

                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>Enhanced user security by implementing <span
                            className={'font-bold'}>JWT authentication</span> using <span className={'font-bold'}>ASP.NET Web API .NET Core</span> and <span
                            className="font-bold">Dapper framework</span> for the data access layer.</span>
                    </div>


                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>Migrated the front-end to <span className={'font-bold'}>Angular 8</span>.</span>
                    </div>


                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>Implemented <span className={'font-bold'}>automatic image detection</span> (front or side view)
                            using <span
                                className={'font-bold'}>deep learning and image processing</span> techniques.</span>
                    </div>

                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>Developed a <span className={'font-bold'}>mobile application (Xamarin)</span> that detects vehicle breakdowns upon return.
                            The deep learning model is built in <span className={'font-bold'}>Python</span> using <span className={'font-bold'}>Keras and TensorFlow</span> frameworks.</span>
                    </div>

                </div>

            </div>
        ),
        className: 'col-span-1'
    },
    {
        id: 5,
        thumbnail: "January 2019 - December 2019",
        title: 'Consultant Developer',
        content: (
            <div>
                <h1 className={'text-[25px] md:text-3xl lg:text-4xl text-purple-300 relative mb-3'}>
                    Consultant Developer
                </h1>

                <h2 className={'text-[20px] md:text-xl lg:text-2xl text-white relative mb-10'}>
                    YHAJA Madagascar Company
                </h2>


                {/*List*/}

                <h2 className={'text-[25px] md:text-lg lg:text-xl text-white relative mb-3 font-bold'}>
                    Main Responsibilities:
                </h2>

                <div className={'flex flex-col gap-2 mb-10'}>
                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>
                            Developed the business application for <span className={'font-bold'}>cheese stock management</span>, logistics, and IT flows (production chain without financial flows as the company
                            doesn&apos;t export products). The application also manages products based on customer orders.
                        </span>
                    </div>

                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>Controlled the <span className={'font-bold'}>milk production interface</span> using sensors and <span className={'font-bold'}>ARM</span> microcontrollers (STM32).</span>
                    </div>

                </div>

            </div>
        ),
        className: 'md:col-span-2'
    },
    {
        id: 6,
        thumbnail: "January 2014 - December 2014",
        title: 'Business Application Developer for Money Transfer',
        content: (
            <div>
                <h1 className={'text-[25px] md:text-3xl lg:text-4xl text-purple-300 relative mb-3'}>
                    Business Application Developer for Money Transfer
                </h1>

                <h2 className={'text-[20px] md:text-xl lg:text-2xl text-white relative mb-10'}>
                    Cash-Xpress Genève & Pacoservices Lausanne
                </h2>


                {/*List*/}

                <h2 className={'text-[25px] md:text-lg lg:text-xl text-white relative mb-3 font-bold'}>
                    Main Responsibilities:
                </h2>

                <div className={'flex flex-col gap-2 mb-10'}>
                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>
                            Traveled for 2 months to <span className={'font-bold'}>Douala (Cameroon)</span> and then 10 months
                            to <span className={'font-bold'}>Quito (Ecuador)</span> to develop
                            their money transfer business application.
                        </span>
                    </div>

                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>
                            Implemented a single <span className={'font-bold'}>User Interface</span> but with two different databases for the two companies.
                            [<span className={'font-bold'}>ASP.NET WebForm</span> for the Frontend and Data Access Layer using
                            the <span className={'font-bold'}>Dapper</span> framework, <span className={'font-bold'}>MSSQL Server</span> for the Backend].
                        </span>
                    </div>

                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>
                            Fixed application bugs and resolved internal issues with agents and external issues with payers.
                        </span>
                    </div>
                    <div
                        className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md md:text-lg">
                        <FaRegCircle className={'text-purple-300 shrink-0'}/>
                        <span>
                            Developed <span className={'font-bold'}>Bots</span> to ensure secure communication from the agency application
                            to the payer&apos;s application (using <span className={'font-bold'}>SOAP Webservices</span>, Console Application,
                            and scheduled execution through a <span className={'font-bold'}>Windows Service</span>).
                        </span>
                    </div>

                </div>

            </div>
        ),
        className: 'col-span-1'
    },
];


export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://github.com/adrianhajdin/iphone",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];

