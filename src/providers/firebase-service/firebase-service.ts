import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Tool } from '../../models/tool';
import { Share } from '../../models/share';

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

  getShares() {
    return this.db.list('/shares');
  }

  addShare(share: Share) {
    this.db.list('/shares').push(share);
  }

  updateShare(key: string,  share: Share) {
    this.db.list('/shares').update(key, share);
  }
}
