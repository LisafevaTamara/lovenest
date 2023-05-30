function belazo(){
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    let text = document.getElementById('belazoid').value;
    let key = document.getElementById('belazokeyid').value;
    let code = document.querySelector("input[type='radio'][name=belazorad]:checked").value;
    let vvod = document.getElementById('divbelazo');
    text = text.toLowerCase()
    while(text.indexOf('.') != -1){
        text = text.replace('.',' тчк');
    }
    while(text.indexOf(',') != -1){
        text = text.replace(',',' зпт');
    }
    while(text.indexOf('-') != -1){
        text = text.replace('-',' тр');
    }
    while(text.indexOf('–') != -1){
        text = text.replace('–',' тр');
    }
    //let key = "кот";
    //let text = "кто";
    //расшифровка: фаа
    let x = 1; // номер буквы в тексте
    let y = 0; // номер буквы в ключе
    let z = 0; // зашифрованая буква
    let w = 0; // номер буквы ключа в алфавите
    let textnew = '';
    if(code == "encode"){
        for(let i = 0; i<text.length; i++){
            if(y==key.length){
                y = 0;
            }
            if (text[i] == ' '){
                textnew += ' ';
                continue
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
            if (text[i] == ' '){
                textnew += ' ';
                continue
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
    vvod.innerHTML=textnew;
}