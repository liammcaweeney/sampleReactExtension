import '../App.css';
import './Loading.css';
import {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';

const LoadingSpinner = () => {

    const [loadingDots, setLoadingDots] = useState(0)

    useEffect(() => {
        const interval = setInterval(()=> {
            setLoadingDots(loadingDots===2?0:loadingDots+1)
        },2000)
        return () => clearInterval(interval)
    }, [loadingDots]);

    const loadingDotsText = Array.from(Array(loadingDots),()=> ' .').join('')

    return (
        <div className='loading'>
            <div className='loading-spinner'>
                <div className='spinner'>
                    <div className='cutout'/>
                </div>
            </div>
            <p className='pl-4'> {`Loading ${loadingDotsText}`}</p>
        </div>
    )
}



const LoadingButton = ({onClick}) => (
    <Button  size="sm" onClick={onClick} variant="warning">Sick of loading?</Button>
)

const Loading = ({onClick}) =>(
    <div>
        <LoadingSpinner/>
        <LoadingButton onClick={onClick}/>
    </div>
)



export default Loading;
