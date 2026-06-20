import { FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from './icons/SocialIcons'

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/pathnexis-solutions/',
    icon: LinkedInIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Pathnexissolutions',
    icon: YouTubeIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pathnexis_solutions?igsh=MWIyb3QzOGlqM3M3ag==',
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1BHShHN8JZ/',
    icon: FacebookIcon,
  },
]

export default function SocialLinks({ className = '', iconSize = 18, variant = 'dark' }) {
  const styles =
    variant === 'dark'
      ? 'text-white/50 hover:text-teal-light hover:bg-white/10 border-white/10'
      : 'text-navy/50 hover:text-teal hover:bg-teal/10 border-gray-200'

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110 ${styles}`}
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
