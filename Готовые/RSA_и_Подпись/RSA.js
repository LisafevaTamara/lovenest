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

function prost(number){
    let isPrime = true;


    if (number === 1) {
        return false;
    }

    else if (number > 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return true;
        } else {
            return false;
        }
    }


    else {
        return false;
    }

}

function find_inverse(e,N){
    function egcd(a,b){
        if (b==0){
            return [1, 0]
        }
        else{
            let [x, y] = egcd(b, a % b)
            return [y, (x - (Math.floor(a/b))*y)]
        }
    }
    let [x, y] = egcd(e,N);
    if(x< 0){
        x+=N;
    }

    return x;




}


const areCoprimes = (num1, num2) => { // нахождение взаимно простых
    const smaller = num1 > num2 ? num1 : num2;
    for(let ind = 2; ind < smaller; ind++){
       const condition1 = num1 % ind === 0;
       const condition2 = num2 % ind === 0;
       if(condition1 && condition2){
          return false;
       };
    };
    return true;
 };


function hash(text){
    let p = 31;
    let h1 = give_num(text[0]);
    let h2 = 0;
    for(let i = 1;i<text.length;i++){
        h2 = give_num(text[i]);
        h1 = ((h1+h2) * (h1+h2))%p;
    
    }
    return h1;

}

// let p = 31; //любое простое
// let q = 13; //Любое простое
// let n = (p-1) * (q-1);// функция эйлера

// let e = 2;

// while (true){
//     if (areCoprimes(n,e)){
//         break;
//     }
//     e++;

// }
// let d = (1%n);


//  console.log(d*e);

function NOD (x, y) {
    let ost;
	if (x<y){
        let z= x;
        x = y;
        y = z;
    }
    var arr =[];
    while(true){
        ost = x%y;
        //console.log(Math.floor(x/y));
        arr.push(Math.floor(x/y));
        if(ost == 0){
            break
        }
        x=y;
        y = ost;
        
        
    }
    var p1 = [1,1];
    for(let i = 1;i<arr.length;i++){
        p1.push(p1[i-1]+p1[i]*arr[i]);
        

    }
    

    let xy = Math.pow((-1),(p1.length-2));
    xy = xy * p1[p1.length-2];
    console.log(xy);
    xy++;
    return xy;
    
    
    
    //console.log(arr);
}


function RSA(){
    let code = document.querySelector("input[type='radio'][name=rad]:checked").value;
    let text = document.getElementById('1textid').value;
    

    let vvod = document.getElementById('div1');
    let vvod2 = document.getElementById('div2');
    let vvod3 = document.getElementById('div3');

    let p = Number(document.getElementById('1pid').value);
    let e = Number(document.getElementById('1eid').value);
    let q = Number(document.getElementById('1qid').value);

    

    // let p = 3; //любое простое
    // let q = 11; //Любое простое
    let n2 =p*q;
    //console.log(n2, "n2");
    let n = (p-1) * (q-1);// функция эйлера
    
    //console.log(n, "n");
    if (gcd(n,e) != 1){
        vvod.innerHTML= "Число e не взаимно простое с n";
        console.log("Число e не взаимно простое с n")
        return 0
    }
    let d = find_inverse(e,n)
     // d*e = (1%n)/d
    console.log('d',d);

   
    // if (areCoprimes(n,e)){
    //     return 0;
    // }
    

    
    console.log(e,'e')
    if (code == "encode"){
        console.log(d);
        text = text.toLowerCase()
        while(text.indexOf('.') != -1){
            text = text.replace('.','тчк');
        }
            while(text.indexOf(',') != -1){
                text = text.replace(',','зпт');
            }
        while(text.indexOf('-') != -1){
            text = text.replace('-','тр');
        }
        while(text.indexOf('–') != -1){
            text = text.replace('–','тр');
        }
        while(text.indexOf(' ') != -1){
            text = text.replace(' ','прб');
        }
        var array = [];
        for(let i = 0;i<text.length;i++){
            array.push((give_num(text[i])**e)%n2)
        }


    
        console.log(array)
        let str = array.join(',');
        console.log(str)
        vvod2.innerHTML= str;
    }

    if(code=="decode"){
        let alf = ['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
        text = text.split(',');
        console.log(text[0])
        let txt = '';
        for(let i = 0;i<text.length;i++){
            //console.log(text[i], i)
            let xxxxxx = Number(text[i]);
            let summ = (xxxxxx**d)%n2;
            summ = alf[summ-1];
            txt = txt + summ;
            //array.push((xxxxxx**d)%n2);
        }
        while(txt.indexOf('тчк') != -1){
            txt = txt.replace('тчк','. ');
        }
        while(txt.indexOf('зпт') != -1){
            txt = txt.replace('зпт',', ');
        }
        while(txt.indexOf('тр') != -1){
            txt = txt.replace('тр','-');
        }
        while(txt.indexOf('прб') != -1){
            txt = txt.replace('прб',' ');
        }
        console.log(txt)
        vvod2.innerHTML= txt; 
    //console.log(array)

    }

}
//console.log(NOD(107,177));


// let p = 31; //любое простое
// let q = 13; //Любое простое
// let n = (p-1) * (q-1);// функция эйлера

// let e = 2;

// while (true){ // находим взаимнопростое
//     if (areCoprimes(n,e)){
//         break;
//     }
//     e++;

// }
// let d = NOD(n,e);


//  console.log(d);


//RSA('11 13 27',3,11,7,"decode");

//RSA  Подпись

function hash1(text){
    let p = 31;
    let h1 = give_num(text[0]);
    let h2 = 0;
    for(let i = 1;i<text.length;i++){
        h2 = give_num(text[i]);
        h1 = ((h1+h2) * (h1+h2))%p;
    
    }
    return h1;

}


function hash_pod(){
    // let p = 3;
    let text = document.getElementById('2textid').value;
    
    let vvod = document.getElementById('div21');
    let vvod2 = document.getElementById('div22');
    let vvod3 = document.getElementById('div23');

    let p = Number(document.getElementById('2pid').value);
    let e = Number(document.getElementById('2eid').value);
    let q = Number(document.getElementById('2qid').value);
    text = text.toLowerCase()
    while(text.indexOf('.') != -1){
        text = text.replace('.','тчк');
    }
    
    while(text.indexOf(',') != -1){
        text = text.replace(',','зпт');
    }

    while(text.indexOf('-') != -1){
        text = text.replace('-','тр');
    }
    while(text.indexOf('–') != -1){
        text = text.replace('–','тр');
    }
    while(text.indexOf(' ') != -1){
        text = text.replace(' ','прб');
    }

    var hash = hash1(text);
    let texthash = "Хэш посчитан: " + hash;
    vvod.innerHTML= texthash;
    let n = q*p;
    let fN = (q-1) *  (p-1);
    let d = find_inverse(e,fN);
    let S = (hash**d)%n;
    console.log(S);

    let m = (S**e)%n;
    console.log(m, 'm');
    let mm = 'm = ' + m;
    vvod2.innerHTML=mm;
    if (m==hash){
        vvod3.innerHTML="Подпись верна";
        console.log("Подпись верна")
    }
    else{
        vvod3.innerHTML='Подпись не сходится'
        console.log('Подпись не сходится')
    }
    
}

//hash_pod('кто', 3,11,7);
