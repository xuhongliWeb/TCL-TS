type Unshift<T extends Array<unknown>,K> = [K,...T]


// js
function Unshift (T,K) {
    return [K,...T]
}

// type Itype = {
//     age: number; //
//     type: string; //
// }

// type IName = {
//     name:string; //
//     type:number; //
// }

// type Iall = Itype & IName; //

// const obj:Iall = {
//     age:1,
//     type: '',
//     name: ''
// }