
document.addEventListener("DOMContentLoaded",()=>{
	// VARIABLES FOR SECTION3-MB
	menuBtn = document.querySelector(".pointer-div");
	menuBody = document.querySelector(".section3-hts");
	dpH6 = document.querySelector(".dp-h6");
	wtH6 = document.querySelector(".wt-h6");
	dpDv = document.querySelector(".dp-dv");
	wtDv = document.querySelector(".wt-dv");

	// CONDITIONS FOR ONCLICK
	menuBtn.onclick = ()=>{
		if(menuBody.style.display === "none"){
			menuBody.style.display = "block";
		}
		else{
			menuBody.style.display = "none";
		}
	}

	dpH6.onclick = ()=>{
		if(dpDv.style.display === "none"){
			dpDv.style.display = "block";
			wtDv.style.display = "none";
		}
		else{
			dpDv.style.display = "none";
			wtDv.style.display = "none";
		}
	}

	wtH6.onclick = ()=>{
		if(wtDv.style.display === "none"){
			wtDv.style.display = "block";
			dpDv.style.display = "none";
		}
		else{
			wtDv.style.display = "none";
			dpDv.style.display = "none";
		}
	}



	
})
