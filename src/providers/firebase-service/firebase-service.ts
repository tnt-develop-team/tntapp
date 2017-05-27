import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Tool } from '../../models/tool';

@Injectable()
export class FirebaseService {

  constructor(public db: AngularFireDatabase) {
    
  }

  getTools() {
    return this.db.list('/tools');
  }

  addTool(tool: Tool) {
    this.db.list('/tools').push(tool);
  }

  updateTool(key: string,  tool: Tool) {
    this.db.list('/tools').update(key, tool);
  }


}
