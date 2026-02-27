import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-provider'

export default function Header() {
  const GITHUB_URL = 'https://github.com/anggelserrato/mern-lab-01-express'
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Badge variant="default">Lab 01</Badge>
          <span className="text-muted-foreground text-xs hidden sm:inline">
            Node.js + Express
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            aria-label="GitHub repository"
          >
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
