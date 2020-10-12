let a = [1,9,2,8,10,90,50,5, 1, 2, 10]
// console.log(new Set(a))
var b = [1,9,2,8,10,90,50,5]
// console.log(b.sort((a, b) => a - b))

function sortFun (arr) {
    for (var i = 0; i < arr.length - 1 ; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j+1] 
                arr[j+1] = temp
            }   
        } 
    }
    return arr
}

// console.log(sortFun(b))


function quickSort (arr) {
    if (arr.length < 2) return arr
    let index = Math.floor(arr.length / 2)
    let value = arr.splice(index, 1)[0]
    let left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= value ) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(value, quickSort(right))
}

// console.log(quickSort(b))

// big int  product
function product (num1, num2) {
    let arr1 = String(num1).split('').reverse()
    let arr2 = String(num2).split('').reverse()
    let result=[];
    for (let i = 0; i < arr1.length; i++) {
       for (let j = 0; j < arr2.length; j++) {
           result[i+j] =  result[i + j] || 0
           result[i+j]+=parseInt(arr1[i]) * parseInt(arr2[j]);
       }
        
    }
    let temp
    for (let k = 0; k < result.length; k++) {
        if (result[k] > 9) {
            temp = Math.floor(result[k]/10);
            result[k] = result[k] % 10
            result[k+1] = result[k+1] ||0
            result[k+1] += temp
        }
        
    }
    return result.reverse().join('')
}



// console.log(product(2123131311, 71999132132132132))
// console.log(product(2, 3))
// console.log(dazhenghsuAdd)

function dazhenghsuAdd(str1,str2){
    str1=String(str1).split('').reverse();
    str2=String(str2).split('').reverse();
    let result=[];
    for(let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
            result[i+j]=result[i+j]||0;//如果result[i+j]是undefined则将其变为0
            result[i+j]+=parseInt(str1[i])*parseInt(str2[j]);
        }
    }
    let temp;
    for(let k=0;k<result.length;k++){
        if(result[k]>9){
            temp=Math.floor(result[k]/10);
            result[k]=result[k]%10;
            result[k+1]=result[k+1]||0;
            result[k+1]+=temp;
        }
    }
    return result.reverse().join('');
}

// console.log(dazhenghsuAdd(21, 719))
// console.log(aaaa)
var multiply = function(num1, num2) {
    var arr1  = String(num1).split('').reverse()
    var arr2  = String(num1).split('').reverse()
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            result[i+j] = result[i+j] || 0
            console.log(parseInt(arr1[i]) * parseInt(arr2[j]))
            result[i+j] += parseInt(arr1[i]) * parseInt(arr2[j])
        }
    }
    let temp;
    for (var k = 0; k<result.length; k++) {
        if (result[k] > 9) {
            temp = Math.floor(result[k] / 10)
            result[k] = result[k] % 10
            result[k+1] = result[k+1] ||0
            result[k+1] += temp
        }
    }
    return result.reverse().join('')
};

// console.log(multiply(2,3))



function lxw (str) {
    let obj = str.split('').reduce((res, key) => {
        if (res[key]) {
            res[key] +=1
        } else {
            res[key] = 1
        }
        return res
    }, {})
    return Object.keys(obj)[ Object.values(obj).indexOf(Math.min(...Object.values(obj)))]
}

console.log(lxw('asdadkjunkajdsadjasdaasdadhhhhnnni'))