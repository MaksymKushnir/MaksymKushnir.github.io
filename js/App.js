var info = prompt("Напиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'ᓚᘏᗢ ❤️';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "Кицюнь. Люблю тебе сильно сильно. Дякую тобі за неймовірні емоції якими ти мене надихнула."
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
    info = alert("Я тебе зустрів ❤️")
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'ᓚᘏᗢ ❤️';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "У мене від тебе мурашки по тілу, навіть коли я просто думаю про тебе. А цей твій трюк з трусиками він неймовірний та збуджуючий"]; 
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = '😘';
            button.addEventListener('click',function(){
                info = alert("Обіймаю. До мурашок ❤️ ")
                close();
            })
        });
    });
}
else{
    info = alert("От бісики, знову все наплутали та поламали\n(┬┬﹏┬┬)")
}
