(function (){
    'use strict';
    // variaveis e acesso ao html:
    var $form = document.querySelector('form');
    var $text = document.getElementsByName('text');
    var $email = document.getElementsByName('email');
    var $btnenviar = document.getElementsByClassName('btnenviar');
    // Adicao de evento com funcao que impede envio sem campos preenchidos:
    $form.addEventListener('submit', function(e){
      if(!$text.values || !$email.values) {
        alert('Preencha todos os campos');
        e.preventDefault();
      }
    });

  })()
// A funcao de envio esta impedindo o envio e mostrando uma mensagem caso alguma informacao falte.