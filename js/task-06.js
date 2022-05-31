const textInput = document.querySelector("#validation-input");
const lengthData = document.querySelector("input[data-length]");
const maxLengthInput = lengthData.dataset.length;

textInput.addEventListener("blur", (event) => {
    event.preventDefault();
    if (event.currentTarget.value.length == maxLengthInput) {    
        textInput.classList.remove('invalid')  
        textInput.classList.add('valid')
        
    } else {      
        textInput.classList.remove('valid')  
        textInput.classList.add('invalid') 
        
        
    }
})