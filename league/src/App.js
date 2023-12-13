import { BrowserRouter, Routes, Route } from 'react-router-dom';   // import the browser , routes , route for the settings of routeing
import './App.css';
import Home from './components/home/Home';
import Centerpage from './components/centerpage/Centerpage';
import Channai from './components/channai/Channai';
import Players from './components/channai/Players';
import Wininngcsk from './components/channai/Wininngcsk';
import Purplecap from './components/channai/Purplecap';
import Orangecap from './components/channai/Orangecap';
import RCB from './components/Rcb/RCB';
import Rcbplayer from './components/Rcb/Rcbplayer';
import Rcborange from './components/Rcb/Rcborange';
import Rcbpurple from './components/Rcb/Rcbpurple';
import Rcbwinning from './components/Rcb/Rcbwinning';
import Raj from './components/rajsthan/Raj';
import RAjorange from './components/rajsthan/RAjorange';
import Rajplayer from './components/rajsthan/Rajplayer';
import Rajwinner from './components/rajsthan/Rajwinner';
import Rajpurple from './components/rajsthan/Rajpurple';
import Delhi from './components/delhi/Delhi';
import Delhiorange from './components/delhi/Delhiorange';
import Delhiplayer from './components/delhi/Delhiplayer';
import Delhipurple from './components/delhi/Delhipurple';
import Delhiwinner from './components/delhi/Delhiwinner';
import Gujrat from './components/gujrat/Gujrat';
import Gujratplayer from './components/gujrat/Gujratplayer';
import Gujratwinner from './components/gujrat/Gujratwinner';
import Gujratpurple from './components/gujrat/Gujratpurple';
import Gujratorange from './components/gujrat/Gujratorange';
import Kolkataplayer from './components/kolkata/Kolkataplayer';
import Kolkatawinner from './components/kolkata/Kolkatawinner';
import Kolkatapurple from './components/kolkata/Kolkatapurple';
import Kolkataorange from './components/kolkata/Kolkataorange';
import Riders from './components/kolkata/Riders';
import Hydrabad from './components/hydrabad/Hydrabad';
import Hydrabadplayer from './components/hydrabad/Hydrabadplayer';
import Hydrabadwinner from './components/hydrabad/Hydrabadwinner';
import Hydrabadpurple from './components/hydrabad/Hydrabadpurple';
import Hydrabadorange from './components/hydrabad/Hydrabadorange';
import Lucknowplayer from './components/lucknow/Lucknowplayer';
import Lucknowwinner from './components/lucknow/Lucknowwinner';
import Lucknowpurple from './components/lucknow/Lucknowpurple';
import Lucknoworange from './components/lucknow/Lucknoworange';
import SuperGaints from './components/lucknow/SuperGaints';
import Mumbai from './components/mumbai/Mumbai';
import Mumbaiplayer from './components/mumbai/Mumbaiplayer';
import Mumbaiorange from './components/mumbai/Mumbaiorange';
import Mumbaipurple from './components/mumbai/Mumbaipurple';
import Mumbaiwinner from './components/mumbai/Mumbaiwinner';
import Punjab from './components/punjab/Punjab';
import Punjabplayer from './components/punjab/Punjabplayer';
import Punjabwinner from './components/punjab/Punjabwinner';
import Punjabpurple from './components/punjab/Punjabpurple';
import Punjaborange from './components/punjab/Punjaborange';
import Addplayer from './components/channai/Addplayer';
import Playerview from './components/channai/Playerview';
import Delhiaddplayer from './components/delhi/Delhiaddplayer';
import Delhiplayerview from './components/delhi/Delhiplayerview';
import Gujrataddplayer from './components/gujrat/Gujrataddplayer';
import Gujratplayerview from './components/gujrat/Gujratplayerview';
import HydrabadPlayerAdd from './components/hydrabad/HydrabadPlayerAdd';
import Hydrabadplayerview from './components/hydrabad/Hydrabadplayerview';
import Kolkataaddplayer from './components/kolkata/Kolkataaddplayer';
import Kolkataplayerview from './components/kolkata/Kolkataplayerview';
import Lucknowaddplayer from './components/lucknow/Lucknowaddplayer';
import Lucknowplayerview from './components/lucknow/Lucknowplayerview';
import Mumbaiaddplayer from './components/mumbai/Mumbaiaddplayer';
import Mumbaiplayerview from './components/mumbai/Mumbaiplayerview';
import Punjabaddplayer from './components/punjab/Punjabaddplayer';
import Punjabplayerview from './components/punjab/Punjabplayerview';
import Rajaddplayer from './components/rajsthan/Rajaddplayer';
import Rajplayerview from './components/rajsthan/Rajplayerview';
import Rcbaddplayer from './components/Rcb/Rcbaddplayer';
import Rcbplayerview from './components/Rcb/Rcbplayerview';









