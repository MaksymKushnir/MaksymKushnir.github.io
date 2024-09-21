var info = prompt("Докажи що ти не робот =)\nНапиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    info = alert("Кохаю тебе сильно сильно💕❤️")
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'Подивитись';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "Моя найдорожча, моя любов. Я так чекаю нашої зустрічі і дуже сумую за тобою. Сподіваюся, що зовсім скоро знову побачу твою усмішку. Спи спокійно, моя любов. Найсолодших та найеротичних снів! Твій Кусь! 💫💖"
            ];
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = '😘';
            button.addEventListener('click',function(){
                close();
            })
        });
    });
}else if(info === "Хочу Макса"){
    info = alert("Проходь, я на тебе чекав ❤️")
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'Переглянути бажання';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "«Любов - це хвороба,\nЩо вимагає постільного режиму» \nТвій К."]; 
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = '😘';
            button.addEventListener('click',function(){
                info = alert("Слухай, що в тебе з телефоном? Я тобі дзвоню, а мені кажуть: «Абонентка зараз займається самозадоволенням, дочекайтеся своєї черги».")
                close();
            })
        });
    });
}
else{
    info = alert("От бісики, знову все наплутали та поламали\n(┬┬﹏┬┬)")
}
