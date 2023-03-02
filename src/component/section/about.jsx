
const subTitle = "About Digital Ocean";
const title = "How we are Different?";
const desc = "Generally there are many conversion solutions available for free online. However, they do not offer the content fidelity and quality. There are multiple software also available online but if your requirement is to convert a few pages buying the software doesn’t seem to be a very good option.";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Pay As You Go',
        desc: 'There is no minimum amount that needs to be paid. We have a per page/item rate card to use our products and it is completely up to you if you want to convert 50 pages or 500000 pages you only need to pay for per item conversion.',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'End to End EBook Designing',
        desc: 'providing end to end eBook designing, conversion and production services to authors, self-publishers and businesses worldwide. From eBook designing to production, we work closely with our customers through every stage of the process to ensure that the premium quality products are delivered to them, without compromise',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Academic and Professional EBooks Designing',
        desc: 'Our wide range of services include academic and professional eBooks designing, university and library eBooks designing, government publishing, banking and finance publishing, digital magazine publishing, business-to-business publishing, and much more. In addition to eBook designing and publishing, Digital Ocean Publishing Solutions also offers web design and development, and digital marketing services to businesses at the most competitive prices.',
    },
]


const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center flex-row-reverse">
                    <div className="col">
                        <div className="about-right pt-sm-5 mt-5">
                            <div className="section-header text-center">
                                <span className="subtitle">{subTitle}</span>
                                <h2 className="title">{title}</h2>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
                    <div className="col">
                        {/* <div className="about-right padding-tb"> */}
                        <div className="about-right pb-5 mb-5">
                            {/* <div className="section-header">
                                <span className="subtitle">{subTitle}</span>
                                <h2 className="title">{title}</h2>
                                <p>{desc}</p>
                            </div> */}
                            <div className="section-wrapper">
                                <ul className="lab-ul">
                                    {aboutList.map((val, i) => (
                                        <li key={i}>
                                            <div className="sr-left">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="sr-right">
                                                <h5>{val.title}</h5>
                                                <p>{val.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about-left">
                            <div className="about-thumb">
                                <img src="assets/images/about/01.png" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;