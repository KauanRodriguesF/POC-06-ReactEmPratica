"use client";

import { useState } from "react";
import styles from "./seatmap.module.css";

interface Seat {
  numero: number;
  disponivel: boolean;
}

interface SeatMapProps {
  seats: Seat[];
  onSeatSelect: (selectedSeats: number[]) => void;
}

export default function SeatMap({ seats, onSeatSelect }: SeatMapProps) {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const handleSeatClick = (seat: Seat) => {
    if (!seat.disponivel) return;

    let updatedSeats;
    if (selectedSeats.includes(seat.numero)) {
      updatedSeats = selectedSeats.filter((s) => s !== seat.numero);
    } else {
      updatedSeats = [...selectedSeats, seat.numero];
    }

    setSelectedSeats(updatedSeats);
    onSeatSelect(updatedSeats);
  };

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
}
