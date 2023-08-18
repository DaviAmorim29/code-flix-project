export function deepFreeze<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    const props = Object.getOwnPropertyNames(obj)
    for (const prop of props) {
        deepFreeze(obj[prop])
    }
    return Object.freeze(obj)
}