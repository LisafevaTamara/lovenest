

function DH(a,n,k){
    let vvod = document.getElementById('div1');
    if (a<1 || a>n){
        console.log('а не соответствует требованиям (1 < a < n)')
        vvod.innerHTML='а не соответствует требованиям (1 < a < n)';
        return 0;
    }
    if (k<2 || k>n-1){
        console.log('K не соответствует требованиям 2 <= K <= n-1 )')
        vvod.innerHTML='K не соответствует требованиям (2 <= K <= n-1 )';
        return 0;
    }
    let y = (a ** k)%n; // открытый ключ
    console.log('Секретный ключ K = ', k)
    console.log('Открыйтый ключ Y = ', y)
    //console.log('Общий секретный ключ К ',(y**a)%n)
    return [y, a, n, k];

}
// console.log('Пользователь A')
// let ya = DH(5,19,11);
// ////////////a.n..k
// console.log('Пользователь B')
// let yb = DH(5,19,9);
////////////a.n..k







//[y, a, n, k]
function DH_prov(){
    let aa = Number(document.getElementById('aid').value);
    let n = Number(document.getElementById('nid').value);
    let k1 = Number(document.getElementById('k1id').value);
    let k2 = Number(document.getElementById('k2id').value);

    let vvod2 = document.getElementById('div2');
    let vvod3 = document.getElementById('div3');
    let vvod4 = document.getElementById('div4');
    let vvod5 = document.getElementById('div5');

    let ya = DH(aa,n,k1);
    let yb = DH(aa,n,k2);
    console.log('Проверка пользователя A')



    let provA1 = (yb[0]**ya[3])%ya[2];
    let provB1 = (ya[0]**yb[3])%ya[2];
    let provA2 = (ya[1] ** (ya[3]*yb[3]))%ya[2];
    let provB2 = (ya[1] ** (yb[3]*ya[3]))%ya[2];
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
        vvod2.innerHTML= 'Обе проверки выполнены успешно!';
        console.log(a);
        vvod3.innerHTML= a;
        let txt = 'Проверка 1: ' + 'A = ' + provA1 + '; B = ' + provB1;
        console.log('Проверка 1: ', 'A = ', provA1, '; B = ', provB1);
        vvod4.innerHTML= txt
        let txt2 = 'Проверка 2: ' + 'A = ' + provA2 + '; B = ' + provB2;
        console.log('Проверка 2: ', 'A = ', provA2, '; B = ', provB2);
        vvod5.innerHTML= txt2;
    }
    else{
        console.log('Проверки закончились неудачно!')
        vvod2.innerHTML= 'Проверки закончились неудачно!';
        console.log(a);
        vvod3.innerHTML= a;
        let txt = 'Проверка 1: ' + 'A = ' + provA1 + '; B = ' + provB1;
        console.log('Проверка 1: ', 'A = ', provA1, '; B = ', provB1);
        vvod4.innerHTML= txt
        let txt2 = 'Проверка 2: ' + 'A = ' + provA2 + '; B = ' + provB2;
        console.log('Проверка 2: ', 'A = ', provA2, '; B = ', provB2);
        vvod5.innerHTML= txt2;
    }
    
    
}
console.log('----------------------------------------------------------------')
//DH_prov(ya[0], yb[0], ya[3], yb[0][3], ya[2], ya[1])

//[y, a, n, k, kk]
// console.log((yb[0][0]**ya[3])%ya[2]);
// console.log((yb[0][1]**(ya[3]*ya[3]))%ya[2]);