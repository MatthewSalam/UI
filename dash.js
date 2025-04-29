// JS for the dashboard
const user_info = document.querySelector("#user_info")
const userdata = localStorage.getItem('Name')
user_info.textContent = `Welcome to your dashboard, ${userdata}!`
