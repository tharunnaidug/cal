console.log("Hello World")
const Pi = 3.14;

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
            } else {
                string = string + event.target.innerText;
                console.log(event.target)
                document.querySelector(`input`).value = string;
            }
    })
})