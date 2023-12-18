type MyReadonly<T> = {
   readonly [P in keyof T]: T[P]
}


function Readonly (obj) {
    let r:any = {}
    for (const key in obj) {
       r['readonly'+key] = obj[key]
    }

    return r
}

// 1. 返回对象
// 2. 遍历对象 （ts 接口 js 接口） in keyof  lookup
// 2. key 加关键字 readonly e