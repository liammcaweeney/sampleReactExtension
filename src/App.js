import logo from './logo.svg';
import './App.css';
import Loading from "./Loading";
import Stocks from "./Stocks";
import React, { useState } from 'react';

// const Home = () => (
//     <div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>XDEFI demo</p>
//     </div>
// )



// const App = () => {
//     const [loading, setLoading] = useState(true);
//
//     return (
//         <div className="App">
//             <div className="App-header">
//                 {loading ? <Loading onClick={()=>{setLoading(false)}}/> : <Home/>}
//             </div>
//         </div>
//   );
// }
const Header = () => (
    <div> Where's my shares at?</div>
)

const Footer = () => (
    <div> By Liam McAweeney</div>
)

const App2 = () => {
    console.log('rendering App2')
    return (
        <div className="App">
            <div className="App-header">
                <Header/>
                <Stocks/>
                <Footer/>
            </div>
        </div>
    );
}

export default App2;
