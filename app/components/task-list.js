import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
export default class SingleTaskComponent extends Component {
  @service store;

  get tasks(){
    console.log(this.store.peekAll('task'))
    return this.store.peekAll('task')
  }
  
}