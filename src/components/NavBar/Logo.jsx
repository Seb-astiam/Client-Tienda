import { Link } from 'react-router-dom';

const Logo = ()=>{
    return(
        <div>
            <Link to='/home'>
                <h1 className="text-white font-medium text-2xl italic tracking-widest my-5 mr-36">URBANFEET</h1>
            </Link>
        </div>
    )
};

export default Logo;