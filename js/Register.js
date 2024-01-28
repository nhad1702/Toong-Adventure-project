function saveData() {
    const nameEl = document.getElementById("username").value;
    const emailEl = document.getElementById("email").value;
    const passEl = document.getElementById("password").value;
    console.log(nameEl + "\n" + emailEl + "\n" + passEl);

    // localStorage.setItem("username", nameEl);
    // localStorage.setItem("email", emailEl);
    // localStorage.setItem("password", passEl);

    let userRecord = new Array();
    userRecord = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")):[];
    if(userRecord.some( (v) => {
        return v.emailEl == emailEl;
    })) {
        alert("Duplicated Data!");
    } else {
        userRecord.push({
            "name": nameEl,
            "email": emailEl,
            "password": passEl
        });
        localStorage.setItem("users", JSON.stringify(userRecord));
        window.location.href = "Login.html";
    }
};