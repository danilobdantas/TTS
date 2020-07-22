import React from 'react';
import { useRoutes } from 'hookrouter';
import Clientes from './clientes';
import Servicos from './servicos';

const routes = {
  '/': () => <Clientes />,
  '/servicos': () => <Servicos />
};

function TaskManager() {
  return useRoutes(routes);
}

export default TaskManager;