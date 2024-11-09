/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
// var createCounter = function(init) {
//       let count = init ;
//        const increment =()=>{
//             return ++count;
//         }
//       const decrement=()=>{
//            return ount;
//        }
//        const reset =()=>{
//         count = init ;
//          return count;
//         }
    
//     return{
//       increment : increment,
//       decrement : decrement,
//       reset: reset
    
//     }
// };

class Counter {
    constructor(init){
        this.init=init;
        this.count= init;
    }
   increment(){
            return ++this.count;
        }
    decrement(){
           return --this.count;
       }
       reset (){
        this.count = this.init ;
         return this.count;
        }
}

var createCounter = function(init) {
    const counter = new Counter(init);
     return{
        increment: () => counter.increment(), // Correct: returning a function
        decrement: () => counter.decrement(),
        reset: () => counter.reset()
    
    }
}
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */