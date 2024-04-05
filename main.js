const localStorageName = 'lista-de-tarefas';

function newTask(){
    let input = document.getElementById('tarefa');
    //validação
    if(!input.value)
    {
        alert('Digite algo para começarmos!');
    }
    else
    {
        let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName,JSON.stringify(values))
        showValues()
    }
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]")
    let list = document.getElementById('tarefas-anotadas')
    list.innerHTML = ''
    for (let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}</li>`
    }
}

showValues()