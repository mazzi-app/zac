import '../public/css/font-awesome.css'
import '../public/css/bootstrap.min.css'
import '../public/css/animate.css'

import '../public/css/flaticon.css'

import '../public/css/prettyPhoto.css'
import '../public/css/shortcodes.css'
import '../public/css/main.css'
import '../public/css/color-switcher.css'
import '../public/css/responsive.css'
import '../public/css/colors/default-color.css'
import "react-datepicker/dist/react-datepicker.css"

import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../core/apolloClient'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState)
    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export async function getStaticProps() {
    const apolloClient = initializeApollo()
}