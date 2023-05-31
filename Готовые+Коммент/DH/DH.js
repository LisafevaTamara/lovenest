

function DH(a,n,k){ // функция шифрвоки по алгоритму Diffi Helman
    let vvod = document.getElementById('div1'); // берем координаты области для ошибок в интерфейсе
    if (a<1 || a>n){    // проверка а
        console.log('а не соответствует требованиям (1 < a < n)')
        vvod.innerHTML='а не соответствует требованиям (1 < a < n)';
        return 0;
    }
    if (k<2 || k>n-1){  // проверка k
        console.log('K не соответствует требованиям 2 <= K <= n-1 )')
        vvod.innerHTML='K не соответствует требованиям (2 <= K <= n-1 )';
        return 0;
    }
    let y = (a ** k)%n; // открытый ключ y
    console.log('Секретный ключ K = ', k)
    console.log('Открыйтый ключ Y = ', y)
    //console.log('Общий секретный ключ К ',(y**a)%n)
    return [y, a, n, k]; // возвращаем массив определенных данных

}

// console.log('Пользователь A')
// let ya = DH(5,19,11);
// ////////////a.n..k
// console.log('Пользователь B')
// let yb = DH(5,19,9);
////////////a.n..k







//[y, a, n, k]
function DH_prov(){ // главная функция
    // получаем некоторые значения из интерфейса (от 39 до 42) 
    let aa = Number(document.getElementById('aid').value);
    let n = Number(document.getElementById('nid').value);
    let k1 = Number(document.getElementById('k1id').value);
    let k2 = Number(document.getElementById('k2id').value);

    // Получаем координаты нескольких пространств, в которые будут вставлены оповещения об ошибках и обработанный текст (от 45 до 48 строки)
    let vvod2 = document.getElementById('div2');
    let vvod3 = document.getElementById('div3');
    let vvod4 = document.getElementById('div4');
    let vvod5 = document.getElementById('div5');

    let ya = DH(aa,n,k1);   // получаем шифр для пользователя A
    let yb = DH(aa,n,k2);   // получаем шифр для пользователя B
    console.log('Проверка пользователя A')


    // Далее проходят две проверки. Проверки выполняются по формулам    (строки 56 - 59)
    let provA1 = (yb[0]**ya[3])%ya[2];
    let provB1 = (ya[0]**yb[3])%ya[2];
    let provA2 = (ya[1] ** (ya[3]*yb[3]))%ya[2];
    let provB2 = (ya[1] ** (yb[3]*ya[3]))%ya[2];
    let flagA1 = false;     // флаг для 1й проверки
    let flagA2 = false;     // флаг для 2й проверки
    let a = '';
    if(provA1 == provB1){   //первая проверка (успешно)
        flagA1 = true;  // если проверка проходит удачно флаг 1й проверки становится True
        a += 'V '       // чисто визуальная часть.
    }
    else{                   //первая проверка (не успешно)
        a += 'X '           // чисто визуальная часть.
    }
    if(provA2 == provB2){   //вторая проверка (успешно)
        flagA2 = true;      // если проверка проходит удачно флаг 1й проверки становится True
        a += 'V '           // чисто визуальная часть.
    }
    else{                   //вторая проверка (не успешно)
        a += 'X '           // чисто визуальная часть.
    } 
    if (flagA1 == true && flagA2 == true, provA1 != 1, provB1 != 1){    // если все проверки пройдены успешно
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
    else{                                                               // если одна или все проверки пройдены не успешно
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