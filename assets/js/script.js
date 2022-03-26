console.log("hai")
function validate()
{
    let a=document.forms.googleSheet.w3lName.value;
    if(a=="")
    {
        alert("Enter name");
        return false
    }
    else if(a.length<4)
    {
        alert("Name should be more than 4 letters.");
        return false;
    }
    let b=document.forms.googleSheet.email.value;
    if(b=="")
    {
        alert("Name field cannnot be empty");
        return false;
    }
    var atPos=b.indexOf("@");
    var dotPos=b.lastIndexOf(".");
    if(atPos<1 || dotPos<atPos+2 || dotPos+2>=b.length)
    {
        alert("Enter a Valid Email")
        return false
    }

    
    
    
}


const scriptURL ="https://script.google.com/macros/s/AKfycby0FJyBE4E0ZFswuXfB3zDfAzfjbDvDUhZTqB7ADSSwj8_g6J28WQtTk68LG4hXdA0B/exec"
const form = document.forms['googleSheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})





   