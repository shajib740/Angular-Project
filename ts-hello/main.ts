
import {LikeFeature} from './excercise1'

// let point = new Point(2,3);
// point.draw();
let likeFeature = new LikeFeature(12,false);

console.log(`Initial Like: ${likeFeature._likes}, IsSelected: ${likeFeature._state}`);
console.log('Press Like BUtton');
likeFeature.onClick();
console.log(`Current Like : ${likeFeature._likes}, IsSelected: ${likeFeature._state}`);
