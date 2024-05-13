# Criando as variáveis e recebendo os valores do usuário
nome = input("Digite seu nome: ")
idade = input("Digite sua idade: ")
sexo = input("Digite seu sexo: ")
status = input("Digite seu status: ")

# Construindo a frase
frase = f"O nome é {nome}, a idade é {idade}, o sexo é {sexo} e o status é {status}."

# Exibindo a frase com os valores digitados
print(frase)
# Criando as variáveis do tipo lista
alunos = ["João", "Maria", "Pedro", "Ana"]
notas = [8.5, 7.2, 9.0, 6.5]

# Imprimindo todos os valores das listas
print("Alunos:", alunos)
print("Notas:", notas)
# Criando as variáveis do tipo lista
alunos = ["João", "Maria", "Pedro", "Ana"]
notas = [8.5, 7.2, 9.0, 6.5]

# Imprimindo todos os valores das listas usando um único print com loop for
print("Alunos e suas notas:")
for i in range(len(alunos)):
    print(f"{alunos[i]} - Nota: {notas[i]}")
# Criando as variáveis nome1, nome2, sobrenome1 e sobrenome2
nome1 = "Luzia"
nome2 = "Pedro"
sobrenome1 = "Silva"
sobrenome2 = "Santos"

# Criando as variáveis nomeCompleto1 e nomeCompleto2
nomeCompleto1 = nome1 + " " + sobrenome1
nomeCompleto2 = nome2 + " " + sobrenome2

# Imprimindo os valores de nomeCompleto1 e nomeCompleto2
print("Nome completo 1:", nomeCompleto1)
print("Nome completo 2:", nomeCompleto2)
# Definindo os lados do quadrado
a = 4
b = 4
c = 4
d = 4

# Calculando a soma dos lados do quadrado
soma_lados = a + b + c + d

# Exibindo a soma dos lados do quadrado
print("A soma dos lados do quadrado é:", soma_lados)


#Exercício 7: Cálculo da área de um retângulo
python
# Definindo a base e altura do retângulo
base = 6
altura = 4

# Calculando a área do retângulo
area_retangulo = base * altura

# Exibindo a área do retângulo
print("A área do retângulo é:", area_retangulo)


#Exercício 8: Cálculo da área de um triângulo
python
# Definindo a base e altura do triângulo
base_tri = 5
altura_tri = 3

# Calculando a área do triângulo
area_tri = (base_tri * altura_tri) / 2

# Exibindo a área do triângulo
print("A área do triângulo é:", area_tri)


#Exercício 9: Cálculo da área de um pentágono 
python
# Definindo o lado e apótema do pentágono (assumindo um pentágono regular)
lado = 6
apotema = 5

# Calculando a área do pentágono
area_pentagono = (5 * lado * apotema) / 2

# Exibindo a área do pentágono
print("A área do pentágono é:", area_pentagono)
# Definindo as notas
nota1 = 7.5
nota2 = 6.8
nota3 = 8.0

# Calculando a média das notas
media_3_notas = (nota1 + nota2 + nota3) / 3

# Exibindo a média das notas
print("A média das 3 notas é:", media_3_notas)


#Exercício 11: Cálculo da média de 4 notas
python
# Definindo as notas
nota1 = 7.5
nota2 = 6.8
nota3 = 8.0
nota4 = 9.2

# Calculando a média das notas
media_4_notas = (nota1 + nota2 + nota3 + nota4) / 4

# Exibindo a média das notas
print("A média das 4 notas é:", media_4_notas)


#Exercício 12: Cálculo da média de N notas
python
# Definindo as notas em uma lista (podem ser N notas)
notas = [6.5, 7.0, 8.5, 9.0]

# Calculando a média das notas
media_n_notas = sum(notas) / len(notas)

# Exibindo a média das notas
print("A média das", len(notas), "notas é:", media_n_notas)