var tarefas = [] // CRIANDO UM VETOR DE TAREFAS
var i =0 // CRIANDO UMA VARIAVEL GLOBAL PARA O INDICE DA TAREJA
var J // CRIANDO UMA VARIAVEL GLOBAL PARA O RECEBER O INDICE DA TAREFA 'SPAN' 
const salvar =  document.getElementById( "todoform" ) // CRIANDO UMA CONSTANTE QUE RECEBE O FORMULARIO ||TAREFA NO HTML
salvar.addEventListener( 'submit', function( event ) { // A MESMA VARIAVEL EXECULTA UMA ESPERA DE EVENTO COM O addEventListener
    // QUANDO OS DADOS FOREM ENVIADOS 'SUBMIT' OS EVENTOS (INFORMAÇÕES) SÃO CAPTURADOS
    adicionarDados() // CHAMA A FUNÇÃO ADICIONARDADOS SEM PARAMETRO
    event.preventDefault() // BLOQUEIA A AÇÃO DO CLIQUE PADRÃO IMPEDINDO QUE A PAGINA RECARREGE E AS IMFORMAÇOES SEJAM CAPTURADAS
}, false ) // POR PADRÃO JÁ É FALSO 

function capturarDadosFormulario( ref ){ // DESIGNAÇÃO DE UMA FUNÇÃO COM O REF POR PARAMETRO
    const elemento = document.querySelector( ref )// CRIAÇÃO DE UMA CONSTANTE QUE RECEBE UM SELETOR DO PARAMETRO
    return elemento // RETORNO DA FUNÇÃO É A CONSTANTE CRIADA
}

function montarObjeto() { // DESGNAÇÃO DE UMA FUNÇÃO SEM PARAMETRO
    const tarefa = capturarDadosFormulario( '#tarefa' ) /* CRIAÇÃO DE UMA CONSTANTE QUE RECEBE A FUNÇÃO 
CAPTURARDADOSFORMULARIO RECEBENDO PARA O PAREMETRO O IMPUT DO FORMULARIO*/ 
    const dadosTarefa = { // CRIAÇÃO DE UMA CONSTANTE QUE RECEBE: 
        tarefa: tarefa.value, // A TAREFA QUE RECBE A CONSTANTE ANTERIOR QUE CAPTUROU A TAREFA
        status: false, // O STATUS QUE INICIALMENTE É FALSO 
        id:i // O ID QUE RECEBE UM IDENTIFICADOR
    }
    i++; // O IDENTIFICADOR É INCREMENTADO
    tarefa.value = ''// lIMPAR A VARIAVEL
    return dadosTarefa // O RETORNO É A CONSTANTE DADOS TAREFA 
}

function mostrarTarefas( objeto ){ // DESIGNAÇÃO DE UMA FUNÇÃO QUE RECEBE O PARAMETRO OBJETO
    const ulTarefas = document.querySelector( '.tarefas' ) // CRIAÇÃO DE UMA CONSTANTE QUE RECEBE UM SELETOR DA CLASSE TAREFAS NO HTML 
    console.log( ulTarefas ) // EXIBE NA TELA A CONSTANTE CRIADA
    const li = document.createElement( 'li' ) // UMA CONSTANTE QUE É CRIADA COMO UM ELEMENTO 'LI' 
    /*cria um texto para o elemento*/
    let texto = document.createTextNode( objeto.tarefa ) //UMA LET QUE É CRIADA COMO UM TEXTO PARA RECEBER A TAREFA
    li.appendChild( texto )// O ELEMENTO LI 'RECEBE' A LET ACIMA
    li.id = i // o elemento da lista recebe o id

    //colocar o X
    const span = document.createElement( 'span' ) // UMA CONSTANTE CRIADA COMO UM ELEMENTO SPAN
    texto = document.createTextNode( "\u00D7" ) //A LET CRIA UM TEXTO DE ERRO QUE SERIA O 'x'
    span.className = 'fechar' // O CLASSNAME RETORNA PARA A CONSTATE SPAN O VALOR DA CLASSE QUE SERIA 'FECHAR'
    span.appendChild( texto ) // A CONSTANTE SPAN 'RECEBE'O TEXTO

    li.appendChild( span ) // A CONSTANTE DO TIPO LISTA 'RECEBE' A CONSTANTE DO TIPO SPAM
    ulTarefas.appendChild( li ) /* A CONSTANTE QUE RECEBEU A CLASSE TAREFAS DO HTML 'RECEBE' A CONSTANTE LISTA, 
    OU SEJA A UL RECEBE TODOS OS ELEMENTOS DA LISTA*/ 
}

