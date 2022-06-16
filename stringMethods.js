//accessing javascript string using string methods

//String.prototype.charAt()
// const imString = 'charAt method works with string only '
// const res = imString.charAt(0)
//console.log(res);


// String.prototype.concat()
//  const imString = 'This is Javascript string  method  which works with string only '
// const res = imString.concat('--i have also joined with you ')
// console.log(res);



// String.prototype.endsWith() ====>> it returns boolean to check whether it ends with given string 
//const imString = 'This is Javascript string  method  which works with string only '
//im expecting false here
// const res = imString.endsWith('only1')
// console.log(res);

// String.prototype.includes() ==> it returns true or false || boolean  so we can use ternary operator for better approach
// const imString = 'This is Javascript string  method  which works with string only '
// const res = imString.includes(1) ? 'yea it includes': 'nah! does not found '
// console.log(res);

// String.indexOf() basically it returns the given string index 
//  const imString = 'This is Javascript string  method  which works with string only '
// const res = imString.indexOf('string')
// console.log(res);



// String.prototype.match() ->it checks with given string and returns that matches string
//   const imString = 'This is Javascript string  method  which works with string only '
// const res = imString.match('T')
// console.log(res);

// String.prototype.repeat() it repeats the string
//    const imString = 'This is Javascript string  method  which works with string only '
// const res = imString.repeat(2)
// console.log(res);

// String.prototype.replace() it takes two params where one will replace with another
//     const imString = 'This is Javascript string  method  which works with string only '
//  const res = imString.replace('This','Hello folks!')
// console.log(res);

// String.prototype.search() it searches and returns the index value
//      const imString = 'This is Javascript string  method  which works with string only '
// const res = imString.search('T')
// console.log(res);

// String.prototype.slice() it slices or returns the given string value
//      const imString = 'This is Javascript string  method  which works with string only'
// const res = imString.slice(-1)    /// starts from end
// console.log(res);  //output y


// String.prototype.split()
      const imString = 'This is Javascript string  method  which works with string only'
const res = imString.split(' ')
console.log(res[3]);  //output string

// String.prototype.startsWith()
// String.prototype.substring()
// String.prototype.toString()
// String.prototype.toUpperCase()
// String.prototype.trim()
// String.prototype.valueOf()





