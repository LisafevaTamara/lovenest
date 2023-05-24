function veginer(){
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    let text = document.getElementById('vigid').value;
    let key = document.getElementById('vigkeyid').value;
    let code = document.querySelector("input[type='radio'][name=vigrad]:checked").value;
    let vvod = document.getElementById('divvig');
    //let key = "о";//для отладки
    //let text = "кто"; //для отладки
    let text2 ='';
    text2 = text2 + key+ text;
    let x = 1; // номер буквы в тексте
    let y = 0; // номер буквы в ключе
    let z = 0; // зашифрованая буква
    let w = 0; // номер буквы ключа в алфавите
   
    let textnew = '';
    if(code == "encode"){
        for(let i = 0; i<text.length; i++){
            key = text2[i];
            
            w = alf.indexOf(key[0]);
            x = alf.indexOf(text[i]);
            console.log(x,w);
            z = 0;
            z = ((x + w)%32);   //((x + w+1)-1)%32;
            x++;
            y++;
            //console.log(((x + w+1)-1),z);
            //console.log(alf[z]);
            textnew += alf[z];

        }
        console.log(textnew);
    }
    if(code == "decode"){
        key = "а"; //задаем стартовое значение ключа
        for(let i = 0; i<text.length; i++){ //цикл по тексту
            
            
            w = alf.indexOf(key[0]); // номер буквы ключа в алфавите
            x = alf.indexOf(text[i]); // номер буквы пословицы в алфавите
            z = 0;
            //console.log(x,w); // Отладка
            z = ((x-w)); // вычисляем номер буквы (зашифрованно)
            
            if(z<0){ //модуль (Убираем отрицательное значение )
                z*=-1;
            }
            //console.log(((x - w)),z);
            
            key = alf[z];
            console.log(key);
            
            //console.log(alf[z]);
            textnew += alf[z];
            
        }
        console.log(textnew);

    }
    vvod.innerHTML=textnew;

}