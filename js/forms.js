jQuery.extend(jQuery.validator.messages, {
    required: "Este campo é obrigatório.",
    email: "E-mail inválido.",
    number: "Por favor insira um número válido.",
    maxlength: jQuery.validator.format("Por favor insira no máximo {0} caracteres."),
    minlength: jQuery.validator.format("Por favor insira no minímo {0} caracteres."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Por favor insira entre {0} e {1} caractéres.")
});

// Formulários
$("#form-seja-associado").validate({
    rules: {
        nome: {
            required: true
        },
        cnpj: {
            required: true
        },
        tipo: {
            required: true
        },
        cep: {
            required: true
        },
        rua: {
            required: true
        },
        bairro: {
            required: true
        },
        numero: {
            required: true
        },
        cidade: {
            required: true
        },
        uf: {
            required: true
        },
        cargoresp: {
            required: true
        },
        telresp: {
            required: true
        },
        senha: {
            required: true
        },
        confirmasenha: {
            required: true,
            equalTo:'#password'
        },
        email: {
            required: true,
            email: true
        },
        comoconheceu: {
            required: true,
            email: true
        },
        nomeresp: {
            required: true,
            email: true
        },
    },

    messages: {
        confirmasenha: {
            equalTo: 'As senhas devem ser iguais.'
        }
    }
});

$("#form-coleta").validate({
    rules: {
        nome: {
            required: true
        },
        cnpj: {
            required: true
        },
        tipo: {
            required: true
        },
        cep: {
            required: true
        },
        rua: {
            required: true
        },
        bairro: {
            required: true
        },
        numero: {
            required: true
        },
        cidade: {
            required: true
        },
        uf: {
            required: true
        },
        cargoresp: {
            required: true
        },
        telresp: {
            required: true
        },
        fornecedorbaterias: {
            required: true
        },
        quantidadebaterias: {
            required: true,
            minLength: 3
        },
        opcaodestinacao: {
            required: true
        },
        cepdestinacao: {
            required: true
        },
        telresp: {
            required: true
        },
        senha: {
            required: true
        },
        confirmasenha: {
            required: true,
            equalTo:'#password'
        },
        email: {
            required: true,
            email: true
        },
        comoconheceu: {
            required: true,
            email: true
        },
        nomeresp: {
            required: true,
            email: true
        },
    },

    messages: {
        confirmasenha: {
            equalTo: 'As senhas devem ser iguais.'
        }
    }
});

// Formulários
$("#form-login").validate({
    rules: {
        usuario: {
            required: true
        },

        senha: {
            required: true
        }
    },
});