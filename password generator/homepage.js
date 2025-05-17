document.addEventListener('DOMContentLoaded', function() {
    // Simple animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const targetNumber = parseInt(stat.textContent);
        stat.textContent = '0';
        
        const duration = 2000;
        const increment = targetNumber / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetNumber) {
                clearInterval(timer);
                stat.textContent = targetNumber.toString();
            } else {
                stat.textContent = Math.floor(current).toString();
            }
        }, 16);
    });
});