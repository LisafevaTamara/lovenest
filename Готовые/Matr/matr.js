//7. Матричный шифр
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
    var matrnum =[[0],
                  [0],
                  [0]];
    let text = document.getElementById('matrid').value; // забор текста
    let code = document.querySelector("input[type='radio'][name=matrrad]:checked").value;
    text = text.toLowerCase()
    while(text.indexOf('.') != -1){
        text = text.replace('.','тчк');
    }
    while(text.indexOf(',') != -1){
        text = text.replace(',','зпт');
    }
    while(text.indexOf('-') != -1){
        text = text.replace('-','трэ');
    }
    while(text.indexOf('–') != -1){
        text = text.replace('–','трэ');
    }
    if (code == 'decode'){
        textnew2 = text.split(' ').map(Number);
    }
    else{
        while(text.indexOf(' ') != -1){
            text = text.replace(' ','прб');
        }
    }
    // var matr = [[3,1,2],
    //             [4,2,3],
    //             [1,2,2]];
    var matr = [[0,0,0],
                [0,0,0],
                [0,0,0]];
    matr[0][0] = Number(document.getElementById('11id').value);
    matr[0][1] = Number(document.getElementById('12id').value);
    matr[0][2] = Number(document.getElementById('13id').value);

    matr[1][0] = Number(document.getElementById('21id').value);
    matr[1][1] = Number(document.getElementById('22id').value);
    matr[1][2] = Number(document.getElementById('23id').value);

    matr[2][0] = Number(document.getElementById('31id').value);
    matr[2][1] = Number(document.getElementById('32id').value);
    matr[2][2] = Number(document.getElementById('33id').value);


    let vvod = document.getElementById('divmatr');
    let alf = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    let textnew = ''; 
    //let textnew2 = [5, 8, 6, 53, 80, 51 ];
    let textza = "";
    let x;
    let det = matr[0][0] * matr[1][1] * matr[2][2] - matr[0][0] * matr[1][2] * matr[2][1]
    - matr[0][1] * matr[1][0] * matr[2][2] + matr[0][1] * matr[1][2] * matr[2][0]
    + matr[0][2] * matr[1][0] * matr[2][1] - matr[0][2] * matr[1][1] * matr[2][0];
    console.log(det);
    if(det==0){
        vvod.innerHTML='Определитель равен нулю! Попробуйте снова';
        console.log('определитель равен нулю');
        return 0;
    }
    if(code == 'encode'){
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
        vvod.innerHTML=textnew;
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
        while(textza.indexOf('тчк') != -1){
            textza = textza.replace('тчк','. ');
        }
        while(textza.indexOf('прб') != -1){
            textza = textza.replace('прб',' ');
        }
        while(textza.indexOf('зпт') != -1){
            textza = textza.replace('зпт',', ');
        }
        while(textza.indexOf('трэ') != -1){
            textza = textza.replace('трэ','-');
        }
        vvod.innerHTML=textza;
     }
     
};
