import React from "react";
import { Route } from "react-router-dom";
/** My components **/
import HomeContainer from "../containers/HomeContainer";
import MagicTownsContainer from "../containers/magicTows-container";
import TuristAttractionsContainer from "../containers/TuristAttraction";

const _CONTAINERS = [
  {
    cod: "TUR-INO",
    href: "home",
    container: HomeContainer
  },
  {
    cod: "TUR-PBS",
    href: "magictowns",
    container: MagicTownsContainer
  },
  {
    cod: "TUR-HRS",
    href: "hoteles-restaurantes",
    container: null
  },
  {
    cod: "TUR-MYL",
    href: "mitos-leyendas",
    container: null
  },
  {
    cod: "TUR-CNS",
    href: "nosotros",
    container: null
  },
  {
    cod: "TUR-ZLA",
    href: "atraciones",
    container: TuristAttractionsContainer
  }];
const findRoute = page => _CONTAINERS.find(container => page === container.cod);

const Root = ({ link }) => {
  try {
    let queryResult = findRoute(link);
    if (queryResult !== null) {
      const { cod, container } = queryResult;
      return <Route path={`/${cod}`}  component={container} />;
    }
  } catch (error) {
    console.log("Error route => ", error);
    return <Route path={"/home"} component={HomeContainer}></Route>
  }
};
export default Root;
