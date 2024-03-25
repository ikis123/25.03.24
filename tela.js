function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simples validação de login
    if (username === "user" && password === "password") {
        document.getElementById("message").innerText = "Login successful!";
        openOverlay(); // Abrir a foto após o login bem-sucedido
    } else {
        document.getElementById("message").innerText = "Incorrect username or password!";
    }
}

function openOverlay() {
    document.getElementById("overlay").style.display = "block";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

