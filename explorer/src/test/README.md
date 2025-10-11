# Testing with Vitest

This project now includes Vitest for unit testing React components and TypeScript functions.

## Available Test Commands

- `pnpm test` - Run tests in watch mode
- `pnpm test:run` - Run tests once and exit
- `pnpm test:ui` - Run tests with UI interface
- `pnpm test:coverage` - Run tests with coverage report

## Test Structure

- `src/test/` - Contains all test files
- `src/test/setup.ts` - Global test setup and mocks
- `src/test/*.test.ts` - Unit tests for utilities and functions
- `src/test/*.test.tsx` - Component tests for React components

## What's Included

### Dependencies Added
- `vitest` - Fast unit test framework
- `@vitejs/plugin-react` - React support for Vitest
- `jsdom` - DOM environment for testing
- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - Custom matchers for DOM testing
- `@testing-library/user-event` - User interaction testing

### Configuration
- `vitest.config.ts` - Vitest configuration with TypeScript and React support
- Path aliases configured for `@/` imports
- Global setup file for mocks and test environment

### Example Tests
- Basic unit tests (`example.test.ts`)
- React component tests (`components.test.tsx`)
- Chain configuration tests (`chain-config.test.ts`)

## Writing Tests

### Basic Test
```typescript
import { describe, it, expect } from 'vitest'

describe('MyFunction', () => {
  it('should work correctly', () => {
    expect(1 + 1).toBe(2)
  })
})
```

### Component Test
```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MyComponent from '@/components/MyComponent'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
```

## Mocks Included

- Next.js router (`next/router`)
- Next.js Image component (`next/image`)
- IntersectionObserver
- ResizeObserver

## Testing Interchain Functionality

The setup includes tests for your chain configuration, which validates:
- Chain and asset list configuration
- Proper chain properties
- Matching chain and asset list counts
- Valid chain and asset data structures

This provides a foundation for testing your interchain application's blockchain integration.
