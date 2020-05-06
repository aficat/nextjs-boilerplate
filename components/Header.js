import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  color: "#777"
}

const Header = () => (
    <div>
        <Link href="/" as={ process.env.BACKEND_URL + '/'}>
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about" as={ process.env.BACKEND_URL + '/about'}>
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header
