
function isTouching(object1,object2){
    if (object1.position.x  - object2.position.x  <50
      && object2.position.x  - object1.position.x  < 50
      && object1.position.y - object2.position.y < 50
      && object2.position.y - object2.position.y < 50) {
      
      return true;
    }
    else {
      return false;
    } 
  }