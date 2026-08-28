import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: 3000,
    });

    const isInView = useInView(ref);
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current && latest <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });

        return unsubscribe;
    }, [springValue, value]);

    return (
        <span ref={ref}></span>
    );
};

const about = () => {
    return (
        <>
            <Head>
                <title>Dmytro | About Page</title>
                <meta name="description" content="Dmytro Shynienkov About Page" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-8 !text-4xl sm:mb-16 sm:!text-6xl lg:!text-7xl" />
                    <div className="grid w-full grid-cols-8 gap-8 sm:gap-16">
                        <div className="col-span-8 relative h-max rounded-2xl border-2 border-solid md:order-2 md:col-span-4  border-dark
                         bg-light p-8 dark:bg-dark dark:border-light xl:col-span-3 ">
                            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light"></div>

                            <Image
                                src={profilePic}
                                alt="Dmytro"
                                className="h-auto w-full rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="col-span-8 flex flex-col items-start justify-start md:order-1 md:col-span-4 xl:col-span-3">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium ">
                                Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients' visions to life.</p>

                            <p className="my-4 font-medium ">   I believe that design is about more than just making things look pretty – it's about solving problems and
                                creating intuitive, enjoyable experiences for users.  </p>

                            <p className="font-medium ">   Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>

                        <div className="col-span-8 flex flex-row items-center justify-between  order-3 xl:col-span-2 xl:flex-col xl:items-end">
                            <div className="flex flex-col items-center justify-center xl:items-end">
                                <span className="inline-block text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                                    <AnimatedNumber value={50} />+
                                </span>
                                <h2 className='text-center text-sm font-medium capitalize text-dark/75 dark:text-light/75 sm:text-base lg:text-xl'>satisfied clients</h2>
                            </div>


                            <div className="flex flex-col items-center justify-center xl:items-end">
                                <span className="inline-block text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                                    <AnimatedNumber value={40} />+
                                </span>
                                <h2 className='text-center text-sm font-medium capitalize text-dark/75 dark:text-light/75 sm:text-base lg:text-xl'>satisfied clients</h2>
                            </div>

                            <div className="flex flex-col items-center justify-center xl:items-end">
                                <span className="inline-block text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                                    <AnimatedNumber value={4} />+
                                </span>
                                <h2 className='text-center text-sm font-medium capitalize text-dark/75 dark:text-light/75 sm:text-base lg:text-xl'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Skills />
                <Experience />
                <Education />
            </main>
        </>
    )
}

export default about
