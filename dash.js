const userInfo = document.querySelector("#user_info");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    userInfo.textContent = `Welcome to your dashboard, ${currentUser.name}!`;
} else {
    userInfo.textContent = "User not found. Redirecting to login...";
    setTimeout(() => {
        window.location.href = "/login.html";
    }, 2000);
}