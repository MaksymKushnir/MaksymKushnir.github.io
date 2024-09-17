var info = prompt("Докажи що ти не робот =)\nнапиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'Подивитись';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
    
        button.addEventListener('click', function() {
            const wishes = [
                "Сонце моє, бажаю тобі таких снів, щоб зранку ти прокинулася з посмішкою і захотіла подзвонити мені. Нехай всі твої турботи залишаться позаду. Бажаю тобі поринути у світ фантазій, де збуваються всі твої найзаповітніші бажання. Можливо, сьогодні вночі ти зустрінеш уві сні єдинорога? Хто знає...=) Хочу дбати про тебе і хочу, щоб ти добре виспалася. Солодких снів! Одужуй! Міцно обіймаю!"
    
            ];
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
        });
    });
}else{
    info = alert("Ой лишенько, щось пішло не так!\nВибач, кіна не буде, розходимось спати=)")
    close();
}
