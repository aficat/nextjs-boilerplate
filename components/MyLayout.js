import Header from './Header'

const layoutStyle = {
  marginTop: 100,
  marginLeft: 200,
  marginRight: 200,
  padding: 20,
  border: '1px solid #DDD',
  backgroundColor: '#ffd1dc',
  fontFamily: "'Karla', serif",
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
