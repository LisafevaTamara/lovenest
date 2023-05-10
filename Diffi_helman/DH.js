

function DH(a,n,k){
    if (a<1 || a>n){
        console.log('а не соответствует требованиям (1 < a < n)')
        return 0;
    }
    if (k<2 || k>n-1){
        console.log('K не соответствует требованиям 2 <= K <= n-1 )')
        return 0;
    }
    let y = (a ** k)%n; // открытый ключ
    console.log('Секретный ключ K = ', k)
    console.log('Открыйтый ключ Y = ', y)
    //console.log('Общий секретный ключ К ',(y**a)%n)
    return [y, a, n, k];

}
console.log('Пользователь A')
let ya = DH(5,19,11);
////////////a.n..k
console.log('Пользователь B')
let yb = DH(5,19,9);
////////////a.n..k







//[y, a, n, k]
function DH_prov(ya, yb, ka, kb, na, aa,){
    console.log('Проверка пользователя A')
    let provA1 = (yb**ka)%na;
    let provB1 = (ya**kb)%na;
    let provA2 = (aa ** (ka*kb))%na;
    let provB2 = (aa ** (kb*ka))%na;
    let flagA1 = false;
    let flagA2 = false;
    let a = '';
    if(provA1 == provB1){
        flagA1 = true;
        a += 'V '
    }
    else{
        a += 'X '
    }
    if(provA2 == provB2){
        flagA2 = true;
        a += 'V '
    }
    else{
        a += 'X '
    } 
    if (flagA1 == true && flagA2 == true, provA1 != 1, provB1 != 1){
        console.log('Обе проверки выполнены успешно!')
        console.log(a);
        console.log('Проверка 1: ', 'A = ', provA1, 'B = ', provB1);
        console.log('Проверка 2: ', 'A = ', provA2, 'B = ', provB2);
    }
    else{
        console.log('Проверки закончились неудачно!')
        console.log(a);
        console.log('Проверка 1: ', 'A = ', provA1, '; B = ', provB1);
        console.log('Проверка 2: ', 'A = ', provA2, '; B = ', provB2);
    }
    
    
}
console.log('----------------------------------------------------------------')
DH_prov(ya[0], yb[0], ya[3], yb[3], ya[2], ya[1])

//[y, a, n, k, kk]
// console.log((yb[0]**ya[3])%ya[2]);
// console.log((yb[1]**(ya[3]*ya[3]))%ya[2]);