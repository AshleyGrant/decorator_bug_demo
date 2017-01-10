import {singleton} from 'aurelia-framework';

let constructorCallCount = 0;

@singleton()
export class One {
  constructor() {
    constructorCallCount += 1;
    this.callCount = constructorCallCount;
  }
}
