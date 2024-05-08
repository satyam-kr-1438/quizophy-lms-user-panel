import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import Pagination from 'components/reuseable/Pagination';
// -------- data -------- //
import DashboardFooter from 'components/blocks/footer/DashboardFooter';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import QuizFilter from 'components/common/QuizFilter';
import QuizCard from 'components/reuseable/product-cards/QuizCard';
import { getAllCoursesSubject, getAllQuizzes, getQuizReportStatus } from 'components/request/request';
import ContentNotFound from 'components/blocks/navbar/ContentNotFound';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import { useDispatch } from 'react-redux';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';

const Quizzes: NextPage = () => {
  // filter options
  const [activePage,setActivePage]=useState(1)
  const [total,setTotal]=useState(1)
  const [quizzes,setQuizzes]=useState<Array<any[]>>([])
  const [totalPage,setTotalPage]=useState<any>(1)
  const [quizReportStatus,setQuizReportStatus]=useState<any[]>([])
  const [pageArr,setPageArr]=useState<Array<number[]>>([])
  const [subjects,setSubjects]=useState<Array<any[]>>([])
  const [category,setCategory]=useState<any>(undefined)
  const [loading,stLoading]=useState(true)


  const getAllFreeOrPaidQuizzes=async ()=>{
     try{
          let query=`page=${activePage}&items_per_page=5&category=${category}`
          const {data}=await getAllQuizzes(query)
          if(data && data?.data){
            setTotal(data?.payload?.pagination?.total)
            setTotalPage(Math.ceil(data?.payload?.pagination?.total/5))
            let temp:any=[]
            for(let i=0;i<Math.ceil((data?.payload?.pagination?.total/5));i++){
               temp.push(i+1)
               setPageArr(temp)
            }
            setQuizzes(data?.data)
            let ids=data?.data?.map((item:any)=>item?.id)

            if(ids?.length>0){
              const {data}=await getQuizReportStatus({
                user_id:getAuthenticatedUserData()?.id,
                quiz_ids:ids
              })
              if(data?.success){
                setQuizReportStatus(data?.data)
              }
            }
            setTimeout(()=>{
              stLoading(false)
            },200)
          }
          else{
            setTimeout(()=>{
              stLoading(false)
            },200)
          }
     }catch(err){
      setTimeout(()=>{
        stLoading(false)
      },200)
     }
  }
  const getAllSubjects=async ()=>{
    try{
      const {data}=await getAllCoursesSubject()
      setSubjects(data)
    }catch(err){

    }
  }
  
  useEffect(()=>{
      getAllFreeOrPaidQuizzes()
  },[activePage,category])
  useEffect(()=>{
    getAllSubjects()
  },[])
  

  return (
    <Fragment>
                <header className="wrapper bg-soft-primary">
                    <DashboardNavbar
                    // info
                    navOtherClass="navbar-other ms-lg-4"
                    navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                    button={<DashboardNavbarModal/>}
                    />
               </header>

               {
                loading ? <Loading/>: <> 
                     <main className="mb-14">
                          <section className="wrapper quiz_start_background_main">
                            <div className="container pt-0 pt-lg-5">
                              <div className="row gy-10">
                                <div className="col-lg-10 col-12 order-lg-2">
                                  <div className="row gx-md-4 gy-4 gy-md-4 my-4">
                                    <div className="col-12">
                                          <div className="row mx-1">
                                              {/* {products.map((item) => (
                                                <QuizCard {...item} key={item.id} className="col-lg-10 col-12" />
                                              ))} */}
                                                {
                                                  quizzes?.length>0 ? quizzes.map((item:any,index:number) => {
                                                    return <QuizCard {...item} key={index} quizKey={item?.key} quizReportStatus={quizReportStatus} className="col-lg-12 col-12" />
                                                  }
                                                  ):<ContentNotFound button_text="" to=""/>
                                                }
                                          </div>
                                    </div>
                                  </div>

                                  {quizzes?.length>0 && <Pagination total={total} activePage={activePage} totalPage={totalPage} pageArr={pageArr} setActivePage={setActivePage}/>}
                                </div>
                                {subjects?.length>0 && <QuizFilter  subjects={subjects} setCategory={setCategory} setActivePage={setActivePage}/>}
                              </div>
                            </div>
                          </section>
                     </main>
                </>
               }

                <footer className="footer_container_dashboard_content">
                  <DashboardFooter/>
                </footer>
      
    </Fragment>
  );
};

export default Quizzes;
