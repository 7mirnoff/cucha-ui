import React from 'react'

import clsx from 'clsx'

import { IRecord, RecordCode } from '../../../model/record'
import styles from './sidebar.module.scss'

interface SidebarProps {
  data: IRecord[]
  selectItemId?: RecordCode
  onClickItem: (code: RecordCode) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ data, onClickItem, selectItemId }) => {
  return (
    <div className={styles.root}>
      {data.map((item) => {
        const isSelected = item.code === selectItemId
        return (
          <div
            key={item.code}
            className={clsx(styles.item, { [styles.selected]: isSelected })}
            onClick={() => onClickItem(item.code)}
          >
            {item.value}
          </div>
        )
      })}
    </div>
  )
}
