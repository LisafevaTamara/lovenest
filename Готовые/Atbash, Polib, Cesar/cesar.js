function cesar(){
    let str = document.getElementById('textid').value;
    let shift = document.getElementById('shiftid').value;
    shift = Number(shift);
    let action = document.querySelector("input[type='radio'][name=cesarrad]:checked").value;
    str = str.toLowerCase()
    while(str.indexOf('.') != -1){
        str = str.replace('.','тчкф');
    }
    while(str.indexOf(',') != -1){
        str = str.replace(',','зптф');
    }
    while(str.indexOf('-') != -1){
        str = str.replace('-','трф');
    }
    while(str.indexOf('–') != -1){
        str = str.replace('–','трф');
    }
    while(str.indexOf(' ') != -1){
        str = str.replace(' ','прбф');
    }
    console.log(action)
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    let mass = "";
    let vvod = document.getElementById('divcesar');
    if(action == "encode"){ 
        for(let i = 0; i<str.length;i++){
            let x = 0;
            if (str[i] == ' '){
                mass += ' ';
                continue
            }
            while(str[i]!=alf[x]){
                x++;
                if(x>31){
                    x = 0;
                }
            }
            if((x+shift)>31){
                mass += alf[(x+shift)-32];
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
                if(x>31){
                    x = 0;
                }
            }
            if((x-shift)<0){
                mass += alf[(x-shift)+32];
            }
            else{
                mass += alf[x-shift];
            }
            
            
        }

    }
    while(mass.indexOf('тчкф') != -1){
        mass = mass.replace('тчкф','. ');
    }
    while(mass.indexOf('прбф') != -1){
        mass = mass.replace('прбф',' ');
    }
    while(mass.indexOf('зптф') != -1){
        mass = mass.replace('зптф',', ');
    }
    while(mass.indexOf('трф') != -1){
        mass = mass.replace('трф','-');
    }
    console.log(mass);
    vvod.innerHTML=mass;
}