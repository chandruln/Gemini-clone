
function primeNumber(n){
    if(n==2 || n==3)
        return true ;
    if(n%2 == 0)
        return false ;
    for(let i=3; i<=Math.sqrt(n); i+=2){
        if(n%i == 0)
            return false;
    }
    return true;
}

// function primeNumber(n){
//     if(n==2 || n==3)
//         return true ;
//     if(n%2 == 0 || n % 3 == 0)
//         return false ;
//     for(let i=5; i<Math.sqrt(n); i+=6){
//         if((n%i == 0) || (n%(i+2) == 0))
//             return false;
//     }
//     return true;
// }

function printPrimeNumber(n){
    let result = []
    for(let i=1;i<=n;i++){
       if(primeNumber(i)){
        result.push(i)
       }
    }
    console.log(result)
}

printPrimeNumber(100);

