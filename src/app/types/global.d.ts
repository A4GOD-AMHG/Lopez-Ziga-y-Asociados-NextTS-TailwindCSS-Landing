
declare global {
    interface Window {
        fbq?: {
            (event: 'track', eventName: string, parameters?: Record<string, unknown>): void;
            (event: 'init', pixelId: string): void;
            track: (eventName: string, parameters?: Record<string, unknown>) => void;
            init: (pixelId: string) => void;
        };
    }
}

declare module 'react-facebook-pixel' {
    export const init: (pixelId: string) => void;
    export const track: (eventName: string, parameters?: Record<string, unknown>) => void;
}