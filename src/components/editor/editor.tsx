import React, { useContext } from 'react'

import { EditorContext } from '../../providers/editor'
import styles from './editor.module.scss'
import { Sidebar } from './sidebar'
import { Workspace } from './workspace'

export const Editor: React.FC = () => {
  const editorContext = useContext(EditorContext)

  const { records, selectRecordCode, setSelectRecordCode, createRecord, saveRecord, isLoading } = editorContext

  const selectRecord = records.find((record) => record.code === selectRecordCode)
  console.log(selectRecord)
  const onChange = (value: string): void => {
    if (!selectRecord) return
    void saveRecord({ ...selectRecord, value })
  }

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  return (
    <div className={styles.root}>
      {/*<p>DEBUG: SelectItemId: {editorContext.selectRecordsId}</p>*/}
      <div className={styles.editor}>
        <div className={styles.sidebarWrapper}>
          <Sidebar
            records={records}
            selectRecordCode={selectRecordCode}
            onClickRecord={setSelectRecordCode}
            onCreateRecord={async () => {
              const { code } = await createRecord('')
              setSelectRecordCode(code)
            }}
          />
        </div>
        <div className={styles.workspaceWrapper}>
          <Workspace onChange={onChange} record={selectRecord} />
        </div>
      </div>
    </div>
  )
}
