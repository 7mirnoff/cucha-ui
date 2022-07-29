import React, { useCallback, useState } from 'react'

import SimpleMdeReact from 'react-simplemde-editor'

import styles from './workspace.module.scss'

import 'easymde/dist/easymde.min.css'

export const Workspace: React.FC = () => {
  const [value, setValue] = useState('Initial value')

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  return (
    <div className={styles.root}>
      <SimpleMdeReact value={value} onChange={onChange} />
    </div>
  )
}
