const senhaEl = document.getElementById('senha');
const tamanhoEl = document.getElementById('tamanho');
const valorTamanhoEl = document.getElementById('valor-tamanho');
const gerarBtn = document.getElementById('gerar');
const copiarBtn = document.getElementById('copiar');
const maiusculasEl = document.getElementById('maiusculas');
const minusculasEl = document.getElementById('minusculas');
const numerosEl = document.getElementById('numeros');
const simbolosEl = document.getElementById('simbolos');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()-_=+[]{}|;:,.<>?/~';

function gerarSenha() {
  let caracteres = '';
  if (maiusculasEl.checked) caracteres += letrasMaiusculas;
  if (minusculasEl.checked) caracteres += letrasMinusculas;
  if (numerosEl.checked) caracteres += numeros;
  if (simbolosEl.checked) caracteres += simbolos;

  if (caracteres.length === 0) {
    senhaEl.value = '';
    alert('Selecione ao menos uma opção para gerar senha.');
    return;
  }

  let senha = '';
  const tamanho = +tamanhoEl.value;
  for (let i = 0; i < tamanho; i++) {
    senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  senhaEl.value = senha;
}

tamanhoEl.addEventListener('input', () => {
  valorTamanhoEl.textContent = tamanhoEl.value;
  gerarSenha();
});

gerarBtn.addEventListener('click', gerarSenha);

copiarBtn.addEventListener('click', () => {
  if (!senhaEl.value) return;
  senhaEl.select();
  document.execCommand('copy');
  alert('Senha copiada para a área de transferência!');
});

// Gera uma senha inicial ao carregar a página
window.onload = gerarSenha;
