import {Fragment,useEffect,useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function Home(){

    // 1. 변수 설정 => 변경시 자동 화면에 영향을 미침 => 일반변수:useState()
    const [category1,setCategory1] = useState([])
    const [cateInfo,setCateInfo]= useState({}) //vo,entity
    const [locationDetail,setLocationDetail]=useState({})
    const [natureDetail, setNatureDetail]=useState({})
    // === data:{category:[]}
    useEffect(() => {
        axios.get("http://localhost/food/category1")
            .then(res=>{
                console.log(res.data)
                setCategory1(res.data)
            })

        //푸드
        axios.get("http://localhost/food/category_info_react",{
            params:{
                cno:43
            }
        }).then(res=>{
            console.log(res.data)
            setCateInfo(res.data)
        }).catch(error=>{
            console.log(error.res)
        })
    }, []);


    const html=category1.map((c,key)=>
        <li key={c.cno}>
            <NavLink to={"/food/food_list/"+c.cno}>
                <figure>
                    <img className="radius-10 btmspace-10" src={c.poster} alt=""/>
                    <figcaption><a href="#">{c.title}</a></figcaption>
                </figure>
            </NavLink>
        </li>
    )


    return (
        <Fragment>
            <div className="wrapper row3">
                <div id="slider" className="clear">
                    <div className="flexslider basicslider">
                        <ul className="slides">
                            <li><a href="#"><img className="radius-10" src={"images/demo/slides/view1.jpg"} style={{width:"978px", height:"400px"}}/></a></li>
                            <li><a href="#"><img className="radius-10" src={"images/demo/slides/view2.jpg"} style={{width:"978px", height:"400px"}}/></a></li>
                            <li><a href="#"><img className="radius-10" src={"images/demo/slides/back3.jpg"} style={{width:"978px", height:"400px"}}/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="wrapper row3">
                <main className="container clear">
                    <ul className="nospace group btmspace-80">
                        <li className="one_third first">
                            <article className="service"><i className="icon fa fa-h-square"></i>
                                <h6 className="heading"><a href="#">{cateInfo.title}지역별 맛집</a></h6>
                                <img className="radius-10 btmspace-10" src={cateInfo.poster} alt=""/>
                                <p>{cateInfo.subject}</p>
                                <footer><a href="#">Read More &raquo;</a></footer>
                            </article>
                        </li>
                        <li className="one_third">
                            <article className="service"><i className="icon fa fa-h-square"></i>
                                <h6 className="heading"><a href="#">{cateInfo.title}</a></h6>
                                <p>{cateInfo.subject}</p>
                                <footer><a href="#">Read More &raquo;</a></footer>
                            </article>
                        </li>
                        <li className="one_third">
                            <article className="service"><i className="icon fa fa-hospital-o"></i>
                                <h6 className="heading"><a href="#">ㅁㄴㅇㄹ</a></h6>
                                <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet.</p>
                                <footer><a href="#">Read More &raquo;</a></footer>
                            </article>
                        </li>
                    </ul>
                    <h2 className="sectiontitle">믿고보는 맛집 리스트</h2>
                    <div className="flexslider carousel basiccarousel btmspace-80">
                        <ul className="slides">
                            {html}
                        </ul>
                    </div>
                    <h2 className="sectiontitle">날씨, 뉴스 또는 커뮤니티</h2>
                    <ul className="nospace group">
                        <li className="one_half first">
                            <article><img className="imgl radius-10" src={"images/demo/100x100.gif"} alt=""/>
                                <h6 className="heading"><a href="#">Lorem Ipsum Dolor</a></h6>
                                <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet.</p>
                            </article>
                        </li>
                        <li className="one_half">
                            <article><img className="imgl radius-10" src={"images/demo/100x100.gif"} alt=""/>
                                <h6 className="heading"><a href="#">Lorem Ipsum Dolor</a></h6>
                                <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet.</p>
                            </article>
                        </li>
                        <li className="one_half first">
                            <article><img className="imgl radius-10" src={"images/demo/100x100.gif"} alt=""/>
                                <h6 className="heading"><a href="#">Lorem Ipsum Dolor</a></h6>
                                <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet.</p>
                            </article>
                        </li>
                        <li className="one_half">
                            <article><img className="imgl radius-10" src={"images/demo/100x100.gif"} alt=""/>
                                <h6 className="heading"><a href="#">Lorem Ipsum Dolor</a></h6>
                                <p>Aenean semper elementum tellus, ut placerat leo. Quisque vehicula, urna sit amet.</p>
                            </article>
                        </li>

                    </ul>
                    <div className="clear"></div>
                </main>
            </div>
        </Fragment>
    )

}
export default Home