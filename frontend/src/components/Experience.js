import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from '@/components/LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-6 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between md:w-[80%] lg:w-[60%]">          
          <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-lg md:text-xl lg:text-2xl">                    {position}&nbsp;
                    <a href={companyLink} target="_blank" className="text-primary dark:text-primary-dark capitalize">
                        @{company} </a></h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm md:text-base">            
                    {time} | {address}</span>
                <p className="font-medium w-full text-sm md:text-base">
                    {work}</p>            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    )
    return (
        <div className="mb-64 ">
            <h2 className="font-bold text-4xl mb-16 w-full text-center md:text-6xl md:mb-16 lg:text-8xl lg:mb-32">
                Experience
            </h2>
            <div ref={ref} className="w-full mx-auto relative md:w-[90%] lg:w-[75%]">
                <motion.div style={{ scale: scrollYProgress }} className="absolute left-[20px] top-0 w-[2px] h-full bg-dark origin-top dark:bg-light md:left-[30px] md:w-[2px] lg:left-9 lg:w-[4px]" />
                <ul className="w-full flex flex-col items-start justify-between ml-2 md:ml-4">
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                            search engine, including improving the accuracy and relevance of search results and 
                            developing new tools for data analysis and visualization." />
                    <Details
                        position="Intern"
                        company="Facebook"
                        companyLink="https://www.google.com"
                        time="Summer 2021 "
                        address="Menlo Park, CA."
                        work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                                share short-form video content, including designing and implementing a new user interface and developing 
                                the backend infrastructure to support the feature." />
                    <Details
                        position="Software Developer"
                        company="Amazon"
                        companyLink="https://www.google.com"
                        time="2020-2021"
                        address="Seattle, WA."
                        work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                                as product recommendations and user reviews, and optimizing the app's performance and reliability." />
                    <Details
                        position="Software Developer Intern"
                        company="Microsoft"
                        companyLink="https://www.google.com"
                        time="Summer 2019"
                        address="Redmond, WA."
                        work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
                                including implementing a new user interface for a system settings panel and optimizing the performance of 
                                a core system component." />
                    <Details
                        position="Teaching Assistant"
                        company="MIT"
                        companyLink="https://www.google.com"
                        time="Fall 2018"
                        address="Massachusetts Ave, Cambridge, MA."
                        work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                                and graded exams and assignments." />

                </ul>
            </div>
        </div>

    )
}

export default Experience
