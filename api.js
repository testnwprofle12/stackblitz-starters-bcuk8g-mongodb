const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
app.use(express.json());

app.get('', async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
  // resp.send({ name: 'Susheel' });
});

app.post('', async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insert(req.body);
  //console.log(req.body)
  //resp.send({ name: 'singh' });
  resp.send(result);
});

app.put('/:name', async (req, resp) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  //console.log(req.body)
  resp.send({ result: 'update' });
});

app.delete('/:id', async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
  //resp.send("done")
});
app.listen(5000);
