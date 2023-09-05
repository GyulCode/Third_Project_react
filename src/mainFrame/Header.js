import {Fragment,useEffect,useState} from "react";
import {NavLink} from "react-router-dom";

function Header(){
    return(
        <Fragment>
        <div className="wrapper row1">
            <header id="header" className="clear">
                <div id="logo" className="fl_left">
                    <h1><a href="/">함께가요 서울 투어!</a></h1>
                </div>
                <div className="fl_right">
                    <ul className="inline">
                        <li>서울 맛집</li>
                        <li><i className="fa fa-envelope-o"></i> 서울 여행</li>
                    </ul>
                </div>
            </header>
        </div>
        <div className="wrapper row2">
            <nav id="mainav" className="clear">
                <ul className="clear">
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="index.html">맛집 투어</a></li>
                    <li><a className="drop" href="#">관광지 찾기</a>
                        <ul>
                            <li><a href="pages/gallery.html">서울 관광지</a></li>
                            <li><a href="pages/full-width.html">자연 명소</a></li>
                            <li><a href="pages/sidebar-left.html">쇼핑</a></li>
                        </ul>
                    </li>
                    <li><a href="#">커뮤니티</a></li>
                    <li><a href="#">관광지 뉴스 검색</a></li>
                    <li><a className="drop" href="#">오늘의 날씨</a>
                        <ul>
                            <li><a href="#">Level 2</a></li>
                            <li><a className="drop" href="#">Level 2 + Drop</a>
                                <ul>
                                    <li><a href="#">Level 3</a></li>
                                    <li><a href="#">Level 3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
        </Fragment>
    )
}
export default Header;