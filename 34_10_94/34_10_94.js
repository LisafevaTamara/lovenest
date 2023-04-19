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





function gost_r_34_10_94(p,q,a,x,h,k){
    if(p-1<=a<=1 || (a**q)%p!=1){
        console.log('<a> не подходит')
        return;
    }
    if(x<=q){
        console.log('<x> не подходит')
        return;
    }
    if(prost(p)==false){
        console.log('<p> не простое')
        return;
    }
    let y = (a**x)%p; // Игрик
    let k = 5; // задаётся пользователем
    let r= 0;
    r = ((a**k)%p)%q;
    let s = 0;
    s = (x * r + k * h)%q
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

//проверка q
// добавить хэш