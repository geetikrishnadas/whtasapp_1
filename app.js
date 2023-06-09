
let submit = document.getElementById("btn");
let message = document.getElementById("textbox")
let main=document.querySelector(".box");



let para;
let val;
let write;


submit.addEventListener('click',()=>{

	val =message.value;
    message.value ="";
	add();
	ans(); 

});

function add(){
	para =document.createElement('p');
	para.innerText=val;
	main.appendChild(para);
	para.classList.add("style1")

}

function ans(){
    setTimeout(()=>{


	write =document.createElement('p');
	main.appendChild(write);
	write.classList.add("style2")
   
	if(val==reply.a)
	{
		write.innerText="good morning"
	}
	else if(val==reply.b){
		write.innerText="hello"
	}
	else if(val==reply.c){
		write.innerText="i am fine"
	}
	else if(val==reply.d){
		write.innerText="web"
	}
	

},1000);

}

const reply ={
	a:"good morning",
	b:"hii",
	c:"how are you",
	d:"what is your name",
	

}

