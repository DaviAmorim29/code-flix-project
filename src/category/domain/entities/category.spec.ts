import { omit } from 'lodash'
import { UniqueEntityId } from '../../../@seedwork/domain/unique-entity-id.vo'
import { Category, CategoryProperties } from "./category"

describe('Category', () => {
    test('Contructor test', () => {
        let category = new Category({
            name: 'Movie'
        })
        let props = omit(category.props, ['created_at'])
        expect(props).toStrictEqual({
            name: 'Movie',
            description: null,
            is_active: true
        })
        expect(category.props.created_at).toBeInstanceOf(Date) 

        let created_at = new Date()
        category = new Category({
            name: 'movie',
            description: 'description',
            is_active: false,
        })
        expect(category.props).toStrictEqual({
            name: 'movie',
            description: 'description',
            is_active: false,
            created_at
        })
        category = new Category({
            name: 'movie',
            description:'description',
        })

        expect(category.props).toMatchObject({
            name: 'movie',
            description: 'description',
            is_active: true,
        })
    })
    test('has id', () => {
        const category = new Category({
            name: 'Movie'
        })
        expect(category.id).toBeDefined()
    })
    test('has created_at', () => {
        const category = new Category({
            name: 'Movie'
        })
        expect(category.created_at).toBeDefined()
    })
    test('id field', () => {
        type CategoryData = { props: CategoryProperties, id: UniqueEntityId | null | undefined }
        const data: CategoryData[] = [
            { props: { name: 'Movie' }, id: null },
            { props: { name: 'Movie' }, id: undefined },
            { props: { name: 'Movie' }, id: new UniqueEntityId() },
        ]

        data.forEach(item => {
            const category = new Category(item.props, item.id)
            expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
            expect(category.id).toBe(category.uniqueEntityId.toString())
        })
    })

    it('should be update category', () => {
        const category = new Category({
            name: 'Movie'
        })
        category.update('Movie 2', 'description')
        expect(category.props).toStrictEqual({
            name: 'Movie 2',
            description: 'description',
            is_active: true,
            created_at: category.props.created_at
        })
    })
    it('should be activate/deactivate category', () => {
        const category = new Category({
            name: 'Movie'
        })
        category.deactivate()
        expect(category.props.is_active).toBe(false)
        category.activate()
        expect(category.props.is_active).toBe(true)
    })
})
