
let input = document.getElementById("inserir-tarefas")
let button = document.getElementById("botao-adicionar")
let tarefas = document.getElementById("nome-tarefa-id")
let arraytarefas = []
let completelist = document.getElementById("list-tarefas")
recarregartarefas()
button.addEventListener("click", adicionarTarefa)

function adicionarTarefa() {
    if (input.value) {
        arraytarefas.push({
            tarefa: input.value,
            status: false
        })
    } else {
        alert("Digite uma tarefa")
    }

    input.value = ""
    showtask()
}

function showtask() {
    let novali = ''
    arraytarefas.forEach((task, i) => {

        novali = novali + `
        <li class="tarefas ${task.status === true && 'concluido'}">
            <button class="rocket " onclick="concluirtarefa(${i})"> <i class="fas fa-rocket"></i> </button>
                <p class="nome-tarefa ${task.status === true && 'concluido'}" id="nome-tarefa-id">${task.tarefa} </p>
            <button class="delete" onclick="deletartask(${i})"> <i class="fas fa-trash"></i> </button>
        </li>  
        `
    })

    completelist.innerHTML = novali
    localStorage.setItem("lista", JSON.stringify(arraytarefas))
}

function deletartask(i) {
    arraytarefas.splice(i, 1)
    showtask()
}
function concluirtarefa(i) {
    arraytarefas[i].status = !arraytarefas[i].status
    showtask()
}

function recarregartarefas() {
    let minhastarefas = localStorage.getItem("lista")

    if (minhastarefas) {
        arraytarefas = JSON.parse(minhastarefas)
        showtask()
    }


}
function adicionarpeloenter(teclas) {
    if (teclas.key === "Enter") {
        adicionarTarefa()
    }
}
document.addEventListener("keypress", adicionarpeloenter)











