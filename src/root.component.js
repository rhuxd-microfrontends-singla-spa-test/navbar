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

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
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
      onNavToggle={this.onNavToggle}
    />
  );
  
  const Sidebar = <PageSidebar nav={PageNav} isNavOpen={isNavOpen} />;

  const PageNav = (
    <Nav onSelect={this.onNavSelect} aria-label="Nav">
      {links.map((link) => {
        return (
          <NavItem itemId={} key={link.href} to={link.href}>
            {link.name}
          </NavItem>
        );
      })}
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0}>
          Apicurio Studio
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1}>
          Syndesis
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2}>
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3}>
          Network Services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4}>
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  return (
    <Page header={Header} sidebar={Sidebar}>
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>

    <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        {links.map((link) => {
          return (
            <Link key={link.href} className="p-6" to={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <a
          href="https://github.com/react-microfrontends"
          className="externalLink"
        >
          Github project
        </a>
      </div>
    </div>
  );
}
