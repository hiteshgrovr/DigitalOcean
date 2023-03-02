
import CountUp from 'react-countup';

const subTitle = "START TO SUCCESS";
const title = "Achieve Your Goals With Digital Ocean";


const achievementList = [
    {
        count: '10',
        desc: 'Years of Experience',
    },
    {
        count: '3084',
        desc: 'Worldwide Client',
    },
    {
        count: '330',
        desc: 'Lorem Ipsum',
    },
    {
        count: '2300',
        desc: 'Lorem Ipsum Lorem Ipsum',
    },
]

const achieveList = [
    {
        imgUrl: 'assets/images/achive/01.png',
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Start Demo',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Quotation',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/achive/02.png',
        imgAlt: 'achive thumb ',
        title: 'Lorem Ipsum',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Register For Free',
        siteLink: '#',
    },
]


const Achievement = () => {
    return (
        <div className="achievement-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="counter-part mb-4">
                        <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                            {achievementList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-content">
                                                <h2><span className="count"><CountUp end={val.count} /></span><span>+</span></h2>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="achieve-part">
                        <div className="row g-4 row-cols-1 row-cols-lg-2">
                            {achieveList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="achieve-item">
                                        <div className="achieve-inner">
                                            <div className="achieve-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="achieve-content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
                                                <a href={val.siteLink} className="lab-btn"><span>{val.btnText}</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Achievement;