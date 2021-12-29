import { Home } from './js/pages/app-home.jsx'
import { About } from './js/pages/app-about.jsx'
import { Notes } from './js/apps/keep/pages/note-app.jsx'
import { MailApp } from './js/apps/email/pages/email-app.jsx'
import { AppHeader } from './js/cmps/app-header.jsx'


const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <main>
          <Switch>
            <Route component={Notes} path='/Nots' />
            <Route component={MailApp} path='/Mail' />
            <Route component={About} path='/About' />
            <Route component={Home} path='/' />
          </Switch>
        </main>
      </section>
    </Router>
  );
}
