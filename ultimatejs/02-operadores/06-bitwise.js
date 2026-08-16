// Decimal: 1,2,3,4,5,6,7,8,9
// Bianrio: 0,1
// bit: 0 1
// Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Byte: 00001010 -> 10


console.log(1 | 3); // 00000011 -> 3
console.log(1 | 4); // 00000101 -> 5
console.log(3 | 5); // 00000111 -> 7

console.log(1 & 3); // 00000001
console.log(1 & 4); // 00000000 
console.log(3 & 5); // 00000001 
console.log(4 & 11); // 00000001