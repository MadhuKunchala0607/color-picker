function change(event){
    event.target.innerText="o"
}
const buttons=document.querySelectorAll("button")
buttons.forEach(
    button=>{
        button.addEventListener("click",change)
    }
)
