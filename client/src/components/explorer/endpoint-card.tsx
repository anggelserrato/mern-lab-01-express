import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { fetchEndpoint } from '@/lib/api'
import { ResponseViewer } from './response-viewer'

export function EndpointCard({ method, path, description }) {
  const [state, setState] = useState('idle')
  const [response, setResponse] = useState(null)
  const [statusCode, setStatusCode] = useState(null)
  const [error, setError] = useState(null)

  async function handleFetch() {
    setState('loading')
    const result = await fetchEndpoint(path)

    if (result.error) {
      setState('error')
      setError(result.error)
      setStatusCode(0)
      setResponse(null)
    } else {
      setState('success')
      setStatusCode(result.status)
      setResponse(result.data)
      setError(null)
    }
  }

  return (
    <Card className="flex flex-col gap-4 p-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-sm text-primary">
            {method}
          </span>
          <span className="font-mono text-sm text-muted-foreground">
            {path}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <Button
        onClick={handleFetch}
        disabled={state === 'loading'}
        variant="default"
        className="w-full"
      >
        {state === 'loading' ? 'Calling...' : 'Call Endpoint'}
      </Button>

      {(state === 'success' || state === 'error') && (
        <ResponseViewer
          response={response}
          statusCode={statusCode}
          isLoading={false}
          error={error}
        />
      )}
    </Card>
  )
}
