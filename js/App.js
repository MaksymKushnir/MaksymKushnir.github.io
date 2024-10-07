var info = prompt("Напиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'ᓚᘏᗢ ❤️';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "Зранку я завжди заходжу в переписку з тобою, тому що ранок потрібно починати з ПРЕКРАСНОГО. Я вже не хочу без тебе, моя кохана прекрасна половинка 🥰"
            ];
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = '😘';
            button.addEventListener('click',function(){
                info = alert("Обіймаю. До мурашок ❤️ ")
                close();
            })
        });
    });
}else if(info === "Хочу Макса"){
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'ᓚᘏᗢ ❤️';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = ["Мася, з тобою хочеться все... Без тебе хочеться тебе. Хочеться твоїх обіймів і щоб ти була в моїх обіймах 😘"];
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
