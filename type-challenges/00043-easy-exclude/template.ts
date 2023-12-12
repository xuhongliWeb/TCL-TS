type MyExclude<T, U> = T extends U? never:T


// never类型和其他类型一起联合的时候，会自动剔除掉never。
// 然后never跟其他类型一起做交叉类型的时候，返回never。

// ## js


function MyExclude(arr1:any[],arr2:any[]) {
    let result = []
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];

        if (!arr2.includes(element)) {
            result.push(element);
        }
        
    }
    return result
}