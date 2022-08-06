import React from 'react'

import Dexie from 'dexie'

import { IRecordService } from '../../services/record-service-api'

export interface IApiContext {
  storageService: Dexie
  recordService: IRecordService
}

const ApiContext = React.createContext<IApiContext>({} as IApiContext)

export default ApiContext
