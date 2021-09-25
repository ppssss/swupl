import Home from '../home'
import Artlist from '../artlist'
import ArtDetails from '../artdetail'
import Search from '../search'

const Items=[
    {id:1,path:'/',exact:true,component:Home},
    {id:2,path:'/home',exact:false,component:Home},
    {id:3,path:'/artlist/:newType',exact:true,component:Artlist},
    {id:4,path:'/artdetails/:id',exact:true,component:ArtDetails},
    {id:2,path:'/search',exact:false,component:Search},

]
export default Items