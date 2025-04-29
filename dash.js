const userInfo = document.querySelector("#user_info");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const logout = document.querySelector("#logout")

if (currentUser) {
    userInfo.textContent = `Welcome to your dashboard, ${currentUser.name}!`;
} else {
    userInfo.textContent = "User not found. Redirecting to login...";
    setTimeout(() => {
        window.location.href = "/login.html";
    }, 2000);
}

logout.onclick = () => {
    window.location.href = "/login.html";
} 