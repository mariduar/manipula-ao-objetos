javascript
// Definindo um objeto para armazenar informações de um cliente
var cliente1 = {
  nome: "Gaby",
  sobrenome: "Silva",
  anoNascimento: 1990,
  telefones: ["(00) 1234-5678", "(00) 9876-5432"],
  endereco: {
    rua: "Rua das Flores",
    cep: "12345-678",
    cidade: "Cidade Exemplo",
    complemento: "Apto 101"
  }
};

var cliente2 = {
  nome: "João",
  sobrenome: "Pereira",
  anoNascimento: 1985,
  telefones: ["(00) 1111-2222", "(00) 3333-4444"],
  endereco: {
    rua: "Avenida Principal",
    cep: "54321-000",
    cidade: "Outra Cidade",
    complemento: "Casa Verde"
  }
};

// Percorrendo e mostrando os elementos de cada cliente
function mostrarCliente(cliente) {
  console.log("Nome completo:", cliente.nome + " " + cliente.sobrenome);
  console.log("Ano de Nascimento:", cliente.anoNascimento);
  console.log("Telefones:", cliente.telefones.join(", "));
  console.log("Endereço:", 
              cliente.endereco.rua + ", " + 
              cliente.endereco.cep + ", " + 
              cliente.endereco.cidade + ", " + 
              cliente.endereco.complemento);
}

// Mostrando as informações dos clientes
mostrarCliente(cliente1);
mostrarCliente(cliente2);