import logo from './logo.svg';
import './App.css';

function App() {
const Logo="LOGOBAKERY"
const Link=['Services','Projects','About']
const updateLink = Link.map(el =>{
  return <p>{el}</p>
})
const Buttun = 'Contact';
  return (
    <div className="App">
     
      <div className='logo'>
        <p>{Logo}</p>
      </div>

      <div className='link'>
        {updateLink}
      </div>
      

      <div className='buttun'>
       <p>
       <button>{Buttun}</button>
       </p>
        
      </div>
    </div>
  );
}

export default App;
