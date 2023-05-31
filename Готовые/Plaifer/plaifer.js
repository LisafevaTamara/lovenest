//8. Шифр Плэйфера


function plfen(matr,str){ // для зашифровки
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
    return str_new;
}

function plfde(matr,str){ //для расшифровки
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
            if(x1==0){
                x1=5;
            }
            if(x2==0){
                x2=5;
            }
            str_new += matr[x1 - 1][y1];
            str_new += matr[x2 - 1][y2];
            i++;
            continue;
        
        }
        //---------------------------------
        // Если в одном столбце
        if (x1==x2){
            if(y1==0){
                y1=6;
            }
            if(y2==0){
                y2=6;
            }
            str_new += matr[x1][y1-1];
            str_new += matr[x2][y2-1];
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
    return str_new;
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
            var strLast = a.slice(i+1);
            strFirst += 'ф' + strLast;
        }
    }
    if(strFirst == undefined){
        return a;
    }
    return strFirst;
    
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
function plaifer(){
    let alf = "абвгдежзиклмнопрстуфхцчшщыьэюя";
    let str = document.getElementById('textid').value;
    let key = document.getElementById('keyid').value;
    let vvod = document.getElementById('div');
    let code = document.querySelector("input[type='radio'][name=rad]:checked").value;
    let xx = test(str);
    str = str.toLowerCase()
    while(str.indexOf('.') != -1){
        str =str.replace('.','тчк');
    }
    while(str.indexOf(',') != -1){
        str = str.replace(',','зпт');
    }
    while(str.indexOf('-') != -1){
        str = str.replace('-','трэ');
    }
    while(str.indexOf('–') != -1){
        str = str.replace('–','трэ');
    }
    while(str.indexOf(' ') != -1){
        str = str.replace(' ','прб');
    }
    xx = test(str);
    str = xx;
    //let str = 'крот';
    if(!charCheck(key)){
        vvod.innerHTML="Недопустимый ключ!";
        console.log('Недопустимый ключ!')
        return 0;
    }
    var matr = [['','','', '','',''],
                ['','','', '','',''],
                ['','','', '','',''],
                ['','','', '','',''],
                ['','','', '','',''],
                ['','','', '','','']];

    //let key = 'сентябрь';
    

    if(str.length%2==1){
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
        let str_new = '';

        if(code == 'encode'){
            str_new = plfen(matr,str);
        }
        if (code == 'decode'){
            str_new = plfde(matr,str);
        }
        //console.log(matr[y][x]);
        //  console.log(matr[0]);
        //  console.log(matr[1]);
        //  console.log(matr[2]);
        //  console.log(matr[3]);
        //  console.log(matr[4]);
        console.log(str);
        while(str_new.indexOf('тчк') != -1){
            str_new = str_new.replace('тчк','. ');
        }
        while(str_new.indexOf('прб') != -1){
            str_new = str_new.replace('прб',' ');
        }
        while(str_new.indexOf('зпт') != -1){
            str_new = str_new.replace('зпт',', ');
        }
        while(str_new.indexOf('трэ') != -1){
            str_new = str_new.replace('трэ','-');
        }
        vvod.innerHTML=str_new;
    
    

}

//plaifer('сентябрь','наппа');/*Вызов функции Плэйфера*/
