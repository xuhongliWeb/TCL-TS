type Length<T extends readonly any[]> = T['length'];

// 类型“readonly ["tesla", "model 3", "model X", "model Y"]”不满足约束“any[]”。
//   类型 "readonly ["tesla", "model 3", "model X", "model Y"]" 为 "readonly"，不能分配给可变类型 "any[]"。
// ## js

function getLength(array) {
    if(Object.prototype.toString.call(array) !== '[object Array]') return

    return array.length
}