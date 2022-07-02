import React from 'react'
import { Helmet } from 'react-helmet'

function Seo() {
    return (
        <Helmet
        title="Muhammad Aahad | Portfolio Website"
        meta={[
            { name: 'description', content: 'Muhammad Aahad portfolio website' },
            { name: 'keywords', content: 'Muhammad Aahad, Full-stack web developer, DevOps engineer, React, .Net, Nodejs' },
        ]}
        link={[
            { rel: 'icon', type: 'image/png', href: `../../images/icon.png` },
            {rel : 'apple-touch-icon', type:"image/png", href:"../../images/icon.png"}
        ]}
        />
    )
}

export default Seo
