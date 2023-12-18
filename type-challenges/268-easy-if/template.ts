type If<T extends boolean,I,K> = T extends true ?I:K

type e = true


// js 


function If (T,I,K) {
 return T?I:K
}

// 类型兼容性 | expends 规则 | 顶层类型

// null 严格模式和非严格模式的区别

// 1. https://www.typescriptlang.org/docs/handbook/type-compatibility.html
