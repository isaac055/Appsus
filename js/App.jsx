import { Home } from './pages/app-home.jsx'
import { About } from './pages/app-about.jsx'
import { Nots } from './pages/app-nots.jsx'
import { Mail } from './pages/app-mail.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'


const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <main>
          <Switch>
            <Route component={Nots} path='/Nots' />
            <Route component={Mail} path='/Mail' />
            <Route component={About} path='/About' />
            <Route component={Home} path='/' />
          </Switch>
        </main>
      </section>
    </Router>
  );
}
