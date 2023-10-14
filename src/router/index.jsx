import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import PrivateRouter from './PrivateRouter'
import Layout from "../layout";
import {
  ABOUT,
  CAREERS,
  CAREERS_SINGLE,
  CONTACT,
  GAMES,
  GAMES_SINGLE,
  HOME,
  NEWS,
  NEWS_BLOG,
  NOT_FOUND_PAGE,
  PRIVACY,
  SERVICES,
} from "./route-path";
// Pages
import {
  About,
  Careers,
  CareersSingle,
  Contact,
  Games,
  GameSingle,
  Home,
  News,
  NewsSingle,
  NotFoundPage,
  PrivacyPolicy,
  Services,
} from "../pages";
import { Suspense } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={GAMES} element={<Games />} />
        <Route path={GAMES_SINGLE} element={<GameSingle />} />
        <Route
          path={ABOUT}
          element={<About />}
          // handle={{ scrollMode: "pathname" }}
        ></Route>
        <Route path={CONTACT} element={<Contact />} />
        <Route path={SERVICES} element={<Services />} />
        <Route path={NEWS} element={<News />} />
        <Route path={NEWS_BLOG} element={<NewsSingle />} />
        <Route path={PRIVACY} element={<PrivacyPolicy />} />
        <Route path={CAREERS} element={<Careers />} />
        <Route path={CAREERS_SINGLE} element={<CareersSingle />} />
      </Route>
      <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
    </>
  )
);

export default router;
