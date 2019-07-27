import Layout from '../components/MyLayout.js'

export default (props) => (
    <Layout>
        <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet' />
        <h1>{props.url.query.title}</h1>
        <p>This is the blog post content.</p>
    </Layout>
)
