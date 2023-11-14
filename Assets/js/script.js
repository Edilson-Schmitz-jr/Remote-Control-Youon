
// script para geração do link

function fazerRequisicao() {

    // Obter valores dos campos de entrada

    var ip = document.getElementById('ipInput').value;
    var porta = document.getElementById('portaInput').value;
    var senha = document.getElementById('senhaInput').value;
    var urlModify = document.getElementById('comandInput').value;

    // Verificar se algum campo está vazio

    if (!ip || !porta || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Adicionar o novo parâmetro ao comando

    var url = `http://${ip}:${porta}/?${urlModify}&pass=${senha}`;


    // Fazer a requisição usando fetch

    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Manipular a resposta como desejado
            console.log(data);
        })
        .catch(error => console.error('Erro:', error));
}


// script para modificação da url com onclick

const next_blade_button = document.getElementById('next_blade_button_action');
const return_blade_button = document.getElementById('return_blade_button_action');
const export_blade_button = document.getElementById('export_blade_button_action');
const profile_blade_button = document.getElementById('profile_blade_button_action');
const image_blade_button = document.getElementById('image_blade_button_action');
const zoom_in_button = document.getElementById('zoom_in_button_action');
const zoom_out_button = document.getElementById('zoom_out_button_action');
const play_midia_button = document.getElementById('play_midia_button_action');
const rotate_midia_button = document.getElementById('rotate_midia_button_action');
const close_button = document.getElementById('close_button_action');

next_blade_button.addEventListener("click", gererateNextBlade);
return_blade_button.addEventListener("click", gererateReturnBlade);
export_blade_button.addEventListener("click", gererateExportBlade);
profile_blade_button.addEventListener("click", gererateProfileBlade);
image_blade_button.addEventListener("click", gererateImageBlade);
zoom_in_button.addEventListener("click", gererateZoomInBlade);
zoom_out_button.addEventListener("click", gererateZoomOutBlade);
play_midia_button.addEventListener("click", gereratePlayBlade);
rotate_midia_button.addEventListener("click", gererateRotateBlade);
close_button.addEventListener("click", gererateCloseBlade);


function gererateNextBlade(inputElement){
    var comand_s_next_blade = 's';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao() 
}

function gererateReturnBlade(inputElement){
    var comand_s_next_blade = 'v';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao()
}

function gererateExportBlade(inputElement){
    var comand_s_next_blade = 'e';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao()
}

function gererateProfileBlade(inputElement){
    var comand_s_next_blade = 'n';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao()
}

function gererateImageBlade(inputElement){
    var comand_s_next_blade = 'f';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao()
}

function gererateZoomInBlade(inputElement){
    var comand_s_next_blade = 'z';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao()
}

function gererateZoomOutBlade(inputElement){
    var comand_s_next_blade = 'z';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao()
}

function gereratePlayBlade(inputElement){
    var comand_s_next_blade = '%20';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao()
}

function gererateRotateBlade(inputElement){
    var comand_s_next_blade = 'r';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao()
}

function gererateCloseBlade(inputElement){
    var comand_s_next_blade = 'fechar';
    document.getElementById('comandInput').value = '';
    document.getElementById('comandInput').value = comand_s_next_blade;
    fazerRequisicao()
}


