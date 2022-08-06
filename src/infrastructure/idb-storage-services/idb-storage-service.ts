import Dexie, { Table } from 'dexie'

import { IRecord } from '../../model/record'
import { IUser } from '../../providers/api/api-provider'

export class IdbStorageService extends Dexie {
  records!: Table<IRecord>

  private readonly _name: string
  private readonly _version: number

  constructor(user: IUser, version: number) {
    super(user.name)

    this.version(version).stores({
      records: '++code, value, status, createDate, updateDate' // Primary key and indexed props
    })

    this._name = user.name
    this._version = version
  }
}
