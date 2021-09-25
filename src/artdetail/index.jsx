import React from "react";
import "./st.modules.scss";
import "../publicData";
import axios from "axios";
import {Row,Col,Breadcrumb} from 'antd'
import {PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons';
export default class ArtDetails extends React.Component {
 state={
        url: global.data.url,
        id:this.props.match.params.id,
        artType:this.props.location.state.artType,
        newType:this.props.location.state.newType,
        obj:{},
        size:18
  }
  componentWillMount(){
      let params={params:{tableName:'News',id:this.state.id}};
      axios.get('getDetail',params).then(obj=>{         
         this.setState({
             obj
         })
      })
      console.log(this.props.location);
      
  }
  big=()=>{    
    if(this.state.size<28){
      this.setState({
        size:this.state.size+1
      })
    }    
  }
  small=()=>{
    if(this.state.size>18){
      this.setState({
        size:this.state.size-1
      })
    }    
  }
  render() {
      const {url,obj}=this.state
    return (
      <div className="detail">          
        <div
          style={{ backgroundImage: `url("${url}/images/headerbg.jpg")` }}
          className="top"
        ></div>
        
        <Row style={{background:`url('${url}/images/detbg.jpg')`,backgroundSize:'100% 100%'}} justify='center'>
        
        
          <Col className='left' sm={17} xl={15}>
          <Breadcrumb style={{textAlign:'left',padding:'20px 10px'}} separator=">">
    <Breadcrumb.Item  href="/">首页</Breadcrumb.Item>
    <Breadcrumb.Item href={`/artlist/${this.state.newType}`}>{this.state.artType}</Breadcrumb.Item>
    <Breadcrumb.Item >详情</Breadcrumb.Item>
  </Breadcrumb>
          <div className='content'>
            <p className='ctit'>{obj.title}</p>
            <p style={{fontSize:this.state.size}} className='ccontent' dangerouslySetInnerHTML={{ __html: obj.content }}></p>
        </div>
          </Col>
          <Col className='right' sm={5} xl={7}>
          <PlusCircleOutlined  onClick={()=>this.big()} style={{fontSize:'50px',color:' rgb(196, 162, 119)'}} />
          <p>字体加大</p>
          <MinusCircleOutlined onClick={this.small}  style={{fontSize:'50px',color:' rgb(196, 162, 119)'}}/>
          <p>字体减小</p>
          </Col>
        </Row>
        
      </div>
    );
  }
}
