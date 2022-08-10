import { IRecord } from '../model/record'

export interface IRecordService {
  /** Получение всех записей редактора*/
  getAllRecords: () => Promise<IRecord[] | null>

  /** Создание записи*/
  createRecord: (createRecord: ICreateRecordRequest) => Promise<IRecord>

  /** Сохранение записи*/
  saveRecord: (record: IRecord) => Promise<IRecord>
}

export interface ICreateRecordRequest {
  value: string
}
