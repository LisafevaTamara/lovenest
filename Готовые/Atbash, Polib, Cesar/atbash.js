function atbash(){
    let inputid = document.getElementById('atbashin').value;// Получаем текст из интерфейса
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя"; //Задаём алфавит
    let mass = "";// переменная для результата шифровки
    inputid = inputid.toLowerCase()
    while(inputid.indexOf('.') != -1){
        inputid = inputid.replace('.',' тчк');
    }
    while(inputid.indexOf(',') != -1){
        inputid = inputid.replace(',',' зпт');
    }
    while(inputid.indexOf('-') != -1){
        inputid = inputid.replace('-',' тр');
    }
    while(inputid.indexOf('–') != -1){
        inputid = inputid.replace('–',' тр');
    }
    try{
    for(let i = 0; i <inputid.length; i++){ //Цикл для шифрования каждой буквы заданного текста
        if (inputid[i] == ' '){
            mass += ' ';
            continue
        }
        let x = 0;// находим нормер буквы в алфавите 
        let y = alf.length-1; // номер последней буквы

        while(inputid[i]!=alf[x]){ // находим номер буквы (Выход из цикла произайдет тогда, когда мы найдём номер выбранной буквы текста в алфавите)
            x++;                   // x является номером, который увеличивается, в случае если он не является номером нужной буквы
            if(x>32){              //Если x становится больше числа, равного числу буков в алфавите, он обнуляется
                x = 0;             //...
            }                      //...
        }                          //.
        mass += alf[y-x];          // Вычитаем номер буквы из количества букв в алфавите
        
    }
    let vvod = document.getElementById('divatbash'); // Получаем координаты пространства, в которое будет вставлен зашифрованный текс
    console.log(inputid);
    vvod.innerHTML=mass; // Выводим зашифрованный текс
    }
    catch{
        console.log('Ошибка')
    }
} 