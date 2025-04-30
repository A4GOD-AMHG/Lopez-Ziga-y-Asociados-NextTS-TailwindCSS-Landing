declare global {
    interface Window {
        fbq?: {
            (event: 'track', eventName: string, parameters?: Record<string, unknown>): void;
            (event: 'init', pixelId: string, options?: { autoConfig?: boolean; debug?: boolean }): void;
            queue?: Array<unknown[]>;
            loaded?: boolean;
            version?: string;
        };
    }
}