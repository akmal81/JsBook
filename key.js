const totalPrice = 4500;
if (totalPrice>=3000) {
    const discount = (totalPrice/100)*5;
    const payable = totalPrice - discount;
    console.log('3K discount price', payable)
    
}
else if(totalPrice >= 6000){
    const discount = (totalPrice/100)*15;
    const payable = totalPrice - discount;
    console.log('6K discount price', payable)

}