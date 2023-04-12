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
    return xy;
    
    
    
    //console.log(arr);
}


let e = 7;
let n = 20;
let leler = 33;
let summ = 0;
summ = (1*(e**(33*(n-1)))%20);
console.log(summ);