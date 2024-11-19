import { describe, it, expect } from 'vitest'

describe('Addition tests', () => {
    it('adds two numbers', () => {
        expect(1 + 1).toBe(2)
    })
    it('adds two negative numbers', () => {
        expect(-1 + -1).toBe(-2)
    })
    it('adds a negative and a positive number', () => {
        expect(-1 + 1).toBe(0)
    })
    it('adds a positive and a negative number', () => {
        expect(1 + -1).toBe(0)
    })
    it('adds two large numbers', () => {
        expect(100 + 100).toBe(200)
    })
})
