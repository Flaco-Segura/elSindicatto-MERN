import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to El Sindicatto',
    keywords: 'discs, buy discs, cheap discs',
    description: 'We sell the best discs for cheap'
}

export default Meta
