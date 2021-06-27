import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões com a classe check(do HTML) que existem
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //Adicionar a verificação de click
    button.addEventListener("click", handleClick)
})

//Quando delete for clicado, ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

// Quando o room-id for clicado, ele copia o conteúdo para a área de transferência

const roomId = document.querySelector("#room-id").dataset.id // Código da sala
const textInput = document.getElementById('room-id-copy') // id do input escondido
const copyButton = document.getElementById('room-id') // id do botão copiar

copyButton.addEventListener('click', () => {
    document.getElementById('room-id-copy').value = roomId; /* Define o texto do input com o valor
                                                               do código da sala */
    textInput.select(); // Selecionar texto do input
    document.execCommand('copy'); // Executa o comando de copiar
})

function handleClick(event, check = true){
    event.preventDefault() // Parar de adicionar a # na URL

    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form") 
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} essa pergunta`  // Concatenação
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}