function polib(){
    let text = document.getElementById('textpolibid').value;
    let code = document.querySelector("input[type='radio'][name=polibrad]:checked").value;
    var mass = [["а","б","в","г","д","е"],
                ["ж","з","и","й","к","л"],
                ["м","н","о","п","р","с"],
                ["т","у","ф","х","ц","ч"],
                ["ш","щ","ъ","ы","ь","э"],
                ["ю","я","$","$","$","$"]
            ];  
    let textnew = '';
    let schet = 1;
    let vvod = document.getElementById('divpolib');
    if(code == 'encode'){
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
        vvod.innerHTML=textnew;
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
        vvod.innerHTML=textnew;
        console.log(textnew);
    }
}
