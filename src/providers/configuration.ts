import { Injectable } from '@angular/core';

/*
  Generated class for the Configuration provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConfigurationProvider {

  private tntServerHost: String;
  constructor() {
    this.tntServerHost = 'http://localhost:8080';
  }

  public getServerHost(): String {
    return this.tntServerHost;
  }
}
