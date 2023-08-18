import { deepFreeze } from "./object"

describe('Object Unit Test', () => {
    it('should not freeze a scalar value', () => {
        const str = deepFreeze('test')
        expect(typeof str).toBe('string')

        const num = deepFreeze(1)
        expect(typeof num).toBe('number')

        const bool = deepFreeze(true)
        expect(typeof bool).toBe('boolean')

        const nil = deepFreeze(null)
        expect(typeof nil).toBe('object')

        const undef = deepFreeze(undefined)
        expect(typeof undef).toBe('undefined')

        const sym = deepFreeze(Symbol('test'))
        expect(typeof sym).toBe('symbol')

        const teste = deepFreeze({
            name: 'teste',
            data: new Date()
        })
        expect(typeof teste).toBe('object')
        expect(teste.data).toBeInstanceOf(Date)
    })
})