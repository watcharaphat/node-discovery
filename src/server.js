import express from 'express';

const app = express();
const router = express.Router();

const ips = [];

router.get('/join/:ip', (req, res, err) => {
  const ip = req.params.ip;
  let result = false;

  if (ips.indexOf(ip) === -1) {
    ips.push(ip);
    result = true;
  }

  res.json({result});
});

router.get('/ip', (req, res, err) => {
  res.json({ip: ips});
});

app.use(router);

console.log('server is listening at port 3000');
app.listen(3000);

