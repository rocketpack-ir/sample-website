import rocketpack from 'rocketpack.io';

import '../styles/index.scss';

rocketpack.init({ key: 'ssdd' });
const col = rocketpack.dataService().collection('people');
console.log(col.collectionName);
