function klik() {
    let password = document.getElementById('password').value;
    if (password == atob('YXN1')) {//asu
        return window.location.replace('login.html');
    }
    return alert("password salah");
}