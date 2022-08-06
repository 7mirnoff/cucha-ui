import Dexie from 'dexie'

import { IUser } from '../../providers/api/api-provider'

export abstract class IdbStorageBaseService {
  protected readonly _user: IUser
  protected readonly _storage: Dexie

  constructor(user: IUser, storage: Dexie) {
    this._user = user
    this._storage = storage
  }
}
