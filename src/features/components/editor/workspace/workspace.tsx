import React, { useCallback, useMemo, useState } from 'react'

import SimpleMDE from 'easymde'
import { marked } from 'marked'
import SimpleMdeReact from 'react-simplemde-editor'

import styles from './workspace.module.scss'

import 'easymde/dist/easymde.min.css'

export const Workspace: React.FC = () => {
  const [value, setValue] = useState('Initial value')

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  const workspaceOptions = useMemo(() => {
    return {
      previewRender(value) {
        return marked.parse(value)
      }
    } as SimpleMDE.Options
  }, [])

  return (
    <div className={styles.root}>
      <SimpleMdeReact value={value} onChange={onChange} options={workspaceOptions} />
    </div>
  )
}
