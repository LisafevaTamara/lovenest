// let p = 53;
// let q = 13;
// let a = 10;
// let x = 3;
// let h = 5; //хэш
// let y = (a**x)%p; // Игрик
// let k = 5; // задаётся пользователем
// let r= 0;
// r = ((a**k)%p)%q;
// let s = 0;
// s = (x * r + k * h)%q
// //Подпись
// console.log('r: ',r,'|','s: ',s);
// //Проверка
// let v = 0;
// v = (h**(q-2))%q
// let z1,z2 = 0;
// z1 = (s*v)%q;
// z2 = ((q-r)*v)%q
// let u = 0;
// u = (((a**z1)*(y**z2))%p)%q;

// console.log(u, r)

function give_num(h1){
    let alf = ['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
    for (let i = 0; i<alf.length; i++){
        if (h1 == alf[i]){ 
            h1 = i+1;
            return h1;
        }
    
    }
    

}


function hash1(text){
    let p = 31;
    let h1 = give_num(text[0]);
    let h2 = 0;
    for(let i = 1;i<text.length;i++){
        h2 = give_num(text[i]);
        h1 = ((h1+h2) * (h1+h2))%p;
    
    }
    return h1;

}


function prost(number){
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





function gost_r_34_10_94(p,q,a,x,text,k){
    if(p-1<=a<=1 && (a**q)%p!=1){
        console.log('<a> не подходит')
        return;
    }
    if(x>=q){
        console.log('<x> не подходит')
        return;
    }
    if(prost(p)==false){
        console.log('<p> не простое')
        return;
    }
    let h = hash1(text);
    let y = (a**x)%p; // Игрик
    //let k = 5; // задаётся пользователем
    let r= 0;
    r = ((a**k)%p)%q;
    let s = 0;
    s = (x * r + k * h)%q
    if(r==0){
        console.log('r = 0, выберете другую k')
        return;
    }
    //Подпись
    console.log('r: ',r,'|','s: ',s);
    //Проверка
    let v = 0;
    v = (h**(q-2))%q
    let z1,z2 = 0;
    z1 = (s*v)%q;
    z2 = ((q-r)*v)%q
    let u = 0;
    u = (((a**z1)*(y**z2))%p)%q;
    console.log('Проверка подписи');
    console.log(u, r)
    if(u==r){
        console.log('Подпись верна!')
    }
    else{
        console.log('Подпись не привильная');

    }



}

//проверку хэша равного 0 (ВОПРОС К ПРЕПОДОВАТЕЛЮ!!!)
//..............p...q...a...x...h.....k....
//..............\/..\/..\/..\/..\/....\/
gost_r_34_10_94(53, 13, 10, 3, 'кто', 5);