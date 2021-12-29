const { NavLink } = ReactRouterDOM


export class Home extends React.Component {
    state = {};

    onNav(ev) {
        document.querySelector('.nav-modal').hide = false;
    }

    render() {
        return (
            <section className='homePage flex align center column'>
                <header className='header flex align space-between '>
                    <h1>Appsus</h1>
                    <nav>
                        <button className="nav-btn" onClick={this.onNav}>
                            <i className="fas fa-th"></i>
                        </button>
                        <div className="nav-modal flex" >
                            {/* <NavLink className="keep-btn clean-link" to="/Nots"><i class="fas fa-sticky-note"></i></NavLink>
                            <NavLink className="mail-btn clean-link" to="/Mail"><i class="fas fa-paper-plane"></i></NavLink> */}
                        </div>
                    </nav>
                </header>
                <main className="flex align center column">

                    <h1>Welcome</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                        recusandae eligendi ab illum possimus similique quaerat nobis fugiat
                        saepe eius.
                    </p>
                </main>
            </section>
        );
    }
}
