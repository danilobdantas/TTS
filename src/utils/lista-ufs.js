import React  from 'react';

function ListaUFs() {
  const UFs=[
    {"uf":"", "estado":""},
    {"uf":"AC", "estado":"Acre"},
    {"uf":"AL", "estado":"Alagoas"},
    {"uf":"AM", "estado":"Amazonas"},
    {"uf":"AP", "estado":"Amapá"},
    {"uf":"BA", "estado":"Bahia"},
    {"uf":"CE", "estado":"Ceará"},
    {"uf":"DF", "estado":"Distrito Federal"},
    {"uf":"ES", "estado":"Espírito Santo"},
    {"uf":"GO", "estado":"Goiás"},
    {"uf":"MA", "estado":"Maranhão"},
    {"uf":"MG", "estado":"Minas Gerais"},
    {"uf":"MS", "estado":"Mato Grosso do Sul"},
    {"uf":"MT", "estado":"Mato Grosso"},
    {"uf":"PA", "estado":"Pará"},
    {"uf":"PB", "estado":"Paraíba"},
    {"uf":"PE", "estado":"Pernambuco"},
    {"uf":"PI", "estado":"Piauí"},
    {"uf":"PR", "estado":"Paraná"},
    {"uf":"RJ", "estado":"Rio de Janeiro"},
    {"uf":"RN", "estado":"Rio Grande do Norte"},
    {"uf":"RO", "estado":"Rondônia"},
    {"uf":"RR", "estado":"Roraima"},
    {"uf":"RS", "estado":"Rio Grande do Sul"},
    {"uf":"SC", "estado":"Santa Catarina"},
    {"uf":"SE", "estado":"Sergipe"},
    {"uf":"SP", "estado":"São Paulo"},
    {"uf":"TO", "estado":"Tocantins"}
  ];

  return UFs.map(uf =>
    <option value={uf.uf} key={uf.uf}>
      {uf.uf}
    </option>
  );

}

export default ListaUFs;
