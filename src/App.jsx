// import i18n from 'i18next';
// // import { initReactI18next, useTranslation } from 'react-i18next';
// import translationEn from './locale/translationsEn';
// import translationUz from './locale/translationUz';
import Navbar from './Navbar';







// i18n.use(initReactI18next).init({
//   resources:{
//     en:{translation:translationEn},
//     uz:{translation:translationUz}
//   },
//   lng:'en',
//   fallbackLng:'en'
// })

function App() {
//   const changeLang=(value)=>{
//     i18n.changeLanguage(value)
//   }
//   const {t} = useTranslation()
//   const changeLangHandler = (e) =>{
//     console.log(e.target.value)
//     changeLang(e.target.value)
// }
  return (
    <div>    
      <Navbar/>
    {/* <div>
    <select onChange={changeLangHandler}>
        <option value='en'>English</option>
        <option value='uz'>Uzbek</option>
      </select>
         <div className='navbar_brand'>
        <h4 className='bg-red-600'>UI.desk</h4>
      </div>  
      <div className='navbar_list'>
        <ul className='nav_list'>
          <li><a href='#'></a>{t('about')}</li>
          <li><a href='#'></a>{t('location')}</li>
          <li><a href='#'></a>{t('careers')}</li>
        </ul>
      </div>
    </div> */}

    </div>
  )
}

export default App



// function App() {
//   const api = 'https://jsonplaceholder.typicode.com/users'

// async function Checker(){
// try {
//   const response=await fetch(api)
//   if(response.ok){
//     const data= await response.json()
//     console.log(data)
//   }
//   else{
//     console.log("ERROR HTTP: " + response.status)
//   }
// } 
// catch (error) {
//   console.log("ERROR is : " + error.message)
// }
// }
// Checker()
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default App