import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function MensagemTopo(props) {

  const [msgAlert, setMsgAlert] = useState('');
  const [typeAlert, setTypeAlert] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <Alert variant={typeAlert} show={showAlert}>
          {msgAlert}
      </Alert>
    </div>
  );
}

MensagemTopo.propTypes = {
    mensagem: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    exibir: PropTypes.bool.isRequired
}

export default MensagemTopo;