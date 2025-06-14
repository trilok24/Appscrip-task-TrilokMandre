import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.gridTitleRow}>
          <h2>{products.length} ITEMS</h2>

          <div className={styles.gridRightControls}>
            <button
              className={styles.filterToggle}
              onClick={() => setShowFilter((prev) => !prev)}
            >
              {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
            <select className={styles.sortDropdown}>
              <option>RECOMMENDED</option>
              <option>NEWEST FIRST</option>
              <option>POPULAR</option>
              <option>PRICE : HIGH TO LOW</option>
              <option>PRICE : LOW TO HIGH</option>
            </select>
          </div>
        </div>

        <div className={styles.layoutWrapper}>
          {showFilter && <Sidebar />}
          <div
            className={`${styles.productArea} ${
              !showFilter ? styles.fullWidth : ""
            }`}
          >
            <div className={styles.productGrid}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
