import { Link } from 'react-router-dom';

export function Header () {

    const logo = 'https://game-hub-lake-one.vercel.app/assets/shared/GameHub_Logo.png';

    return (
        <>
            <header className='bg-amber-300 text-blue-950'>
                <div className='flex justify-between content-center px-30 h-40'>

                    <Link to={"/"} className='m-auto'>
                        <img src={logo} alt="GameHub Logo" className='h-20
                        hover:opacity-80' />
                    </Link>

                    <input type="text" placeholder='Search for game' aria-label="game search" 
                    className='w-100 h-10 rounded-lg p-2 bg-white m-auto' />

                    <div className='m-auto'>
                        <Link to={"/login"}>Login</Link>
                        <Link to={"/favourites"}>Favourites</Link>
                        <Link to={"/cart"}>Cart</Link>
                    </div>

                </div>
                <div className='flex justify-around gap-2 bg-blue-950 text-white h-10 px-30'>
                    <nav className='flex gap-4'>
                        <ul className='flex gap-18 m-auto'>
                            <li><Link to={"/"} className='hover:underline hover:text-amber-300'>Home</Link></li>
                            <li><Link to={"/latest"} className='hover:underline hover:text-amber-300'>Latest Release</Link></li>
                            <li><Link to={"/sale"} className='hover:underline hover:text-amber-300'>SALE</Link></li>
                            <li><Link to={"/pre-loved"} className='hover:underline hover:text-amber-300'>Pre-loved games</Link></li>
                            <li><Link to={"/sell"} className='hover:underline hover:text-amber-300'>Sell your game</Link></li>
                            <li><Link to={"/about"} className='hover:underline hover:text-amber-300'>About</Link></li>
                            <li><Link to={"/contact"} className='hover:underline hover:text-amber-300'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}