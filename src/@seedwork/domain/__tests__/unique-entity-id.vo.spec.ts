import { InvalidUUIDError } from "../../errors/InvalidUUID"
import { UniqueEntityId } from "../unique-entity-id.vo"

describe('UniqueEntityID', () => {
    test('gen ID', () => {
        const id = new UniqueEntityId()
        expect(id.value).toBeDefined()
    })
    test('invalid UUID', () => {
        expect(() => {
            new UniqueEntityId('invalid')
        }).toThrowError(InvalidUUIDError)
    })
    it('should be call validate', () => {
        const spy = jest.spyOn(UniqueEntityId.prototype as any, 'validate')
        new UniqueEntityId()
        expect(spy).toHaveBeenCalled()
    })
})