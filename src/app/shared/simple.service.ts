import { Injectable } from '@angular/core';

@Injectable()
export class SimpleService {

  constructor() { }

  demo():string{
    return 'test works';
  }

}
