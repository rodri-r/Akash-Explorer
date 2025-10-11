import '@testing-library/jest-dom'
import React from 'react'
import { vi } from 'vitest'

// Mock Next.js router
vi.mock('next/router', () => ({
    useRouter: vi.fn(() => ({
        route: '/',
        pathname: '/',
        query: {},
        asPath: '/',
        push: vi.fn(),
        pop: vi.fn(),
        reload: vi.fn(),
        back: vi.fn(),
        prefetch: vi.fn().mockResolvedValue(undefined),
        beforePopState: vi.fn(),
        events: {
            on: vi.fn(),
            off: vi.fn(),
            emit: vi.fn(),
        },
        isFallback: false,
    })),
}))

// Mock Next.js Image component
vi.mock('next/image', () => ({
    default: (props: any) => {
        // eslint-disable-next-line @next/next/no-img-element
        return React.createElement('img', props)
    },
}))

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
    constructor() { }
    disconnect() { }
    observe() { }
    unobserve() { }
}

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
    constructor() { }
    disconnect() { }
    observe() { }
    unobserve() { }
}
