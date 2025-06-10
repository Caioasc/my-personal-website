// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/pages/_app.js

import '../styles/globals.css'
import { LayoutGroup } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutGroup>
      <Component {...pageProps} />
    </LayoutGroup>
  )
}

export default MyApp
