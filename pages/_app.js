// /Users/user/Desktop/Core Guild Project/projects/colabs/eng-teams/core/personal-website/prototype/pages/_app.js

import '../styles/globals.css'
import { LayoutGroup } from 'framer-motion'
// Import FontAwesome CSS for icon support
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Prevent FontAwesome from adding CSS automatically (Next.js best practice)

function MyApp({ Component, pageProps }) {
  return (
    <LayoutGroup>
      <Component {...pageProps} />
    </LayoutGroup>
  )
}

export default MyApp
