import {Home} from './pages/app-home.jsx'
import {About} from './pages/app-about.jsx'
import {Nots} from './pages/app-nots.jsx'



export function App() {
  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <main>
          <Switch>
            <Route component={} path='' />
            <Route component={Nots} path='/Nots' />
            <Route component={About} path='/About' />
            <Route component={Home} path='/' />
          </Switch>
        </main>
      </section>
    </Router>
  );
}
