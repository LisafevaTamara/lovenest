
let alf = ['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];

function give_num(h1){
    let alf = ['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
    for (let i = 0; i<alf.length; i++){
        if (h1 == alf[i]){ 
            h1 = i+1;
            return h1;
        }
    
    }
    

}

function gcd(a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}


function shennon(){
    //let T = 12; // Произвольный номер, задается пользователем
    let T = Number(document.getElementById('Tid').value);
    let a = Number(document.getElementById('aid').value);
    let c = Number(document.getElementById('cid').value);
    let m = Number(document.getElementById('mid').value);
    let text = document.getElementById('textid').value;
    let code = document.querySelector("input[type='radio'][name=rad]:checked").value;
    var mass_count = [];
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
    if(code == 'encode'){
        while(text.indexOf(' ') != -1){
            text = text.replace(' ','прбф');
        }
    }
    let vvod = document.getElementById('div');
    if (T>m || a > m || c > m ){
        console.log('Ошибка! один из параметров больше m')
        return false;
    }

    if(a%2== 0){
        console.log('Ошибка! [a] должно быть нечетным')
        return false;
    }
    if (gcd(a,m)!= 1){
        console.log('Ошибка! [a] не является взаимно простым с числом [m]')
        return false;
    }

    if (m%4 == 0 && (a-1)%4!=0){
        console.log('Ошибка! [b] не кратно 4 (В то время, как [m] кратно)')
        return false;
    }

    //let text = 'одиндурак';
    //let a = 9;
    //let c = 13;

    let result = '';
    if(code == 'encode'){
        for(let i = 0; i<text.length; i++){
            if (text[i]==' '){
                continue
            }
            let summ = (a*T + c)%m;
            T = summ;
            summ += give_num(text[i]);
            if (summ>m){
                summ -= m;
            }
            result += summ + ' ';
        }
    }
    if(code == 'decode'){
        let mass = text.split(' ').map(Number);
        let alf = ['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
        for(let i = 0; i<mass.length; i++){
            let summ = (a*T + c)%m;
            T = summ;
            summ = mass[i] + 32 - summ;
            if (summ>m){
                summ -= m;
            }
            result += alf[summ-1];
        }
        while(result.indexOf('тчкф') != -1){
            result = result.replace('тчкф','. ');
        }
        while(result.indexOf('прбф') != -1){
            result = result.replace('прбф',' ');
        }
        while(result.indexOf('зптф') != -1){
            result = result.replace('зптф',', ');
        }
        while(result.indexOf('трф') != -1){
            result = result.replace('трф','-');
        }
    }
    
    console.log(result)
    vvod.innerHTML=result;
    return result;
}

//shennon(12,9,13,32, 'один дурак')
