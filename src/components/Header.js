import LogoName from './LogoName.js';
import Nav from './Nav.js';
import OrderNow from './OrderNow.js';

function Header(){
return(
<div className="row"> 
    <div className=" col-4"><Nav></Nav></div>
    <div className=" col-4"><LogoName></LogoName></div>
    <div className="col-4"><OrderNow></OrderNow></div>
   
</div>)
}

export default Header;