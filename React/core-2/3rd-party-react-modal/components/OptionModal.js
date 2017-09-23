import React from 'react';
import Modal from 'react-modal';

// implicit return
const OptionModal = (props) => (
    <Modal
        isOpen={props.selectedOption ? true : false}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
      >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedOption}>Alright!</button>
    </Modal>
  )


export default OptionModal;
