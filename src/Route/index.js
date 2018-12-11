import React from "react";
import { Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import MagicTownsContainer from "../containers/magicTows-container";
import TuristAttractionsContainer from "../containers/TuristAttraction";

const enlaces = {
  "TUR-INO": {
    href: "home",
    container: <HomeContainer />
  },
  "TUR-PBS": {
    href: "magictowns",
    container: <MagicTownsContainer />
  },
  "TUR-HRS": {
    href: "hoteles-restaurantes",
    container: null
  },
  "TUR-MYL": {
    href: "mitos-leyendas",
    container: null
  },
  "TUR-CNS": {
    href: "nosotros",
    container: null
  },
  "TUR-ZLA": {
    href: "atraciones",
    container: <TuristAttractionsContainer />
  }
};

const findRoute = page => {
  return enlaces.hasOwnProperty(page) ? enlaces[page] : null;
};

const Root = ({ link }) => {
  try {
    let queryResult = findRoute(link);
    if (queryResult !== null) {
      const { href, container } = queryResult;
      return <Route path={`/${href}`} component={container} />;
    }
  } catch (error) {
    console.log("Error => ", error);
  }
};

export default Root;
