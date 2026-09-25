import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/images/paintings/crypto-screener-cover-image.jpg'
import TransitionEffect from '@/components/TransitionEffect'
import Carousel from '@/components/Carousel'
import { useLanguage } from '@/components/LanguageContext'

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

const FramerImage = motion(Image)

const getImageUrl = (image) => {
    if (!image) {
        return project1
    }

    if (image.includes('localhost:8000')) {
        return image.replace(
            'http://localhost:8000',
            API_BASE_URL
        )
    }

    if (image.startsWith('http')) {
        return image
    }

    return `${API_BASE_URL}${
        image.startsWith('/') ? '' : '/'
    }${image}`
}


const PaintingsPage = () => {
    const [paintings, setPaintings] = useState([])
    const [loading, setLoading] = useState(true)

    const { language } = useLanguage()

    useEffect(() => {
        const fetchPaintings = async () => {
            try {
                const response = await fetch(
                    `${API_BASE_URL}/api/paintings/`
                )

                if (!response.ok) {
                    throw new Error(
                        `Backend returned ${response.status}`
                    )
                }

                const data = await response.json()

                const paintingList = Array.isArray(data)
                    ? data
                    : data.results || []

                setPaintings(paintingList)
            } catch (error) {
                console.error(
                    'Error loading paintings:',
                    error
                )

                setPaintings([])
            } finally {
                setLoading(false)
            }
        }

        fetchPaintings()
    }, [])

    const displayPaintings = paintings.map((item) => ({
        id: item.id,

        type:
            language === 'german'
                ? 'Gemäldesammlung'
                : language === 'ukrainian'
                    ? 'Колекція картин'
                    : 'Painting Collection',

        title:
            item[`title_${language}`] ||
            item.title_english ||
            'Untitled Painting',

        summary:
            item[`description_${language}`] ||
            item.description_english ||
            '',

        img: getImageUrl(item.image),

        link: `/paintings/${item.id}`,

        github: '/',
    }))

    const pageTitle =
        language === 'german'
            ? 'Gemälde'
            : language === 'ukrainian'
                ? 'Картини'
                : 'Paintings'

    const heroTitle =
        language === 'german'
            ? 'Fantasie übertrifft Wissen!'
            : language === 'ukrainian'
                ? 'Уява перемагає знання!'
                : 'Imagination Trumps Knowledge!'

    const loadingText =
        language === 'german'
            ? 'Gemälde werden geladen...'
            : language === 'ukrainian'
                ? 'Завантаження картин...'
                : 'Loading paintings...'

    const emptyTitle =
        language === 'german'
            ? 'Keine Gemälde verfügbar'
            : language === 'ukrainian'
                ? 'Немає доступних картин'
                : 'No paintings available'

    const emptyDescription =
        language === 'german'
            ? 'Neue Gemälde werden hier angezeigt, sobald sie hinzugefügt werden.'
            : language === 'ukrainian'
                ? 'Нові картини з’являться тут після їх додавання.'
                : 'New paintings will appear here when they are added.'

    return (
        <>
            <Head>
                <title>
                    Dmytro | {pageTitle}
                </title>

                <meta
                    name="description"
                    content={pageTitle}
                />
            </Head>

            <TransitionEffect />

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">

                    <AnimatedText
                        text={heroTitle}
                        className="mb-8 !text-4xl sm:mb-16 sm:!text-6xl lg:!text-7xl"
                    />

                    {loading && (
                        <p className="mb-8 text-sm text-dark/70 dark:text-light/70">
                            {loadingText}
                        </p>
                    )}

                    {!loading && paintings.length > 0 && (
                        <Carousel
                            paintings={displayPaintings}
                        />
                    )}

                    {!loading && paintings.length === 0 && (
                        <div className="w-full flex flex-col items-center justify-center py-20 text-center">
                            <h2 className="text-3xl font-bold dark:text-light">
                                {emptyTitle}
                            </h2>

                            <p className="mt-4 text-base text-dark/70 dark:text-light/70">
                                {emptyDescription}
                            </p>
                        </div>
                    )}

                </Layout>
            </main>
        </>
    )
}

export default PaintingsPage