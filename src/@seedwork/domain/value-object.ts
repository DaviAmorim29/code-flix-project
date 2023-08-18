import { deepFreeze } from "./utils/object";

export default abstract class ValueObject<T = any> {
    protected readonly _value: T;

    constructor(value: T) {
        this._value = deepFreeze(value)
    }

    get value(): T {
        return this._value
    }

    toString = (): string => {
        // validate is object
        if (typeof this.value !== 'object' || this.value === null)  {
            try {
                return this.value.toString()
            } catch(e) {
                return this.value + ""
            }
        }
        const value = this.value.toString()
        if (value === '[object Object]') {
            return JSON.stringify(this.value)
        }
        return value
    }
}