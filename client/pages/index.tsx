import React from "react";
import Router from "next/router";

import { DISALLOW_ANONYMOUS_LINKS } from "../consts";
import LinksTable from "../components/LinksTable";
import AppWrapper from "../components/AppWrapper";
import Shortener from "../components/Shortener";
import { useStoreState } from "../store";

const Homepage = () => {
  const isAuthenticated = useStoreState((s) => s.auth.isAuthenticated);

  if (
    !isAuthenticated &&
    DISALLOW_ANONYMOUS_LINKS &&
    typeof window !== "undefined"
  ) {
    Router.push("/login");
    return null;
  }

  return (
    <AppWrapper>
      <Shortener />
      {isAuthenticated && <LinksTable />}
    </AppWrapper>
  );
};

export default Homepage;
