
// <i className="fas fa-th"></i>
// <i class="fas fa-sticky-note"></i>
// <i class="fas fa-paper-plane"></i>

const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {



    render() {

        return (
            <header className="header flex align space-between" >
                <h1 onClick={() => this.props.history.push('/')}>Appsus</h1>
                <nav className="main-nav">
                    <ul>
                        <il><NavLink activeClassName="my-active" exact to="/">Home</NavLink> </il>
                        <il><NavLink to="/about">About</NavLink> </il>
                        <il><NavLink to="/Nots">Keep</NavLink></il>
                        <il><NavLink to="/Mail">Mail</NavLink> </il>
                    </ul>
                </nav>
            </header>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)