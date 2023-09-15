import React from "react";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import PrivateRouter from './PrivateRouter'

import Layout from "../layout/Layout";
import {
  ABOUT,
  NEWS,
  HOME,
  NOT_FOUND_PAGE,
  NEWS_BLOG,
  TERMS,
  GAMES,
  GAMES_SINGLE,
  CAREERS,
  CONTACT,
  SERVICES,
  PRIVACY,
  INTEGRATION
} from "./route-path";
// Pages
import {
  Home,
  About,
  News,
  Careers,
  Contact,
  Games,
  Integration,
  PrivacyPolicy,
  Services,
  SingleGame,
  SingleNews,
  TermsConditions,
  NotFoundPage,
} from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME} element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route
        path={ABOUT}
        element={<About/>}
        handle={{scrollMode: "pathname"}}
      >
        <Route path={CONTACT} element={<Contact>Contact </Contact>}/>
        <Route path="team" element={<h2>Team </h2>}/>
      </Route>
      <Route
        path={NEWS}
        element={
          <News/>
        }
      />
      <Route
        path={NEWS_BLOG}
        element={
          <SingleNews/>
        }
      />
      <Route path={NOT_FOUND_PAGE} element={<NotFoundPage/>}/>
    </Route>
  )
);

export default router;
