import { FC, useState } from 'react';


const priceRangesUSD = [
  { id: 'price1', title: '$0 - $100', value: { start: 0, end: 100 } },
  { id: 'price2', title: '$100 - $200', value: { start: 100, end: 200 } },
  { id: 'price3', title: '$200 - $300', value: { start: 200, end: 300 } },
  { id: 'price4', title: '$300 - More', value: { start: 300, end: "More" } }
];
const priceRangesINR = [
  { id: 'price1', title: '₹0 - ₹100', value: { start: 0, end: 100 } },
  { id: 'price2', title: '₹100 - ₹200', value: { start: 100, end: 200 } },
  { id: 'price3', title: '₹200 - ₹300', value: { start: 200, end: 300 } },
  { id: 'price4', title: '₹300 - More', value: { start: 300, end: "More" } }
];

const Filter: FC<any> = ({subjects,setCategory,setActivePage,currency,setStartPrice,setEndPrice,endPrice,startPrice}) => {
  const [selectedCategory,setSelectedCategory]=useState("View All")

  return (
    <aside className="col-lg-2 sidebar" style={{marginTop:"70px",marginBottom:"70px",borderRight:"1px solid #cacece"}}>
      <div className="widget">
          <h4 className="widget-title mb-3">Categories</h4>
          <hr style={{margin:"10px auto",color:"#c8cbcc"}}/>
          <div className="unordered-list bullet-primary text-reset">
              {
                subjects?.length>0 ? subjects?.map((item:any,index:any)=>{
                    return  <p  key={item.id} style={{fontSize:"12px",cursor:"pointer",color:selectedCategory==item?.subject_name?"#2582fd":"",marginBottom:"5px",marginTop:"5px"}} onClick={()=>{
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

              <p style={{color:selectedCategory=="View All"?"#2582fd":"",fontSize:"12px",cursor:"pointer",marginBottom:"5px",marginTop:"5px"}} onClick={()=>{
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

      <div className="widget">
        <h4 className="widget-title mb-3">Price</h4>
        <hr style={{margin:"10px auto",color:"#c8cbcc"}}/>

        {currency=="USD" ? priceRangesUSD.map(({ id, value, title }) => (
          <div className="form-check" style={{display:"flex",alignItems:"center"}} key={id}>
             <input className="form-check-input" checked={value?.start==startPrice?true:false} type="radio" name="price" id={id} onChange={(e:any)=>{
                 e?.preventDefault()
                 
                 setStartPrice(value?.start)
                 setEndPrice(value?.end)
            }}/>
            <label className="form-check-label" style={{fontSize:"12px",marginLeft:"7px"}} htmlFor={id}>
              {title}
            </label>
          </div>
        )):priceRangesINR.map(({ id, value, title }) => (
          <div className="form-check" style={{display:"flex",alignItems:"center"}} key={id} >
            <input className="form-check-input" checked={value?.start==startPrice?true:false} type="radio" name="price" id={id} onChange={(e:any)=>{
                 e?.preventDefault()
                 setStartPrice(value?.start)
                 setEndPrice(value?.end)
            }}/>
            <label className="form-check-label" style={{fontSize:"12px",marginLeft:"7px"}} htmlFor={id}>
              {title}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Filter;
