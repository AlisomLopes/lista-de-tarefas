const localStorageKey = 'lista-de-tarefas';

function newTask(){
    let input = document.getElementById('tarefa');
    //validação
    if(!input.value)
    {
        alert('Digite algo para começarmos!');
    }
    else
    {
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('tarefas-anotadas')
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li><button class="btn-delete" onclick='clickDelete("${values[i]['name']}")'><img src="Assets/DeleteIcon.svg" alt="Icone de deletar a tarefa" class="icones"></button>${values[i]['name']}</li>`
    }
}
function clickDelete(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index, 1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}
showValues()