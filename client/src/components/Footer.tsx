import { Button } from '@/components/ui/button'
import { Github, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const navigationLinks = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Jobs', href: '#' },
  { label: 'Press', href: '#' },
]

const socialLinks = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'YouTube', href: '#', icon: Youtube },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
        <nav className="flex flex-wrap justify-center gap-6">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                aria-label={social.label}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            )
          })}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Serrato Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
