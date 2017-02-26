import { Http } from '@angular/http';
import { ConfigurationProvider }          from './configuration';

let configurationProvider: ConfigurationProvider = null;

describe('configuration provider', () => {

  beforeEach( () =>  {
    configurationProvider = new ConfigurationProvider();
  });

  it('should create configuration provider', () => {
    expect(configurationProvider).not.toBeNull();
  });

  it('get server host not null or empty', () => {
      expect(configurationProvider.getServerHost()).toBeTruthy();
  });

  // it('get server host should use https', () => {
  //     expect(configurationProvider.getServerHost().startsWith('https')).toBeTruthy();
  // });

});