const lista = capturarDadosFormulario( '.tarefas' ) /* CRIAÇÃO DE UMA CONSTANTE QUE RECEBE A FUNÇÃO 
CAPTURARDADOSFORMULARIO RECEBENDO PARA O PAREMETRO A CLASSE TAREFAS NO HTML*/
//mudar o elemento (tira e coloca)
lista.addEventListener( 'click', function( evento ){ // A LISTA ESPERA DE EVENTO COM O addEventListene,  AO CLICAR AS TAREFAS ESTARAM CONCLUIDAS
    if( evento.target.tagName === 'LI'){ // CONDIÇÃO CASO O ITEM (EVENTO) FOI PARA A LISTA
        evento.target.classList.toggle( 'checked' ) // O EVENTO É CHEGADO, OU SEJA CONFIRIR SE A TAREFA JA FOI CONCLUIDA
        j=event.target.id // A VARIAVEL CRIADA ANTERIORMENTE RECEBE O ID DO ITEM (EVENTO)
        substituir(j) // CHAMA A FUNÇÃO SUBTITUIR
    }

   function substituir(J){ // FUNÇÃO SUBSTITUIR COM O PARAMETRO j ( QUE RECEBEU O ID)
        const tarefasC = capturarDadosFormulario ('.tarefas_re') /* CRIAÇÃO DE UMA CONSTANTE QUE RECEBE A FUNÇÃO 
        CAPTURARDADOSFORMULARIO RECEBENDO PARA O PAREMETRO A CLASSE TAREFAS CONCLUIDAS NO HTML*/
        let myLi = document.getElementById (J) // UMA LET RECEBE O j, QUE É O ID DA LISTA IGUAL DO ELEMENTO
        tarefasC.appendChild(myLi) // O ELEMENTO É ADICIONADO A LISTA DE TAREFAS CONCLUIDAS
    }
    
    if (evento.target.tagName === 'SPAN' ){  // CONDIÇÃO CASO O ITEM (EVENTO) SEJA DO TIPO SPAN 
        const texto = evento.target.parentElement.firstChild.data //retorna o elemento que sumiu da tela
        const vetor = tarefas.filter(function( obj ) { //  CONSTANTE QUE RECEBE O FILTRO DAS TAREFAS, CONTEM O PARAMETRO FUNÇÃO COM PARAMETRO OBJ
            return obj.tarefa != texto // RETORNO DA CONSTANTE É SE O RESULTADO DO FILTRO FOR DIFERENTE DE TEXTO
        })
        console.log(vetor) // IMPRIMI O VETOR NO CONSOLE
        evento.target.parentElement.style.display = "none" // OCULTA O ELEMENTO
    }

} )

function adicionarDados(){ // FUNÇÃO ADICIONAR DADOS
    const tarefa = montarObjeto() // CRIAÇÃO DE UMA VARIAVEL QUE RECEBE A FUNÇÃO MONTAROBJETO
    tarefas.push( tarefa ) // VETOR TAREFAS RECEBE AS TAREFAS 
    mostrarTarefas( tarefa )// EXECULTAR A FUNÇÃO MOSTRAR TAREFAS COM O PARAMETRO TAREFA
    console.log( tarefa )// IMPRIMIR NO CONSOLE A TAREFA
}