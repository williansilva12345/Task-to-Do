var input = document.getElementById("input")
var btn = document.getElementById("btn")
var caixa2 = document.getElementById("caixa2")
 var btn2 = document.getElementById("btn2")




btn2.addEventListener("click",()=>{
	
	const all = [...document.querySelectorAll(".div1")]
	
	all.map((el)=>{
		
		el.remove()
		
	})
	
	
	
		
	
}) 

	var remove = ()=>{
		
		var color = [...document.querySelectorAll(".back")]
		
		color.map((el)=>{
			
		el.classList.remove("back")
			
		})
		
	}

var course = ()=>{
	
	

	
	
	var div  = document.createElement("div")
	div.setAttribute("class","div1")
	div.addEventListener("click",(evt)=>{

	remove()
	
	evt.target.classList.toggle("back")
		
	})
	
	
	div.innerHTML  = input.value
	

		

	

	
	caixa2.appendChild(div)
	
	
	 
	 input.focus()
	
}
	

				
	 






	btn.addEventListener("click",(evt)=>{
		
	
	  course()
	  

		
				

		
	})
	
	
	
	input.addEventListener("keypress",function(e){
		
		 if(!checkChar(e)){
			 
			 div.innerHTML = "Digite algo valido"
			 e.preventDefault()
			 
		 }
		
	})
	
	
	function checkChar(e){
		
		const caracter = String.fromCharCode(e.keyCode)
				
		console.log(e.keyCode)
		
		const pattern = "[a-zA-Z0-9]";
		
		if(caracter.match(pattern)){
			
			console.log(caracter)
			return true
			
		}
			
	}
	
	