function cesar(){
    let str = document.getElementById('textid').value;
    let shift = document.getElementById('shiftid').value;
    shift = Number(shift);
    let action = document.querySelector("input[type='radio'][name=cesarrad]:checked").value;
    console.log(action)
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    let mass = "";
    let vvod = document.getElementById('divcesar');
    if(action == "encode"){ 
        for(let i = 0; i<str.length;i++){
            let x = 0;
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
    console.log(mass);
    vvod.innerHTML=mass;
}