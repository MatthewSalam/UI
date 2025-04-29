const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("passinput");
const loginButton = document.getElementById("log");
const loginWarning = document.getElementById("warning");
const revealButton = document.getElementById("lock");

revealButton.onclick = () => {
    passwordInput.type = "text";
    setTimeout(() => {
        passwordInput.type = "password";
    }, 1000);
};

loginButton.onclick = () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        loginWarning.style.color = "red";
        loginWarning.style.fontWeight = "900";
        loginWarning.textContent = "Empty credentials are not allowed!!!";
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        window.location.assign("/dashboard.html");
    } else {
        loginWarning.style.color = "red";
        loginWarning.style.fontWeight = "900";
        loginWarning.textContent = "Wrong credentials!!!!!";
    }
};

