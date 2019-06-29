let total=document.getElementById('total')
let price1=document.getElementById('price1')
let product1=document.getElementById('product1')
let price2=document.getElementById('price2')
let product2=document.getElementById('product2')
let price3=document.getElementById('price3')
let product3=document.getElementById('product3')
let fas1=document.getElementsByClassName('fas1')
let fas2=document.getElementsByClassName('fas2')
let fas3=document.getElementsByClassName('fas3')

let box1=document.getElementById('box1')
let box2=document.getElementById('box2')
let box3=document.getElementById('box3')


function inc1(){
    product1.innerHTML=+product1.innerHTML+1;
    price1.innerHTML=+price1.innerHTML+45;
    total.innerHTML=+total.innerHTML+45;
}
function inc11(){
    if (product1.innerHTML==0){    
        total.innerHTML=total.innerHTML;
        product1.innerHTML=product1.innerHTML;
}
else{
    product1.innerHTML=+product1.innerHTML-1;
    price1.innerHTML=+price1.innerHTML-45;
    total.innerHTML=+total.innerHTML-45;}
}
function inc2(){
    product2.innerHTML=+product2.innerHTML+1;
    price2.innerHTML=+price2.innerHTML+60;
    total.innerHTML=+total.innerHTML+60;
}
function inc22(){
    if (product2.innerHTML==0){    
        price2.innerHTML=0
        total.innerHTML=total.innerHTML;
        product2.innerHTML=product2.innerHTML;
}
else{
product2.innerHTML=+product2.innerHTML-1;
price2.innerHTML=+price2.innerHTML-60;
total.innerHTML=+total.innerHTML-60;}

}
function inc3(){
    product3.innerHTML=+product3.innerHTML+1;
    price3.innerHTML=+price3.innerHTML+100;
    total.innerHTML=+total.innerHTML+100;
}
function inc33(){
    if (product3.innerHTML==0){    
            price3.innerHTML=0
            total.innerHTML=total.innerHTML;
            product3.innerHTML=product3.innerHTML;
    }
    else{
    product3.innerHTML=+product3.innerHTML-1;
    price3.innerHTML=+price3.innerHTML-100;
    total.innerHTML=+total.innerHTML-100;}
}
function remove1(){
    box1.style.display='none'
    total.innerHTML=+total.innerHTML-price1.innerHTML;
}
function remove2(){
    box2.style.display='none'
    total.innerHTML=+total.innerHTML-price2.innerHTML;
}
function remove3(){
    box3.style.display='none'
    total.innerHTML=+total.innerHTML-price3.innerHTML;
}
function rouge1(){
  
for(i=0;i<fas1.length;i++){
    if(fas1[i].style.color=='red')
    fas1[i].style.color='black'
    else
        fas1[i].style.color='red'  
}
}
function rouge2(){
for(i=0;i<fas2.length;i++){
    if(fas2[i].style.color=='red')
    fas2[i].style.color='black'
    else
        fas2[i].style.color='red'  
}
}
function rouge3(){
for(i=0;i<fas3.length;i++){
    if(fas3[i].style.color=='red')
    fas3[i].style.color='black'
    else
        fas3[i].style.color='red'  
}
}
