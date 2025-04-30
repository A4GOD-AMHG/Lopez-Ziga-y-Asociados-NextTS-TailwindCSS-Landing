'use client';

import React, { ReactElement } from 'react';

export default function WhatsAppButton({ children }: { children: React.ReactNode }) {
    const handleClick = () => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq.track('Contact', {
                method: 'WhatsApp',
            });
        }
    };

    return React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            const element = child as ReactElement<React.HTMLAttributes<HTMLElement>>;

            return React.cloneElement(element, {
                ...element.props,
                onClick: (e: React.MouseEvent<HTMLElement>) => {
                    handleClick();
                    element.props.onClick?.(e);
                }
            });
        }
        return child;
    });
}