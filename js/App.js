var info = prompt("Докажи що ти не робот =)\nНапиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    info = alert("Кохаю тебе ❤️")
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
    info = alert("Я так довго тебе чекав ❤️")
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'Переглянути бажання';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "У мене на тебе прекрасні, хоч і не зовсім пристойні плани... Ти - спокуса... Яка хвилює, тривожить і оживляє мою душу. Від тебе мурашки по тілу, навіть коли я просто думаю про тебе"]; 
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = '😘';
            button.addEventListener('click',function(){
                info = alert("Якщо хочеш легкий секс, то напиши мені 1, бурхливий - 2, оральний - 3, анальний - 4, поза 69 - 5, а от якщо хочеш повний пакет послуг, то ... скинь мені виклик")
                close();
            })
        });
    });
}
else{
    info = alert("От бісики, знову все наплутали та поламали\n(┬┬﹏┬┬)")
}
