// if(something){
// do something
// }else{
//     do somehing else
// }

//EQUAL TO



// if(id == 100 ){

//     console.log('correct');
// } else{

//     console.log('incorrect');


//NOT EQUAL To

// if(id != 100){

//     console.log('accept');
// } else{
//     console.log (deny)
// }

// //


// if(id === 100 ){

//     console.log('correct');
// } else{

//     console.log('incorrect');
// }


// const id = '100';

// if(id){

//     console.log(`The ID is ${id}`);

// }else{
// console.log('No Id')

// }

//testing if greater than less
// if(id < 200){

//     console.log( 'incorrect');

// }else{
// console.log('correct')}

// //if else

// const color = 'black';

// if (color=== 'red'){

//     console.log('color is red');
// }else if (color=== 'blue'){

//     console.log('color is blue');
// }else{

//     console.log('color not red or blue');
// }



//LOGICAL OPERATORS
//and - ctrl 7 mbili(&&)
// const name = 'steve';
// const age = 14;

// if(age > 0 && age < 12 ){

//     console.log(`${name} is a child`)
// }else if (age >=  13 && age <= 19){


//     console.log(`${name}is a teenager`)
// }

// //or  one statement is true 2 pipes ||(shift curl)


// if (age <7 || age <67){

// console.log(`${name} cannot run`)

// }

// const id = 100

// //TERNARY OPERATORS

// console.log(id === 100? 'CORR'  : 'INCORR')


// const color = 'blue';

// switch(color){

// case 'red':
// console.log('color is red')
// break
// case 'blue':
//     console.log('color blue')








// const math =(num1,num2) =>{



//     let sum = num1+ num2
//     console.log(sum);
//     let multiplication= num1*num2
//     console.log(multiplication)

// }








// math(10,265)

// const add = (num1,num2)=>

// {

// let sum = num1 + num2
// console.log(sum)
// alert(sum);

// let mult = num1*num2
// console.log(mult)
// alert(mult)



// }
// add(

//     parseInt(prompt("enter a number:")),
//     parseInt(prompt("enter another"))



// const BMI =(num1,num2)=>{

// let full= (num1/ num2/num2)* 703
// console.log(full)
// alert(full)



// }

// BMI(parseFloat(prompt("enter weight in pounds")),
// parseInt(prompt("enter height in inches"))






// let num = 5;

// if(num/2 === num.fl){

//     alert("more than 6")
// }else{

// alert("less than 6")

// }

// let temp = 17;

// if(temp> 10){

//     prompt("have coffee or tea")
// }else{

//     prompt("have tea")
// }
// const dig=(num1)=>{

//     let sum = num1 
//     console.log(sum)


// if(sum % 2== 0){
//     alert('number is even')
// }else{
//     alert('number is odd')
// }

// }





// dig(parseInt(prompt('enter number')))

// // dig(13,15)

//GET IDEA HERE.

// const akan = (num1, num2, num3)=>{
// let month = num1;
// let day = num2;
// let year= num3;
// let yr = year.substring(0,2);
// let mwaka = year.substring(2);
// let full =((yr/4) -(2* yr - 1)) + (5 * mwaka/ 4);


// let calc = (26 * ((month +1) / 10) + day ) + full;
// let mult = (calc % 7)
// let total = Math.floor(mult)

// alert(total)


// }


// akan(parseInt(prompt('month to test')),
// parseInt(prompt('date to test')),
// prompt('enter year')

// )



// // const age = (Number)=>{



//     let num =Number;
//     let str = num.substring(2)

//     console.log(str)
// }

// age(prompt('enter age'))









// const akan =('num1','num2','num3')=> {

//     let year = num1;
//     let yea = year.substring(0 ,2)
//     console.log(yea)
//     alert(yea);




// }

// akan(parseInt(prompt('enter year of birth')),
// parseInt(prompt('enter month of birth')),
// parseInt(prompt('enter day of birth')),
// )


// const age =(num1)=>{


//     let year= num1
//     year= year.substring(0,1)


//     console.log(year) 
//     alert(year)

// }

// age(parseInt(prompt('enter age')))



// for(let i = 0 ; i<=3; i+= 1){
//     console.log(i)
// }
// let total= 0
// for( let i= 0 ; i <3; i+=1){
//     total+=i
// }
// console.log(total)

// let nam = ['red', 'gue', 'hue']
// for(let i = 0; i< nam.length ; i+= 1){

//     console.log(nam[i])
// }


// let fruits = ['mango' , 'apple', 'banan', 'str']
// fruits.forEach(function(){



//     alert(fruits)
// })
function num11() {
    let val = document.getElementById('num1').value
    let num = document.getElementById('num2').value
    let kim = parseInt(val);
    let trance = parseInt(num);

    let add = kim + trance;
    document.getElementById('resu').innerHTML = add;
}

function num111() {
    let val = document.getElementById('num1').value
    let num = document.getElementById('num2').value
    let kim = parseInt(val);
    let trance = parseInt(num);

    let mult = kim * trance;
    document.getElementById('resul').innerHTML = mult;




}
function num1111() {

    let val = document.getElementById('num1').value
    let num = document.getElementById('num2').value
    let kim = parseInt(val);
    let trance = parseInt(num);
    
    let divi = kim / trance;
    document.getElementById('result').innerHTML = divi;
    
    

}

function ken(){

    alert('look at the bottom of the screen blood!')
    document.getElementById('re').innerHTML = 'DEAD FUCKING YOUT BLOOD!!!'



}




