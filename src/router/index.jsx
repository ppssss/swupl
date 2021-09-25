import {Route,Switch} from "react-router-dom"
import Items from "./items"

const Content=()=>{
    return(        
            <Switch>
            {Items.map(el=>{
                return <Route exact={el.exact} path={el.path} component={el.component} key={el.id}/>
            })}
            <Route path="*" component={()=><h3>不存在</h3>}/>
        </Switch>
              
    )
}
export default Content