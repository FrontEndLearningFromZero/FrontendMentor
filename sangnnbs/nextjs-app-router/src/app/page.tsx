"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("./api/data");
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      // Update component state
    }
    fetchPosts();
  }, []);

  return (
    <main className={styles.main}>
      <div>{data}</div>
    </main>
  );
}
