import { Sdk } from '@mogami/sdk'
import React, { useState } from 'react'
import { Button } from 'react-daisyui'
import { SdkControlPanelResult } from './sdk-control-panel-result'

export function SdkControlPanelServerConfig({ sdk }: { sdk: Sdk }) {
  const [result, setResult] = useState<unknown>(null)
  const getResult = () => {
    sdk.config.config().then((res) => setResult(res.data))
  }
  return (
    <div className="flex flex-col space-y-3">
      <div>
        <Button onClick={getResult}>Get Server Config</Button>
      </div>
      <SdkControlPanelResult data={result} />
    </div>
  )
}
