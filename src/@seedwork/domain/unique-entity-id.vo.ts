import { v4, validate } from "uuid";
import { InvalidUUIDError } from "../errors/InvalidUUID";
import ValueObject from "./value-object";

export class UniqueEntityId extends ValueObject<string> {
    constructor(id?: string) {
        super(id ? id : v4())
        this.validate()
    }

    private validate() {
        const isValid = validate(this.value)
        if (!isValid) {
            throw new InvalidUUIDError()
        }
    }
}