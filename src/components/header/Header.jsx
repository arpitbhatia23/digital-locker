import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Lougout from './Lougout'

function Header() {
const authstatus=useSelector(state=>state.userdata)
const navigate = useNavigate()
const navItem =[{
  name:'home',
  slug:'/',
  active:authstatus

}
,
{
  name:'login',
  slug:'/login',
  active:!authstatus
}
,
{
  name:'signup',
  slug:"/signup",
  active:!authstatus
}]
    
  return (
    <header>
      <nav>
        {navItem.map((item)=>(
         item.active? (<li key={item.name}  onClick={()=>navigate(item.slug)}>{item.name}
          </li>
        ):null) )}
        {authstatus&& <li><Lougout/></li>}
      </nav>
    </header>
  )
}

export default Header
