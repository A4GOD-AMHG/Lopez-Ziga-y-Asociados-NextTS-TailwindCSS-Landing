'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ReactFacebookPixel from 'react-facebook-pixel';

export const FacebookPixel = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        ReactFacebookPixel.init(process.env.NEXT_PUBLIC_FB_PIXEL_ID!, undefined, {
            autoConfig: false,
            debug: process.env.NODE_ENV === 'development',
        });
    }, []);

    useEffect(() => {
        ReactFacebookPixel.pageView();
    }, [pathname, searchParams]);

    return null;
};