import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2BoilerplateAppComponent } from '../app/angular2-boilerplate.component';

beforeEachProviders(() => [Angular2BoilerplateAppComponent]);

describe('App: Angular2Boilerplate', () => {
  it('should create the app',
      inject([Angular2BoilerplateAppComponent], (app: Angular2BoilerplateAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-boilerplate works!\'',
      inject([Angular2BoilerplateAppComponent], (app: Angular2BoilerplateAppComponent) => {
    expect(app.title).toEqual('angular2-boilerplate works!');
  }));
});
