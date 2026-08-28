import React from 'react'
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-transparent
                    text-dark py-1.5 px-3 cursor-pointer absolute dark:text-light dark:bg-transparent text-sm
                    md:bg-dark md:text-light md:shadow-dark md:py-2 md:px-4 md:text-base lg:bg-dark
                    lg:text-light lg:py-3 lg:px-6 lg:text-lg lg:dark:bg-light lg:dark:text-dark"            
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-6xl mt-32 w-full text-center lg:text-8xl lg:mt-64">Skills</h2>
            <div className="w-full h-[50vh] relative flex items-center justify-center rounded-full
            bg-circular sm:h-[60vh] md:h-[70vh] lg:h-[100vh]">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-2 shadow-dark dark:text-dark dark:bg-light md:p-4 lg:p-6"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="HTMl" x="-25vw" y="2vw" />
                <Skill name="CSS" x="-8vw" y="-10vw" />
                <Skill name="JavaScript" x="-30vw" y="-16vw" />
                <Skill name="ReactJS" x="0vw" y="12vw" />
                <Skill name="NextJS" x="20vw" y="-20vw" />
                <Skill name="Web Design" x="32vw" y="-2vw" />
                <Skill name="Figma" x="0vw" y="-20vw" />
                <Skill name="Firebase" x="-25vw" y="18vw" />
                <Skill name="Tailwind CSS" x="20vw" y="20vw" />
            </div>
        </>
    )
}

export default Skills