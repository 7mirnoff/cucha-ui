import React, { useContext } from 'react'

import { EditorContext } from '../../providers/editor'
import styles from './editor.module.scss'
import { Sidebar } from './sidebar'
import { Workspace } from './workspace'

export const Editor: React.FC = () => {
  const editorContext = useContext(EditorContext)

  if (!editorContext || editorContext?.isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={styles.root}>
      {/*<p>DEBUG: SelectItemId: {editorContext.selectRecordsId}</p>*/}
      <div className={styles.editor}>
        <div className={styles.sidebarWrapper}>
          <Sidebar
            records={editorContext.records}
            selectItemId={editorContext.selectRecordsId}
            onClickRecord={editorContext.setSelectRecordsId}
            onCreateRecord={() => {
              void editorContext.createRecord('ddf')
            }}
          />
        </div>
        <div className={styles.workspaceWrapper}>
          <Workspace />
        </div>
      </div>
    </div>
  )
}
