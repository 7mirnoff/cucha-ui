import React from 'react'

import clsx from 'clsx'

import { IRecord, RecordCode } from '../../../model/record'
import styles from './sidebar.module.scss'

interface SidebarProps {
  records: IRecord[]
  selectItemId?: RecordCode
  onClickRecord: (code: RecordCode) => void
  onCreateRecord: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ records, onClickRecord, selectItemId, onCreateRecord }) => {
  if (!records.length) {
    return (
      <>
        <div>записи не найдены</div>
        <button onClick={onCreateRecord}>add</button>
      </>
    )
  }

  const sortedRecord = records.sort((a, b) => +b.createDate - +a.createDate)
  console.log(sortedRecord)
  return (
    <div className={styles.root}>
      {records.map((record) => {
        const isSelected = record.code === selectItemId
        return (
          <div
            key={record.code}
            className={clsx(styles.item, { [styles.selected]: isSelected })}
            onClick={() => onClickRecord(record.code)}
          >
            {record.value}
          </div>
        )
      })}
      <button onClick={onCreateRecord}>add</button>
    </div>
  )
}
