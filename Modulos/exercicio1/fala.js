const tempo = 3000


exports.comprimento = function comprimento(){

    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Ola, como você esta?");
            resolve();
        }, tempo);
    });
}

exports.tchau = function tchau(){

    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Vou embora, até mais!");
            resolve();
        }, tempo);
    });
}

exports.puxaAssunto = function puxaAssunto(){

    return new Promise(resolve => {
        setTimeout(() => {
            console.log("E ae, como está a vida?");
            resolve();  
        }, tempo);
    });
}

exports.sentimento = function sentimento(){

    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Hoje não estou nada bem :(");
            resolve();
        }, tempo);
    });

}
