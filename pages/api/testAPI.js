const fetch = require('node-fetch');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: 'Basic emtfZGV2X2ZhNGQ3MDQxNDY3ZjQwZTU5OTYzM2Y4Zjg0ZjFmNTJiOg=='
  }
};

fetch('https://api.zerion.io/v1/wallets/0x42b9df65b219b3dd36ff330a4dd8f327a6ada990/positions/?currency=usd&filter[chain_ids]=0xa4b1&filter[trash]=only_non_trash&sort=value', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
