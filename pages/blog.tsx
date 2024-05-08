import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import BlogTemplate from 'components/common/BlogTemplate';
import BlogSidebar from 'components/reuseable/BlogSidebar';
import Footer from 'components/blocks/footer/Footer';
import AuthNavbar from 'components/blocks/navbar/AuthNavbar';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import { getBlog, getBlogByIdData, getBlogCategory } from 'components/request/request';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
let blogCate:any[]=[]	

const Blog = () => {
  const [category,setcategory]=useState<any>("View All")
	const [search,setSearch]=useState<any>("")
	const [blogCount,setBlogCount]=useState<any>([])
  const [loading,setLoading]=useState(true)
  const [latestBlog,setlatestBlog]=useState<any[]>()
  const getBlogById=async ()=>{
    try{
      const {data}=await getBlogByIdData(undefined)
      if(data?.success){
        setlatestBlog(data?.latestBlogData)
      }else{
         setlatestBlog([])
      }
    }catch(err){
        setTimeout(()=>{
          setLoading(false)
        },200)
    }
   
  }
  useEffect(()=>{
      getBlogById()
  },[])
  const getAllBlogCategory=async ()=>{
     try{
         const {data} =  await getBlogCategory()
      //  setBlogCategory(data?.value)
         blogCate=data?.value
         getAllBlogs()
     }catch(err){

     }
  }
  const handleCategory=(cate:any,searchItem:any)=>{
		if(searchItem?.trim()?.length>0){
			setSearch(searchItem)
		}
    setcategory(cate)
	}

const getAllBlogs=async ()=>{
   try{
    const {data}=await getBlog()
    if(data?.success){
      for(let i of blogCate){
      let count=data?.data?.filter((item:any)=>i===item?.category).length
      let temp={
        name:i,
        count
      }
      let blogsData=blogCount
      blogsData.push(temp)
      setBlogCount([...blogsData])
    }
    }
    setTimeout(()=>{
      setLoading(false)
    },200)
   }catch(err){

   }
}
useEffect(()=>{
    getAllBlogCategory()
},[])
  return (
    <Fragment>
              <header className="wrapper bg-soft-primary">
              {getAuthenticatedUserData()?.id ?  <DashboardNavbar
                            // info
                            navOtherClass="navbar-other ms-lg-4"
                            navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                            button={<DashboardNavbarModal/>}
                            />:<AuthNavbar
                  // info
                  navOtherClass="navbar-other ms-lg-4"
                  navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                  button={
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-signin"
                      className="btn btn-sm btn-primary py-1 px-2"
                      style={{fontWeight:"400",fontSize:"14px"}}
                    >
                      Sign In
                    </a>
                  }
                />}
              </header>

              {
                  loading?<Loading/>: <>
                        <main className="content-wrapper bg-white">
                            <section className="section-frame overflow-hidden">
                              <div className="wrapper bg-soft-primary">
                                <div className="container py-10 text-center">
                                  <div className="row">
                                    <div className="col-md-7 col-lg-6 col-xl-5 mx-auto">
                                      <h1 className="display-1 mb-3">Blog</h1>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>

                            <section className="wrapper bg-light">
                              <div className="container py-14 py-md-16">
                                <div className="row gx-lg-8 gx-xl-12">
                                  {/* ========== blog details section ========== */}
                                  <div className="col-lg-8">
                                    <BlogTemplate category={category} search={search} handleCategory={handleCategory}/>
                                  </div>

                                  {/* ========== sidebar section ========== */}
                                  <aside className="col-lg-4 sidebar">
                                    <BlogSidebar latestBlog={latestBlog} handleCategory={handleCategory} blogCount={blogCount}/>
                                  </aside>
                                </div>
                              </div>
                            </section>
                    </main>
                  </>
              }
      
       {getAuthenticatedUserData()?.id?<footer className="footer_container_dashboard_content">
                  <DashboardFooter/>
                </footer>:<Footer />}
    </Fragment>
  );
};

export default Blog;
