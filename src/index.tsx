import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from "miragejs";


createServer({

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          type: 'income',
          category: 'Dev',
          amount: 6000,
          // createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Rent',
          type: 'expense',
          category: 'home',
          amount: 1000,
          // createdAt: new Date('2021-02-18 11:00:00'),
        },
      ]
    })
  },

  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
