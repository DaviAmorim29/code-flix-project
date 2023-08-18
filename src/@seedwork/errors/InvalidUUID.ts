export class InvalidUUIDError extends Error {
    constructor(message?: string) {
        super(message || `Invalid UUID`)
        this.name = 'InvalidUUIDError'
    }
}