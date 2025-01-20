# Amigo Secreto

Bem-vindo ao projeto **Amigo Secreto**, uma aplicação simples e divertida para sortear nomes de amigos para um evento de amigo secreto. Este projeto foi desenvolvido utilizando **HTML**, **CSS** e **JavaScript** puro.

---

## 🌐 Visão Geral

Este aplicativo permite que você:

1. Adicione os nomes dos participantes ao evento.
2. Visualize a lista de amigos adicionados.
3. Sorteie um amigo secreto de forma aleatória.
4. Atualize a lista automaticamente removendo o nome sorteado.
5. Continue sorteando até que todos os amigos tenham sido escolhidos.
6. Veja uma mensagem informativa quando todos os amigos já foram sorteados.

---

## 📝 Como Funciona

### Funcionalidades Principais

1. **Adicionar Amigos**
   - Digite o nome de um participante no campo de entrada.
   - Clique no botão **Adicionar** para inserir o nome na lista.
   - Nomes duplicados são automaticamente rejeitados.

2. **Exibição da Lista**
   - Todos os nomes adicionados são exibidos em uma lista na tela.
   - A lista é atualizada dinamicamente conforme nomes são adicionados ou removidos.

3. **Sorteio Aleatório**
   - Clique no botão **Sortear Amigo** para escolher um nome aleatoriamente.
   - O nome sorteado é exibido abaixo do botão de sorteio.
   - Após o sorteio, o nome sorteado é removido da lista para evitar repetições.

4. **Mensagem Final**
   - Quando todos os amigos forem sorteados, o sistema exibirá a mensagem **"Todos os amigos já foram sorteados!"**.

---

## 📖 Estrutura do Projeto

### Arquivos Principais

- **index.html**: Estrutura do aplicativo.
- **style.css**: Estilização visual do projeto.
- **app.js**: Lógica de funcionamento, incluindo sorteio e manipulação da lista.

### Dependências

- Fonte do Google Fonts:
  - [Inter](https://fonts.google.com/specimen/Inter)
  - [Merriweather](https://fonts.google.com/specimen/Merriweather)

---

## 📚 Instruções de Uso

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/amigo-secreto.git
```

### Passo 2: Abrir no Navegador

1. Abra o arquivo `index.html` diretamente no navegador.
2. Não é necessário instalar servidores adicionais.

---

## 🏢 Estrutura HTML

A estrutura HTML consiste em:

- **Header**: Título e imagem do banner.
- **Seção de Entrada**: Campo para adicionar nomes e botão de ação.
- **Lista de Amigos**: Exibe os amigos adicionados.
- **Resultado do Sorteio**: Exibe o nome sorteado.

---

## 🎨 Estilo CSS

O estilo é simples e responsivo, utilizando as fontes **Inter** e **Merriweather** para melhorar a estética e a legibilidade.

---

## 🔧 Lógica JavaScript

A lógica do sorteio é baseada em:

1. **Manipulação de Arrays**:
   - Armazena os nomes em uma lista.
   - Remove nomes sorteados para evitar duplicidade.

2. **Eventos Dinâmicos**:
   - Atualiza a interface em tempo real, exibindo a lista e os resultados.

3. **Funções**:
   - `adicionarAmigo`: Adiciona um nome à lista.
   - `atualizarListaDeAmigos`: Atualiza a lista visível na interface.
   - `sortearAmigo`: Sorteia um nome aleatoriamente e atualiza a lista.
   - `nomeInclusoNaLista`: Valida duplicidade de nomes.
   - `limpaCampo`: Limpa o campo de entrada após adicionar um nome.

---

## 💌 Contribuição

Fique à vontade para contribuir com melhorias, abrindo issues ou enviando pull requests.
