import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteConformation(){

    const [showModal, setShowModal] = useState(false);

    function handleOpenModal(event){
        event.preventDefault(); 
        setShowModal(true);
    }

    function handleCloseModal(event){
        setShowModal(false);
    }

    return(
        <span>
            <Button variant="danger"
             className="btn sm"
             onClick={handleOpenModal}
             data-testid="btn-open-modal">
            <FontAwesomeIcon icon={faTrash} />
            &nbsp;Excluir
             </Button>

             <Modal 
               show={showModal} 
               onHide={handleCloseModal} 
               centered
               data-testid="modal"
               backdrop="static"
               keyboard={false} >
                 <Modal.Header closeButton>
                     <Modal.Title>Exclusão</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                    O item selecionado será excluído. Confirma?
                    <br />
                 </Modal.Body>
                 <Modal.Footer>
                    <Button variant="primary" 
                        //onClick={handleDeleteTask}
                        data-testid="btn-delete-task">
                            Sim
                        </Button>
                    <Button variant="light"
                        onClick={handleCloseModal}
                        data-testid="btn-close-modal">
                            Não
                        </Button>
                 </Modal.Footer>
             </Modal>
        </span>
    );
}

export default DeleteConformation;