function checkQuiz() {
    const answers = {
        q1: "c", // Lokalne targi rolnicze
        q2: "b"  // Utrata miejsc pracy w przemyśle
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    // Sprawdź odpowiedzi
    for (const question in answers) {
        const selectedOption = document.querySelector(input[name="${question}"]:checked);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    }

    // Wyświetl wynik
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.innerHTML = 
        <h4>Twój wynik: ${score}/${totalQuestions}</h4>
        ${score === totalQuestions ? 
            '<p>Świetnie! Doskonale znasz temat globalizacji!</p>' : 
            score >= totalQuestions/2 ? 
            '<p>Dobrze, ale możesz jeszcze poszerzyć swoją wiedzę!</p>' : 
            '<p>Warto poczytać więcej o globalizacji!</p>'}
    ;
    resultDiv.style.marginTop = '1rem';
    resultDiv.style.padding = '1rem';
    resultDiv.style.backgroundColor = score === totalQuestions ? '#d5f5e3' : 
                                     score >= totalQuestions/2 ? '#fef9e7' : '#fadbd8';
    resultDiv.style.borderRadius = '5px';
}

// Dodatkowe efekty dla nawigacji
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.style.backgroundColor = 'transparent');
            this.style.backgroundColor = '#2c3e50';
        });
    });
});
