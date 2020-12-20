import React from "react";
import { Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import allSettings from "../data/settingsData";
import Transactions from "./Transactions";
import styled from "styled-components";
// const Topic = ({ match }) => (
//   <div>
//     <h2>Current Route</h2>
//     <div>{`${match.params.topicId}`}</div>
//   </div>
// );
const Sidebar = styled(Col)`
  background-color: white;
  height: 80%;
  overflow-y: auto;
  border-radius: 20px;
  padding: 20px;
  padding-right: 0px;
`;
const SettingType = styled.h5`
  color: #5a85ff;
  font-weight: bold;
`;
const Setting = styled.h6`
  font-weight: 600;
`;

const Settings = ({ match }) => {
  return (
    <Container fluid style={{textAlign:"left"}}>
      <Row>
        <Sidebar xs={10} sm={6} md={2} className="mt-5 ml-4">
          {allSettings.map((settingType, index) => (
            <Fragment key={index}>
              <SettingType className="mb-4">{settingType.heading}</SettingType>
              {settingType.settings.map((setting, i) => (
                <Setting className="ml-3 mb-3" key={i}>
                  <NavLink
                    to={`${match.url}/${setting.link}`}
                    exact
                    activeStyle={{ color: "#ffc83f" }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {setting.title}
                  </NavLink>
                </Setting>
              ))}
            </Fragment>
          ))}
        </Sidebar>
        <Transactions />
      </Row>
    </Container>
  );
};

export default Settings;
