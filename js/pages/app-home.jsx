export class Home extends React.Component {
  state = {};
  render() {
    return (
      <section className = 'homePage flex align justify'>
        <header>
          <h1>Appsus</h1>
          <nav>
            <i className ='fab fa-buromobelexperte'></i>
          </nav>
        </header>
        <main>
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
