function tritem(){
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    //let text = "курсел";
    let x = 1;
    let y = 0;
    let z = 0;
    let text = document.getElementById('tritid').value;
    let code = document.querySelector("input[type='radio'][name=tritrad]:checked").value;
    let vvod = document.getElementById('divtrit');
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
    let textnew = '';
    if(code == "encode"){
        for(let i = 0; i<text.length; i++){
            if (text[i] == ' '){
                textnew += ' ';
                continue
            }
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
            if (text[i] == ' '){
                textnew += ' ';
                continue
            }
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
    vvod.innerHTML=textnew;

}