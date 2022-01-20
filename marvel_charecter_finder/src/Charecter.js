import React, {useState} from "react";
import style from "./charecter.module.css";
import Modal from './Modal'

// Passing information from the state to the props of this object. 
const Charecter = ({title, image, description}) => {
    // Setting the state of the modal to false
    const [showModal, setShowModal] = useState(false);

    return(
        //if showModal state is true we want to render the modal passing in the props of the current char
        <div>
            { showModal && 
            <Modal 
            description={description} 
            title={title} 
            path={image.path} 
            ext={image.extension} 
            show={showModal} 
            handleClose={() => setShowModal(false)}></Modal>
                }
            <div className={style.charecterCard} onClick={() => setShowModal(true)}>
                <img className={style.image} src={`${image.path}.${image.extension}`} alt={title} />
                <h1 className={style.title}>{title}</h1>
            </div>
        </div>
    );
}

//functions to change the state to true or false when clicked (Redundent)
// const displayModal = () => {
//     this.setState({ show: true });
//   };

// const hideModal = () => {
//     this.setState({ show: false });
//   };

export default Charecter;