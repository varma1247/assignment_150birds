import Settings from "../components/Settings";
import loadingImage from "../assets/under_construction_PNG11.png";
import { Route } from "react-router-dom";
import styled from "styled-components";
const H4 = styled.h4`
  font-weight: bold;
`;
const ContentWrapper = styled.div`
  background-color: #ffc83f;
  flex-grow: 1;
  text-align: center;
`;
const NavbarRoutes = () => {
  return (
    <ContentWrapper>
      <Route
        path="/"
        exact
        render={(props) => (
          <>
            <img src={loadingImage} alt="Loading"></img>
            <H4>Go To Settings!!!</H4>
          </>
        )}
      />
      <Route
        path="/service"
        exact
        render={(props) => (
          <>
            <img src={loadingImage} alt="Loading"></img>
            <H4>Go To Settings!!!</H4>
          </>
        )}
      />
      <Route
        path="/dashboard"
        exact
        render={(props) => (
          <>
            <img src={loadingImage} alt="Loading"></img>
            <H4>Go To Settings!!!</H4>
          </>
        )}
      />
      <Route
        path="/conference"
        exact
        render={(props) => (
          <>
            <img src={loadingImage} alt="Loading"></img>
            <H4>Go To Settings!!!</H4>
          </>
        )}
      />
      <Route
        path="/profile"
        exact
        render={(props) => (
          <>
            <img src={loadingImage} alt="Loading"></img>
            <H4>Go To Settings!!!</H4>
          </>
        )}
      />
      <Route
        path="/settings"
        render={(props) => <Settings {...props}>Settings</Settings>}
      />
    </ContentWrapper>
  );
};

export default NavbarRoutes;
