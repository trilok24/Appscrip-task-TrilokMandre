import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";

const filterSections = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

export default function Sidebar() {
  const [filters, setFilters] = useState({});

  const toggleSection = (section) => {
    setFilters((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.headerRow}>
      </div>

      <div className={styles.checkboxRow}>
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>

      {filterSections.map((section) => (
        <div key={section} className={styles.section}>
          <div
            className={styles.sectionHeader}
            onClick={() => toggleSection(section)}
          >
            {section} <span>{filters[section] ? "−" : "+"}</span>
          </div>
          {filters[section] && (
            <div className={styles.options}>
              <label>
                <input type="checkbox" /> Option 1
              </label>
              <label>
                <input type="checkbox" /> Option 2
              </label>
              <label>
                <input type="checkbox" /> Option 3
              </label>
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
