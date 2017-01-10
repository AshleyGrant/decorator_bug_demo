export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'one'], name: 'one',      moduleId: 'one',      nav: true, title: 'Page 1' },
      { route: 'two',         name: 'two',        moduleId: 'two',        nav: true, title: 'Page 2' }
    ]);

    this.router = router;
  }
}
