import React, { useState } from 'react';
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HEADER from './utils/header';
import FOOTER from './utils/footer';
import DeleteButton from './components/delete-confirmation';
import ListaUFs from './utils/lista-ufs';
import ListaEstadoCivil from './utils/lista-estado-civil';
import ListaLogradouros from './utils/lista-logradouros';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Servicos() {

  const [validateForm, setValidateForm] = useState(false);

  const [msgAlert, setMsgAlert] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState('success');

  const [idServico, setIdServico] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  function insereServico(event){
    event.preventDefault(); //impede o submit
    setValidateForm(true);
  }

  return (
    <div>
      <HEADER />      
      <Alert variant={typeAlert} show={showAlert}>
          {msgAlert}
      </Alert>
      <div className="div-style">
        <Form  
          validated={validateForm}
          noValidade
          onSubmit={insereServico}>
          <Form.Row>
            <Col sm="3">
              <h4>Serviços</h4>
            </Col>
            <Col sm="9" className="text-right">
              <Button 
                variant="primary" 
                id="btnNovo">
                  <FontAwesomeIcon icon={faPlusCircle} />
                  &nbsp;Novo Serviço</Button>&nbsp;
              <Button 
                variant="success" 
                type ="submit" 
                id="btnNovo">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  &nbsp;Salvar</Button>&nbsp;
            </Col>            
          </Form.Row>
          <br />
          <Form.Row>
            <Col sm="8">
            <Form.Label>Descrição do Serviço</Form.Label><br />
            <Form.Control 
                id="txtServico"
                required />
            </Col>                         
            <Col sm="2">
            <Form.Label>Valor</Form.Label><br />
            <Form.Control
                id="txtValor"
                required />
            </Col>                  
          </Form.Row>
        </Form>
        
      </div>
    </div>
  );
}

export default Servicos;