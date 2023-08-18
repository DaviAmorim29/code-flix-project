import ValueObject from "../value-object";

class StubValueObject extends ValueObject {}
describe('Value Object', () => {
    it('should be set value', () => {
        let stub = new StubValueObject('teste')
        expect(stub.value).toBe('teste')

        stub = new StubValueObject(1)
        expect(stub.value).toBe(1)

        stub = new StubValueObject({ name: 'teste' })
        expect(stub.value).toEqual({ name: 'teste' })

        stub = new StubValueObject([1, 2, 3])
        expect(stub.value).toEqual([1, 2, 3])
    })
    it('should be transform to string', () => {
        let stub = new StubValueObject('teste')
        expect(stub.toString()).toBe('teste')

        stub = new StubValueObject('testando')
        expect(`${stub}aqui`).toBe('testandoaqui')

        stub = new StubValueObject({ teste: 'teste'})
        expect(stub.toString()).toBe('{"teste":"teste"}')

        stub = new StubValueObject(null)
        expect(stub.toString()).toBe('null')

        stub = new StubValueObject(undefined)
        expect(stub.toString()).toBe('undefined')

        stub = new StubValueObject(5)
        expect(stub.toString()).toBe('5')

        stub = new StubValueObject([1, 2, 3])
        expect(stub.toString()).toBe('1,2,3')
    })
    it('should be imuatable', () => {
        const stub = new StubValueObject({props: 'teste'})
        expect(() => {
            stub.value.props = 'testando'
        }).toThrow(
            new TypeError('Cannot assign to read only property \'props\' of object \'#<Object>\'')
        )
        expect(stub.value.props).toBe('teste')
    })
})