import React from "react";
import styles from "./page.module.css";
import Button from "./components/Button";
import Post from "./components/Post";

const Home: React.FC = () => {

    return (
        <div className={styles.page}>
            <h1>Home</h1>
            <Button />
        </div>
    )
}

export default Home;
