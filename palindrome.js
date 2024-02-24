    function isPalindrome(str) { //Lower Case untuk huruf kecil
        const cleanedStr = str.toLowerCase().replace(/\s/g, ''); //replace is regex
        for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
            if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    
        function checkPalindrome() {
        const inputElement = document.getElementById('word');
        const resultElement = document.getElementById('result');
        const word = inputElement.value.trim();  // trim untuk menghapus spasi 

        if (word === '') {
            resultElement.textContent = 'Mohon masukkan kata!';
        } 
        else if (isPalindrome(word)){
            resultElement.textContent = `${word} adalah palindrome`; //$ buat balikin
        }
        else if (isPalindrome(word) === false){
            resultElement.textContent = `${word} bukan palindrome`; //$ buat balikin
        }
    }
