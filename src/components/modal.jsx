import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <React.Fragment>
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <h3>Modal title</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            fugit commodi, sed, rem libero unde sit provident eos repellat quo
            corrupti, cumque tempora dolorem perferendis.
          </div>
          <button onClick={onClose} style={styles.closeButton}>
            Close Modal
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const styles = {
  modal: {
    background: "#fff",
    padding: "20px",
    width: "300px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    marginTop: "20px",
    background: "red",
  },
};

export default Modal;
