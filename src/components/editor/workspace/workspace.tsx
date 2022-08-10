import React, { useMemo } from 'react'

import SimpleMDE from 'easymde'
import { marked } from 'marked'
import SimpleMdeReact from 'react-simplemde-editor'

import { IRecord } from '../../../model/record'
import styles from './workspace.module.scss'
import 'easymde/dist/easymde.min.css'

interface IWorkspaceProps {
  record?: IRecord
  onChange: (value: string) => void
}

export const Workspace: React.FC<IWorkspaceProps> = ({ record, onChange }) => {
  const workspaceOptions = useMemo(() => {
    return {
      autofocus: true,
      previewRender(value) {
        return marked.parse(value)
      }
    } as SimpleMDE.Options
  }, [record?.code])

  return (
    <div className={styles.root}>
      {record ? (
        <SimpleMdeReact value={record?.value} onChange={onChange} options={workspaceOptions} />
      ) : (
        <div>Крутилка</div>
      )}
    </div>
  )
}
