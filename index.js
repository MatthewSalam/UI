const name = document.getElementById("name_box")
const email = document.getElementById("email_box")
const password = document.getElementById("pass_box")
const confir = document.getElementById("conf_box")
const button = document.getElementById("butt")
const warn = document.getElementById("warning")



button.onclick = () => {
    if (password.value.trim() === "" || confir.value.trim() === "" || email.value.trim() === "" || name.value.trim() === "") {
        warn.textContent = "Empty Credentials are not allowed";
        return;
    }

    if (password.value.trim() === confir.value.trim()) {
        // Fetch existing users from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Create new user object
        let newUser = {
            name: name.value.trim(),
            email: email.value.trim(),
            password: password.value.trim()
        };

        // Add new user to array
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        warn.style.color = "green";
        warn.style.fontWeight = "700";
        warn.textContent = "Info added successfully";
        window.location.assign("/dashboard.html");
    } else {
        warn.textContent = "Both Passwords don't match!!!";
    }
}
