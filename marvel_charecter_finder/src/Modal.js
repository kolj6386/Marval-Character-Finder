import React from "react";
import style from "./charecter.module.css";

const Modal = ({ handleClose, path, ext, title, description }) => {
  
    return (
        <div className="modal displayBlock">
          <section className={style.modalMain}>
              <h1>{title}</h1>
              <img className={style.image} src={`${path}.${ext}`} alt={title} />
              <p>{description}</p>
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </section>
        </div>
    );
  };

export default Modal;