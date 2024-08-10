function isValidCardNumber(cardNumber){

    // Parametre olarak gönderilen kred kartı numarasının boş olup olmadığı ve sadece rakam içermesi kontrol edilir.
    if(!cardNumber || !/^\d+$/.test(cardNumber)){
        throw new Error("Geçersiz kredi kartı numarası girdiniz.");    
    }

    //Kredi kartı numarası string ifadeye dönüştürülür.
    let checkNumber = cardNumber.toString();
    let sum = 0;

    for(let i= checkNumber.length-1; i>=0; i--){

        let number = parseInt(checkNumber.charAt(i), 10);

        //İndexi çift sayı olanları 2 ile çarp, çarpım sunucu 10'u geçenlerin rakamlarını topla. 
        if(i % 2 == 0){
            number*=2;
            if(number>9){
                number-=9;
            }
        }
        sum += number;
        
    }
   
    //Kartın son rakamı da sum değerine eklendiğinde 10 ile tam bölünüyorsa kredi kart numarası geçerlidir.
    return sum % 10 == 0;
   
}
module.exports=isValidCardNumber;