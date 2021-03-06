
// <i className="fas fa-th"></i>
// <i class="fas fa-sticky-note"></i>
// <i class="fas fa-paper-plane"></i>

const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {



    render() {

        return (
            <header className="header flex align space-between" >
                <h1 className="logo" onClick={() => this.props.history.push('/')}>Appsus</h1>
                <nav className="main-nav ">
                    <ul className="flex">
                        <li className='my-active'><NavLink activeClassName="my-active" exact to="/">Home</NavLink> </li>
                        <li className='Notes'><NavLink to="/Notes">Keep</NavLink></li>
                        <li className='Mail'><NavLink to="/Mail">Mail</NavLink> </li>
                        <li className='about'><NavLink to="/About">About</NavLink> </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)