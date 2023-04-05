

function cesar(str, shift, action){
  
    let alf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let mass = "";
    if(action == "encode"){
        for(let i = 0; i<str.length;i++){
            let x = 0;
            while(str[i]!=alf[x]){
                x++;
                if(x>32){
                    x = 0;
                }
            }
            if((x+shift)>32){
                mass += alf[(x+shift)-33];
            }
            else{
                mass += alf[x+shift];
            }
            
            
        }
    }
    if(action == "decode"){
        for(let i = 0; i<str.length;i++){
            let x = 0;
            if(str[i]==" "){
                mass+=" ";
                continue;
            }
            while(str[i]!=alf[x]){
                x++;
                if(x>32){
                    x = 0;
                }
            }
            if((x-shift)<0){
                mass += alf[(x-shift)+33];
            }
            else{
                mass += alf[x-shift];
            }
            
            
        }


    }
    console.log(mass);
}


//cesar("абвг", 3, "encode");



function atbash(){
    let inputid = document.getElementById('atbashin').value;
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    let mass = "";
    for(let i = 0; i <inputid.length; i++){//цикл
        let x = 0;// находим нормер буквы в алфавите 
        let y = alf.length-1; // номер последней буквы
        while(inputid[i]!=alf[x]){
            x++;
            if(x>32){
                x = 0;
            }
        }
        mass += alf[y-x];
        
    }
    let vvod = document.getElementById('div');
    console.log(inputid);
    vvod.innerHTML=mass;
}

//atbash("яюэьы");
function polib(text,code){
    var mass = [["а","б","в","г","д","е"],
                ["ж","з","и","й","к","л"],
                ["м","н","о","п","р","с"],
                ["т","у","ф","х","ц","ч"],
                ["ш","щ","ъ","ы","ь","э"],
                ["ю","я","$","$","$","$"]
            ];  
            
    
    let textnew = '';
    let schet = 1;
    if(code == 'code'){
        for(let i = 0; i<text.length; i++){
            for(let x =0;x<6;x++){
                for(let y = 0; y<6;y++){
                    if(mass[y][x]==text[i]){
                        y+=1;
                        x+=1;
                        textnew = textnew  + y;
                        if(schet<5){
                            schet++;
                        }
                        else{
                            schet = 1;
                            textnew += ' ';
                        }
                        textnew = textnew  + x;
                        if(schet<5){
                            schet++;
                        }
                        else{
                            schet = 1;
                            textnew += ' ';
                        }
                    }

                }
            }


        }
        console.log(textnew);
    }
    if(code=="decode"){
        let xx = 0;
        let yy = 0;
        for(let i =0; i<= text.length-1;i++){
            xx = parseInt(text[i]);
            yy = parseInt(text[i+1]);
            textnew = textnew + mass[xx-1][yy-1];
            if(schet<5){
                schet++;
            }
            else{
                schet = 1;
                textnew += ' ';
            }
            xx=0;
            yy=0;
            i++;
        }
        console.log(textnew);

    }
}

//polib("абвгд","code");      ////Полибий..........




function tritem(text,code){
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    //let text = "курсел";
    let x = 1;
    let y = 0;
    let z = 0;
    let textnew = '';
    if(code == "code"){
        for(let i = 0; i<text.length; i++){
            z = 0;
            y = alf.indexOf(text[i]);
            z = ((x + y)-1)%32;
            x++;
            //console.log(((x + y+1)-1),z);
            //console.log(alf[z]);
            textnew += alf[z];
            
        }
        console.log(textnew);
    }
    if(code=="decode"){
        for(let j = 0; j<text.length; j++){
            z = 0;
            y = alf.indexOf(text[j]);
            z = ((y - x)+1)%32;
            x++;
            //console.log(((x + y+1)-1),z);
            //console.log(alf[z]);
            textnew += alf[z];
            
        }
        console.log(textnew);
    }


}
//tritem('ктообж','code'); /////Тритемий.................

function belazo(text, key, code){
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    //let key = "кот";
    //let text = "кто";
    //расшифровка: фаа
    let x = 1; // номер буквы в тексте
    let y = 0; // номер буквы в ключе
    let z = 0; // зашифрованая буква
    let w = 0; // номер буквы ключа в алфавите
    let textnew = '';
    if(code == "code"){
        for(let i = 0; i<text.length; i++){
            if(y==key.length){
                y = 0;
            }
            w = alf.indexOf(key[y]);
            x = alf.indexOf(text[i]);
            z = 0;
            z = ((x + w+1)-1)%32;
            x++;
            y++;
            //console.log(((x + w+1)-1),z);
            //console.log(alf[z]);
            textnew += alf[z];
            
        }
        console.log(textnew);
    }   
    if(code=="decode"){
        for(let i = 0; i<text.length; i++){
            if(y==key.length){
                y = 0;
            }
            w = alf.indexOf(key[y]);
            x = alf.indexOf(text[i]);
            z = 0;
            z = ((x-w));
            if(z<0){
                z*=-1;
            }
            //console.log(((x - w)),z);
            x++;
            y++;
            
            //console.log(alf[z]);
            textnew += alf[z];
            
        }
        console.log(textnew);

    }
}


