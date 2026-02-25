import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

// Compound: HeaderRoot
const HeaderRoot = ({ children }: { children: React.ReactNode }) => (
  <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
      {children}
    </div>
  </header>
)

// Compound: Header.Brand
const HeaderBrand = () => (
  <div className="flex items-center gap-3">
    <div className="font-mono font-bold text-sm">Lab 01</div>
    <span className="text-muted-foreground text-xs hidden sm:inline">
      Node.js + Express
    </span>
  </div>
)

// Compound: Header.Center
const HeaderCenter = () => <div className="flex-1" />

// Compound: Header.Actions
const HeaderActions = ({ githubUrl }: { githubUrl: string }) => (
  <div className="flex items-center gap-4">
    <ModeToggle />
    <Button variant="ghost" size="icon" asChild aria-label="GitHub repository">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <Github className="h-4 w-4" />
      </a>
    </Button>
  </div>
)

// Compound: Header
const Header = Object.assign(HeaderRoot, {
  Brand: HeaderBrand,
  Center: HeaderCenter,
  Actions: HeaderActions,
})

export default function LabHeader() {
  const GITHUB_URL = 'https://github.com/anggelserrato/mern-lab-01-express'

  return (
    <Header>
      <Header.Brand />
      <Header.Center />
      <Header.Actions githubUrl={GITHUB_URL} />
    </Header>
  )
}
