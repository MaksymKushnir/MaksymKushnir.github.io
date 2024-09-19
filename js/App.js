var info = prompt("Докажи що ти не робот =)\nНапиши - Хочу листівку", "Хочу " );
if(info === "Хочу листівку"){
    info = alert("Сьогодні листівки немає")
    close();
}
else if(info === "Хочу Макса"){
    info = alert("Сюди не пущу")
    close();
    }
else{
    info = alert("От халепа!")
    close();
}
