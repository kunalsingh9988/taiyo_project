
import {Link} from "react-router-dom"
//just another basic UI
const Sidebar = () => {
  return (
    <div className='w-40 sm:w-60 h-screen bg-gray-200 '>
        <ul className="m-4 sm:m-8 leading-8 sm:font-bold ">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact Page</Link>
            </li>
            <li>
                <Link to="/charts">Charts and Maps</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar