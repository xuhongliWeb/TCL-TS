
// 1.T 如果是空数组返回never 否则返回第1个
// type First<T extends any[]> = T extends []? never:T[0] 
// 2.获取T的length属性， indexed 
// type First<T extends any[]> = T['length'] extends 0?never:T[0]
// 3.遍历数组的方式
// type First<T extends any[]> = T[0] extends T[number]?T[0]:never
// 4.结构方式
type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F:never
type Last<T extends any[]> = T extends [infer F, ...infer Rest] ? Rest:never

type arr1 = Last<[1,2,3]>


// ## js

// function first (arr) {
    // const [F,...R] = arr
//     return arr[0]
// }

// ## 知识点

// extends 类型条件判断
// 湖区tuple 的length 属性 indexed 
// extends union 判断规则

// inter 的 用法

