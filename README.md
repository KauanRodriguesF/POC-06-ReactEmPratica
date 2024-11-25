## 🌐 POC 6 - React em Prática 🌐

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

![DarkMode](https://github.com/user-attachments/assets/ba81e78f-b9f2-48d0-97c7-1b45601e5853)

![LightMode](https://github.com/user-attachments/assets/4aa27c3f-2d46-4e05-b0bf-8b70beef0cd3)




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

- `footer.tsx`: Exibe o rodapé da aplicação.
- `header.tsx`: Exibe o cabeçalho da aplicação.
- `seatmap.tsx`: Gerencia o layout do mapa de assentos.

### Exemplo de JSON para Dados dos Assentos

```json
return (
    <div className={styles.grid}>
      {seats.map((seat) => (
        <div
          key={seat.numero}
          className={`${styles.seat} ${
            !seat.disponivel
              ? styles.indisponivel
              : selectedSeats.includes(seat.numero)
              ? styles.selecionado
              : styles.disponivel
          }`}
          onClick={() => handleSeatClick(seat)}
        ></div>
      ))}
    </div>
  );
```

---

## 🛠️ Passo a Passo de Implementação

### 1. Configuração do Ambiente

- Certifique-se de ter o **Node.js** instalado.
- Inicialize um novo projeto Next.js:
  ```bash
  npx create-next-app@latest
  ```

### 2. Configuração do Tema

- Use Media Queries para alternar entre os modos **Light** e **Dark**.
- Adicione variáveis CSS para facilitar a personalização dos estilos.

### 3. Renderização Condicional

- Utilize o Hook `useState` para gerenciar o estado de disponibilidade e seleção dos assentos.

### 4. Teste e Ajustes Finais

- Garanta que o layout seja responsivo.
- Verifique a consistência do tema em dispositivos mobile e desktop.

---

## ⚙️ Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone <https://github.com/KauanRodriguesF/POC-06-ReactEmPratica/tree/main>
   ```
2. Navegue até a pasta do projeto:
   ```bash
   app
   ```
3. Instale as dependências:
   ```bash
   npm installa
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse no navegador: [http://localhost:3000](http://localhost:3000)


