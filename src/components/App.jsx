import React from "react";
import List from "./List";
import Form from "./Form";
import styles from "./styles/App.module.css";

const App = () => (
    <div className={styles.app}>
        <div className={styles.listContainer}>
            <h1>Articles</h1>
            <List />
        </div>
        <div className={styles.formContainer}>
            <h3>Add a new article</h3>
            <Form />
        </div>
    </div>
);

export default App;