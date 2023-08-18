import { UniqueEntityId } from "../unique-entity-id.vo"
import { Entity } from "./entity"

class StubEntity extends Entity<{prop1: string, prop2: number, prop3: Date}>{}

describe('Entity unit tests', () => {
    it('should set props and id', () => {
        const props = {
            prop1: 'prop1',
            prop2: 2,
            prop3: new Date()
        }
        const entity = new StubEntity(props)
        expect(entity.props).toEqual(props)
        expect(entity.id).toBeDefined()
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    })
    it('should be accept a valid UUID', () => {
        const props = {
            prop1: 'prop1',
            prop2: 2,
            prop3: new Date()
        }
        const uuid = new UniqueEntityId()
        const entity = new StubEntity(props, uuid)
        expect(entity.id).toBe(uuid.toString())
    })
    it('should be convert toJSON', () => {
        const props = {
            prop1: 'prop1',
            prop2: 2,
            prop3: new Date()
        }
        const uuid = new UniqueEntityId()
        const entity = new StubEntity(props, uuid)
        expect(entity.toJSON()).toStrictEqual({
            id: uuid.toString(),
            ...props
        })
    })
})