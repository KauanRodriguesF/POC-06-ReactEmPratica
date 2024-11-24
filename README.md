# 🌐 POC 6 - React em Prática 🌐

> Este projeto simula uma sala de cinema interativa, permitindo a seleção de assentos, visualização de informações do filme e um layout responsivo adaptado para diferentes dispositivos e modos de tema.

---

## 📋 Descrição do Projeto

Nesta Prova de Conceito (POC), foi desenvolvido um simulador de sala de cinema para demonstrar a aplicação de conceitos avançados de React com Next.js. A interface exibe um mapa interativo de assentos, informações sobre o filme selecionado e oferece suporte para modos de tema Light e Dark.

A aplicação é responsiva, garantindo uma experiência otimizada em dispositivos móveis e desktops. Este projeto busca explorar e demonstrar as melhores práticas de componentização, gerenciamento de estados e estilização com CSS moderno.

---

## 🚀 Funcionalidades

- **Seleção de Assentos Interativa**: Permite selecionar assentos disponíveis, com feedback visual imediato.
- **Modos de Tema (Light/Dark)**: Interface adaptável ao tema preferido do usuário.
- **Layout Responsivo**: Funciona perfeitamente em dispositivos mobile e desktop.
- **Visualização de Informações do Filme**: Exibe sinopse, horário, data de lançamento e direção.
- **Cálculo do Valor Total**: Atualiza dinamicamente o valor da compra de acordo com os assentos selecionados.
- **Mensagem de Confirmação**: Um `alert` exibe "Compra realizada com sucesso" ao concluir a reserva.

---

## 🎨 Layout

A interface do projeto foi projetada para ser intuitiva e visualmente atraente, com os seguintes elementos principais:

- **Mapa de Assentos**: Exibe graficamente os assentos, indicando quais estão disponíveis, ocupados ou selecionados.
- **Informações do Filme**: Inclui título, horário, sinopse, data de lançamento e direção.
- **Botão de Compra**: Centraliza a ação do usuário para finalizar a seleção de assentos.

### Exemplos de Telas

**Versão Mobile e Desktop em Modos Light e Dark:**

![Versões Mobile e Desktop](https://github.com/user-attachments/sample-mobile-desktop.png)

---

## 🛠️ Tecnologias Utilizadas

- **Next.js (14 ou superior)**: Framework baseado em React para desenvolvimento web otimizado.
- **React**: Gerenciamento de estados e construção de componentes dinâmicos.
- **HTML5 e CSS3**: Estrutura semântica e estilização moderna, utilizando Flexbox e Media Queries.
- **JavaScript (ES6+)**: Funcionalidades interativas e manipulação de estados.
- **JSON**: Para armazenar dados sobre assentos e informações do filme.

---

## 📄 Estrutura do Projeto

O projeto foi estruturado em componentes para facilitar a leitura e manutenção do código. Os principais componentes incluem:

- **`Assento.js`**: Gerencia o estado e a renderização individual de cada assento.
- **`Filme.js`**: Exibe as informações do filme selecionado.
- **`BotaoCompra.js`**: Calcula o valor total e exibe a mensagem de confirmação.

### Exemplo de JSON para Dados dos Assentos

```json
{
  "filme": {
    "titulo": "A Forja",
    "horario": "16:40",
    "sinopse": "Um ano depois de encerrar o ensino médio, o jovem Isaías Wright tenta...",
    "dataLancamento": "26 de setembro de 2024 (Brasil)",
    "direcao": "Alex Kendrick"
  },
  "assentos": [
    { "id": 1, "disponivel": true },
    { "id": 2, "disponivel": false },
    { "id": 3, "disponivel": true }
  ]
}
```

---

## 🛠️ Passo a Passo de Implementação

### 1. Configuração do Ambiente

- Certifique-se de ter o **Node.js** instalado.
- Inicialize um novo projeto Next.js:
  ```bash
  npx create-next-app@latest
  ```

### 2. Criação dos Componentes

- Desenvolva os componentes principais:
  - `Assento.js`: Representação visual e funcionalidade de cada assento.
  - `Filme.js`: Exibição das informações do filme.
  - `BotaoCompra.js`: Cálculo e mensagem de confirmação.

### 3. Configuração do Tema

- Use Media Queries para alternar entre os modos **Light** e **Dark**.
- Adicione variáveis CSS para facilitar a personalização dos estilos.

### 4. Renderização Condicional

- Utilize o Hook `useState` para gerenciar o estado de disponibilidade e seleção dos assentos.

### 5. Teste e Ajustes Finais

- Garanta que o layout seja responsivo.
- Verifique a consistência do tema em dispositivos mobile e desktop.

---

## ⚙️ Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd poc-react-cinema
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---

## 📂 Estrutura de Pastas

```plaintext
poc-react-cinema/
├── components/
│   ├── Assento.js
│   ├── Filme.js
│   ├── BotaoCompra.js
├── public/
│   └── assets/
├── styles/
│   └── globals.css
├── pages/
│   ├── index.js
│   └── _app.js
└── package.json
```

