import express from 'express';
import cors from 'cors';

import customers from './customers/customers.json';
import customer3301426500509 from './customers/3301426500509.json';
import customer3301426500510 from './customers/3301426500510.json';
import customer3301426500511 from './customers/3301426500511.json';
import customer3301426500512 from './customers/3301426500512.json';

const PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());

app.get('/customers', (req, res) => {
  res.json(customers);
});

app.get('/customer/3301426500509', (req, res) => {
  res.json(customer3301426500509);
});

app.get('/customer/3301426500510', (req, res) => {
  res.json(customer3301426500510);
});

app.get('/customer/3301426500511', (req, res) => {
  res.json(customer3301426500511);
});

app.get('/customer/3301426500512', (req, res) => {
  res.json(customer3301426500512);
});

app.listen(PORT, () => {
  console.log(`Server mock started on port ${PORT}`);
});
