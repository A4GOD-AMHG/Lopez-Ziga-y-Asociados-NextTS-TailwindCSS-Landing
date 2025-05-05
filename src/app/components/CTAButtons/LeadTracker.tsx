// 'use client';

// import React, { useEffect } from 'react';
// import sha256 from 'crypto-js/sha256';

// export default function LeadTracker({
//     children,
//     type = 'general',
//     email
// }: {
//     children: React.ReactNode,
//     type?: 'newsletter' | 'consultation' | 'general',
//     email?: string
// }) {
//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             import('react-facebook-pixel').then((ReactPixel) => {
//                 ReactPixel.default.init('1068142238466336');
//             });
//         }
//     }, []);

//     const handleTrack = async () => {
//         if (typeof window === 'undefined') return;

//         const ReactPixel = await import('react-facebook-pixel');
//         const params: Record<string, unknown> = {
//             content_category: type === 'newsletter'
//                 ? 'Newsletter Subscription'
//                 : 'Free Consultation'
//         };

//         if (email) {
//             params.em = await sha256(email.toLowerCase()).toString();
//         }

//         ReactPixel.default.track('Lead', params);
//     };

//     return React.Children.map(children, child => {
//         if (React.isValidElement(child)) {
//             const element = child as React.ReactElement<React.HTMLAttributes<HTMLElement>>;

//             return React.cloneElement(element, {
//                 ...element.props,
//                 onClick: async (e: React.MouseEvent<HTMLElement>) => {
//                     await handleTrack();
//                     element.props.onClick?.(e);
//                 }
//             });
//         }
//         return child;
//     });
// }