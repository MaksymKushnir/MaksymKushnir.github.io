var info = prompt("Докажи що ти не робот =)\nНапиши - Хочу листівку", "Хочу " );
if(info == "Хочу листівку"){
    info = alert("Кохаю тебе сильно сильно💕❤️")
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'Подивитись';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
    
        button.addEventListener('click', function() {
            const wishes = [
                "Кохана, хай у твоїх снах ми будемо разом, а навколо – квіти, зірки та все найкраще. Нехай ці сни будуть такими ж ніжними та прекрасними, як ти. Дякую тобі за те, що ти є в моєму житті. Ти робиш мене щасливішим кожного дня. Я дякую тобі за те що знайшов тебе. Солодких снів, моя муза. Одужуй! Міцно обіймаю!"
            ];
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = 'Закрити';
            button.addEventListener('click',function(){
                close();
            })
        });
    });
}else if(info == "Хочу Макса"){
    info = alert("Я хочу тебе 🔞")
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'Отримати задоволення';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "Я хочу тебе ТАМ, язиком... Дозволь моєму язику пояснити, як я тебе хочу. Стільки хтивих думок у моїй голові сьогодні. Це ти мене так надихаєш. Я тут, щоб робити тебе усміхненою... і між цим шльопати по пружній попці. Не можу перестати думати про твої ідеальні груди, про те, як класно було б бігати по них язиком, поки вони не стануть вологими. Хочу відчути твій ласкавий і тихий стогін, що переходить в глибоке дихання, і відчувати як ти, наповнена пристрастю, ведеш свої нігті по моїй спині. Солодкиих снів задоволення!"
            ];
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = 'Кінчити';
            button.addEventListener('click',function(){
                close();
            })
        });
    });
}
else{
    info = alert("От халепа, щось пішло не так!\nПоходу, кіна не буде, розходимось спати=)\nАбо пиши правильно)")
    close();
}
