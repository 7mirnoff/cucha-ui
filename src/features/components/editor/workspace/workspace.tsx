import React, { useCallback, useState } from 'react'

import 'easymde/dist/easymde.min.css'
import SimpleMdeReact from 'react-simplemde-editor'

export const Workspace: React.FC = () => {
  const [value, setValue] = useState('Initial value')

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  return <SimpleMdeReact value={value} onChange={onChange} />
}
