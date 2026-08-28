import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
       <footer className="w-full border-t-2 border-solid border-dark font-medium text-base dark:text-light dark:border-light lg:text-lg">          
           <Layout className="py-6 flex flex-col lg:flex-row lg:py-8  items-center justify-between w-full">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                
                <div className="py-2 flex items-center justify-center md:py-0">
                    Build With <span className="text-primary dark:text-primary-dark text-2xl px-1">&#9825;</span> 
                    by&nbsp;
                    <Link 
                        href="https://olhachumbash.github.io/portfolio/" 
                        className="underline underline-offset-2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Olha Chumbash
                    </Link>
                </div>

                <Link 
                    href="https://olhachumbash.github.io/portfolio/" 
                    className="underline underline-offset-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Say Hello
                </Link>
            </Layout>
        </footer>
    )
}

export default Footer