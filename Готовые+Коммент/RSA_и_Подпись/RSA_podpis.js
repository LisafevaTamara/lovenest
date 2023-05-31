function hash1(text){   // Функция для хэширования текста
    let p = 31;
    let h1 = give_num(text[0]); // переменной h1 присваиваем номер в алфавите первой буквы
    let h2 = 0;
    for(let i = 1;i<text.length;i++){   // цикл повторяющийся такое количество раз, равное длинне текста
        h2 = give_num(text[i]);         // переменной h2 присваиваем номер в алфавите буквы из текста
        h1 = ((h1+h2) * (h1+h2))%p;     // считается хэш по формуле
    
    }
    return h1;                          // возвращаем хэш

}







function hash_pod(){ // Главная функция

    let text = document.getElementById('2textid').value; // получаем текст из интерфейса

    // Получаем координаты нескольких пространств, в которые будут вставлены оповещения об ошибках и обработанный текст (от 25 до 27 строки)
    let vvod = document.getElementById('div21');
    let vvod2 = document.getElementById('div22');
    let vvod3 = document.getElementById('div23');

    // получаем некоторые значения из интерфейса (от 30 до 32)
    let p = Number(document.getElementById('2pid').value);
    let e = Number(document.getElementById('2eid').value);
    let q = Number(document.getElementById('2qid').value);

    text = text.toLowerCase()               // переводит весь полученный текст в нижний регистр

    while(text.indexOf('.') != -1){         // цикл пока в тексте ещё есть точки
        text = text.replace('.','тчк');     // замена найденной точки на 'тчк'
    }                                       // конец цикла while
    
    while(text.indexOf(',') != -1){         // цикл пока в тексте ещё есть запятые
        text = text.replace(',','зпт');     // замена найденной запятые на 'зпт'
    }                                       // конец цикла while

    while(text.indexOf('-') != -1){         // цикл пока в тексте ещё есть тире
        text = text.replace('-','трэ');     // замена найденной тире на 'трэ'
    }                                       // конец цикла while

    while(text.indexOf('–') != -1){          // цикл пока в тексте ещё есть тире ( вторая вариация этого символа)
        text = text.replace('–','трэ');     // замена найденной тире на 'трэ'
    }                                       // конец цикла while

    while(text.indexOf(' ') != -1){         // цикл пока в тексте ещё есть пробел
        text = text.replace(' ','прб');     // замена найденной пробелы на 'прб'
    }                                       // конец цикла while


    var hash = hash1(text);                 // считаем хэш
    let texthash = "Хэш посчитан: " + hash; // делаем строку, для вывода хэша в интерфейс
    vvod.innerHTML= texthash;               // вывод строки выше в интерфейс
    let n = q*p;                            // считаем n
    let fN = (q-1) *  (p-1);                // считаем функцию Эйлера
    let d = find_inverse(e,fN);             // считаем d
    let S = (hash**d)%n;                    // считаем S
    console.log(S);

    let m = (S**e)%n;                       // считаем m
    console.log(m, 'm');
    let mm = 'm = ' + m;                    // делаем строку, для вывода m в интерфейс
    vvod2.innerHTML=mm;                     // вывод строки выше в интерфейс
    if (m==hash){                           // проверка совпадения m и хэша (успешно)
        vvod3.innerHTML="Подпись верна";
        console.log("Подпись верна")
    }
    else{                                   // проверка совпадения m и хэша (не успешно)
        vvod3.innerHTML='Подпись не сходится'
        console.log('Подпись не сходится')
    }
    
}

//hash_pod('кто', 3,11,7);
