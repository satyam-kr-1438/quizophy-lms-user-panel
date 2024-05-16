import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// animate css
import ProgressBar from 'nextjs-progressbar';
// import {registerBackgroundSync} from "../src/components/backgroundSync/background-sync.js"
import 'animate.css';
// import swiper css
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

// video player css
import 'plyr-react/plyr.css';
// glightbox css
import 'glightbox/dist/css/glightbox.css';
// custom scrollcue css
// Bootstrap and custom scss
import 'assets/scss/style.scss';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import "../public/css/style.css"
import Footer from 'components/layouts/Footer';
import ProfileNavigation from 'components/layouts/ProfileNavigation';
import ProfilePage from 'components/common/profile/ProfilePage';
let pathNameArr=["/home"]
let pathNameArrFooter=["/home","/home-2","/favourite-consultant","/appointments","/setting"]

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const router=useRouter()
  const [loading, setLoading] = useState(true);
  const [auth,setAuth]=useState(true)
 const [openSidebar,setOpenSideBar]=useState(false)
  // added bootstrap functionality
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);
  useEffect(()=>{
    AOS.init({
      duration: 300,
      easing: 'ease-in-out',
      once: true, // Whether animation should happen only once
    });
  },[])

  // scroll animation added


  // manage loading status
  useEffect(() => setLoading(false), []);
  useEffect(() => {
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      navigator.serviceWorker.ready.then((registration:any) => {
        registration.sync.register('database-sync')
          .then(() => console.log('Background sync registered successfully.'))
          .catch((error:any) => console.error('Background sync registration failed:', error));
      });
    }
  }, []);
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
          console.error('ServiceWorker registration failed: ', err);
        });
      });
    }
  }, []);
  useEffect(() => {
    const registerPeriodicSync = async () => {
      try {
        // Check if the browser supports navigator.permissions and navigator.serviceWorker
        if ('permissions' in navigator && 'serviceWorker' in navigator) {
          // Query for the permission
          const periodicSyncPermission = await (navigator as any)?.permissions?.query({
            name: 'periodic-background-sync'
          });
  
          // Check if permission is granted
          if (periodicSyncPermission.state === 'granted') {
            // Get the service worker registration
            const registration = await (navigator as any)?.serviceWorker?.ready;
            
            // Register the periodic sync
            await registration?.periodicSync?.register('fetch-new-content', {
              minInterval: 24 * 60 * 60 * 1000 // Set sync interval to once a day
            });
          }
        }
      } catch (error) {
        console.error('Error registering periodic background sync:', error);
      }
    };
  
    registerPeriodicSync();
  }, []);
  
  // useEffect(() => {
  //   registerBackgroundSync();
  // }, []);


//   useEffect(() => {
//     const preventZoom = (event:any) => {
//         if (event.scale !== 1) {
//             event.preventDefault();
//         }
//     };

//     document.addEventListener('touchmove', preventZoom, { passive: false });

//     return () => {
//         document.removeEventListener('touchmove', preventZoom);
//     };
// }, []);
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <title>Event Consultant</title>
        {typeof navigator !== 'undefined' && 'serviceWorker' in navigator && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof navigator.serviceWorker !== 'undefined') {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                      console.log('Service Worker registration successful:', registration);
                    })
                    .catch(error => {
                      console.error('Service Worker registration failed:', error);
                    });
                }
              `,
            }}
          />
        )}
      </Head>

      <div style={{maxWidth:"420px",minHeight:"100vh",maxHeight:`${openSidebar?"100vh":""}`,overflow:`${openSidebar?"hidden":"hidden"}`,margin:"auto",background:`${openSidebar?"rgba(0, 0, 0, 0.5)":"#f5f5f5"}`,opacity:`${openSidebar?"225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms":""}`}}>
        {openSidebar && <div className={openSidebar?"sidebar_nvigation_festro":"sidebar_nvigation_festro_close"}>
                  <ProfileNavigation text="" setOpenSideBar={setOpenSideBar}/>
                  <ProfilePage setOpenSideBar={setOpenSideBar}/>
          </div>}
        {/* <div className="page-loader" /> */}
        {loading ? <div className="page-loader" /> :  auth ? 
        <>
          {pathNameArr?.includes(window.location.pathname) && <div className={`${window.location.pathname=="/home"?"navbar-design-festro":""}`}>
           
            <div className="" style={{justifyContent:"space-between",display:"flex",alignItems:"center"}}>
               {<button  className="offcanvas-nav-btn" style={{border:"none",outline:"none",background:"none"}} onClick={()=>{
                  if(openSidebar)
                     setOpenSideBar(false)
                  else
                     setOpenSideBar(true)
                }}>
                  <img src="/img/festro/drawer-icon.3dd24632.svg" style={{width:"22px"}} alt="close" className="style_img__26PED"/>
                </button>}
            </div>
              <div>
                <IoWalletOutline className="notification_icon"  onClick={()=>{
                  router.push("/wallet")
                }}/>
                <IoIosNotificationsOutline className="notification_icon2" style={{marginLeft:"30px"}} onClick={()=>{
                  router.push("/notifications")
                }}/>
              </div>
               
            </div>
          }
               <Component {...pageProps} />
          {pathNameArrFooter?.includes(window.location.pathname) && <Footer/>}
        </>:""}
      </div>
    </Fragment>
  );
}

export default MyApp;