//belazo('ыяусту', 'снег', 'decode'); ///Белазо.......

function veginer(text,key,code){
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    //let key = "о";//для отладки
    //let text = "кто"; //для отладки
    let text2 ='';
    text2 = text2 + key+ text;
    let x = 1; // номер буквы в тексте
    let y = 0; // номер буквы в ключе
    let z = 0; // зашифрованая буква
    let w = 0; // номер буквы ключа в алфавите
    let textnew = '';
    if(code == "code"){
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

}
//veginer('абгез','а','decode');
//обгез

////////////////////////////////////////////////////////////////Матричный шифр///////////////////////////////////////////
function inverse(m) {
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
  
  function writeout(arr) {
    return JSON.stringify(arr, function(key, val) {
      return val.toFixed ? Number(val.toFixed(4)) : val;
    });
  }



function matrShif(){
    var matr = [[3,1,2],
                [4,2,3],
                [1,2,2]];

    var matrnum =[[0],
                  [0],
                  [0]];

    
    

    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    let text = "абвгд";
    let textnew = ''; 
    let textnew2 = [5, 8, 6, 53, 80, 51 ];
    let textza = "";
    let x;
    let code = 'decode';
    let det = matr[0][0] * matr[1][1] * matr[2][2] - matr[0][0] * matr[1][2] * matr[2][1]
    - matr[0][1] * matr[1][0] * matr[2][2] + matr[0][1] * matr[1][2] * matr[2][0]
    + matr[0][2] * matr[1][0] * matr[2][1] - matr[0][2] * matr[1][1] * matr[2][0];
    console.log(det);
    if(det==0){
        console.log('определитель равен нулю');
        return 0;
        
    }
    if(code == 'code'){

        
        if(text.length % 3 != 0){
            while(text.length%3 !=0){
                text += 'ф';
            };
        };
        for(let i = 0; i<text.length;i++){
            matrnum[0][0] = alf.indexOf(text[i]);
            matrnum[1][0] = alf.indexOf(text[i+1]);
            matrnum[2][0] = alf.indexOf(text[i+2]);
            i +=2;
            
            textnew += matr[0][0] * matrnum[0][0] + matr[0][1] * matrnum[1][0] + matr[0][2] * matrnum[2][0];
            textnew += ' ';
            
            textnew += matr[1][0] * matrnum[0][0] + matr[1][1] * matrnum[1][0] + matr[1][2] * matrnum[2][0];
            textnew += ' ';
            
            textnew += matr[2][0] * matrnum[0][0] + matr[2][1] * matrnum[1][0] + matr[2][2] * matrnum[2][0];
            textnew += ' ';
        }

        console.log(textnew);
    };
     if(code=='decode'){
         const matrnew = inverse(matr);
         for(let i = 0; i<textnew2.length;i++){
            matrnum[0][0] = parseInt(textnew2[i]);
            matrnum[1][0] = parseInt(textnew2[i+1]);
            matrnum[2][0] = parseInt(textnew2[i+2]);
            i +=2;

            textza += alf[matrnew[0][0] * matrnum[0][0] + matrnew[0][1] * matrnum[1][0] + matrnew[0][2] * matrnum[2][0]];
            textza += alf[matrnew[1][0] * matrnum[0][0] + matrnew[1][1] * matrnum[1][0] + matrnew[1][2] * matrnum[2][0]];
            textza += alf[matrnew[2][0] * matrnum[0][0] + matrnew[2][1] * matrnum[1][0] + matrnew[2][2] * matrnum[2][0]];
            
        };
        //console.log(matrnew[0][0] * matrnum[0][0] + matrnew[0][1] * matrnum[1][0] + matrnew[0][2] * matrnum[2][0]);
        



        console.log(textza);

     }
    //////////////////////////////////////////////Конец Матричного Шифра/////////////////////////////////////////////////////////






};

//matrShif();


////////////////////////////////////////ПЛЕЙФЕР//////////////////////////////////////////////////////////////
function plf(matr,str){
    let str_new = '';
    // let str = 'крот';
    let x1 = 0; //столбец 1
    let y1 = 0; // строка 1
    let x2 = 0; // столбец 2
    let y2 = 0; // строка 2
    // var matr = [['а','б','в', 'г','д','е'],
    //         ['ж','з','и', 'к','л','м'],
    //         ['н','о','п', 'р','с','т'],
    //         ['у','ф','х', 'ц','ч','ш'],
            // ['щ','ы','ь', 'э','ю','я']];
    for(let i = 0; i<str.length; i++){
        x1 = 0; //столбец 1
        y1 = 0; // строка 1
        x2 = 0; // столбец 2
        y2 = 0; // строка 2
        
        while(true){
            if((matr[x1].indexOf(str[i]) == -1)){
                x1++;
            }
            else{
                break;
            }
        }
        y1 = matr[x1].indexOf(str[i]);
        while(true){
            if((matr[x2].indexOf(str[i+1]) == -1)){
                x2++;
            }
            else{
                break;
            }
        }
        y2 = matr[x2].indexOf(str[i+1]);
        // Если в одном столбце
        if (y1 == y2){
            if(x1==4){
                x1=-1;
            }
            if(x2==4){
                x2=-1;
            }
            str_new += matr[x1 + 1][y1];
            str_new += matr[x2 + 1][y2];
            i++;
            continue;
        
        }
        //---------------------------------
        // Если в одном столбце
        if (x1==x2){
            if(y1==5){
                y1=-1;
            }
            if(y2==5){
                y2=-1;
            }
            str_new += matr[x1][y1+1];
            str_new += matr[x2][y2+1];
            i++;
            continue;
        }
        //---------------------------------
        else{
            str_new += matr[x1][y2];
            str_new += matr[x2][y1];
            i++;
            continue;

        }
        



    }
    console.log(matr[0]);
    console.log(matr[1]);
    console.log(matr[2]);
    console.log(matr[3]);
    console.log(matr[4]);
    console.log(str_new);



}

function otbor(key,cou,size){
    let alf = "абвгдежзиклмнопрстуфхцчшщыьэюя";
    let csh = 0;
    
    for(let k = 0; k<size;k++){
        csh+=1;
        if(key[k]==alf[cou]){
            
            
            cou+=1;
            cou = otbor(key,cou,size);
            
        }

        if(csh==key.length){
            return cou;
        }
    }
}

function test(a){
    for(let i = 0;i<a.length-1; i++){

        if(a[i]==a[i+1]){
            var strFirst = a.slice(0,i+1); 
            var strLast = a.slice(-i);
            strFirst += 'ф' + strLast;
            
        }
    }
    return{
        strFirst
    }
}


function charCheck(str)
{
for(let i=0; i < str.length; i++)
  {
   if (str.split(str[i]).length-1 > 1) 
   {
    return false;
   }  
  }
  return true;

} 


function plaifer(key,str){
    let alf = "абвгдежзиклмнопрстуфхцчшщыьэюя";
    //let str = 'крот';
    if(!charCheck(key)){
        console.log('Недопустимый ключ!')
        return 0;
    }
    var matr = [['','','', '','',''],
                ['','','', '','',''],
                ['','','', '','',''],
                ['','','', '','',''],
                ['','','', '','','']];

    //let key = 'сентябрь';
    let xx = test(str);
    str = xx.strFirst;

    if(str.length%2!=0){
        str += 'ф';
    }
    let x = 0;

    let y = 0;
    let cou = 0;
    for(let i=0;i<key.length;i++){
            
        if(x>5){
            x = 0;
            y+=1;
        }
        matr[y][x] = key[i];
        x +=1;
    }

    while(x!=6 || y!=4){
        if(x>5){
            x = 0;
            y+=1;
        }
        
        // for(let k = 0; k<key.length;k++){
            
        //     if(key[k]==alf[cou]){
        //         console.log(k);  // Проблема в том, что найдя сходство, он смело вписывает следующую букву, но она тоже может быть сходством
                
        //         cou+=1;
        //     }
        // }
        cou = otbor(key,cou,key.length);
        
        matr[y][x] = alf[cou];
        cou +=1;
        x+=1;

    }
    plf(matr,str);
    //console.log(matr[y][x]);
    //  console.log(matr[0]);
    //  console.log(matr[1]);
    //  console.log(matr[2]);
    //  console.log(matr[3]);
    //  console.log(matr[4]);
     console.log(str);
    

}

plaifer('сентябрь','наппа');




//////////////////////////////////////////////////////////////////////////////////////////////////////////


