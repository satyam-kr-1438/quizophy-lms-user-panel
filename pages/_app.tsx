import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';

// animate css
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
import 'plugins/scrollcue/scrollCue.css';
// Bootstrap and custom scss
// import 'assets/scss/style.scss';
import "/public/css/style.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuthorization from 'hooks/useAuthorization';
import Loading from 'components/dashboardComponent/common/loadingPart/Loading';
import { getAuthenticatedUserData, removeAuthenticationDataHandleLogout, setAuthenticationData } from 'hooks/localStorageInfo';
import { checkUserRegisteredOrNot, getActivePackagesAndPassesDetails } from 'components/request/request';
import { SuccessMessage } from 'components/dashboardComponent/common/messageToast/AlertMessageToast';
import { Provider } from 'react-redux';
import { store } from 'store';
import GetAllActivePackagesAndPasses from 'components/dashboardComponent/common/GetAllActivePackagesAndPasses';
let pathNameArr=["dashboard","blog"]
function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  // const dispatch:any=useDispatch()
  const [loading, setLoading] = useState(true);
  const [auth,setAuth]=useAuthorization()
  const router=useRouter()
  // added bootstrap functionality
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(()=>{
     let getAuth=localStorage.getItem("quizophyAuthenticatedUserDetail")
     if(getAuth){
      getAuth=JSON.parse(getAuth)
     }
     if(!getAuth){
      if(typeof window!="undefined" && pathNameArr?.includes(window.location.pathname.split("/")[1]) && window.location.pathname.split("/")[1]!=="blog"){
        router.push("/")
      }
     }else{
      if(typeof window!="undefined" && !pathNameArr?.includes(window.location.pathname.split("/")[1])){
        router.push("/dashboard/quizzes")
      }
     }
  })

  const checkUserRegisteredOrNotStatus=async ()=>{
    try{
      let getAuth=getAuthenticatedUserData()
      if(getAuth){
        const {data}=await checkUserRegisteredOrNot((getAuth)?.id)
        if(!data?.success){
            let dataItem=removeAuthenticationDataHandleLogout()
            if(dataItem){
              SuccessMessage("User Logout Successfully")
              router.push("/")
            }
        }
      }
    }catch(err){

    }
    
  }


  useEffect(()=>{
     checkUserRegisteredOrNotStatus()
     setTimeout(()=>{
      setLoading(false)
     },2000)
  },[])

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

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <title>Quizophy Learning Management System</title>
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
        <title>Create A Quiz | Quiz Maker | Make Polls & Survey</title>
        <meta name="description" content="Quizophy is the Best live quiz platform that will elevate your online event experience. An Intuitive, Highly Engaging & Customized Quizzes, Polling Platform" key="desc" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

      </Head>

      <ThemeProvider>
        {/* <div className="page-loader" /> */}
        {loading ? <div>
            <Loading/>
        </div> : <Provider store={store}>
                        <GetAllActivePackagesAndPasses>
                            <Component {...pageProps} />
                        </GetAllActivePackagesAndPasses>
                 </Provider>}
      </ThemeProvider>
      <ToastContainer/>
    </Fragment>
  );
}

export default MyApp;
