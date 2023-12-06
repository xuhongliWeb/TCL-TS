type MyPick<T, K extends keyof T> = {
    [P in K]:T[P]
}

// 遍历union in
// 约束 extends 循环对比

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html