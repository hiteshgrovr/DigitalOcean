

const subTitle = "Key Features";
const title = "High Quality Conversion of PDF files to EPub";

const featureLeftList = [
    {
        iconName: 'icofont-credit-card',
        title: 'Optimised Content',
        desc: 'Easyconvert intelligently processes PDF files employing clever techniques to reduce file size and optimize for rendering performance in the browser',
    },
    {
        iconName: 'icofont-light-bulb',
        title: 'Content Structure',
        desc: 'Easyconvert provides automated structured content from unstructured PDF documents. This feature is currently only for reflowable outputs.',
    },
    {
        iconName: 'icofont-graduate',
        title: 'Self Learning',
        desc: 'Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.',
    },
]

const featureRightList = [
    {
        iconName: 'icofont-paper-plane',
        title: 'Knowledge',
        desc: 'Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.',
    },
    {
        iconName: 'icofont-site-map',
        title: 'Self Development',
        desc: 'Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.',
    },
    {
        iconName: 'icofont-users-alt-3',
        title: 'Community Building',
        desc: 'Proact enhance prospective resource for next conver dramaatical myocardin high-quality vortals.',
    },
]

const Product1Feature = () => {
    return (
        <section className="feature-section style-2 padding-tb pb-0">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle yellow-color">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center align-items-center">
                        <div className="col-lg-4 col-sm-6 col-12 order-lg-0">
                            <div className="left text-lg-end">
                                {featureLeftList.map((val, i) => (
                                    <div className="feature-item" key={i}>
                                        <div className="feature-inner flex-lg-row-reverse">
                                            <div className="feature-icon">
                                                <i className={val.iconName}></i>
                                            </div>
                                            <div className="feature-content">
                                                <h5>{val.title}</h5>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 order-lg-2">
                            <div className="right">
                                {featureRightList.map((val, i) => (
                                    <div className="feature-item" key={i}>
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <i className={val.iconName}></i>
                                            </div>
                                            <div className="feature-content">
                                                <h5>{val.title}</h5>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 order-lg-1">
                            <div className="feature-thumb">
                                <div className="abs-thumb">
                                    <img src="assets/images/feature/10.png" alt="education" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Product1Feature;