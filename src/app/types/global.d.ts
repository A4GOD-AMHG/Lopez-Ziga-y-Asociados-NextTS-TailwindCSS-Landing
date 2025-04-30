declare global {
    interface Window {
        fbq?: ((event: 'track', eventName: string, parameters?: Record<string, unknown>) => void)
        & ((event: 'init', pixelId: string) => void)
        & {
            track?: (eventName: string, parameters?: Record<string, unknown>) => void;
            init?: (pixelId: string) => void;
        };
    }
}