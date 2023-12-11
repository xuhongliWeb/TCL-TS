type TupleToObject<T extends readonly (string|number|symbol)[]> = {
    [P in T[number]]: P
}





// [P in T[number]] - 遍历ts 数组 
//  [P in T] 遍历对象
// keyof 遍历 联合类型
// typeof 把 js 世界 转换为ts 类型世界
// ## js 

function tupleToObject (arr) {
    let obj = {}
    arr.array.forEach(element => {
        obj[element] = element
    });
    return obj; 
}

// ## const 

let str = 'str'
type S1 = typeof str // string

const arr = ['a', 'b', 'c', 'd', 'e']
type T2 = typeof arr // string [] 没有子类型
arr[0] = 'xx' // 可以改变 string [] 没有子类型
 
const arr2 = ['a', 'b', 'c', 'd'] as const

const T2 = typeof arr2

// arr2[0] = 'xxx' // readonly ["a", "b", "c", "d"]

// typeof 把 js 世界 转换为ts 类型世界

