// prb 1
// const totalPrice = 4500;
// if (totalPrice>=3000) {
//     const discount = (totalPrice/100)*5;
//     const payable = totalPrice - discount;
//     console.log('3K discount price', payable)
    
// }
// else if(totalPrice >= 6000){
//     const discount = (totalPrice/100)*15;
//     const payable = totalPrice - discount;
//     console.log('6K discount price', payable)

// }

// prb 2

const age =61;
const price = 500;
if (age <= 12){
    console.log('No charge')
}
else if (age>= 60) {
    const discount = price /100 * 50;
    const payable = price-discount;
    console.log("over 50 age will get 50% discount price", payable)
} else {
    console.log('no discount')
}

// prb 3

const bankBalance =4000;

if (bankBalance<= 1000) {
    console.log('diposit first')
} else if(bankBalance>=1000 && bankBalance<=5000){
    console.log('Bindas enjoy')   
}
else{
    console.log('Marry me')
}

// prb 4
const marks = 40;

if (marks < 50) {
    console.log('You are fail')
}
 else if(marks >=50 && marks<= 80){
    console.log("you are pass")
}
else{
    console.log('A+')
}
// prb 5

