import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver

  model() {
    return [
      this.store.createRecord('task', {
        id: 1,
        name: 'Solve all github issues',
        description: 'Solve the world\'s Github issues.',
        isComplete: false,
        creator: 2,
        isPined: false
      }),
      this.store.createRecord('task', {
        id: 2,
        name: 'A task',
        description: 'This is a task.',
        isComplete: false,
        creator: 2,
        isPined: false
      }),
      this.store.createRecord('task', {
        id: 3,
        name: 'Clean the kitchen',
        description: 'It\'s filthy!',
        isComplete: false,
        creator: 2,
        isPined: false
      })
    ];
  }

}
loadInitializers(App, config.modulePrefix);
