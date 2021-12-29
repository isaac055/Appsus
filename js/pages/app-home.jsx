export class Home extends React.Component {
  state = {};
  render() {
    return (
      <section className = 'homePage flex align center column'>
        <header className = 'header flex align space-between '>
          <h1>Appsus</h1>
          <nav>
          <i className="fas fa-th"></i>
          </nav>
        </header>
        <main className = 'flex align center column'>
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
