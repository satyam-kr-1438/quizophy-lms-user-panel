import { FC, useState } from 'react';


const QuizFilter: FC<any> = ({subjects,setCategory,setActivePage}) => {
  const [selectedCategory,setSelectedCategory]=useState("View All")
  return (
    <div className="col-lg-2  my-lg-14 widget" style={{marginBottom:"70px",borderRight:"1px solid #cacece"}}>
        <h4 className="widget-title mb-3">Categories</h4>

        <hr style={{margin:"10px auto",color:"#c8cbcc"}}/>

        <div className="unordered-list text-reset">

            {
              subjects?.length>0 ? subjects?.map((item:any,index:any)=>{
                   return  <p   key={item.id}  style={{fontSize:"15px",cursor:"pointer",color:selectedCategory==item?.subject_name?"#2582fd":"",marginBottom:"5px",marginTop:"5px"}} onClick={()=>{
                    setCategory(item?.id)
                    setSelectedCategory(item?.subject_name)
                    setActivePage(1)
                  }}>
                             <a href="#" onClick={(e:any)=>{
                              e?.preventDefault()
                            }}
                            >
                              <span>{item?.subject_name}{" "}</span>
                            </a>
                     </p>
              }):<p className="mb-1" style={{fontSize:"15px"}}>
                       No Category Found
                </p>
            }

            <p style={{color:selectedCategory=="View All"?"#2582fd":"",fontSize:"15px",cursor:"pointer",marginBottom:"5px",marginTop:"5px"}} onClick={()=>{
              setCategory(undefined)
              setActivePage(1)
              setSelectedCategory("View All")
            }}>
               <a href="#" onClick={(e:any)=>{
                  e?.preventDefault()
               }}
               >
                 <span>View All{" "}</span>
               </a>
            </p>
        </div>
      </div>
  );
};

export default QuizFilter;
