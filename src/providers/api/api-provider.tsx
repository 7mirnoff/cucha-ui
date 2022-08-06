import React, { useLayoutEffect, useRef } from 'react'

import { useUpdate } from 'react-use'

import { IdbStorageService } from '../../infrastructure/idb-storage-services/idb-storage-service'
import IdbStorageRecordService from '../../services/impl/idb-storage-record-service'
import ApiContext, { IApiContext } from './api-context'

interface IApiProvider {
  children: React.ReactNode
}

export interface IUser {
  name: string
  code: string
}

const mockAuthUserData = {
  name: '7mirnoff',
  code: '7mirnoff'
}

const ApiProvider: React.FC<IApiProvider> = ({ children }) => {
  const apiContext = useRef<IApiContext>()
  const update = useUpdate()

  useLayoutEffect(() => {
    if (!mockAuthUserData) {
      return console.info('currentUser was not found')
    }
    if (apiContext.current) {
      return console.info('apiContext already created', apiContext.current)
    }

    const user = mockAuthUserData

    const mainStorage = new IdbStorageService(user, 1)

    apiContext.current = {
      storageService: mainStorage,
      recordService: new IdbStorageRecordService(user, mainStorage)
    }

    update()
    return () => {
      apiContext.current = undefined
    }
  }, [mockAuthUserData])

  if (!apiContext.current) return <>{children}</>
  return <ApiContext.Provider value={apiContext.current}>{children}</ApiContext.Provider>
}

export default ApiProvider