// ----All components are set with route and proper path given ------
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/teams' element={<Centerpage />}></Route>


        <Route path='/channai' element={<Channai />}></Route>
        <Route path='/players' element={<Players />}></Route>
        <Route path='/cskwinning' element={<Wininngcsk />}></Route>
        <Route path='/cskpurplecaps' element={<Purplecap />}></Route>
        <Route path='/cskorangecaps' element={<Orangecap />}></Route>
        <Route path='/addplayer' element={<Addplayer/>}></Route>
        <Route path='/addplayer/:_id' element={<Addplayer />} />
        <Route path='/viewplayer/:_id' element={<Playerview/>}></Route>
        


        <Route path='/Rcb' element={<RCB />}></Route>
        <Route path='/Rcbplayers' element={<Rcbplayer />}></Route>
        <Route path='/Rcborangecaps' element={<Rcborange />}></Route>
        <Route path='/Rcbpurplecaps' element={<Rcbpurple />}></Route>
        <Route path='/Rcbwinning' element={<Rcbwinning />}></Route>
        <Route path='/Rcbaaddplayer' element={<Rcbaddplayer/>}></Route>
        <Route path='/Rcbaaddplayer/:_id' element={<Rcbaddplayer/>}></Route>
        <Route path='/Rcbviewplayer/:_id' element={<Rcbplayerview/>}></Route>
        


        <Route path='/Rajsthan' element={<Raj />}></Route>
        <Route path='/Rajorangecaps' element={<RAjorange />}></Route>
        <Route path='/Rajpurplecaps' element={<Rajpurple />}></Route>
        <Route path='/Rajplayers' element={<Rajplayer />}></Route>
        <Route path='/Rajwinning' element={<Rajwinner />}></Route>
        <Route path='/Rajaddplayer' element={<Rajaddplayer/>}></Route>
        <Route path='/Rajaddplayer/:_id' element={<Rajaddplayer/>}></Route>
        <Route path='/Rajviewplayer/:_id' element={<Rajplayerview/>}></Route>
        


        <Route path='/delhi' element={<Delhi />}></Route>
        <Route path='/Delhiaddplayer' element={<Delhiaddplayer/>}></Route>
        <Route path='/Delhiaddplayer/:_id' element={<Delhiaddplayer/>}></Route>
        <Route path='/Delhiviewplayer/:_id' element={<Delhiplayerview/>}></Route>
        <Route path='/delhiorangecaps' element={<Delhiorange />}></Route>
        <Route path='/delhiplayers' element={<Delhiplayer />}></Route>
        <Route path='/delhipurplecaps' element={<Delhipurple />}></Route>
        <Route path='/delhiwinning' element={<Delhiwinner />}></Route>



        <Route path='/Gujrat' element={<Gujrat />}></Route>
        <Route path='/Gujrataddplayer' element={<Gujrataddplayer/>}></Route>
        <Route path='/Gujrataddplayer/:_id' element={<Gujrataddplayer/>}></Route>
        <Route path='/Gujratviewplayer/:_id' element={<Gujratplayerview/>}></Route>
        <Route path='/Gujratplayers' element={<Gujratplayer />}></Route>
        <Route path='/Gujratwinning' element={<Gujratwinner />}></Route>
        <Route path='/Gujratpurplecaps' element={<Gujratpurple />}></Route>
        <Route path='/Gujratorangecaps' element={<Gujratorange />}></Route>



        <Route path='/Kolkataplayers' element={<Kolkataplayer />}></Route>
        <Route path='/Kolkatawinning' element={<Kolkatawinner />}></Route>
        <Route path='/kolkatapurplecaps' element={<Kolkatapurple />}></Route>
        <Route path='/kolkataorangecaps' element={<Kolkataorange />}></Route>
        <Route path='/kolkata' element={<Riders />}></Route>
        <Route path='/Kolkataaddplayer' element={<Kolkataaddplayer/>}></Route>
        <Route path='/Kolkataaddplayer/:_id' element={<Kolkataaddplayer/>}></Route>
        <Route path='/Kolkataviewplayer/:_id' element={<Kolkataplayerview/>}></Route>



        <Route path='/Hydrabad' element={<Hydrabad />}></Route>
        <Route path='/Hydrabadaddplayer' element={<HydrabadPlayerAdd/>}></Route>
        <Route path='/Hydrabadaddplayer/:_id' element={<HydrabadPlayerAdd/>}></Route>
        <Route path='/Hydrabadviewplayer/:_id' element={<Hydrabadplayerview/>}></Route>
        <Route path='/Sunrisesplayers' element={<Hydrabadplayer />}></Route>
        <Route path='/Sunriseswinning' element={<Hydrabadwinner />}></Route>
        <Route path='/Sunrisespurplecaps' element={<Hydrabadpurple />}></Route>
        <Route path='/Sunrisesorangecaps' element={<Hydrabadorange />}></Route>



        <Route path='/Luckplayers' element={<Lucknowplayer />}></Route>
        <Route path='/Luckwinning' element={<Lucknowwinner />}></Route>
        <Route path='/Luckpurplecaps' element={<Lucknowpurple />}></Route>
        <Route path='/Luckorangecaps' element={<Lucknoworange />}></Route>
        <Route path='/Lucknow' element={<SuperGaints />}></Route>
        <Route path='/Lucknowaaddplayer' element={<Lucknowaddplayer/>}></Route>
        <Route path='/Lucknowaaddplayer/:_id' element={<Lucknowaddplayer/>}></Route>
        <Route path='/Lucknowviewplayer/:_id' element={<Lucknowplayerview/>}></Route>



        <Route path='/mumbai' element={<Mumbai />}></Route>
        <Route path='/mumbaiaaddplayer' element={<Mumbaiaddplayer/>}></Route>
        <Route path='/mumbaiaaddplayer/:_id' element={<Mumbaiaddplayer/>}></Route>
        <Route path='/mumbaiviewplayer/:_id' element={<Mumbaiplayerview/>}></Route>
        <Route path='/Mumbaiplayers' element={<Mumbaiplayer />}></Route>
        <Route path='/Mumbaiorangecaps' element={<Mumbaiorange />}></Route>
        <Route path='/Mumbaipurplecaps' element={<Mumbaipurple />}></Route>
        <Route path='/Mumbaiwinning' element={<Mumbaiwinner />}></Route>



        <Route path='/Punjab' element={<Punjab />}></Route>
        <Route path='/Punjabplayers' element={<Punjabplayer />}></Route>
        <Route path='/punjabwinning' element={<Punjabwinner />}></Route>
        <Route path='/punjabpurplecaps' element={<Punjabpurple />}></Route>
        <Route path='/punjaborangecaps' element={<Punjaborange />}></Route>
        <Route path='/Punjabaaddplayer' element={<Punjabaddplayer/>}></Route>
        <Route path='/Punjabaaddplayer/:_id' element={<Punjabaddplayer/>}></Route>
        <Route path='/punjabviewplayer/:_id' element={<Punjabplayerview/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
