

// 1. infer 


// type MyAwaited<T> = T extends Promise<infer X>?X:never

// 2 递归调用.

// type MyAwaited<T> = T extends Promise<infer X>?MyAwaited<X>:T


// 3. 限制传入类型

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>? X extends Promise<unknown>? MyAwaited<X>:X:never


// 4

// type MyAwaited<T extends object> = T extends 
// | Promise<infer X> 
// | { then: (onfulfilled: (arg: infer X) => any) => any } 
// ? X extends Promise<unknown> ? MyAwaited<X> : X : never


// inter 
// # 只能在条件类型中使用
// # 设置未知数 变量