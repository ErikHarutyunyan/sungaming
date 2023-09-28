import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import PrivateRouter from './PrivateRouter'

import Layout from "../layout";
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
  INTEGRATION,
  CAREERS_SINGLE,
} from "./route-path";
// Pages
import {
  Home,
  About,
  News,
  Careers,
  CareersSingle,
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
    <Route path={HOME} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={GAMES} element={<Games />} />
      <Route
        path={ABOUT}
        element={<About />}
        // handle={{ scrollMode: "pathname" }}
      ></Route>
      <Route path={CONTACT} element={<Contact />} />
      <Route path={SERVICES} element={<Services />} />
      <Route path={NEWS} element={<News />} />
      <Route path={NEWS_BLOG} element={<SingleNews />} />
      <Route path={PRIVACY} element={<PrivacyPolicy />} />
      <Route path={CAREERS} element={<Careers />} />
      <Route path={CAREERS_SINGLE} element={<CareersSingle />} />
      <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
