import {NavLink} from "react-router-dom";

function Footer(){
    return(
        <div className="wrapper row4">
            <footer id="footer" className="clear" style={{display:"flex", justifyContent:"space-around"}}>
                <div className="one_quarter first">
                    <h6 className="title">최근방문 쿠키</h6>
                    <address className="btmspace-15">
                        Company Name<br/>
                        Street Name &amp; Number<br/>
                        Town<br/>
                        Postcode/Zip
                    </address>
                    <ul className="nospace">
                        <li className="btmspace-10"><span className="fa fa-phone"></span> +00 (123) 456 7890</li>
                        <li><span className="fa fa-envelope-o"></span> info@domain.com</li>
                    </ul>
                </div>
                <div className="one_quarter">
                    <h6 className="title">오늘의 맛집 TOP6</h6>
                    <ul className="nospace linklist">
                        <li><a href="#">Home Page</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
export default Footer;