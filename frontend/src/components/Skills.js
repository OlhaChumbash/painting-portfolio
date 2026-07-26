import React from 'react'
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark
                     text-light py-3 px-6 shadow-dark cursor-pointer absolute "
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circular-light">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark"
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