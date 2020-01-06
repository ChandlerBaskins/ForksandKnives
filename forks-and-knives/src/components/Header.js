import React, {Fragment} from 'react';
import './component-style/Header.css'


function Header(props) {
    return(
        <Fragment>
           <div className=" h5 flex items-center justify-center pa4 bg-dark-green">
                <input  className=" searchbar pa2 br4  "type="text" placeholder="Search Recipes..."></input>
                <label>
                    <span className="ml2" role="img">&#x1F50D;</span>
                </label>
           </div>
        </Fragment>
          
        
    );
}


export default Header;