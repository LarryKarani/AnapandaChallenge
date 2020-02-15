import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class SingleTaskComponent extends Component {
  @service store;
  
  get hasPin(){
    let pinned = false;
    let data = this.store.peekAll('task');
    for (var i = 0; i < data.length; i++) {
      if (data.objectAt(i).isPined === true) {
        pinned= true;
        break;
      }
    }
    return pinned
  }

  get tasks(){
    return this.store.peekAll('task')
  }
  
}