import React  from 'react';

function ListaEstadoCivil() {
  const EstadoCivil=[
    {"uf":"", "estado":""},
    {"estadocivil":"Casado", "descricao":"Casado"},
    {"estadocivil":"Divorciado", "descricao":"Divorciado"},
    {"estadocivil":"Pessoa Jurídica", "descricao":"Pessoa Jurídica"},
    {"estadocivil":"Solteiro", "descricao":"Solteiro"},
    {"estadocivil":"União Estável", "descricao":"União Estável"},
    {"estadocivil":"Viúvo", "descricao":"Viúvo"}
 ];

  return EstadoCivil.map(EstadoCivil =>
    <option value={EstadoCivil.descricao} key={EstadoCivil.estadocivil}>
      {EstadoCivil.estadocivil}
    </option>
  );

}

export default ListaEstadoCivil;
