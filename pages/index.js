import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet' />
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello" title="Hello There!" />
      <PostLink id="new-content" title="Learn comething new!" />
      <PostLink id="new-in" title="What is new?" />
    </ul>
  </Layout>
)