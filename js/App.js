var info = prompt("Напиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'Перегляд листівочки';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "Заюш, ти навіть не уявляєш, як сильно я за тобою скучив. Кожен день, проведений без тебе, здається безкінечно довгим і порожнім. Мої думки завжди повертаються до тебе, до наших щасливих моментів разом. Без тебе я почуваюся самотнім. Я завжди думаю про те, як ми знову зможемо обійнятися, як будемо разом сміятися і ділитися мріями, виховувати наших дітей. Кожна мить, проведена з тобою, – це справжній скарб для мене. Твої обійми – це моя мрія. Я з нетерпінням чекаю того моменту, коли ми знову зможемо бути разом. Завжди твій, Байт"];

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
