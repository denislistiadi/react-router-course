import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";
const Home = React.lazy(() => import("./Home"));
const Players = React.lazy(() => import("./Players"));
const TeamPage = React.lazy(() => import("./TeamPage"));
const Teams = React.lazy(() => import("./Teams"));
const Player = React.lazy(() => import("./Player"));
const Team = React.lazy(() => import("./Team"));
const Articles = React.lazy(() => import("./Articles"));
const Article = React.lazy(() => import("./Article"));

function Routes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/players",
      element: <Players />,
      children: [
        { path: ":playerId", element: <Player /> },
        {
          path: "",
          element: <h2 className="sidebar-instruction">Select a Player</h2>,
        },
      ],
    },
    {
      path: "/teams",
      element: <Teams />,
      children: [
        { path: ":teamId", element: <Team /> },
        {
          path: "",
          element: <h2 className="sidebar-instruction">Select a Team</h2>,
        },
      ],
    },
    {
      path: "/:teamId",
      element: <TeamPage />,
    },
    {
      path: "/:teamId/articles",
      element: <Articles />,
      children: [
        { path: ":articleId", element: <Article /> },
        {
          path: "",
          element: <h2 className="sidebar-instruction">Select an Article</h2>,
        },
      ],
    },
  ]);
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <React.Suspense fallback={<Loading />}>
          <Routes />
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}
