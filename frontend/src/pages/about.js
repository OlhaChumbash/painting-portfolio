import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import { useLanguage } from '@/components/LanguageContext'
import fallbackProfilePic from '../../public/images/profile/developer-pic-2.jpg'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) motionValue.set(Number(value) || 0)
    }, [isInView, value, motionValue])

    useEffect(() => {
        const unsubscribe = springValue.on('change', latest => {
            if (ref.current) ref.current.textContent = latest.toFixed(0)
        })
        return unsubscribe
    }, [springValue])

    return <span ref={ref}>0</span>
}

const translated = (item, field, language) =>
    item?.[`${field}_${language}`] || item?.[`${field}_english`] || ''

const About = () => {
    const { language } = useLanguage()
    const [about, setAbout] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                setLoading(true)
                setError('')
                const response = await fetch(`${API_BASE_URL}/api/pages/about/`)
                if (!response.ok) throw new Error(`Backend returned ${response.status}`)
                setAbout(await response.json())
            } catch (err) {
                console.error('Error loading About page:', err)
                setError('Unable to load About page.')
            } finally {
                setLoading(false)
            }
        }
        fetchAbout()
    }, [])

    if (loading) {
        return (
            <>
                <Head><title>About</title></Head>
                <TransitionEffect />
                <main className="flex min-h-screen w-full items-center justify-center dark:text-light">
                    <p className="text-lg font-medium">Loading...</p>
                </main>
            </>
        )
    }

    if (error || !about) {
        return (
            <>
                <Head><title>About</title></Head>
                <TransitionEffect />
                <main className="flex min-h-screen w-full items-center justify-center dark:text-light">
                    <p className="text-lg font-medium">{error || 'About page not found.'}</p>
                </main>
            </>
        )
    }

    const title = translated(about, 'title', language) || 'About'
    const biography = translated(about, 'biography', language)
    const paragraph2 = translated(about, 'paragraph_2', language)
    const paragraph3 = translated(about, 'paragraph_3', language)
    const statistics = about.statistics || []
    const skills = about.skills || []
    const experiences = about.experience || []
    const education = about.education || []
    const profileImage = about.profile_image || fallbackProfilePic.src

    const sectionTitle = {
        skills: language === 'german' ? 'Fähigkeiten' : language === 'ukrainian' ? 'Навички' : 'Skills',
        experience: language === 'german' ? 'Berufserfahrung' : language === 'ukrainian' ? 'Досвід роботи' : 'Experience',
        education: language === 'german' ? 'Ausbildung' : language === 'ukrainian' ? 'Освіта' : 'Education'
    }

    return (
        <>
            <Head>
                <title>{title} | Dmytro</title>
                <meta name="description" content={biography || title} />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text={title} className="mb-8 !text-4xl sm:mb-16 sm:!text-6xl lg:!text-7xl" />
                    <div className="grid w-full grid-cols-8 gap-8 sm:gap-16">
                        <div className="relative col-span-8 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark md:order-2 md:col-span-4 xl:col-span-3">
                            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
                            <img src={profileImage} alt={title} className="h-auto w-full rounded-2xl object-cover" />
                        </div>

                        <div className="col-span-8 flex flex-col items-start justify-start md:order-1 md:col-span-4 xl:col-span-3">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            {biography && <p className="font-medium">{biography}</p>}
                            {paragraph2 && <p className="my-4 font-medium">{paragraph2}</p>}
                            {paragraph3 && <p className="font-medium">{paragraph3}</p>}
                        </div>

                        <div className="order-3 col-span-8 flex flex-row items-center justify-between xl:col-span-2 xl:flex-col xl:items-end">
                            {statistics.map((stat, index) => (
                                <div key={stat.id || `${stat.value}-${index}`} className="flex flex-col items-center justify-center xl:items-end">
                                    <span className="inline-block text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                                        <AnimatedNumber value={parseInt(stat.value, 10) || 0} />+
                                    </span>
                                    <h2 className="text-center text-sm font-medium capitalize text-dark/75 dark:text-light/75 sm:text-base lg:text-xl">
                                        {translated(stat, 'label', language)}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </Layout>

                {skills.length > 0 && (
                    <Layout className="mt-16">
                        <AnimatedText text={sectionTitle.skills} className="mb-12 !text-4xl sm:!text-6xl" />
                        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                            {skills.map((skill, index) => (
                                <div key={skill.id || `${skill.name}-${index}`} className="rounded-2xl border-2 border-dark bg-light p-6 text-center dark:border-light dark:bg-dark">
                                    <h3 className="text-lg font-bold sm:text-xl">{skill.name}</h3>
                                    {skill.category && (
                                        <p className="mt-2 text-sm font-medium text-dark/60 dark:text-light/60">
                                            {skill.category}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Layout>
                )}

                {experiences.length > 0 && (
                    <Layout className="mt-20">
                        <AnimatedText text={sectionTitle.experience} className="mb-12 !text-4xl sm:!text-6xl" />
                        <div className="w-full">
                            {experiences.map((item, index) => (
                                <div key={item.id || `${item.company}-${index}`} className="mb-8 rounded-2xl border-2 border-dark bg-light p-6 dark:border-light dark:bg-dark">
                                    <div className="flex flex-col justify-between gap-3 md:flex-row">
                                        <div>
                                            <h3 className="text-xl font-bold sm:text-2xl">
                                                {translated(item, 'position', language)}
                                            </h3>
                                            <p className="mt-1 font-medium text-dark/70 dark:text-light/70">{item.company}</p>
                                        </div>
                                        <div className="text-left md:text-right">
                                            <p className="font-semibold">{item.period}</p>
                                            {item.location && (
                                                <p className="text-sm text-dark/60 dark:text-light/60">{item.location}</p>
                                            )}
                                        </div>
                                    </div>
                                    {translated(item, 'description', language) && (
                                        <p className="mt-4 font-medium text-dark/75 dark:text-light/75">
                                            {translated(item, 'description', language)}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Layout>
                )}

                {education.length > 0 && (
                    <Layout className="mt-20 pb-20">
                        <AnimatedText text={sectionTitle.education} className="mb-12 !text-4xl sm:!text-6xl" />
                        <div className="w-full">
                            {education.map((item, index) => (
                                <div key={item.id || `${item.institution}-${index}`} className="mb-8 rounded-2xl border-2 border-dark bg-light p-6 dark:border-light dark:bg-dark">
                                    <div className="flex flex-col justify-between gap-3 md:flex-row">
                                        <div>
                                            <h3 className="text-xl font-bold sm:text-2xl">
                                                {translated(item, 'degree', language)}
                                            </h3>
                                            <p className="mt-1 font-medium text-dark/70 dark:text-light/70">{item.institution}</p>
                                        </div>
                                        <p className="font-semibold">{item.period}</p>
                                    </div>
                                    {translated(item, 'description', language) && (
                                        <p className="mt-4 font-medium text-dark/75 dark:text-light/75">
                                            {translated(item, 'description', language)}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Layout>
                )}
            </main>
        </>
    )
}

export default About