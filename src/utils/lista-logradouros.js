import React  from 'react';

function ListaLogradouros() {
  const Logradouros=[
    {"sigla":"", "logradouro":""},
    {"sigla":"R", "logradouro":"Rua"},
    {"sigla":"AV", "logradouro":"Avenida"},
    {"sigla":"PCA", "logradouro":"Praça"},
    {"sigla":"TR", "logradouro":"Travessa"},
    {"sigla":"AL", "logradouro":"Alameda"},
    {"sigla":"ETR", "logradouro":"Estrada"},
    {"sigla":"LGO", "logradouro":"Largo"},
    {"sigla":"ROD", "logradouro":"Rodovia"},
    {"sigla":"VD", "logradouro":"Viaduto"},
    {"sigla":"VL", "logradouro":"Vila"},
    {"sigla":"VLA", "logradouro":"Viela"}
  ];

  return Logradouros.map(Logradouros =>
    <option value={Logradouros.logradouro} key={Logradouros.sigla}>
      {Logradouros.logradouro}
    </option>
  );

}

export default ListaLogradouros;
