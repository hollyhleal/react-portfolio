import "../styles/Header.css";
import { Header, Segment } from "semantic-ui-react";

function siteHeader() {
  return (
    <Segment clearing>
      <Header className="header">
        <h1>Holly Leal</h1>
      </Header>
    </Segment>
  );
}

export default siteHeader;
