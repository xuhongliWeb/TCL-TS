type Concat<T extends Array<unknown>,K extends Array<unknown>>  = [...T,...K]
// type Concat<T extends unknown[], Y extends unknown[]> = [...T, ...Y];


// js

function Concat (arr1,arr2) {
    return [...arr1,...arr2];
}