import { Link } from "react-router-dom";
import './Classes.css';


export default function ClassContainer ({img,alt,title,link})  {
    return (
        <Link to={link}  className='class-container'>

            {/* <img src={img} alt={alt} className="class-img" /> */}
            <div className='class-details'>
            <h3 className='class-title'>{title}</h3>
                
        </div>
        </Link>
    );
}
