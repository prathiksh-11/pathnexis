import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import Seo from './Seo'
import { resolveSeo } from '../utils/seo'

export default function SeoManager() {
  const { pathname } = useLocation()
  const seo = useMemo(() => resolveSeo(pathname), [pathname])
  return <Seo {...seo} />
}
