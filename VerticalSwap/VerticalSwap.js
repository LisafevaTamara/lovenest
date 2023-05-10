//алфавит
function give_num(h1){
    let alf = ['а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
    for (let i = 0; i<alf.length; i++){
        if (h1 == alf[i]){ 
            h1 = i+1;
            return h1;
        }
    }
}
//создание таблички
function built_table(key,text){ // Этап 1
    let alf = "абвгдежзиклмнопрстуфхцчшщыьэюя";
    var matr = [];
    var mass = []
    var pod_matr = [];
    let num = 7;
    for (let i = 0; i<key.length; i++){
        pod_matr.push('');
    }
    for(let i = 0;i<key.length;i++){
        mass.push(give_num(key[i]));
    }
    matr.push(mass)
    let columns = Math.floor(text.length/key.length);
    if(columns < (text.length/key.length)){ //исправленно (не хватало одной строки)
        columns++;
    }
    for(let i =0; i<columns; i++){
        matr.push(Array.from(pod_matr))
    }
    return matr;
}
//внесение текста в таблицу
function insert_text(text,key){ // Этап 2
    var matr = built_table(key,text);
    let count = 0;
    let x = 1;
    let info = ((key.length * (matr.length-1)) - text.length);
    for(let i = 1;i<matr.length; i++){
        for(let j = 0; j<matr[x].length;j++){
            if(count==text.length){
                return matr;
            }
            matr[i][j] = text[count];
            count++;
        }
        x++;
    }
    console.log(matr[0])
    console.log(matr[1])
    console.log(matr[2])
    return matr;
}

var matr = insert_text('ктообжегсяя','мама');
for(let i = 0;i<matr.length;i++){
    console.log(matr[i])
}
//function shift(text,key){ //Этап 3
//}

function full_and_nefull(matr){ //нахождение количества маленьких столбцов
    let count = 0;
    for(let i =0;i<matr[0].length;i++){
        if(matr[matr.length-1][i] == ''){
            count++;
        }
    }
    return count;
}

console.log(full_and_nefull(matr));
//Зашифровка
function zashift(text,key,matr){}
//Расшифровка
function shift(text,key,code){ //Этап 4
    let textnew = '';
    var matr = insert_text(text,key);
    let count = 0;
    var matrnew = built_table(key,text);
    if(code == 'encode'){
        while(true){
            let min = Math.min.apply(null, matr[0]);
            if (min == 999){
                break;
            }
            let index = matr[0].indexOf(min);
            matr[0][index] = 999;
            let j = index;
            for(let i = 1; i<matr.length; i++ ){
                if(matr[i][j]== ''){
                    continue;
                }
                textnew += matr[i][j];
            }
        }
        console.log(textnew);
    }
    if(code=='decode'){
        while(true){
            let min = Math.min.apply(null, matrnew[0]);
            let index = matrnew[0].indexOf(min);
            matrnew[0][index] = 999;
            let j = index;
            for(let i = 1;i<(matr.length);i++){
                if(count == text.length){
                    break;
                }
                if(matr[i][j]== ''){
                    continue;
                }
                matrnew[i][j]=text[count];
                count++;
            }
            if(count == text.length){
                break;
            };
        };
        for(let i= 1; i<matrnew.length; i++ ){
            console.log(matrnew[i])
        }
        let textnew = '';
        for(let i = 1; i<matrnew.length;i++){
            for(let j = 0; j<matrnew[0].length; j++){
                textnew += matrnew[i][j];
            }
        }
        console.log(textnew)
    }
}

// var matrnew = shift('ожскоеятбг','бета',matr);
shift('тжяогкбсое','мама','decode');
//огкбстжяоея