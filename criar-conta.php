<?php
// Recebe os dados do formulário
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Aqui você pode realizar as validações e lógica de armazenamento adequadas.
// Por enquanto, vamos apenas redirecionar para a página inicial.

header("Location: index.html");
exit();
?>