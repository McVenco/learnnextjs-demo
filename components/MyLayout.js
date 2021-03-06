import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #AAA',
    color: '#333',
    backgroundColor: '#F6F6F6'

}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
)

export default Layout