import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

function NavigationC({}) {
  const [isOpen, setIsOpen] = useState(false);
  const args = {
    expand: true,
    color: "info",
    light: true,
    dark: true,
  };
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className="mb-5">
        <NavbarBrand>Foodster</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/store">Store</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/orders">Orders</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/cart">Cart</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationC;

{
  /* <UncontrolledDropdown nav inNavbar>
  <DropdownToggle nav caret>
    Options
  </DropdownToggle>
  <DropdownMenu right>
    <DropdownItem>Option 1</DropdownItem>
    <DropdownItem>Option 2</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Reset</DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown>; */
}
