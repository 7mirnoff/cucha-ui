import React from 'react'

import clsx from 'clsx'

import { IRecord } from '../../../providers/editor/editor-context'
import styles from './sidebar.module.scss'

interface SidebarProps {
  data: IRecord[]
  selectItemId?: number
  onClickItem: (id: number) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ data, onClickItem, selectItemId }) => {
  return (
    <div className={styles.root}>
      {data.map((item) => {
        const isSelected = item.id === selectItemId
        return (
          <div
            key={item.id}
            className={clsx(styles.item, { [styles.selected]: isSelected })}
            onClick={() => onClickItem(item.id)}
          >
            {item.value}
          </div>
        )
      })}
    </div>
  )
}
