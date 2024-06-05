var listaExCorreta = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var listaExResposta = [];

var points = 0;
var tamCorreta = listaExCorreta.length;

// START DO QUIZ
function start(){
    card_welcome.style.display = 'none';
    start_father_quiz.style.display = 'flex';
}

// CALCULAR PONTOS FINAIS
function points_finais(){
    for(var index = 0; index < tamCorreta; index++){

        if (listaExResposta[ index ] == listaExCorreta[ index ]){
            points += 10;
        } else {

        }

    }

    points_msg.innerHTML = `Pontos: ${points}`;
}

function salvar() {
    var pointsVar = points;
    var idUserVar = sessionStorage.ID_USUARIO;

    // Enviando o valor da nova input
    fetch("/quizRota/cadastrarResultado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        pointsServer: pointsVar,
        idUserServer: idUserVar
      }),
    })

    setTimeout(() => {
        window.location = "dashboard/dashboard.html";
    }, "1000");
    
    return false;
}

// PERGUNTA NUMERO 1
function per_1(){

    var correta = 1;
    var errada = 0;

    if (p_1.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_1.style.display = 'none';
        pergunta_2.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_1.style.display = 'none';
        pergunta_2.style.display = 'flex';
    }

}

// PERGUNTA NUMERO 2
function per_2(){

    var correta = 1;
    var errada = 0;

    if (p_2.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_2.style.display = 'none';
        pergunta_3.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_2.style.display = 'none';
        pergunta_3.style.display = 'flex';
    }

}

// PERGUNTA NUMERO 3
function per_3(){

    var correta = 1;
    var errada = 0;

    if (p_3.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_3.style.display = 'none';
        pergunta_4.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_3.style.display = 'none';
        pergunta_4.style.display = 'flex';
    }

}

// PERGUNTA NUMERO 4
function per_4(){

    var correta = 1;
    var errada = 0;

    if (p_4.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_4.style.display = 'none';
        pergunta_5.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_4.style.display = 'none';
        pergunta_5.style.display = 'flex';
    }

}

// PERGUNTA NUMERO 5
function per_5(){

    var correta = 1;
    var errada = 0;

    if (p_5.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_5.style.display = 'none';
        pergunta_6.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_5.style.display = 'none';
        pergunta_6.style.display = 'flex';
    }

}

// PERGUNTA NUMERO 6
function per_6(){

    var correta = 1;
    var errada = 0;

    if (p_6.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_6.style.display = 'none';
        pergunta_7.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_6.style.display = 'none';
        pergunta_7.style.display = 'flex';
    }

}

// PERGUNTA NUMERO 7
function per_7(){

    var correta = 1;
    var errada = 0;

    if (p_7.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_7.style.display = 'none';
        pergunta_8.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_7.style.display = 'none';
        pergunta_8.style.display = 'flex';
    }

}

// PERGUNTA NUMERO 8
function per_8(){

    var correta = 1;
    var errada = 0;

    if (p_8.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_8.style.display = 'none';
        pergunta_9.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_8.style.display = 'none';
        pergunta_9.style.display = 'flex';
    }

}

// PERGUNTA NUMERO 9
function per_9(){

    var correta = 1;
    var errada = 0;

    if (p_9.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_9.style.display = 'none';
        pergunta_10.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_9.style.display = 'none';
        pergunta_10.style.display = 'flex';
    }

}

// PERGUNTA NUMERO 10
function per_10(){

    var correta = 1;
    var errada = 0;

    if (p_10.checked == true) {
        listaExResposta.push(correta);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Correta');

        pergunta_10.style.display = 'none';
        final.style.display = 'flex';

    } else {
        listaExResposta.push(errada);
        console.log(listaExResposta);
        console.log(listaExCorreta);

        alert('Resposta Incorreta');

        pergunta_10.style.display = 'none';
        final.style.display = 'flex';
    }

    points_finais();

}