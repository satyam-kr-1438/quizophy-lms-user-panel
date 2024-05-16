import React, { Fragment } from "react";
import Link from "next/link";
import TopNavigation from "components/layouts/TopNavigation";
import PageProgress from "components/common/PageProgress";

const PageNotFound = () => {
  return (
    <Fragment>
            <PageProgress/>
            <TopNavigation text="" animation="fade-left"/>
            <div className="container" data-aos="fade-left">
                <div className="row" style={{display:"flex",justifyContent:"center",alignContent:"center",height:"100vh",width:"100%",margin:"auto"}}>
                    <div className="col-12">
                        <div style={{margin:"auto",textAlign:"center"}}>
                            <img src="/img/404.svg" style={{width:"300px"}} alt="Not Found"/>
                        </div>
                        <div style={{textAlign:"center",margin:"20px auto"}}>
                            <h6 style={{fontSize:"25px",fontWeight:"700"}}>
                                Page Not Found
                            </h6>
                            <p style={{fontSize:"13px",fontWeight:"500"}}>The page you are looking for might have been removed had its name
                changed or is temporarily unavailable.</p>
                        </div>
                        <div className="mx-auto text-center">
                        <Link
                            href="/home"
                            className="btn btn-dark mx-auto text-center"
                            >
                            Go to homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  );
};

export default PageNotFound;