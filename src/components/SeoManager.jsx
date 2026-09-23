import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import Seo from './Seo'
import { getSeoForRoute } from '../seo/routes'

export default function SeoManager() {
  const { pathname } = useLocation()
  const seo = useMemo(() => getSeoForRoute(pathname), [pathname])
  return <Seo {...seo} />
}
