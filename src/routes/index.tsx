import { Route, Routes as RoutesRRD } from "react-router-dom";

import Home from "../pages/Home";
import Commits from "../pages/Commits";

const Routes = (): JSX.Element => (
  <RoutesRRD>
    <Route index element={<Home />} />
    <Route path="/:username" element={<Home />} />
    <Route path="/:username/:reponame/commits" element={<Commits />} />
  </RoutesRRD>
);

export default Routes;
