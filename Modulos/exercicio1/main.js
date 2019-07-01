const fala = require('./fala');

fala.comprimento().then(() => {
    console.log("Oi, eu estou bem!");
    fala.puxaAssunto().then(() => {
        console.log("Eu estou casada, já fazem 6 meses e você como está?");
        fala.sentimento().then(() => {
            console.log("Serio?! O que houve? Quer conversar?");
            fala.tchau().then(() => {
                console.log("Então ta, até");
            });
        });
    });
});
