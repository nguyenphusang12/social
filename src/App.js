import Topbar from './Components/Topbar'
import Body from './Components/Body'

function App() {
  
  const appendScript = (url) => {
    
    const element = document.createElement('script');
    element.src = url;
    element.defer = true;
    document.body.appendChild(element);
   
}
    
    return (
      <>
      <Topbar/>
      <Body />
      {appendScript('./assets/js/main.js')}
      </>
    )
}

export default App;