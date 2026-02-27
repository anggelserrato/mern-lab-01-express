import { useEffect, useState } from 'react'
import { checkServerHealth } from '@/lib/api'
import { EndpointCard } from '@/components/explorer/endpoint-card'
import { Badge } from '@/components/ui/badge'

const ENDPOINTS = [
  {
    method: 'GET',
    path: '/',
    description: 'Server health check - returns basic status',
  },
  {
    method: 'GET',
    path: '/api/about',
    description: 'Project information endpoint',
  },
  {
    method: 'GET',
    path: '/api/hello',
    description: 'Returns greeting with timestamp',
  },
]

export default function APIExplorer() {
  const [serverOnline, setServerOnline] = useState(false)

  useEffect(() => {
    let mounted = true
    async function checkServer() {
      const isOnline = await checkServerHealth()
      if (mounted) {
        setServerOnline(isOnline)
      }
    }
    checkServer()
    const intervalId = setInterval(checkServer, 5000)
    return () => {
      mounted = false
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background pt-20 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-4xl flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-foreground">API Explorer</h1>
          <p className="text-muted-foreground">
            Test all available Express endpoints for Lab 01
          </p>

          <div className="flex items-center gap-2">
            <Badge variant={serverOnline ? 'default' : 'destructive'}>
              {serverOnline ? '✓ Server Connected' : '✗ Server Offline'}
            </Badge>
            <span className="text-xs text-muted-foreground">
              (http://localhost:3000)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
          {ENDPOINTS.map((endpoint) => (
            <EndpointCard
              key={endpoint.path}
              method={endpoint.method}
              path={endpoint.path}
              description={endpoint.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
