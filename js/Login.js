function saveData() {
    const usernameEl = document.getElementById("username").value;
    const passwordEl = document.getElementById("password").value;
    const alertMesEl = document.getElementById("alertMes");

    let userRecord = new Array();
    userRecord = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[];
    if(userRecord.some((v) => {
        return v.usernameEl == usernameEl && v.passwordEl == passwordEl;
    })) {
        alert("Login successful");
        let currentUser = userRecord.filter((v) => {
            return v.usernameEl == usernameEl && v.passwordEl == passwordEl;
        })[0]

        localStorage.setItem("username", currentUser.usernameEl);
        localStorage.setItem("password", currentUser.passwordEl);
        window.location.href = "../index.html";
    } else {
        alert("Invalid username or password")
    }
}