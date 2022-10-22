let i = 0
function add_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
        
    if (item.value !== "") {
        //li
        let make_li = document.createElement("LI")
        make_li.appendChild(document.createTextNode(item.value))
        list_item.appendChild(make_li)
            item.value = ""
      make_li.onclick = function () {
        this.parentNode.removeChild(this)
      };
      
    } else {
      alert("добавьте задачу!");
    }
    i++
    
    function makeDelete(){
        let row = document.querySelector('.form-group')
           if(i===1){
            let deletemake = document.createElement('BUTTON')
            deletemake.setAttribute('class','btn btn-primary form-control delete')
            deletemake.innerText = 'Delete'
            row.append(deletemake)
            deletemake.onclick=()=>{
            make_li.remove()}
           }
    }
    makeDelete()
}
 

