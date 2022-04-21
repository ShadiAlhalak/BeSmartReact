import './App.css';
import MYHeader from './Components/MYHeader';
import MYNav from './Components/MYNav';
import MYfooter from './Components/MYfooter';
import MobItem from './Components/MobItem';
import xiaomi from './Assets/Xiaomi.json' 
import samsung from './Assets/Samsung.json'

function App() {
  //let data = require('./Assets/Xiaomi.json');
  return (
    <div className="App">
   <MYHeader />
   <MYNav />
   <div className='ulTitle'>Xiaomi</div>
   <ul className='ListMob'>
   {xiaomi.map((item, i) => (
                                <MobItem
                                img="MI"
                                Name={item.Name.replace("Xiaomi",'').replace("Mi","").replace ("Redmi","")}
                                Disp={item.Display_Type.substring(0,item.Display_Type.indexOf(',')).concat( " "+item.Display_Size.substring(0,item.Display_Size.indexOf(','))).replace("inches","")}
                                Cam={item.MAIN_CAMERA.substring(0,item.MAIN_CAMERA.indexOf(','))}
                                Cpu={item.Chipset}
                                Battary={item.BATTERY.substring(0,item.BATTERY.indexOf(','))}
                                Price={item.Price.indexOf("EUR")>0 ? item.Price:"NULL"}
                                />
                              )) }
   </ul>

   <div className='ulTitle'>Samsung</div>
   <ul className='ListMob'>
   {samsung.map((item, i) => (
                                <MobItem
                                img="Sam"
                                Name={item.Name.replace("Samsung",'').replace("Galaxy","")}
                                Disp={item.Display_Type.substring(0,item.Display_Type.indexOf(',')).concat( " "+item.Display_Size.substring(0,item.Display_Size.indexOf(','))).replace("inches","")}
                                Cam={item.MAIN_CAMERA.substring(0,item.MAIN_CAMERA.indexOf(','))}
                                Cpu={item.Chipset}
                                Battary={item.BATTERY.substring(0,item.BATTERY.indexOf(','))}
                                Price={item.Price.indexOf("EUR")>0 ? item.Price:"NULL"}
                                />
                              )) }
   </ul>
  <MYfooter /> 
    </div>
  );
}

export default App;
