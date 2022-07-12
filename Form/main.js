/**
 * Validar campos obrigatórios
 */
 /** function validar() {

	let nome = form.nome.value
    let sobrenome = form.sobrenome.value
	let email = form.email.value
	if (nome === "") {
		alert('Preencha o campo Nome')
		form.nome.focus()
		return false
	} else if(email === ""){
		alert('Preencha o campo E-mail')
		form.email.focus()
		return false
	}else {
		document.forms["form"].submit()
	}
}

*/



//LOGIN
var log1 = ''
var log2 = ''

nome.addEventListener('input' , function(){ 

    log1 =  nome.value
    login.value = log1 + '.' +  log2
})
sobrenome.addEventListener('input' , function(){ 

    log2 =  sobrenome.value
    login.value = log1 + '.' + log2
})



//* PESQUISAR CEP
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
//Atualiza os campos com os valores.
document.getElementById('rua').value=(conteudo.logradouro);
document.getElementById('bairro').value=(conteudo.bairro);
document.getElementById('cidade').value=(conteudo.localidade);
document.getElementById('uf').value=(conteudo.uf);
} //end if.
else {
//CEP não Encontrado.
limpa_formulário_cep();
alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}








// OCULTAR E MOSTRAR DIV


function revelar(){
    var container = document.querySelector(".hidden")

        if(container.getElementsByClassName.display = 'none'){
            container.getElementsByClassName.display = 'block';
        }
}

/*document.getElementById('form-enviado').onload = function () {
    document.getElementById('form-enviado').style.display = 'hidden'
}

document.getElementById('btn-enviar').onclick = function () {
    document.getElementById('form-enviado').style.display = 'none'
}*/


//FUNÇÃO PARA ALERTAR INFORMAÇÃO FINAL
function exibirAlerta(){
    alert('Cadastrado com Sucesso!!!')
}




