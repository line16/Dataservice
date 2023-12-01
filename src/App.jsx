import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import NoMatch from './views/NoMatch'
import Layout from './layout/Layout'
import LayoutAdmin from './Layout/ADMIN/LayoutAdmin'
import HomeAdmin from './views/ADMIN/HomeAdmin'
import News from './views/News';
import Posts from './views/jsonPlaceholder/posts';
import PostsPhoto from './views/jsonPlaceholder/PostsPhoto';
import Todo from './views/jsonPlaceholder/JsonTODO';
import Star from './Starships/starships';

function App () {

  // ROUTER PROVIDER
  const router = createBrowserRouter(

    createRoutesFromElements(
      <>
        {/* ---------------- PUBLIC ---------------- */ }
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="contact" element={ <Contact /> } />
          {/* JSON PLACEHOLDER */}
          <Route path="posts" element={ <Posts /> } />
          <Route path="photo" element={ <PostsPhoto /> } />
          <Route path="todo" element={ <Todo /> } />
          {/* SWAPI */}
          <Route path="star" element={ <Star /> } />

          <Route path="news" element={ <News /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>

        {/* ---------------- ADMIN ---------------- */ }
        <Route path="/admin" element={ <LayoutAdmin /> }>
          <Route index element={ <HomeAdmin /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>
      </>
    )
  )

  return (
    <section>
      <RouterProvider router={ router } />
      {/* <h1>Forsiden</h1> */ }
    </section>


  )
}

export default App
