import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";

export default class SingleTaskComponent extends Component {
    
    @service store;

    @action
    updatePin(id) {
        let task = this.store.peekRecord('task', id)
        const { isPined } = task;
        task.isPined = !isPined;
        console.log(task.isPined)
    }

    @action
    toggleCompletion(id) {
        let task = this.store.peekRecord('task', id)
        const { isComplete } = task;
        task.isComplete = !isComplete ;
        console.log(task.isComplete )
    }
}