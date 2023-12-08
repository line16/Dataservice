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
import Star from './views/Starships/starships';
import PostsAdmin from './views/jsonPlaceholder/PostsAdmin';
import PostEdit from './views/jsonPlaceholder/PostEdit';
import PostsCreate from './views/jsonPlaceholder/PostsCreate';
import TopHeadlines from './views/NewsApi/TopHeadlines';
import NewsApi from "./views/NewsApi/Everything";
import Hobbies from './views/RapidApi/hobbies';


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
          <Route path="postAdmin" element={ <PostsAdmin /> } />
          <Route path="postedit/:postID" element={ <PostEdit /> } />
          <Route path="PostsCreate" element={ <PostsCreate /> } />

          {/* SWAPI */}
          <Route path="star" element={ <Star /> } />
          {/* NEWS API */}
          <Route path="NewsApi" element={ <NewsApi /> } />
          <Route path="NewsHeadlines" element={ <TopHeadlines /> } />
          {/* RAPIDAPI */}
          <Route path="hobbies" element={ <Hobbies /> } />
          
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
