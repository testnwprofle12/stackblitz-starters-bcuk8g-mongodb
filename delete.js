const dbConnect = require('mongodb');

const deleteData = () => {
  let data = await dbConnect();
  let result = await data.deleteOne({ name: 'max pro 7' });
  console.warn(result);
  if (result.acknowledged) {
    console.log('record delaeted');
  }
  //console.warn(data);
  //console.log('function called');
};

deleteData();
