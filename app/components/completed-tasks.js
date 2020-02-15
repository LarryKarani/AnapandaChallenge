import Component from '@glimmer/component';
import { inject as service } from '@ember/service';


export default class CompletedTasks extends Component {
    @service store;
    get completedTasks() {
        console.log(this.store.peekAll('task'));
        return this.store.peekAll('task').filter(task => task.isComplete === true);
    }
    
}