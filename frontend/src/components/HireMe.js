import React from 'react'
import { CircularText } from "@/components/Icons"
import Link from 'next/link'

const HireMe = () => {
    return (
<div className="absolute left-4 bottom-4 flex items-center justify-center overflow-hidden 
 md:right-8 md:left-auto md:top-4 md:bottom-auto lg:left-8 lg:right-auto lg:top-auto lg:bottom-4">           
  <div className="w-42 h-auto flex items-center justify-center relative">
                <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
                <Link href="mailto:olyachumbash@gmail.com"
                    className="flex items-center justify-center 
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
                    text-light shadow-mb border border-solid border-dark w-20 h-20 rounded-full
                    font-semibold hover:bg-light hover:text-dark
                     dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                     w-12 h-12">
                     Hire Me
                </Link>
            </div>
        </div>
    )
}

export default HireMe
