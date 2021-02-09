let obj = {
    fname: "Mario",
    lname: "Bahaa",
    age: 22,
    [Symbol.iterator] (){
        let me = this;
        let ind = 0;
        let len = Object.entries(this).length;
        let iterator ={
            next: function(){
                ind++;
        
                if(ind > len)
                    {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                return{
                    value:Object.entries(me)[ind-1] ,
                    done:false
                }
            }
        }
        return iterator;
    }
}

let it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


//-----------------------------------------
// function customIterator(start,end,step) {
//     let value = start;
//     let iterator = {
//         next: function () {
//             // debugger
//             let temp = value;
//             value += step;
//             if(temp > end){
//                 return {
//                     value:undefined,
//                     done:true
//                 }
//             }
//             return {
//                 value:temp,
//                 done:false 
//             }
//         }
//     }
//     return iterator
// }
