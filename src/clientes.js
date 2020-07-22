import React, { useState } from 'react';
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSearch, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import HEADER from './utils/header';
import FOOTER from './utils/footer';
import ListaUFs from './utils/lista-ufs';
import ListaEstadoCivil from './utils/lista-estado-civil';
import ListaLogradouros from './utils/lista-logradouros';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Clientes() {

  const [validatedForm, setvalidatedForm] = useState(false);

  const [msgAlert, setMsgAlert] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState('success');

  const [idCliente, setIdCliente] = useState(0);
  const [cpfCnpj, setcpfCnpj] = useState('');
  const [nomeCliente, setnomeCliente] = useState('');
  const [tipoPessoa, settipoPessoa] = useState('');
  const [rg, setRg] = useState('');
  const [cnh, setCnh] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  function testef(){
    setMsgAlert('delicioso');
    setShowAlert(true);
  }

  return (
    <div>
      <HEADER />      
      <Alert variant={typeAlert} show={showAlert}>
          {msgAlert}
      </Alert>
      <div className="div-style">
        <Form noValidade validated={validatedForm}>
          <Form.Row>
            <Col sm="3">
              <h4>Clientes</h4>
            </Col>
            <Col sm="9" className="text-right">
              <Button 
                variant="primary" 
                type ="submit" 
                onClick={testef}
                id="btnNovo">
                  <FontAwesomeIcon icon={faPlusCircle} />
                  &nbsp;Novo Cliente</Button>&nbsp;
              <Button 
                variant="primary" 
                type ="submit" 
                id="btnNovo">
                  <FontAwesomeIcon icon={faSearch} />
                  &nbsp;Pesquisar</Button>&nbsp;
              <Button 
                variant="success" 
                type ="submit" 
                id="btnNovo">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  &nbsp;Salvar</Button> &nbsp;                                 
              <Button 
                variant="danger" 
                type ="submit" 
                id="btnNovo">
                  <FontAwesomeIcon icon={faTrash} />
                  &nbsp;Excluir</Button>                                                      
            </Col>            
          </Form.Row>
          <br />
          <Tabs defaultActiveKey="dadosCadatrais" id="tabClientes">
            <Tab eventKey="dadosCadatrais" title="Dados Cadastrais">
              <br />
              <header className="panel-heading">
                Informações Pessoais
              </header>
              <br />
              <Form.Row>
                <Col sm="2">
                    <Form.Label>Pessoa</Form.Label><br />
                    <Form.Control as ="select" 
                      id="rbTipoPessoa"
                      required>
                      <option></option>
                      <option>Física</option>
                      <option>Jurídica</option>
                    </Form.Control>
                  </Col>     
                  <Col sm="8">
                    <Form.Label>Nome/Razão Social</Form.Label><br />
                    <Form.Control 
                      id="txtNomeCliente"
                      required />
                  </Col>                         
                  <Col sm="2">
                    <Form.Label>Data Nascimento</Form.Label><br />
                    <Form.Control
                      id="txtDataNascimento"
                      required />
                  </Col>                  
                </Form.Row>
                <Form.Row>
                  <Col sm="2">
                    <Form.Label>Nacionalidade</Form.Label><br />
                    <Form.Control
                      id="txtNacionalidade"
                      required />
                  </Col>
                  <Col sm="2">
                    <Form.Label>Estado Civil</Form.Label><br />
                    <Form.Control as ="select" 
                      id="rbEstadoCivil"
                      required>
                      <ListaEstadoCivil />
                    </Form.Control>
                  </Col>
                  <Col sm="4">
                    <Form.Label>Profissão</Form.Label><br />
                    <Form.Control
                      id="txtProfissao"
                      required />
                  </Col>
              </Form.Row>
              <br /> 
              <header className="panel-heading">
                Documentos
              </header>
              <br /> 
              <Form.Row>
                <Col sm="2">
                    <Form.Label>CPF/CNPJ</Form.Label><br />
                    <Form.Control 
                      id="txtCpfCnpj"
                      required />
                </Col>
                <Col sm="2">
                  <Form.Label>RG</Form.Label><br />
                  <Form.Control 
                  id="txtRG"
                  required />
                </Col>
                <Col sm="2">
                  <Form.Label>CNH</Form.Label><br />
                  <Form.Control
                    id="txtCNH"
                    required />
                </Col>              
              </Form.Row>
            </Tab>
            <Tab eventKey="enderecoTelefone" title="Endereço e Telefones">
              <br /> 
              <header className="panel-heading">
                Endereço Residencial
              </header>
              <br /> 
              <Form.Row>
                <Col sm="2">
                    <Form.Label>CEP</Form.Label><br />
                    <Form.Control 
                      id="txtCEP"
                      required />
                </Col>
                <Col sm="2">
                    <Form.Label>Tipo Logradouro</Form.Label><br />
                    <Form.Control as ="select" 
                      id="rbTipoLogradouro"
                      required>
                      <ListaLogradouros />
                    </Form.Control>
                </Col>
                <Col sm="7">
                  <Form.Label>Logradouro</Form.Label><br />
                  <Form.Control 
                    id="txtLogradouro"
                    required />
                </Col>
                <Col sm="1">
                  <Form.Label>Número</Form.Label><br />
                  <Form.Control 
                    id="txtNumero"
                    required />
                </Col>            
              </Form.Row>
              <Form.Row>
                <Col sm="2">
                  <Form.Label>Complemento</Form.Label><br />
                  <Form.Control 
                  id="txtComplemento"
                  required />
                </Col>
                <Col sm="4">
                    <Form.Label>Cidade</Form.Label><br />
                    <Form.Control 
                      id="txtCidade"
                      required />
                </Col>
                <Col sm="1">
                <Form.Label>UF</Form.Label><br />
                  <Form.Control as ="select" 
                    id="rbUF"
                    required>
                    <ListaUFs />
                  </Form.Control>
                </Col>
              </Form.Row>
              <br /> 
              <header className="panel-heading">
                Contatos
              </header>
              <br /> 
              <Form.Row>
                <Col sm="2">
                    <Form.Label>Tel. Residencial</Form.Label><br />
                    <Form.Control 
                      id="txtTelefoneResidencial"
                      required />
                </Col>
                <Col sm="2">
                    <Form.Label>Tel. Celular</Form.Label><br />
                    <Form.Control 
                      id="txtTelefoneCelular"
                      required />
                </Col>
                <Col sm="2">
                  <Form.Label>Tel. Comercial</Form.Label><br />
                  <Form.Control 
                    id="txtTelefoneComercial"
                    required />
                </Col>
                <Col sm="6">
                  <Form.Label>E-mail</Form.Label><br />
                  <Form.Control 
                    id="txtEmail"
                    required />
                </Col>            
              </Form.Row>
            </Tab>              
          </Tabs>
        </Form>
      </div>
    </div>
  );
}

export default Clientes;