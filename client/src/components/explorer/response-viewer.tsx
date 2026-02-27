import { Badge } from '@/components/ui/badge'

export function ResponseViewer({ response, statusCode, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="text-muted-foreground text-sm">Loading response...</div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <Badge
        variant={
          statusCode >= 200 && statusCode < 300 ? 'default' : 'destructive'
        }
      >
        {statusCode} {statusCode >= 200 && statusCode < 300 ? 'OK' : 'Error'}
      </Badge>

      {response && (
        <pre className="rounded-lg border border-border bg-muted p-3 text-xs overflow-auto max-h-48 text-foreground">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}

      {error && (
        <div className="rounded-lg bg-destructive/10 border border-destructive p-3 text-destructive text-sm">
          {error}
        </div>
      )}
    </div>
  )
}
