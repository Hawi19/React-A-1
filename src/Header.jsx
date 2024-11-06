
import mypic from './assets/header.png'
function Header(){
    return(
        <>
          
                <img src={mypic} alt="my pic" />
                <header>
            <h3>Company Name</h3>
            <nav>
                <ul>
                    <li><a href="">Features</a></li>
                    <li><a href="">Enterprise</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Home</a></li>
                </ul>
            </nav>
          
        </header>
      <hr className="first"></hr>
        <p>Features</p>
        </>
    
       
    );
}
export default Header