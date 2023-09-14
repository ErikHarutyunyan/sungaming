import React from "react";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import PrivateRouter from './PrivateRouter'

import Layout from "../layout/Layout";
import {ABOUT, NEWS, HOME, NOT_FOUND_PAGE, NEWS_BLOG} from "./route-path";
// Pages
import {
  About,
  Blog,
  ErrorPage,
  Home,
  Login,
  NotFoundPage,
  SingleBlog,
} from "../pages";
import PrivateRouter from "./PrivateRouter";

const user = TokenService.getUser() || null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME} element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route
        path={ABOUT}
        element={<About/>}
        handle={{scrollMode: "pathname"}}
      >
        <Route path="contacts" element={<h2>Contact </h2>}/>
        <Route path="team" element={<h2>Team </h2>}/>
      </Route>
      <Route
        path={NEWS}
        element={
          <Blog/>
        }
        errorElement={<ErrorPage/>}
      />
      <Route
        path={NEWS_BLOG}
        element={
          <SingleBlog/>
        }
        errorElement={<ErrorPage/>}
      />
      <Route path={NOT_FOUND_PAGE} element={<NotFoundPage/>}/>
    </Route>
  )
);

export default router;
