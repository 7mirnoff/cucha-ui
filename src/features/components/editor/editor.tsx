import React, { useContext } from 'react'

import { EditorContext } from '../../providers/editor'
import styles from './editor.module.scss'
import { Sidebar } from './sidebar'
import { Workspace } from './workspace'

export const Editor: React.FC = () => {
  const editorContext = useContext(EditorContext)

  if (!editorContext) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={styles.root}>
      {/*<p>DEBUG: SelectItemId: {editorContext.selectRecordsId}</p>*/}
      <div className={styles.editor}>
        <div className={styles.sidebarWrapper}>
          <Sidebar
            data={editorContext.records}
            selectItemId={editorContext.selectRecordsId}
            onClickItem={editorContext.setSelectRecordsId}
          />
        </div>
        <div className={styles.workspaceWrapper}>
          <Workspace />
        </div>
      </div>
    </div>
  )
}
