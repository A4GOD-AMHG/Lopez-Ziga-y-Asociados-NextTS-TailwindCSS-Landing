'use client';

import React from 'react';
import sha256 from 'crypto-js/sha256';
import { fbq } from 'react-facebook-pixel';

export default function LeadTracker({
    children,
    type = 'general',
    email
}: {
    children: React.ReactNode,
    type?: 'newsletter' | 'consultation' | 'general',
    email?: string
}) {
    const handleTrack = async () => {
        const params: Record<string, unknown> = {
            content_category: type === 'newsletter'
                ? 'Newsletter Subscription'
                : 'Free Consultation'
        };

        if (email) {
            params.em = await sha256(email.toLowerCase()).toString();
        }

        fbq('track', 'Lead', params);
    };

    return React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            const element = child as React.ReactElement<React.HTMLAttributes<HTMLElement>>;

            return React.cloneElement(element, {
                ...element.props,
                onClick: async (e: React.MouseEvent<HTMLElement>) => {
                    await handleTrack();
                    element.props.onClick?.(e);
                }
            });
        }
        return child;
    });
}