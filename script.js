// Dados armazenados de contas registradas
var registeredAccounts = [];

// Lidar com o envio do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
event.preventDefault(); // Impede o envio do formulário

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

// Verificar se a conta existe e se a senha está correta
var account = registeredAccounts.find(function(acc) {
 return acc.username === username && acc.password === password;
});

if (account) {
 alert("Login bem-sucedido!");
 window.location.href = "pagina-inicial.html"; // Redirecionar para a página inicial
} else {
 alert("Credenciais inválidas. Tente novamente.");
}
});

// Lidar com o envio do formulário de criação de conta
document.getElementById("registerForm").addEventListener("submit", function(event) {
event.preventDefault(); // Impede o envio do formulário

var username = document.getElementById("registerUsername").value;
var password = document.getElementById("registerPassword").value;

// Verificar se o nome de usuário já está em uso
var isUsernameTaken = registeredAccounts.some(function(acc) {
 return acc.username === username;
});

if (isUsernameTaken) {
 alert("O nome de usuário já está em uso. Por favor, escolha outro.");
} else {
 // Adicionar a nova conta aos dados armazenados
 registeredAccounts.push({ username: username, password: password });
 alert("Conta criada com sucesso! Agora você pode fazer login.");
 // Limpar os campos de entrada
 document.getElementById("registerUsername").value = "";
 document.getElementById("registerPassword").value = "";
 }
 });
