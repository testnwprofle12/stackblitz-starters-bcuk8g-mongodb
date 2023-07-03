const dbConnect = require('mongodb');

const insert = async () => {
  const db = await dbConnect();
  // console.log(db);// full database obtained
 /* const result = await db.insert({
    name: 'note 5',
    brand: 'vivo',
    price: 320,
    category: 'mobile',
  });
  //console.log(result)
  if (result.acknowledged) {
    console.log('data inserted');     //single result inserted
  }
  //console.log("insert function")
};*/

/**multiple result inserted */
const result = await db.insert(
  [
    {
  name: 'max 1',
  brand: 'micromax',
  price: 220,
  category: 'mobile'
},
{ name: 'max 2',
brand: 'micromax',
price: 320,
category: 'mobile'},
{ name: 'max 3',
brand: 'micromax',
price: 420,
category: 'mobile'}
]
);

if (result.acknowledged) {
  console.log('data inserted');     //multiple  result inserted
}

insert();
