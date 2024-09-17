document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    //button.textContent = 'Змінити листівку';
    button.classList.add('btn', 'btn-light', 'mt-3');
    document.querySelector('.card-body').appendChild(button);

    button.addEventListener('click', function() {
        const wishes = [
            //"Бажаю тобі щастя, здоров'я та успіхів у всіх починаннях!",
            //"Нехай всі твої мрії здійсняться!",
            //"Бажаю тобі багато радості та любові!"
        ];
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        document.querySelector('.card-text').textContent = randomWish;
    });
});
