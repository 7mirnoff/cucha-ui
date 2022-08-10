import React from 'react'

import clsx from 'clsx'

import { IRecord, RecordCode } from '../../../model/record'
import styles from './sidebar.module.scss'

interface ISidebarProps {
  records: IRecord[]
  selectRecordCode?: string
  onClickRecord: (code: RecordCode) => void
  onCreateRecord: () => void
}

export const Sidebar: React.FC<ISidebarProps> = ({ records, selectRecordCode, onClickRecord, onCreateRecord }) => {
  if (!records.length) {
    return (
      <>
        <div>записи не найдены</div>
        <button onClick={onCreateRecord}>add</button>
      </>
    )
  }

  const sortedRecord = records.sort((a, b) => +b.createDate - +a.createDate)

  return (
    <div className={styles.root}>
      {sortedRecord.map((record) => {
        const isSelected = record.code === selectRecordCode
        return (
          <div
            key={record.code}
            className={clsx(styles.item, { [styles.selected]: isSelected })}
            onClick={() => onClickRecord(record.code)}
          >
            {record.value || 'Новая запись'}
          </div>
        )
      })}
      <button onClick={onCreateRecord}>add</button>
    </div>
  )
}
