import styles from "@/styles/HeartButton.module.css";
import { MouseEventHandler } from "react";
import { FaHeart } from "react-icons/fa";
export default function HeartButton({
  isActive,
  handleClick,
}: {
  isActive: boolean;
  handleClick: MouseEventHandler;
}) {
  return (
    <div className={styles.heartButtonWrapper}>
      <button className={styles.heartButton} onClick={handleClick}>
        <FaHeart
          className={`${styles.heartIcon} ${isActive ? styles.heartIconActive : ""}`}
        />
      </button>
    </div>
  );
}
