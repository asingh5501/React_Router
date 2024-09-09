import { NavLink } from 'react-router-dom'

function ButtonHeader(props) {
    const { text, to } = props
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? 'text-orange-700' : 'text-gray-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
            >{text}</NavLink>
        </div>
    )
}

export default ButtonHeader