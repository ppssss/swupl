import st from './st.module.scss'
import '../publicData'
import {Row,Col,Button} from 'antd'
import {
    MailOutlined,
    ProjectOutlined,
    ScheduleOutlined,
    ProfileOutlined
  } from '@ant-design/icons';

const Foot=()=>{
    const url=global.data.url
    return(
        <div style={{background:`url('${url}images/footbg.jpg')`,backgroundSize:'100% 100%'}} className={st.foot}>
            <Row justify='center'>
                <Col className={st.footl} sm={6} xl={5}>
                <Button><MailOutlined />西政邮箱</Button>
                <Button><ProfileOutlined />校领导邮箱</Button>
                <Button><ScheduleOutlined />信息公开</Button>
                <Button><ProjectOutlined />专题网站</Button>
                </Col>
                <Col className={st.footm} sm={8} xl={7}>
                    <div style={{height:100,width:'100%',background:`url('${url}images/foottit.png')`,backgroundSize:'100% 100%',margin:'20px 0px'}}></div>
                    <p>渝北校区：重庆市渝北区宝圣大道301号   邮编：401120</p>
                    <p>沙坪坝校区：重庆市沙坪坝区壮志路2号    邮编：400031</p>
                    <p>联系电话：023-67258207</p>
                </Col>
                <Col className={st.footr} sm={8} xl={5}>
                    <img src={`${url}images/wx.png`} alt="" />
                    <img src={`${url}images/wx.png`} alt="" />
                    <img src={`${url}images/wx.png`} alt="" />
                    <img src={`${url}images/wx.png`} alt="" />
                </Col>
            </Row>
        </div>
    )
}
export default Foot