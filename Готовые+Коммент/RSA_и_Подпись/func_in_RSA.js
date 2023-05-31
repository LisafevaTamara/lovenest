function give_num(h1){      // функция для нахождения номера буквы в алфавите
    let alf = ['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
    for (let i = 0; i<alf.length; i++){
        if (h1 == alf[i]){ 
            h1 = i+1;
            return h1;
        }
    
    }
    

}

function gcd(a, b) {        // функция для нахождения НОД
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

function prost(number){ // функция проверки на простое число
    let isPrime = true;


    if (number === 1) {
        return false;
    }

    else if (number > 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return true;
        } else {
            return false;
        }
    }

    else {
        return false;
    }

}

function find_inverse(e,N){     // функция для решения сравнений по модулю
    function egcd(a,b){
        if (b==0){
            return [1, 0]
        }
        else{
            let [x, y] = egcd(b, a % b)
            return [y, (x - (Math.floor(a/b))*y)]
        }
    }
    let [x, y] = egcd(e,N);
    if(x< 0){
        x+=N;
    }

    return x;

}



function hash(text){        // Хэш
    let p = 31;
    let h1 = give_num(text[0]);
    let h2 = 0;
    for(let i = 1;i<text.length;i++){
        h2 = give_num(text[i]);
        h1 = ((h1+h2) * (h1+h2))%p;
    
    }
    return h1;

}