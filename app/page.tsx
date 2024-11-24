"use client";

import { useState } from "react";
import Header from "./components/header";
import SeatMap from "./components/seatmap";
import Footer from "./components/footer";
import styles from "./page.module.css";

interface Seat {
  numero: number;
  disponivel: boolean;
}

export default function Page() {
  const [seats] = useState<Seat[]>(
    Array.from({ length: 60 }, (_, i) => ({
      numero: i + 1,
      disponivel: ![2, 5, 10, 15, 22, 28, 35, 40].includes(i + 1),
    }))
  );

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const cinema = {
    titulo: "A Forja",
    sinopse:
      "Um ano depois de encerrar o ensino médio, o jovem Isaías Wright não tem planos para o futuro e é desafiado por sua mãe solo e um empresário de sucesso a começar a traçar um rumo melhor para sua vida. Ele passa a ser discipulado pelo seu novo mentor, conta com orações de sua mãe e de uma guerreira de orações, Dona Clara, e começa a descobrir o propósito de Deus para sua vida.",
    dataLancamento: "26 de setembro de 2024 (Brasil)",
    direcao: "Alex Kendrick",
    horario: "16:40",
    preco: 25.0,
  };

  const handleSeatSelect = (seats: number[]) => {
    setSelectedSeats(seats);
  };

  const handleBuy = () => {
    alert("Compra realizada com sucesso!");
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <main className={styles.container}>
      <Header
        title={cinema.titulo}
        synopsis={cinema.sinopse}
        releaseDate={cinema.dataLancamento}
        director={cinema.direcao}
        time={cinema.horario}
        onToggleTheme={toggleTheme}
      />
      <SeatMap seats={seats} onSeatSelect={handleSeatSelect} />
      {}
      <div className={styles.screen}></div>
      {}
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <div className={styles.available}></div> Livre
        </span>
        <span className={styles.legendItem}>
          <div className={styles.selected}></div> Selecionado
        </span>
        <span className={styles.legendItem}>
          <div className={styles.unavailable}></div> Indisponivel
        </span>
      </div>
      <Footer total={selectedSeats.length * cinema.preco} onBuy={handleBuy} />
    </main>
  );
}
