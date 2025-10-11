import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Box } from '@interchain-ui/react'

// Simple test component
const TestComponent = ({ title, children }: { title: string; children?: React.ReactNode }) => (
    <Box>
        <h1>{title}</h1>
        {children}
    </Box>
)

describe('Component Tests', () => {
    it('should render a simple component', () => {
        render(<TestComponent title="Test Title" />)
        expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('should render component with children', () => {
        render(
            <TestComponent title="Parent">
                <p>Child content</p>
            </TestComponent>
        )
        expect(screen.getByText('Parent')).toBeInTheDocument()
        expect(screen.getByText('Child content')).toBeInTheDocument()
    })
})
