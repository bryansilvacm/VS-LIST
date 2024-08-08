function adicionar(){
	let input = document.getElementById("newtask").value.trim();	
	if (input == ""){
		alert("digite uma tarefa!");
	}else{ 	
		if(input !== ""){
		let h2 = document.getElementById("text");
		h2.style.display = "none";


		let tarefa = document.createElement("p")
		let texto = document.createTextNode(input);
		tarefa.appendChild(texto);
	
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
	
	}else{
	h2.style.display = "flex"
}

}
}

function remover(){
	
	let div_remover = document.querySelector (".div_task");
	div_remover.remove();
}