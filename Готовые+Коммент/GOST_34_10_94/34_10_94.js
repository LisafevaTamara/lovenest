

function give_num(h1){  // функция для нахождения номера буквы в алфавите
    let alf = ['а','б','в','г','д','е','ж','з', // задаем алфавит
               'и','й','к','л','м','н','о','п',
               'р','с','т','у','ф','х','ц','ч',
               'ш','щ','ъ','ы','ь','э','ю','я'];

    for (let i = 0; i<alf.length; i++){     // цикл повторяющийся такое количество раз, равное длинне алфавита
        if (h1 == alf[i]){ // находится номер буквы в алфавите (счет с нуля)
            h1 = i+1;   // присваемаем номер буквы в алфавите (счет с единицы)
            return h1;  // возвращаем полученное строкой выше
        }
    
    }
    

}


function hash1(text){   // Функция для хэширования текста
    let p = 31;
    let h1 = give_num(text[0]); // переменной h1 присваиваем номер в алфавите первой буквы
    let h2 = 0;
    for(let i = 1;i<text.length;i++){   // цикл повторяющийся такое количество раз, равное длинне текста
        h2 = give_num(text[i]); // переменной h2 присваиваем номер в алфавите буквы из текста
        h1 = ((h1+h2) * (h1+h2))%p; // считается хэш по формуле
    
    }
    return h1;  // возвращаем хэш

}


function prost(number){     // функция для проверки числа (Простое или нет)
    let isPrime = true; // флаг


    if (number === 1) { // если число равно единице, возврашаем false (Не простое)
        return false;   
    }

    else if (number > 1) { // если число больше 1

        for (let i = 2; i < number; i++) { // если у числа есть делители, то оно не простое
            if (number % i == 0) {         //...
                isPrime = false;           //...
                break;                     // если делитель был найден, в флаг записывается значение false, и цикл прерывается 
            }
        }

        if (isPrime) { // если флаг остался True, число простое
            return true;
        } else {
            return false;
        }
    }


    else {  // во всех других случаях в флаг записывается значение false
        return false;
    }

}




// главная функция
function gost_r_34_10_94(){
    // Получаем координаты нескольких пространств, в которые будут вставлены оповещения об ошибках и обработанный текст (от 72 до 76 строки)
    let vvod = document.getElementById('div1');
    let vvod2 = document.getElementById('div2');
    let vvod3 = document.getElementById('div3');
    let vvod4 = document.getElementById('div4');
    let vvod5 = document.getElementById('div5');
    
    let text = document.getElementById('textid').value; // получаем текст из интерфейса

    // получаем некоторые значения из интерфейса (от 81 до 85)
    let a = Number(document.getElementById('aid').value);
    let p = Number(document.getElementById('pid').value);
    let k = Number(document.getElementById('kid').value);
    let q = Number(document.getElementById('qid').value);
    let x = Number(document.getElementById('xid').value);

    text = text.toLowerCase()   // переводит весь полученный текст в нижний регистр
    while(text.indexOf('.') != -1){         // цикл пока в тексте ещё есть точки
        text = text.replace('.',' тчк');    // замена найденной точки на 'тчк'
    }                                       // конец цикла while

    while(text.indexOf(',') != -1){         // цикл пока в тексте ещё есть запятые
        text = text.replace(',',' зпт');    // замена найденной запятые на 'зпт'
    }                                       // конец цикла while

    while(text.indexOf('-') != -1){         // цикл пока в тексте ещё есть тире
        text = text.replace('-',' трэ');    // замена найденной тире на 'трэ'
    }                                       // конец цикла while

    while(text.indexOf('–') != -1){         // цикл пока в тексте ещё есть тире ( вторая вариация этого символа)
        text = text.replace('–',' трэ');    // замена найденной тире на 'трэ'
    }                                       // конец цикла while

    while(text.indexOf(' ') != -1){         // цикл пока в тексте ещё есть пробел
        text = text.replace(' ','');      // замена найденной пробелы на 'прб'
    }                                       // конец цикла while


    var aa = BigInt(a);         // переводим a в тип данных BigInt
    var pp = BigInt(p);         // переводим p в тип данных BigInt
    var qq = BigInt(q);         // переводим q в тип данных BigInt
    var kk = BigInt(k);
    var xx = BigInt(x);      
     
                                // действия выше необходимы для того, чтобы работать с очень большими числами
    var yy = (aa**qq)%pp;       // считаем по формуле проверку а
    yy = Number(yy)             // убираем n на конце, переводя результат обратно в int
    if(p-1<=a<=1 && yy!=1){           // проверка а
        vvod.innerHTML='a не подходит';
        console.log((a**q)%p)
        console.log('<a> не подходит')
        return;
    }
    
    if(x>=q){                               // проверка x
        vvod.innerHTML='x не подходит';
        console.log('<x> не подходит')
        return;
    }
    if(prost(p)==false){                    // проверка p
        vvod.innerHTML='p не простое';
        console.log('<p> не простое')
        return;
    }
    console.log(text)
    let h = hash1(text);        // считаем хэш
    console.log(h, "Хэш")
    var y = (aa**xx)%pp;           // считаем Игрик
    y = Number(y)

    var r = ((aa**kk)%pp)%qq;           // считаем r
    r = Number(r)
    // var s = 0;
                    // объявляем переменную s
    var xx = BigInt(x);         
    var qq = BigInt(q);         
    var rr = BigInt(r);
    var hh = BigInt(h);         
    var kk = BigInt(k);         
    var s = (xx * rr + kk * hh)%qq
    s = Number(s)               // считаем s
    if(r==0){                   // проверка r
        vvod.innerHTML='r = 0, выберете другую k';
        console.log('r = 0, выберете другую k')
        return;
    }
    //Подпись (демонстрация результатов)
    let podpis = '' + 'r: ' + r + ' | ' + 's: '+ s;
    vvod2.innerHTML=podpis;
    console.log('r: ',r,'|','s: ',s);

    //Проверка подписи
    // далее проходит подсчет по формуле
    let v = 0;
    v = (h**(q-2))%q // считаем v
    let z1,z2 = 0;
    z1 = (s*v)%q;
    z2 = ((q-r)*v)%q
    var aaa = BigInt(a);         
    var zz1 = BigInt(z1);        
    var yyy = BigInt(y);
    var zz2 = BigInt(z2);         
    var ppp = BigInt(p);         
    var qqq = BigInt(qq);
    var u = (((aaa**zz1)*(yyy**zz2))%ppp)%qqq; // считаем u
    u = Number(u)
    vvod3.innerHTML='Проверка подписи';
    console.log('Проверка подписи');
    let vv = ' u = ' + u + ' | ' + 'r = ' + r;
    vvod4.innerHTML=vv;
    console.log(u, r)
    if(u==r){ // если u равен r то подпись правильная
        vvod5.innerHTML='Подпись верна!';
        console.log('Подпись верна!')
    }
    else{
        vvod5.innerHTML='Подпись не привильная';
        console.log('Подпись не привильная');

    }



}

//..............p...q...a...x...h.....k....
//..............\/..\/..\/..\/..\/....\/
//gost_r_34_10_94(53, 13, 10, 3, 'кто', 5);