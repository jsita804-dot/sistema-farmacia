// Datos simulados (se guardan en el navegador)
let currentUser = null;

// Lógica de Login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageDiv = document.getElementById('message');

    if (username === "admin" && password === "1234") {
        currentUser = { username: "admin", role: "Farmacéutico Administrador" };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (messageDiv) {
            messageDiv.style.display = "block";
            messageDiv.style.background = "rgba(212, 237, 218, 0.95)";
            messageDiv.style.color = "#155724";
            messageDiv.textContent = "✅ Login exitoso. Abriendo sistema farmacéutico...";
        }
        
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1200);
    } else {
        if (messageDiv) {
            messageDiv.style.display = "block";
            messageDiv.style.background = "rgba(248, 215, 218, 0.95)";
            messageDiv.style.color = "#721c24";
            messageDiv.textContent = "❌ Usuario o contraseña incorrectos";
        }
    }
});

// Función para verificar si está logueado en el dashboard
function checkLogin() {
    const user = localStorage.getItem('currentUser');
    if (!user && window.location.pathname.includes('dashboard')) {
        alert("Debes iniciar sesión primero");
        window.location.href = "login.html";
    }
    return user ? JSON.parse(user) : null;
}