'use client';

import React from 'react';
import { useRouter, useParams, useSelectedLayoutSegments } from 'next/navigation';

const ChangeLocale = () => {
    const router = useRouter();
    const params = useParams();
    const urlSegments = useSelectedLayoutSegments();

    const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;

        router.push(`/${newLocale}/${urlSegments.join('/')}`);
    };

    return (
        <div>
            <select onChange={e => handleLocaleChange(e)} value={params.locale}>
                <option value="en">🇺🇸 English</option>
                <option value="fr">🇨🇳 中文</option>
                <option value="ar">🇸🇪 Swedish</option>
            </select>
        </div>
    );
};

export default ChangeLocale;
