document.addEventListener('DOMContentLoaded', function() {
    const passwordEl = document.getElementById('password');
    const lengthEl = document.getElementById('length');
    const lengthValueEl = document.getElementById('length-value');
    const uppercaseEl = document.getElementById('uppercase');
    const lowercaseEl = document.getElementById('lowercase');
    const numbersEl = document.getElementById('numbers');
    const symbolsEl = document.getElementById('symbols');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');

    // Update length value display
    lengthEl.addEventListener('input', function() {
        lengthValueEl.textContent = this.value;
    });

    // Generate password
    generateBtn.addEventListener('click', function() {
        const length = +lengthEl.value;
        const hasUpper = uppercaseEl.checked;
        const hasLower = lowercaseEl.checked;
        const hasNumber = numbersEl.checked;
        const hasSymbol = symbolsEl.checked;
        
        passwordEl.value = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol);
    });

    // Copy password to clipboard
    copyBtn.addEventListener('click', function() {
        if (!passwordEl.value) return;
        
        passwordEl.select();
        document.execCommand('copy');
        
        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });

    // Generate password function
    function generatePassword(length, upper, lower, number, symbol) {
        let generatedPassword = '';
        const typesCount = upper + lower + number + symbol;
        
        if (typesCount === 0) {
            alert('Please select at least one character type!');
            return '';
        }
        
        const typesArr = [
            {upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'},
            {lower: 'abcdefghijklmnopqrstuvwxyz'},
            {number: '0123456789'},
            {symbol: '!@#$%^&*()_+~`|}{[]\\:;?><,./-='}
        ].filter(item => {
            const key = Object.keys(item)[0];
            return eval(key); // Convert string to variable name
        });
        
        for (let i = 0; i < length; i++) {
            const typeIndex = Math.floor(Math.random() * typesArr.length);
            const type = typesArr[typeIndex];
            const charSet = Object.values(type)[0];
            const charIndex = Math.floor(Math.random() * charSet.length);
            generatedPassword += charSet.charAt(charIndex);
        }
        
        return generatedPassword;
    }

    // Generate a password on page load
    generateBtn.click();
});