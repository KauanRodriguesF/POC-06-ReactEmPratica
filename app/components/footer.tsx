import styles from './footer.module.css';

interface FooterProps {
  total: number;
  onBuy: () => void;
}

export default function Footer({ total, onBuy }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <button onClick={onBuy} className={styles.botaoCompra}>
        Comprar - R$ {total.toFixed(2)}
      </button>
    </footer>
  );
}
