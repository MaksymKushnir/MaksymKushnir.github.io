var info = prompt("Напиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'ᓚᘏᗢ ❤️';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "224:   - today, - tomorrow, - forewer love you"];
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = '😘';
            button.addEventListener('click',function(){
                info = alert("Обіймаю. До мурашок ❤️ ")
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
            const wishes = [
                "Мася, з тобою хочеться все... Без тебе хочеться тебе. Хочеться твоїх обіймів. Ти найкраща. Ти неймовірна. Ти мрія. Ти красива. Ти мила. Ти найулюбленіша. Ти неперевершена. Кохаю тебе😘"];
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = '😘';
            button.addEventListener('click',function(){
                info = alert("Обіймаю. До мурашок ❤️ ")
            })
        });
    });
}
else{
    info = alert("От бісики, знову все наплутали та поламали\n(┬┬﹏┬┬)")
}
