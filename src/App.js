import React, { useState } from "react";
import Modal from "./components/modal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div style={styles.buttonContainer}>
        <button style={styles.openButton} onClick={() => setIsOpen(true)}>
          Open Model
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div>
    </React.Fragment>
  );
}
const styles = {
  buttonContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    background: "blue",
  },
};
export default App;
