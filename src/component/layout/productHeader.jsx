
import Rating from "../sidebar/rating";

const title = "Easy Convert";
const desc = "Easyconvert is a server-based PDF Converter that you can run to convert reflowbale and fixed formats";
// const author = "Rajib Raj";
// const reviewCount = "03 reviews";
const videoLink = "https://www.youtube-nocookie.com/embed/jP649ZHA8Tg";


const categoryList = [
    {
        link: '#',
        text: 'Try Free Demo',
        className: 'course-cate',
    }
    // {
    //     link: '#',
    //     text: '30% Off',
    //     className: 'course-offer',
    // },
]


const ProductHeader = () => {
    return (
        <div className="pageheader-section style-2 position-relative" style={{zIndex:1}}>
            <div className="container">
                <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
                    <div className="col-lg-7 col-12">
                        <div className="pageheader-thumb">
                            <img src="assets/images/pageheader/02.jpg" alt="rajibraj91" className="w-100" />
                            <a href={videoLink} className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="pageheader-content">
                            
                            <h2 className="phs-title">{title}</h2>
                            <p className="phs-desc">{desc}</p>
                            <div className="course-category">
                                {categoryList.map((val, i) => (
                                    <a href={val.link} className={val.className} key={i}>{val.text}</a>
                                ))}
                            </div>
                            {/* <div className="phs-thumb">
                                <img src="assets/images/pageheader/03.jpg" alt="rajibraj91" />
                                <span>{author}</span>
                                <div className="course-reiew">
                                    <Rating />
                                    <span className="ratting-count">{reviewCount}</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductHeader;