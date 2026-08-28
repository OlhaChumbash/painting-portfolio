import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from '@/components/LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-6 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between md:w-[80%] lg:w-[60%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-lg md:text-xl lg:text-2xl">{type}&nbsp;</h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm md:text-base">
                    {time} | {place}</span>
                <p className="font-medium w-full text-sm md:text-base">{info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
        }
    )
    return (
        <div className="mb-64 w-full">
            <h2 className="font-bold text-4xl mb-16 w-full text-center md:text-6xl md:mb-16 lg:text-8xl lg:mb-32">
                Education
            </h2>
            <div ref={ref} className="w-full mx-auto relative md:w-[90%] lg:w-[75%]">
                <motion.div style={{ scale: scrollYProgress }} className="absolute left-[20px] top-0 w-[2px] h-full bg-dark origin-top dark:bg-light md:left-[30px] md:w-[2px] lg:left-9 lg:w-[4px]" />
                <ul className="w-full flex flex-col items-start justify-between ml-2 md:ml-4">
                    <Details
                        type="Bachelor Of Science In Computer Science"
                        time="2016-2020t"
                        place="Massachusetts Institute Of Technology (MIT)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                                Intelligence" />
                    <Details
                        type="Master Of Computer Science"
                        time="2020-2022"
                        place="Stanford University"
                        info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
                                language understanding." />
                    <Details
                        type="Online Coursework"
                        time="2016-2020"
                        place="Coursera And EdX"
                        info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
                                Learning Engineering." />
                </ul>
            </div>
        </div>
    )
}

export default Education
