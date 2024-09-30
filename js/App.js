var info = prompt("Напиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.createElement('button');
        button.textContent = 'ᓚᘏᗢ ❤️';
        button.classList.add('btn', 'btn-greens', 'mt-3');
        document.querySelector('.card-body').appendChild(button);
        button.addEventListener('click', function() {
            const wishes = [
                "- Запрошую на найповільніший танець.... - Будемо лежати обнявшись!",
                "Вічно можна дивитись  на три речі: - Як тече вода. - Як горить вогонь. - І в твої милі оченята ❤️"
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
            const wishes = [
                "Кохана дівчинка моя ❤️. Я дуже щасливий що наші долі перетнулись, а шляхи зійшлись воєдино. Ти моє кохання ❤️. Мій маленький світ😘🤗. І особисте яскраве та неповторне сонечко🤗 Дякую тобі за все ... Ти прекрасна  і зовні, і душею ❤️. І я впевнений, що такого сонечка нема на цій планеті кращої... доброї, ніжної, розумної та чарівної дівчини. Кохаю тебе сонечко моє ❤️ дузе дузе, твій коханий котик 😘🤗"]; 
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
