// 'use client';

// import React, { ReactElement } from 'react';
// // import { fbq } from 'react-facebook-pixel';

// export default function PhoneButton({ children }: { children: React.ReactNode }) {

//     // const handleClick = () => {
//     //     fbq('track', 'Contact', {
//     //         method: 'Phone',
//     //         content_name: 'Header CTA'
//     //     });
//     // };

//     return React.Children.map(children, child => {
//         if (React.isValidElement(child)) {
//             const element = child as ReactElement<React.HTMLAttributes<HTMLElement>>;

//             return React.cloneElement(element, {
//                 ...element.props,
//                 onClick: (e: React.MouseEvent<HTMLElement>) => {
//                     // handleClick();
//                     element.props.onClick?.(e);
//                 }
//             });
//         }
//         return child;
//     });
// }