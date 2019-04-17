import React from 'react';
import { Modal } from 'react-bootstrap';

 const CommonModel= ({title, msg, handleHide, classes})=> {
  return (
    <Modal
      show= {true}
      onHide= {handleHide}
      className={classes}
    >
      <Modal.Header>
        <Modal.Title>
          <p>Displaying {title} Events</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{msg}</p>
      </Modal.Body>
    </Modal>
  )
}
export default CommonModel