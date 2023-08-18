import { Entity } from "../../../@seedwork/domain/entity/entity"
import { UniqueEntityId } from "../../../@seedwork/domain/unique-entity-id.vo"

export interface CategoryProperties {
    name: string
    description?: string
    is_active?: boolean
    created_at?: Date
}

export class Category extends Entity<CategoryProperties> {
    constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
        super(props, id)
        this.description = this.props.description
        this.is_active = this.props.is_active ?? true
        this.props.created_at = props.created_at ?? new Date()
    }

    get name() {
        return this.props.name
    }

    get description() {
        return this.props.description
    }
    private set description(value: string) {
        this.props.description = value ?? null
    }

    get is_active() {
        return this.props.is_active
    }

    private set is_active(value: boolean) {
        this.props.is_active = value ?? true
    }

    get created_at() {
        return this.props.created_at
    }

    update(name: string, description?: string) {
        this.props.name = name
        this.description = description
    }

    activate() {
        this.is_active = true
    }

    deactivate() {
        this.is_active = false
    }
}