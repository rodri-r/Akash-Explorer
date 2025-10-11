import { describe, it, expect } from 'vitest'
import { chains, assetLists } from '@/config/chains'

describe('Chain Configuration Tests', () => {
    it('should have chains configured', () => {
        expect(chains).toBeDefined()
        expect(Array.isArray(chains)).toBe(true)
        expect(chains.length).toBeGreaterThan(0)
    })

    it('should have asset lists configured', () => {
        expect(assetLists).toBeDefined()
        expect(Array.isArray(assetLists)).toBe(true)
        expect(assetLists.length).toBeGreaterThan(0)
    })

    it('should have matching number of chains and asset lists', () => {
        expect(chains.length).toBe(assetLists.length)
    })

    it('should have valid chain properties', () => {
        chains.forEach((chain) => {
            expect(chain).toHaveProperty('chainName')
            expect(chain).toHaveProperty('chainId')
            expect(chain.chainName).toBeTruthy()
            expect(chain.chainId).toBeTruthy()
        })
    })

    it('should have valid asset list properties', () => {
        assetLists.forEach((assetList) => {
            expect(assetList).toHaveProperty('chainName')
            expect(assetList).toHaveProperty('assets')
            expect(assetList.chainName).toBeTruthy()
            expect(Array.isArray(assetList.assets)).toBe(true)
        })
    })
})
