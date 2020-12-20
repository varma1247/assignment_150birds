import Settings from "../components/Settings";
import loadingImage from "../assets/under_construction_PNG11.png";
import { Route } from "react-router-dom";
import styled from "styled-components";
const H4 = styled.h4`
  font-weight: bold;
`;
const Img = styled.img`
  margin-top: 100px;
  width: 400px;
  height: 400px;
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
            <Img src={loadingImage} alt="Loading"></Img>
            <H4>Go To Settings!!!</H4>
          </>
        )}
      />
      <Route
        path="/service"
        exact
        render={(props) => (
          <>
            <Img src={loadingImage} alt="Loading"></Img>
            <H4>Go To Settings!!!</H4>
          </>
        )}
      />
      <Route
        path="/dashboard"
        exact
        render={(props) => (
          <>
            <Img src={loadingImage} alt="Loading"></Img>
            <H4>Go To Settings!!!</H4>
          </>
        )}
      />
      <Route
        path="/conference"
        exact
        render={(props) => (
          <>
            <Img src={loadingImage} alt="Loading"></Img>
            <H4>Go To Settings!!!</H4>
          </>
        )}
      />
      <Route
        path="/profile"
        exact
        render={(props) => (
          <>
            <Img src={loadingImage} alt="Loading"></Img>
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
