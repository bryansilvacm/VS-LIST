document.addEventListener('DOMContentLoaded', loadTasks);
function adicionar() {
  let input = document.getElementById("newtask").value.trim();
  if (input === "") {
    alert("Digite uma tarefa!");
    return;
  }

  let h2 = document.getElementById("text");
  h2.style.display = "none";

  let tarefa = document.createElement("p");
  let texto = document.createTextNode(input);
  tarefa.appendChild(texto);
  tarefa.className = "paragrafo";

  let check = document.createElement("input");
  check.type = "checkbox";
  check.className = "check";

  let button_remove = document.createElement("button");
  button_remove.className = "button_remove";
  button_remove.textContent = "x";
  button_remove.onclick = remover;

  let section_add = document.getElementById("tarefas");
  let div_task = document.createElement("div");
  div_task.className = "div_task";

  div_task.appendChild(button_remove);
  div_task.appendChild(check);
  div_task.appendChild(tarefa);

  section_add.appendChild(div_task);

  document.getElementById("newtask").value = "";

  saveTask();
}

function saveTask() {
  const tarefas = [];
  document.querySelectorAll(".div_task").forEach(taskDiv => {
    const taskText = taskDiv.querySelector("p").textContent;
    tarefas.push(taskText);
  });
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tarefas') || '[]');

  savedTasks.forEach(taskText => {
    let tarefa = document.createElement("p");
    let texto = document.createTextNode(taskText);
    tarefa.appendChild(texto);
    tarefa.className = "paragrafo";

    let check = document.createElement("input");
    check.type = "checkbox";
    check.className = "check";

    let button_remove = document.createElement("button");
    button_remove.className = "button_remove";
    button_remove.textContent = "x";
    button_remove.onclick = remover;

    let section_add = document.getElementById("tarefas");
    let div_task = document.createElement("div");
    div_task.className = "div_task";

    div_task.appendChild(button_remove);
    div_task.appendChild(check);
    div_task.appendChild(tarefa);

    section_add.appendChild(div_task);
  });	

    let h2 = document.getElementById("text");
    if (savedTasks.length > 0) {
	h2.style.display = "none";	
}

}

function remover() {
  let div_remover = event.target.parentNode;
  div_remover.remove();
  saveTask(); // Atualiza o localStorage após remover a tarefa
}
