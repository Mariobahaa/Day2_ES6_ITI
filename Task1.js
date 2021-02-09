function* fib1(elem){
    let bprev = 1;
    let prev = 1;
    
    if(elem >= 1)
    yield bprev;
    
    if(elem>=2)
    yield prev;
    
    for(let i=2; i<elem; i++){
        let sum = bprev + prev
        bprev =prev;
        prev = sum;
        yield sum;
    }
}

let it1 = fib1(5);
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());


function* fib2(max){
    let bprev = 1;
    let prev = 1;
    let cnt = 0;
    if(cnt ==0 && max>=1) { cnt++; yield 1;}
    if(cnt ==1 && max>=1) {cnt++; yield 1;}
    let sum = bprev + prev;
    
    do{
        sum = bprev + prev;
        bprev =prev;
        prev = sum;
        if(sum<=max)
        yield sum;
    }while(sum<=max)
    
}

let it2 = fib2(5);
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
