import React from 'react';
const Header = ({title}) => {
     return (
          <header className="header py-4" id="header">
               <div className="container">
                    <div className="row">
                         <div className="col text-center">
                              <h1 className="display-4">{title}</h1>
                         </div>
                    </div>
               </div>
          </header>
     );
}
 
export default Header;