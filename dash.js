const user_info = document.querySelector("#user_info");
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (currentUser) {
    user_info.textContent = `Welcome to your dashboard, ${currentUser.name}!`;
} else {
    user_info.textContent = `User not found. Please log in again.`;

    // window.location.href = "/login.html";
}
