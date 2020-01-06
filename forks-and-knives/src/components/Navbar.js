import React, {Fragment} from 'react';

function Navbar() {
  return (
    <Fragment>
        <header className="bg-dark-green fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked">
                <a className="link dim white dib mr3" href="/" title="Home">Menu</a>
               
            </nav>
        </header>
    </Fragment>
  );
}

export default Navbar;
