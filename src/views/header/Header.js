import React from 'react'

// Importing navigation here
import MainNavigation from '../../components/mainNavigation/MainNavigation'

const Header = () => {
  return (
    <header>

      {/* Since this is gonna be a regular website, it's best to follow the HTML best practices
      and put the navigation in the <header /> for SEO purposes */}
      <MainNavigation />
    </header>
  )
}

export default Header
