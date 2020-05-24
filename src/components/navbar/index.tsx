import { icons } from '@assets/index';
import './style.scss';
import { NavbarProps } from '@/types/components/navbar';

function Navbar(props: NavbarProps) {
  const { logoSmall } = props;
  const { Logo, LogoSmall } = icons;

  return (
    <nav className="navbar navbar-shadow" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand align-items-center">
          <a className="navbar-item" href="https://bulma.io"></a>
          {logoSmall ? <LogoSmall /> : <Logo />}
          <a
            role="button"
            href="https://bulma.io"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            {/* <div className="navbar-item">
              <a href="https://bulma.io" className="h6 has-text-primary">
                About me
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
