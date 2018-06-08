import express from 'express';

const app = express();
const router = express.Router();

// api-node
let apiAddresses = [];

router.get('/api-ip/add/:ip', (req, res, err) => {
  const ip = req.params.ip;
  let result = false;

  if (apiAddresses.indexOf(ip) === -1) {
    apiAddresses.push(ip);
    result = true;
  }

  res.json({result});
});

router.get('/api-ip/list', (req, res, err) => {
  res.json({ip: apiAddresses});
});

router.get('/api-ip/remove/:ip', (req, res, err) => {
  apiAddresses = apiAddresses.filter((ip) => ip !== req.params.ip);
  res.json({result: true});
});

router.get('/api-ip/clear', (req, res, err) => {
  apiAddresses.length = 0;
  res.json({result: true});
});

// abci-node
let abciAddresses = [];

router.get('/abci-ip/add/:ip', (req, res, err) => {
  const ip = req.params.ip;
  let result = false;

  if (abciAddresses.indexOf(ip) === -1) {
    abciAddresses.push(ip);
    result = true;
  }

  res.json({result});
});

router.get('/abci-ip/list', (req, res, err) => {
  res.json({ip: abciAddresses});
});

router.get('/abci-ip/remove/:ip', (req, res, err) => {
  abciAddresses = abciAddresses.filter((ip) => ip !== req.params.ip);
  res.json({result: true});
});

router.get('/abci-ip/clear', (req, res, err) => {
  abciAddresses.length = 0;
  res.json({result: true});
});

app.use(router);

console.log('server is listening at port 3000');
app.listen(3000);

