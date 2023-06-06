import posthog from 'posthog-js'

export const capture = (event: string, properties?: Record<string, any>) => {
    posthog.init('phc_oFQeGI795mzEGjgZw1IbKYDwNwM9mQxxtl6PIA3SMQI', { api_host: 'https://app.posthog.com' });

    posthog.capture(event, properties)
}