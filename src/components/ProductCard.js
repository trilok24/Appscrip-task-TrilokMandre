import React from "react";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} />
      </div>
      <h4 className={styles.name}>{product.title}</h4>
      <p className={styles.note}>${product.price}</p>
      <button className={styles.likeBtn}>♡</button>
    </div>
  );
}
