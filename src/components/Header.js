import "../styles/Header.css";
import { Header, Segment } from "semantic-ui-react";

const siteHeader = () => (
  <Segment clearing>
    <Header className="header" floated="left">
      <h1>Holly Leal</h1>
    </Header>
  </Segment>
);

export default siteHeader;
