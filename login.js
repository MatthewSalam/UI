const password_input = document.getElementById("passinput")
const reveal = document.getElementById("lock")
const warn = document.getElementById("warning")
const emailid = document.getElementById("email")
const log = document.getElementById("log")

reveal.onclick = () => {
    password_input.type = "text"
    setTimeout(() => {password_input.type = "password"}, 1000)
}

// log.onclick = () => {
//     if (emailid.value.trim() === "" || password_input.value.trim() === "") 
//         {warn.textContent = `Empty Credentials are not allowed!!!`}
//     else{
//         const email = localStorage.getItem('E-mail')
//         const password = localStorage.getItem('Password')
//         if (email === emailid.value.trim() && password === password_input.value.trim()) {
//             window.location.assign("/dashboard.html")
//         }
//         else{warn.textContent = `Wrong Credentials!!!!!`}
//     }
// }

log.onclick = () => {
    if (emailid.value.trim() === "" || password_input.value.trim() === "") {
        warn.style.color = "red";
        warn.style.fontWeight = "900";
        warn.textContent = "Empty Credentials are not allowed!!!";
    } else {
        // Load all users
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Find if there is a matching user
        const userFound = users.find(user => 
            user.email === emailid.value.trim() && 
            user.password === password_input.value.trim()
        );

        if (userFound) {
            // Correct credentials
            window.location.assign("/dashboard.html");
        } else {
            warn.style.color = "red";
            warn.style.fontWeight = "900";
            warn.textContent = "Wrong Credentials!!!!!";
        }
    }
}
