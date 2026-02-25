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

// Compound: FooterRoot
const FooterRoot = ({ children }: { children: React.ReactNode }) => (
  <footer className="border-t bg-background">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
      {children}
    </div>
  </footer>
)

// Compound: Footer.Navigation
const FooterNavigation = ({ children }: { children: React.ReactNode }) => (
  <nav className="flex flex-wrap justify-center gap-6">{children}</nav>
)

// Compound: Footer.Navigation.Item
const FooterNavItem = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a href={href} className="text-sm">
    {children}
  </a>
)

// Compound: Footer.Social
const FooterSocial = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4">{children}</div>
)

// Compound: Footer.Social.Link
const FooterSocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string
  icon: React.ComponentType<{ className: string }>
  label: string
}) => (
  <Button variant="ghost" size="icon" asChild aria-label={label}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="h-4 w-4" />
    </a>
  </Button>
)

// Compound: Footer.Copyright
const FooterCopyright = () => (
  <p className="text-xs">
    © {new Date().getFullYear()} Serrato Labs, Inc. All rights reserved.
  </p>
)

// Compound: Footer
const Footer = Object.assign(FooterRoot, {
  Navigation: Object.assign(FooterNavigation, {
    Item: FooterNavItem,
  }),
  Social: Object.assign(FooterSocial, {
    Link: FooterSocialLink,
  }),
  Copyright: FooterCopyright,
})

export default function LabFooter() {
  return (
    <Footer>
      <Footer.Navigation>
        {navigationLinks.map((link) => (
          <Footer.Navigation.Item key={link.label} href={link.href}>
            {link.label}
          </Footer.Navigation.Item>
        ))}
      </Footer.Navigation>

      <Footer.Social>
        {socialLinks.map((social) => (
          <Footer.Social.Link
            key={social.label}
            href={social.href}
            icon={social.icon}
            label={social.label}
          />
        ))}
      </Footer.Social>

      <Footer.Copyright />
    </Footer>
  )
}
