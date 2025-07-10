function addtask() {
    let task = document.getElementById("task").value.trim();
    
    if (task === "") {
        alert("Please add something");
        return;
    }

    // Create a new <li> element
    let li = document.createElement("li");
    li.textContent = task;

    const combtn=document.createElement("button");
    combtn.textContent='completed';
    combtn.className='combtn';
    combtn.onclick=()=>{
        li.remove();
       let list=document.createElement("li");
       list.textContent=task + "✔";
        list.classList.add("completed");
        document.getElementById("comptask").appendChild(list);
        

    };
    const delbtn=document.createElement("button");
    delbtn.textContent='delete';
    delbtn.className='dltbtn';
    delbtn.onclick=()=>{
       
 li.remove();
    };

    // Optional: click to mark as done
    // li.addEventListener("click", function () {
    //     li.classList.toggle("completed");
    // });

    // Append it to the existing list
    document.getElementById("list").appendChild(li);
li.appendChild(combtn);
li.appendChild(delbtn);
    // Clear input
    document.getElementById("task").value = "";
    
    alert("Task added!");
}
