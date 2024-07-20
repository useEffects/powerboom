'use client';

import React from 'react';
import { useRouter, useParams, useSelectedLayoutSegments } from 'next/navigation';
import FrenchFlagImg from "@/assets/france-svgrepo-com.svg"
import EnglishFlagImg from "@/assets/united-kingdom-svgrepo-com.svg"
import UAEFlagImg from "@/assets/united-arab-emirates-svgrepo-com.svg"
import Link from 'next/link';
import { LocaleTypes } from '@/lib/contants';

const ChangeLocale = () => {
    const router = useRouter();
    const params = useParams();
    const urlSegments = useSelectedLayoutSegments();

    const handleLocaleChange = (newLocale: string) => {
        router.replace(`/${newLocale}/${urlSegments.join('/')}`);
    };

    return (
        <div className='flex flex-col md:flex-row gap-2'>
            {options.map(({ value, flag }) => <button onClick={() => handleLocaleChange(value)} key={value} className='flex gap-2 items-center justify-center hover:opacity-80 active:opacity-80'>
                <img src={flag} alt="" className='h-8 w-8 rounded-full' />
            </button>)}
        </div>
    );
};

const options = [
    {
        value: "en",
        flag: EnglishFlagImg.src
    },
    {
        value: "fr-FR",
        flag: FrenchFlagImg.src
    },
    {
        value: "ar-AE",
        flag: UAEFlagImg.src
    }
] as { value: LocaleTypes, flag: string }[]

export default ChangeLocale;
