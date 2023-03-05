import "./Layout.css";
import Container from "react-bootstrap/Container";

function Layout({ children }) {
  return (
    <Container as="main" fluid="sm" className="layout">
      {children}
    </Container>
  );
}

export default Layout;
