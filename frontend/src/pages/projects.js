import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-between relative
                rounded-2xl border border-solid border-dark bg-light shadow-2xl p-4
                dark:bg-dark dark:border-light
                sm:p-6
                lg:flex-row lg:rounded-3xl lg:rounded-br-2xl lg:p-12">
            <div className="absolute top-0 -right-2 -z-10 h-[102%] w-full rounded-[1.5rem] bg-dark dark:bg-light
                            sm:-right-3 sm:h-[103%] sm:w-[101%] sm:rounded-[2.5rem] rounded-br-3xl">
            </div>


            <Link href={link} target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-1/2"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between pt-6 lg:w-1/2 lg:pt-0 lg:pl-6">
                <span className="text-primary font-medium text-base dark:text-primary-dark xs:text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-sm font-bold dark:text-light sm:text-4xl">{title}</h2>
                </Link>

                <p className="my-2 font-medium text-dark dark:text-light text-sm sm:text-base">{summary}</p>


                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>

                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-base font-semibold
        dark:bg-light dark:text-dark
        sm:px-4 sm:text-lg"
                    >
                        Visit Project
                    </Link>
                </div>

            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center
    rounded-2xl border border-solid border-dark bg-light p-4 relative
    dark:bg-dark dark:border-light
    sm:p-6">
            <div className="absolute top-0 -right-2 -z-10 h-[102%] w-full rounded-[1.5rem] bg-dark
    rounded-br-3xl dark:bg-light
    md:-right-3 md:h-[103%] md:w-[101%] md:rounded-[2rem]">
            </div>
            <Link href={link} target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-base dark:text-primary-dark md:text-xl lg:text-2xl">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-3xl">{title}</h2>
                </Link>

                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank"
                        className="rounded-lg font-semibold underline md:text-base">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-6 md:w-8">
                        <GithubIcon />
                    </Link>

                </div>

            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Dmytro | Projects Page</title>
                <meta name="description" content="Dmytro Shynienkov Projects Page" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className="mb-8 !text-4xl sm:mb-16 sm:!text-6xl lg:!text-7xl" />

                    <div className="grid grid-cols-12 gap-y-16
                                    md:gap-y-24
                                    lg:gap-x-8
                                    xl:gap-x-16">
                        <div className="col-span-12">
                            < FeaturedProjects
                                type="Featured Projects"
                                title="Crypto Screener"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                img={project1}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            < Project
                                type="Featured Projects"
                                title="Crypto Screener"
                                img={project1}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            < Project
                                type="Featured Projects"
                                title="Crypto Screener"
                                img={project1}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-12">
                            < FeaturedProjects
                                type="Featured Projects"
                                title="Crypto Screener"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                img={project1}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            < Project
                                type="Featured Projects"
                                title="Crypto Screener"
                                img={project1}
                                link="/"
                                github="/"
                            />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            < Project
                                type="Featured Projects"
                                title="Crypto Screener"
                                img={project1}
                                link="/"
                                github="/"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
