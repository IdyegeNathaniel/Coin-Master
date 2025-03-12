import { useNavigate } from 'react-router-dom'
import Icon from '../Components/Icon'
import { FaArrowRight } from 'react-icons/fa';

const WelcomePage = () => {
 
    const navigate = useNavigate();

    return (
    <section className='w-full h-screen flex flex-col justify-center items-center bg-slate-500 text-white'>
        <div className="container flex flex-col gap-8 justify-center items-center mx-auto p-4">
            <div className="text-center">
                <h2 className='text-3xl md:text-5xl font-bold leading-tight'>Welcome to CoinMaster</h2>
                <p className='text-gray-300 text-xs'>Enjoy smooth and fast information on real-time at your finger tips.</p>
            </div>
            <Icon />
            <button onClick={() => {navigate("/home")}} className='flex items-center py-2 px-4 mt-2 bg-white text-slate-950 text-xl rounded hover:bg-slate-950 hover:text-white transition-all duration-300'>Get Going <FaArrowRight className='ml-2' /></button>
    
        </div>    
    </section>
  )
}

export default WelcomePage