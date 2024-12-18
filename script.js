document.getElementById("form").addEventListener("submit", function(event) 
{
    event.preventDefault(); // Impede o envio do formulário até a validação ser feita
  
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let telefone = document.getElementById("telefone").value;
    let senha = document.getElementById("senha").value;
  
    let valid = true;
  
    // Resetando os erros anteriores
    document.getElementById("errorNome").innerText = "";
    document.getElementById("errorEmail").innerText = "";
    document.getElementById("errorIdade").innerText = "";
    document.getElementById("errorTelefone").innerText = "";
    document.getElementById("errorSenha").innerText = "";
  
    // Validação do Nome
    if (nome === "") {
      document.getElementById("errorNome").innerText = "Nome é obrigatório.";
      valid = false;
    }
  
    // Validação do E-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      document.getElementById("errorEmail").innerText = "E-mail inválido.";
      valid = false;
    }
  
    // Validação da Idade
    if (idade < 18 || idade === "") {
      document.getElementById("errorIdade").innerText = "Idade deve ser maior que 18.";
      valid = false;
    }
  
    // Validação do Telefone
    const telefoneRegex = /^[\(\)\-\s0-9]{10,15}$/;  // Aceita (xx) xxxx-xxxx ou xx xxxx-xxxx
    if (!telefoneRegex.test(telefone)) {
      document.getElementById("errorTelefone").innerText = "Telefone inválido. Formato esperado: (xx) xxxx-xxxx ou xx xxxx-xxxx.";
      valid = false;
    }
  
    // Validação da Senha
    const senhaRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;  // Senha com pelo menos 6 caracteres, incluindo letras e números
    if (!senhaRegex.test(senha)) {
      document.getElementById("errorSenha").innerText = "Senha inválida. Deve ter pelo menos 6 caracteres, incluindo letras e números.";
      valid = false;
    }
  
    // Se todos os campos forem válidos, o formulário pode ser enviado
    if (valid) {
      alert("Formulário enviado com sucesso!");
      // Aqui você pode enviar o formulário para o servidor, ou realizar outra ação
      // Exemplo: this.submit();
    }
  });
  