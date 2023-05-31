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
    text = text.toLowerCase()
    while(text.indexOf('.') != -1){
        text = text.replace('.','тчкф');
    }
    while(text.indexOf(',') != -1){
        text = text.replace(',','зптф');
    }
    while(text.indexOf('-') != -1){
        text = text.replace('-','трф');
    }
    while(text.indexOf('–') != -1){
        text = text.replace('–','трф');
    }
    while(text.indexOf(' ') != -1){
        text = text.replace(' ','прбф');
    }
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
                        textnew = textnew  + x;
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
            xx=0;
            yy=0;
            i++;
        }
        while(textnew.indexOf('тчкф') != -1){
            textnew = textnew.replace('тчкф','. ');
        }
        while(textnew.indexOf('зптф') != -1){
            textnew = textnew.replace('зптф',', ');
        }
        while(textnew.indexOf('трф') != -1){
            textnew = textnew.replace('трф','-');
        }
        while(textnew.indexOf('прбф') != -1){
            textnew = textnew.replace('прбф',' ');
        }
        vvod.innerHTML=textnew;
        console.log(textnew);
    }
}
