import React, { useState } from 'react';
import { Jumbotron, Button, Form, Col, Spinner, Alert, Modal } from 'react-bootstrap';
import { A } from 'hookrouter';
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
import { render } from '@testing-library/react';
import InputMask from './components/input-mask';

function Clientes() {

  const [validateForm, setValidateForm] = useState(false);

  const [msgAlert, setMsgAlert] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [typeAlert, setTypeAlert] = useState('success');

  const [idCliente, setIdCliente] = useState(0);
  const [nomeCliente, setNomeCliente] = useState('');
  const [tipoPessoa, setTipoPessoa] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [rg, setRg] = useState('');
  const [cnh, setCnh] = useState('');
  const [cep, setCep] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [profissao, setProfissao] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [tipoLogradouro, setTipoLogradouro] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');  
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [telefoneResidencial, setTelefoneResidencial] = useState('');
  const [telefoneComercial, setTelefoneComercial] = useState('');
  const [telefoneCelular, setTelefoneCelular] = useState('');
  const [email, setEmail] = useState('');
  const [dataCadastro, setDataCadastro] = useState('');
  const [idUsuario, setIdUsuario] = useState(0);

  function insereCliente(event){
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
          onSubmit={insereCliente}
          >
          <Form.Row>
            <Col sm="3">
              <h4>Clientes</h4>
            </Col>
            <Col sm="9" className="text-right">
              <Button 
                variant="primary" 
                id="btnNovo">
                  <FontAwesomeIcon icon={faPlusCircle} />
                  &nbsp;Novo Cliente</Button>&nbsp;
              <Button 
                variant="primary" 
                id="btnPesquisar">
                  <FontAwesomeIcon icon={faSearch} />
                  &nbsp;Pesquisar</Button>&nbsp;
              <Button 
                variant="success" 
                type ="submit" 
                id="btnSalvar">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  &nbsp;Salvar</Button>&nbsp;
              <DeleteButton />
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
                    <Form.Control type="date"
                      id="txtDataNascimento"
                      required />
                  </Col>                  
                </Form.Row>
                <Form.Row>
                  <Col sm="2">
                    <Form.Label>Nacionalidade</Form.Label><br />
                    <Form.Control
                      id="txtNacionalidade" />
                  </Col>
                  <Col sm="2">
                    <Form.Label>Estado Civil</Form.Label><br />
                    <Form.Control as ="select" 
                      id="rbEstadoCivil">
                      <ListaEstadoCivil />
                    </Form.Control>
                  </Col>
                  <Col sm="4">
                    <Form.Label>Profissão</Form.Label><br />
                    <Form.Control
                      id="txtProfissao"/>
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
                    <InputMask
                      id="txtCpfCnpj"
                      minlength="14"
                      mask={["999.999.999-99", "99.999.999/9999-99"]}
                      onChange={setCpfCnpj}
                      value={cpfCnpj}
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
                    <InputMask
                      id="txtCep"
                      minlength="9"
                      maxlength="9"
                      mask={"99999-999"}
                      onChange={setCep}
                      value={cep}
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
                  id="txtComplemento"/>
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
                    <InputMask
                      id="txtTelefoneResidencial"
                      minlength="14"
                      maxlength="15"
                      mask={["(99) 9999-9999", "(99) 99999-9999"]}
                      onChange={setTelefoneResidencial}
                      value={telefoneResidencial} />                      
                </Col>
                <Col sm="2">
                    <Form.Label>Tel. Celular</Form.Label><br />
                    <InputMask
                      id="txtTelefoneCelular"
                      minlength="14"
                      maxlength="15"
                      mask={["(99) 9999-9999", "(99) 99999-9999"]}
                      onChange={setTelefoneCelular}
                      value={telefoneCelular} />
                </Col>
                <Col sm="2">
                  <Form.Label>Tel. Comercial</Form.Label><br />
                    <InputMask
                      id="txtTelefoneComercial"
                      minlength="14"
                      maxlength="15"
                      mask={["(99) 9999-9999", "(99) 99999-9999"]}
                      onChange={setTelefoneComercial}
                      value={telefoneComercial} />                    
                </Col>
                <Col sm="6">
                  <Form.Label>E-mail</Form.Label><br />
                  <Form.Control type="email"
                    minlength="6"
                    id="txtEmail"/>
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