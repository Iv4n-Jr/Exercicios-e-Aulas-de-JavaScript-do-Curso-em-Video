function Contar(){
    var numinicio = parseInt(document.getElementById('inicio-numero').value) //Declarando variáveis
    var numfim =  parseInt(document.getElementById('fim-numero').value)
    var numpasso = parseInt(document.getElementById('passo-numero').value)
    var contandodiv = document.getElementById('Contando')

    if (numpasso <= 0){ //Caso o usuário inserir um valor inválido
        window.alert('Insira um número válido!')
        return;
    }

    if (numpasso >= numfim){ //Caso o número de passos for maior que o número final
        window.alert('Número de passos maior que o final? Aí você quer demais né meu fi')
        return;
    }

    contandodiv.innerHTML = ''; //Limpar o conteúdo anterior

    do { //Loop
        contandodiv.innerHTML += `${numinicio} \u{1F449}`
        numinicio += numpasso;
    } while (numinicio <= numfim)

    contandodiv.innerHTML += `\u{1F3C1}`;
    
    }
   