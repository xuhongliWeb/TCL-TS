type Unshift<T extends Array<unknown>,K> = [K,...T]


// js
function Unshift (T,K) {
    return [K,...T]
}