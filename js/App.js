var info = prompt("Напиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'ᓚᘏᗢ ❤️';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "Кохана моя, закривай оченята і занурюйся в теплі спогади про наші обійми, наші поцілуночки. Нехай сон буде легким і ніжним, наповнений теплом яке ми дарували один одному, спокоєм та щастям. Я люблю тебе більше за все і бажаю, щоб кожна мить твого відпочинку була наповнена снами де ми займаємось коханням. Солодких і приємних снів, моя малеча. Люблю до сонечка❤️🐝"];
            const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
            document.querySelector('.card-text').textContent = randomWish;
            button.textContent = 'Перегляд листівочки';
            button.addEventListener('click',function(){
                info = alert("Безмежно кохаю тебе ❤️ ")
            })
        });
    });
}else if(info === "Хочу Макса"){
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'Перегляд листівочки';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "Мася, Я хотів би з тобою спати. Ніжно-ніжно обійняти. І заритися носом в твоє волосся цілувати за вушком до мурашок. Затягнувши тебе в ліжечко. Я хотів би цілувати тебе в губки і пестити, а потім притиснути до себе і зайнятись палким сексом і після нього погладжувати тебе уві сні. Кохаю тебе😘"]
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
