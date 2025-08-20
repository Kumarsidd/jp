import FilterTopBox from "./FilterTopBox";

const Index = () => {
    return (
        <>

            <section className="ls-section">
                <div className="auto-container">
                    <div className="row">
                       
                        <div className="content-column col-lg-8 col-md-12 col-sm-12">
                            <div className="ls-outer">
                                <FilterTopBox />
                                {/* <!-- ls Switcher --> */}
                            </div>
                        </div>
                        {/* <!-- End Content Column --> */}
                    </div>
                    {/* End row */}
                </div>
                {/* End container */}
            </section>
        </>
    );
};

export default Index;
