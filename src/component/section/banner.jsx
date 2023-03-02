


import LottiePlayer from "../section/LottiePlayer";
const subTitle = "Online education";
const title = <h2 className="title"><span className="d-lg-block">We Undertand, </span> Create <span className="d-lg-block">and Design Process</span></h2>;
const desc = "Digital Ocean Publishing Solutions aim is to provide D.I.Y solutions to Individuals, small, medium and large organizations to convert their PDF files into ePub format in no time. We offer many AI-based products and services which make the life of people working in content industries very easy."
// let BannerVideo="../../assets/images/lottie/banner1.json";
let BannerVideo2 = "https://assets8.lottiefiles.com/private_files/lf30_u4rzoljr.json";
// let BannerVideo3="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json";


// const catagoryList = [
//     {
//         name: 'Figma',
//         link: '#',
//     },
//     {
//         name: 'Adobe XD',
//         link: '#',
//     },
//     {
//         name: 'illustration',
//         link: '#',
//     },
//     {
//         name: 'Photoshop',
//         link: '#',
//     },
// ]


const shapeList = [
    {
        name: '16M Students Happy',
        link: '#',
        className: 'ccl-shape shape-1',
    },
    {
        name: '130K+ Total Courses',
        link: '#',
        className: 'ccl-shape shape-2',
    },
    {
        name: '89% Successful Students',
        link: '#',
        className: 'ccl-shape shape-3',
    },
    {
        name: '23M+ Learners',
        link: '#',
        className: 'ccl-shape shape-4',
    },
    {
        name: '36+ Languages',
        link: '#',
        className: 'ccl-shape shape-5',
    },
]


const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-10">
                            <div className="banner-content">
                                <h6 className="subtitle text-uppercase fw-medium">{subTitle}</h6>
                                {title}
                                <p className="desc">{desc}<br /><br /></p>
                                {/* <form action="/">
                                    <div className="banner-icon">
                                        <i className="icofont-search"></i>
                                    </div>
                                    <input type="text" placeholder="Keywords of your course" />
                                    <button type="submit">Search Course</button>
                                </form>
                                <div className="banner-catagory d-flex flex-wrap">
                                    <p>Most Popular : </p>
                                    <ul className="lab-ul d-flex flex-wrap">
                                        {catagoryList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.name}</a></li>
                                        ))}
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6">
                            <div className="banner-thumb" style={{ marginLeft: 280 }}>

                                {/* lottie player */}
                                <LottiePlayer link={`${BannerVideo2}`} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-shapes"></div>
            <div className="cbs-content-list d-none">
                <ul className="lab-ul">
                    {shapeList.map((val, i) => (
                        <li className={val.className} key={i}><a href={val.link}>{val.name}</a></li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Banner;