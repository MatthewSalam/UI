const nameBox = document.getElementById("name_box");
const emailBox = document.getElementById("email_box");
const passwordBox = document.getElementById("pass_box");
const confirmBox = document.getElementById("conf_box");
const registerButton = document.getElementById("butt");
const registerWarning = document.getElementById("warning");

registerButton.onclick = () => {
    const name = nameBox.value.trim();
    const email = emailBox.value.trim();
    const password = passwordBox.value.trim();
    const confirm = confirmBox.value.trim();

    if (!name || !email || !password || !confirm) {
        registerWarning.style.color = "red";
        registerWarning.textContent = "Empty credentials are not allowed.";
        return;
    }

    if (password !== confirm) {
        registerWarning.style.color = "red";
        registerWarning.textContent = "Both passwords must match!";
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Optional: Check if user already exists
    if (users.some(user => user.email === email)) {
        registerWarning.style.color = "red";
        registerWarning.textContent = "Email already registered.";
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    registerWarning.style.color = "green";
    registerWarning.style.fontWeight = "700";
    registerWarning.textContent = "Account created successfully!";
    window.location.assign("/dashboard.html");
};