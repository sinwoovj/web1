// // document.getElementById("count-el").innerText = 4;
// console.log("namgui");
// let a = 3;
// console.log(a);
// let b = '하이';
// console.log(b);
// let c = 7;
// let d = 3;
// console.log(c+d);
// let id = '202190513';
// let myName = 'izumi sagiri';
// console.log(id+' '+myName);


// let cnt = 0;
// cnt++;
// console.log(cnt);

// let cnt2 = 0;
// console.log(++cnt2);

// let cnt3 = 0;
// cnt3 += 2; //cnt3 = cnt3 + 2;
// console.log(cnt3);

// function raise(){
//     cnt++;
// }
// raise();

// console.log(cnt);
// let str = '3';
// let num = 3;
// console.log(str + num);


let a = 0;
let b = 0;
let c = 0;
function increase(){
    console.log("click!");
    a+=1;
    document.getElementById("count-el").innerText = a;
}

function save(){
    if(a!=0) b += a+'\n';
    if(c==0){
        b = a+'\n';
        c=1;
    } 
    document.getElementById("history").innerText = b;
    document.getElementById("count-el").innerText = 0;
    a=0;
}