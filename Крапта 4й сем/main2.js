



function prover(key){
    let flag1 = false; 
    let flag2 = false;
    
    if(key.length == 64){
        flag1 = true;   
    }
    else{
        flag1 = false;
    }
    for (let i = 0; i < key.length; i++) { 
        if (key[i] == "0" || key[i] == "1") { 
          flag2 = true; 
        } else { 
          flag2 = false;
          break;
        } 
    }
    if (flag1 == true && flag2 == true){
        return true;
    }
    else{
        return false;
    }

}

function get_majority(x,y,z){
    if(Number(x)+Number(y)+Number(z)>1){
        return 1;
    }
    else{
        return 0;
    }


}


function stringToBinary(input) {
    var characters = input.split('');
  
    return characters.map(function(char) {
      return char.charCodeAt(0).toString(2)
    }).join('');
}

function binaryToString(){

}

function get_keystream(length, x, y ,z){
    let xx = x;
    let xx2;
    let yy = y;
    let zz = z;
    let neww = 0;
    let keystream = [];
    let i = 0;
    while(i< length){
        majority = get_majority(xx[8], yy[10], zz[10]);
        if (Number(xx[8]) == majority){
            neww = Number(xx[13]) ^ Number(xx[16]) ^ Number(xx[17]) ^ Number(xx[18]);
            xx2 = xx;
            let j = 1;
            while(j < xx.length){
				xx[j] = xx2[j-1];
				j = j + 1;
			xx[0] = neww;
            
            }
        }
        if (Number(yy[10]) == majority){
			let new_one = Number(yy[20]) ^ Number(yy[21]);
			let yy2 = yy;
			let k = 1;
			while(k < yy.length){
				yy[k] = yy2[k-1]
				k = k + 1;
			reg_y_temp[0] = new_one;

            }

        }
        if (zz[10] == majority){
			let new_two = Number(zz[7]) ^ Number(zz[20]) ^ Number(zz[21]) ^ Number(zz[22]);
			let zz2 = zz;
			let m = 1;
			while(m < zz.length){
				zz[m] = zz2[m-1];
				m = m + 1;
			zz[0] = new_two;
            }
        }

        keystream[i] =Number(xx[18]) ^ Number(yy[21]) ^ Number(zz[22]);
		i = i + 1;


    }
    return keystream;
}



function a51(){
    let key = "0101001000011010110001110001100100101001000000110111111010110111";
    if(prover(key)== false){
        console.log("Неверный ключ!");
        return 0;
    }
    let x = [];
    let y = [];
    let z = [];
    x += key.substring(0,19);
    y += key.substring(19,41);
    z += key.substring(41,64);
    console.log(x);
    console.log(y);
    console.log(z);
    

}



//a51();
console.log();
