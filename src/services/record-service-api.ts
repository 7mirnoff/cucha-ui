import { IRecord } from '../model/record'

export interface IRecordService {
  /** Получение всех записей редактора*/
  getAllRecords: () => Promise<IRecord[] | null>

  /** Создание записи*/
  createRecord: (createRecord: ICreateRecordRequest) => Promise<IRecord>
}

export interface ICreateRecordRequest {
  value: string
}
