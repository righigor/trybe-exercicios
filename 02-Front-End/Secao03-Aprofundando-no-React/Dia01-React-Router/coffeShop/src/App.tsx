// import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/index'
import CoffeeList from './pages/coffeeList'
import Coffee from './pages/coffee';
import NotFound from './pages/notFound';
import Layout from './components/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> }/>
          <Route path='/coffees' element={ <CoffeeList /> } />
          <Route path='/coffees/:coffee' element={ <Coffee />} />
        </Route>
        <Route path='/*' element={ <NotFound /> }/>
      </Routes>
    </>

  )
}

export default App
