import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Loading from './components/Loading';

const Nav = lazy(() => import("./components/Nav"))
const Home = lazy(() => import("./pages/Home"))
const Cryptos = lazy(() => import("./pages/Cryptos"))
const News = lazy(() => import("./pages/News"))
const SingleCrypto = lazy(() => import("./pages/SingleCrypto"))
const Error = lazy(() => import("./pages/Error"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Wrapper>
          <div className='nav'>
            <Nav />
          </div>
          <div className="page">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cryptonews">
                <News />
              </Route>
              <Route path="/cryptos">
                <Cryptos />
              </Route>
              <Route path="/crypto/:id">
                <SingleCrypto />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </div>
        </Wrapper>
      </Router>
    </Suspense>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh; 
  .page{
    background-color: #f0f3f5;
    padding: 1rem;
    overflow-y:scroll;
    width: 100%;
  }
  .nav{
    display: flex;
  }

  @media (max-width:800px){
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    max-width: 100vw;
    .page{
      width: inherit;
    }
  }

`

export default App;
