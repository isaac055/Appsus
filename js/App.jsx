<<<<<<< HEAD
import { Home } from './pages/app-home.jsx'
import { About } from './pages/app-about.jsx'
import { Nots } from './pages/app-nots.jsx'
import { Mail } from './pages/app-mail.jsx'
=======
import {Home} from './pages/app-home.jsx'
import {About} from './pages/app-about.jsx'
import {Nots} from './pages/Nots-App/app-nots.jsx'
import {Eamil} from './pages/Email-App/app-email.jsx'
>>>>>>> f8dcfe79079befd550038bd3b104e92994d6d474

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <section className='app'>
        {/* <AppHeader /> */}
        <main>
          <Switch>
<<<<<<< HEAD
=======
            <Route component={Eamil} path='/Email' />
>>>>>>> f8dcfe79079befd550038bd3b104e92994d6d474
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
