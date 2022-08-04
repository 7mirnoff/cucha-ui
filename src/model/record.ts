export type RecordStatus = 'New' | 'Flow' | 'Removed'

export type RecordCode = string

export interface IRecord {
  code: RecordCode
  value: string
  status: RecordStatus
  createDate: Date
  updateDate: Date
}
