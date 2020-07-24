import React from "react";
import { links } from "./root.helper.js";
import { Link } from "@reach/router";
import {
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';

export default function Root(props) {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActiveItem, setIsActiveItem] = useState(0);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const onSelect = result => {
    setIsActiveItem(result.itemId);
  };

  const logoProps = {
    href: 'https://patternfly.org',
    onClick: () => console.log('clicked logo'),
    target: '_blank'
  };

  const Header = (
    <PageHeader
      logo="Logo"
      logoProps={logoProps}
      headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={onNavToggle}
    />
  );
  
  const Sidebar = <PageSidebar nav={PageNav} isNavOpen={isNavOpen} />;

  const PageNav = (
    <Nav onSelect={onSelect} aria-label="Nav">
      {links.map((link, i) => {
        return (
          <NavItem itemId={i} isActive={isActiveItem === i}>
            <Link key={link.href} to={link.href}>
              {link.name}
            </Link>
          </NavItem>
        );
      })}
    </Nav>
  );

  return (
    <Page header={Header} sidebar={Sidebar}>
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
    </Page>
  );
}
