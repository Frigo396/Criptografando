function crypt(mensagem, hash) {

    const date = Date.now();
    
    let frase = mensagem.split("");

    for (let i = 0; i < frase.length; i++) {

        frase[i] = (frase[i].charCodeAt(0) * date);

        frase[i] += hash;
    }

    frase.push(date);

    let resposta = "";
    
    for (let i = 0; i < frase.length; i++) {
        resposta += frase[i];
    }

    return resposta;
}

function decrypt(cypher, hash) {

    let h = String(hash)

    const mensagem = cypher.split(h);

    const date = mensagem.pop();

    for (let i = 0; i < mensagem.length; i++) {
        mensagem[i] = String.fromCharCode(parseInt(mensagem[i]) / date);
    }

    let output = "";

    for (let i = 0; i < mensagem.length; i++) {
        output += mensagem[i];
    }

    return output;
}

const frase = "AGORA VAI !!!";

let fecha = crypt(frase, "d115bed8a607bff1d27c6ce3415f6b46ea7ac0ad0d1d9a1c7d79af19e0b758b568de9a93627355f0ea341699ce1ca26eb0b321e18f9540c0c3ccd9c874f0d7fe");

console.log(fecha);



let abre = decrypt(fecha, "d115bed8a607bff1d27c6ce3415f6b46ea7ac0ad0d1d9a1c7d79af19e0b758b568de9a93627355f0ea341699ce1ca26eb0b321e18f9540c0c3ccd9c874f0d7fe")

console.log(abre);
