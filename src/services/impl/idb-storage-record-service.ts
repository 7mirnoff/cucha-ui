import { generateEntityCode } from '../../model/base'
import { IRecord } from '../../model/record'
import { ICreateRecordRequest, IRecordService } from '../record-service-api'
import { IdbStorageBaseService } from './idb-storage-base-service'

export default class IdbStorageRecordService extends IdbStorageBaseService implements IRecordService {
  async getAllRecords(): Promise<IRecord[]> {
    const records = ((await this._storage.table('records').toArray()) as IRecord[]) || null
    return records
  }

  async createRecord(createRequest: ICreateRecordRequest): Promise<IRecord> {
    const newRecord: IRecord = {
      code: generateEntityCode('REC'),
      value: createRequest.value,
      status: 'New',
      createDate: new Date(),
      updateDate: new Date()
    }

    await this._storage.table('records').add(newRecord)

    return newRecord
  }
}
