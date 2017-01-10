let constructorCallCount = 0;

export class Two {
  constructor() {
    constructorCallCount += 1;
    this.callCount = constructorCallCount;
  }
}
