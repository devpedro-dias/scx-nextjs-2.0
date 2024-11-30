"use client"
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import MagicButton from './ui/magic-button'
import { Send } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'

const Contact = () => {
    const t = useTranslations("Home");
    const locale = useLocale();
    const scrollRef = useRef(null)

  return (
    <section ref={scrollRef}>
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration: 1}}
        viewport={{root: scrollRef }}
        className='flex flex-col gap-10 items-center justify-center w-full h-full max-w-[80%] mx-auto mt-10 mb-5'
        >
            <div className='text-primary text-4xl text-center'>
                <h1>{t("contact.title")}</h1>
            </div>

            <div className='flex flex-col gap-4 text-primary text-justify text-lg'>
                <p>{t("contact.content-1")}</p>

                <p>{t("contact.content-2")}</p>

                <p>{t("contact.content-3")}</p>
            </div>

            <div className='mb-20'>
                <Link href={"/contact"} locale={locale}>
                    <MagicButton
                    title={t("contact.button")}
                    icon={<Send size={14}/>}
                    position='right'
                    otherClasses="!bg-[#0D333D]"
                    />
                </Link>
            </div>

        </motion.div>
    </section>
  )
}

export default Contact