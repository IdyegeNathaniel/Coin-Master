import { useNavigate } from 'react-router-dom'
import Icon from '../Components/Icon'
import { FaArrowRight } from 'react-icons/fa';

const WelcomePage = () => {
 
    const navigate = useNavigate();

    return (
    <section className='w-full h-screen flex flex-col gap-3 justify-center items-center bg-slate-500 text-white'>
        <h2 className='text-5xl font-bold leading-tight'>Welcome to CoinMaster</h2>
        <p className='text-gray-300'>Enjoy smooth and fast information on real-time at your finger tips.</p>
        <Icon />
        <button onClick={() => {navigate("/home")}} className='flex items-center py-2 px-4 mt-2 bg-white text-slate-950 text-xl rounded hover:bg-slate-950 hover:text-white transition-all duration-300'>Get Going <FaArrowRight className='ml-2' /></button>
    </section>
  )
}

export default WelcomePage