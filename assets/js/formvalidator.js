jQuery(function ($) {
  $.validator.addMethod('alphabetsnspace', function (value, element) {
    return this.optional(element) || /^[a-zA-ZÀ-ú' ]*$/.test(value);
  }),
    $.validator.addMethod('alphabetsnspace2', function (value, element) {
      return this.optional(element) || /^[a-zA-Z-,-?0-9.' ]*$/.test(value);
    }),
    $('#formContact').validate({
      rules: {
        nome: {
          alphabetsnspace: !0,
          minlength: 2,
          maxlength: 15,
          required: !0,
        },
        sobrenome: {
          required: !0,
          minlength: 3,
          maxlength: 20,
          alphabetsnspace: !0,
        },
        email: {
          required: !0,
          email: !0,
        },
        celular: {
          required: !0,
          minlength: 15,
        },
        mensagem: {
          alphabetsnspace2: !0,
          required: !0,
          maxlength: 1500,
        },
      },
      messages: {
        nome: {
          required: 'Por favor, informe seu nome',
          alphabetsnspace: 'Por favor, apenas letras',
        },
        sobrenome: {
          required: 'Por favor, informe seu sobrenome',
          alphabetsnspace: 'Por favor, apenas letras',
        },
        email: {
          required: 'Por favor, informe seu e-mail para contato',
        },
        celular: {
          required: 'Por favor, informe seu número de celular',
          minlength: 'Por favor, insira 11 dígitos (somente números)',
        },
        mensagem: {
          alphabetsnspace2: 'Por favor, não utilize caracteres especiais',
        },
      },
    });
}),
  $('#celular').mask('(00) 00000-0000'),
  $('#mensagem').keypress(function (e) {
    let str = $(this).val();
    ("'" != String.fromCharCode(e.which) &&
      '<' != String.fromCharCode(e.which) &&
      '>' != String.fromCharCode(e.which)) ||
      (e.preventDefault(), $(this).val(str + ''));
  });
