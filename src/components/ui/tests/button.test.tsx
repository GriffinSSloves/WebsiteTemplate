import { describe, expect, it, vi } from 'vitest'
import { Button } from '../button'
import { screen } from '@testing-library/react'
import { testRender } from '@/tests/testRender'

describe('Button tests', () => {
    it('renders with children', () => {
        testRender(<Button>Click me</Button>)
        expect(screen.getByRole('button')).toHaveTextContent('Click me')
    })

    it('handles click events', async () => {
        const onClickMock = vi.fn()
        const { user } = testRender(<Button onClick={onClickMock}>Click me</Button>)

        await user.click(screen.getByRole('button'))
        expect(onClickMock).toHaveBeenCalledOnce()
    })

    it('can be disabled', () => {
        testRender(<Button disabled>Click me</Button>)
        expect(screen.getByRole('button')).toBeDisabled()
    })

    it('applies variant classes correctly', () => {
        testRender(<Button variant='destructive'>Delete</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-destructive')
    })
})
