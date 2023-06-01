//7. Матричный шифр
function inverse(m) {   // функция для нахождения обратной матрицы (нужна для посчета обратной матрицы)
    [
      [a, b, c],
      [d, e, f],
      [g, h, i]
    ] = m;
    let x = e * i - h * f,
      y = f * g - d * i,
      z = d * h - g * e,
      det = a * x + b * y + c * z;
    return det != 0 ? [
      [x, c * h - b * i, b * f - c * e],
      [y, a * i - c * g, d * c - a * f],
      [z, g * b - a * h, a * e - d * b]
    ].map(r => r.map(v => v /= det)) : null;
  }
  
  function writeout(arr) { // самовызывающаяся функция, часть функции 'inverse'
    return JSON.stringify(arr, function(key, val) {
      return val.toFixed ? Number(val.toFixed(4)) : val;
    });
}

function matrShif(){ // главная функция
    var matrnum =[[0],  // пустая матрица, для умножения (заполняется номерами букв)
                  [0],
                  [0]];
    let text = document.getElementById('matrid').value; // получаем текст из интерфейса
    let code = document.querySelector("input[type='radio'][name=matrrad]:checked").value;   // получаем выбранное значение encode/decode

    text = text.toLowerCase()   // переводит весь полученный текст в нижний регистр
    while(text.indexOf('.') != -1){     // цикл пока в тексте ещё есть точки
        text = text.replace('.','тчк'); // замена найденной точки на 'тчк'
    }                                   // конец цикла while

    while(text.indexOf(',') != -1){     // цикл пока в тексте ещё есть запятые
        text = text.replace(',','зпт'); // замена найденной запятые на 'зпт'
    }                                   // конец цикла while

    while(text.indexOf('-') != -1){     // цикл пока в тексте ещё есть тире
        text = text.replace('-','трэ'); // замена найденной тире на 'трэ'
    }                                   // конец цикла while
    
    while(text.indexOf('–') != -1){     // цикл пока в тексте ещё есть тире ( вторая вариация этого символа)
        text = text.replace('–','трэ'); // замена найденной тире на 'трэ'
    }                                   // конец цикла while
    
    if (code == 'decode'){              // Проверка (если программа работает на расшифровку. В таком случае она принимает цифры, отделённые пробелом)
        textnew2 = text.split(' ').map(Number); // превращаем строку в целочисленный массив
    }
    else{ // если программа работает на зашифрование
        while(text.indexOf(' ') != -1){     // цикл пока в тексте ещё есть пробел
            text = text.replace(' ','прб'); // замена найденной пробелы на 'прб'
        }                                   // конец цикла while
    }
    var matr = [[0,0,0],        // объявляем пустую матрицу
                [0,0,0],
                [0,0,0]];
     // с 61 по 71 строку происходит заполнение матрицы значениями взятыми из интерфеса
    matr[0][0] = Number(document.getElementById('11id').value);
    matr[0][1] = Number(document.getElementById('12id').value);
    matr[0][2] = Number(document.getElementById('13id').value);

    matr[1][0] = Number(document.getElementById('21id').value);
    matr[1][1] = Number(document.getElementById('22id').value);
    matr[1][2] = Number(document.getElementById('23id').value);

    matr[2][0] = Number(document.getElementById('31id').value);
    matr[2][1] = Number(document.getElementById('32id').value);
    matr[2][2] = Number(document.getElementById('33id').value);


    let vvod = document.getElementById('divmatr'); // Получаем координаты пространства, в которое будет вставлен зашифрованный текст
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";  // задаем алфавит
    let textnew = '';   // переменная для записи результата зашифрования
    //let textnew2 = [5, 8, 6, 53, 80, 51 ];
    let textza = "";    // переменная для записи результата расшифрования
    let x;              // возможно нигде не используется, но удалять страшно
    let det = matr[0][0] * matr[1][1] * matr[2][2] - matr[0][0] * matr[1][2] * matr[2][1] // вычисление определителя
    - matr[0][1] * matr[1][0] * matr[2][2] + matr[0][1] * matr[1][2] * matr[2][0]         //...
    + matr[0][2] * matr[1][0] * matr[2][1] - matr[0][2] * matr[1][1] * matr[2][0];        //.

    console.log(det); // вывод определителя в консоль

    if(det==0){                                                     // если определитель равен нулю, программа выдает ошибку
        vvod.innerHTML='Определитель равен нулю! Попробуйте снова'; //...
        console.log('определитель равен нулю');                     //...   
        return 0;                                                   //...
    }                                                               //.

    if(code == 'encode'){       // проверка на действие (в даннос случае это зашифровка, выбран 'encode')
        if(text.length % 3 != 0){   // для работы программы неообходимо, чтобы количество символов в тексте было кратно 3
            while(text.length%3 !=0){   // цикл, пока длинна не кратна 3
                text += 'ф';            // к тексту добавляется 'ф' для условий выше
            };                          // конец цикла
        };
        for(let i = 0; i<text.length;i++){  // цикл повторяющийся такое количество раз, равное длинне текста
            // следующие 3 строчки идёт заполнение матрицы, созданной в 26 строчке
            matrnum[0][0] = alf.indexOf(text[i]) +1;
            matrnum[1][0] = alf.indexOf(text[i+1]) +1;
            matrnum[2][0] = alf.indexOf(text[i+2]) +1;
            i +=2; // увеличиваем i на 2
            
            textnew += matr[0][0] * matrnum[0][0] + matr[0][1] * matrnum[1][0] + matr[0][2] * matrnum[2][0]; // производим умножение матриц, и записываем полученное число в результат
            textnew += ' '; // добавляем пробел для разделения
            
            textnew += matr[1][0] * matrnum[0][0] + matr[1][1] * matrnum[1][0] + matr[1][2] * matrnum[2][0]; // производим умножение матриц, и записываем полученное число в результат
            textnew += ' '; // добавляем пробел для разделения
            
            textnew += matr[2][0] * matrnum[0][0] + matr[2][1] * matrnum[1][0] + matr[2][2] * matrnum[2][0]; // производим умножение матриц, и записываем полученное число в результат
            textnew += ' '; // добавляем пробел для разделения
        }
        console.log(textnew);
        vvod.innerHTML=textnew; // выводим результат в интерфейс
    };
     if(code=='decode'){        // проверка на действие (в даннос случае это расшифровка, выбран 'decode')
         const matrnew = inverse(matr);     // создаем обратную матрицу
         for(let i = 0; i<textnew2.length;i++){ // цикл повторяющийся такое количество раз, равное длинне текста
            // следующие 3 строчки идёт заполнение матрицы, созданной в 26 строчке
            matrnum[0][0] = parseInt(textnew2[i]);
            matrnum[1][0] = parseInt(textnew2[i+1]);
            matrnum[2][0] = parseInt(textnew2[i+2]);
            i +=2;  // увеличиваем i на 2

            textza += alf[(matrnew[0][0] * matrnum[0][0] + matrnew[0][1] * matrnum[1][0] + matrnew[0][2] * matrnum[2][0]) -1]; // производим умножение матриц, и записываем полученное число в результат
            textza += alf[(matrnew[1][0] * matrnum[0][0] + matrnew[1][1] * matrnum[1][0] + matrnew[1][2] * matrnum[2][0]) -1]; // производим умножение матриц, и записываем полученное число в результат
            textza += alf[(matrnew[2][0] * matrnum[0][0] + matrnew[2][1] * matrnum[1][0] + matrnew[2][2] * matrnum[2][0]) -1]; // производим умножение матриц, и записываем полученное число в результат
            
        };
        //console.log(matrnew[0][0] * matrnum[0][0] + matrnew[0][1] * matrnum[1][0] + matrnew[0][2] * matrnum[2][0]);
        console.log(textza);
        while(textza.indexOf('тчк') != -1){         // цикл пока в тексте ещё есть 'тчк'
            textza = textza.replace('тчк','. ');    // замена найденной 'тчк' на точку "."
        }                                           // конец цикла while

        while(textza.indexOf('прб') != -1){         // цикл пока в тексте ещё есть 'прб'
            textza = textza.replace('прб',' ');     // замена найденной 'прб' на пробел " "
        }                                           // конец цикла while

        while(textza.indexOf('зпт') != -1){         // цикл пока в тексте ещё есть 'зпт'
            textza = textza.replace('зпт',', ');    // замена найденной 'зпт' на запятую ","
        }                                           // конец цикла while

        while(textza.indexOf('трэ') != -1){         // цикл пока в тексте ещё есть 'трэ'
            textza = textza.replace('трэ','-');     // замена найденной 'трэ' на тире "-"
        }                                           // конец цикла while

        vvod.innerHTML=textza;    // выводим результат в интерфейс
     }
     
};

// var matr = [[3,1,2],
//             [4,2,3],
//             [1,2,2]];