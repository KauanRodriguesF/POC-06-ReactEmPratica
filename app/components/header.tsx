import styles from './header.module.css';

interface HeaderProps {
  title: string;
  synopsis: string;
  releaseDate: string;
  director: string;
  time: string;
  onToggleTheme: () => void;
}

export default function Header({
  title,
  synopsis,
  releaseDate,
  director,
  time,
  onToggleTheme,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <h1 className={styles.headerTitulo}>{title}</h1>
        <p className={styles.headerSubtitulo}>
          <strong>Sinopse:</strong> {synopsis}
        </p>
        <p className={styles.headerSubtitulo}>
          <strong>Data de Lançamento:</strong> {releaseDate}
        </p>
        <p className={styles.headerSubtitulo}>
          <strong>Direção:</strong> {director}
        </p>
        <p className={styles.headerSubtitulo}>
          <strong>Horário:</strong> {time}
        </p>
      </div>
      <button onClick={onToggleTheme} className={styles.trocaTema}>
        Alterar Tema
      </button>
    </header>
  );
}
