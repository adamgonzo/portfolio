'use client'

import { LayoutGroup } from 'framer-motion'
import NavItem from './nav-item'
import { Suspense } from 'react'

const navItems = {
  '/': {
    name: 'Home'
  },
  '/about': {
    name: 'About'
  },
  '/projects': {
    name: 'Projects'
  },
  '/blog': {
    name: 'Blog'
  },
  '/contact': {
    name: 'Contact'
  }
}

export default function Navbar() {
  return (
    <aside className=" mb-16 tracking-tight flex mx-auto">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row">
              <Suspense fallback={null}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />
                })}
              </Suspense>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  )
}
