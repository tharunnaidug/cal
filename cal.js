console.log("Hello World")
let string = "";

let button = document.querySelectorAll("#btn");
Array.from(button).forEach((btn) => {
    btn.addEventListener(`click`, (event) => {
        if (event.target.innerText == `=`) {
            string = eval(string)
            document.querySelector(`input`).value = string;
        } else
            if (event.target.innerText == `C`) {
                string = ""
                document.querySelector(`input`).value = string;
            } else 
            if (event.target.innerText == `DEL`) {
                string =string.substring(0,string.length-1);
                document.querySelector(`input`).value = string;
            } else {
                string = string + event.target.innerText;
                // console.log(event.target)
                document.querySelector(`input`).value = string;
            }
    })
})

