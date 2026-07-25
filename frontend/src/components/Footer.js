import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            {/* Добавили w-full и явно указали flex-row */}
            <Layout className="py-8 flex flex-row items-center justify-between w-full">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                
                <div className="flex items-center">
                    Build With <span className="text-primary text-2xl px-1">&#9825;</span> 
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