import Link from 'next/link'
import Header from '../components/Header'
import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <p>Hello Next.js</p>
    </Layout>
)



// This is just one way to create a Layout component. Here are some other methods of creating a Layout component:


/*
    import withLayout from '../lib/layout'

    const Page = () => (
        <p>This is the about page</p>
    )

    export default withLayout(Page)
*/

/*
    const Page = () => (
        <p>This is the about page</p>
    )

    export default () => (<Layout page={Page}/>)
*/

/*
    const content = (<p>This is the about page</p>)

    export default () => (<Layout content={content}/>)
*/