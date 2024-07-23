function Header({ name }){
    return (<h1>Hello, { name ? name : 'React!' } 🚀</h1>);
}

export default Header;