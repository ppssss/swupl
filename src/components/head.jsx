import st from "./st.module.scss";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const Head = () => {
  const [scroTop, setScroTop] = useState(0);
  const handleScroll = (e) => {
    let scrollTop =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;
    setScroTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });

  if (scroTop > 100) {
    return (
      <div className={st.changenav}>
        <Row style={{ width: "100%" }}>
          <Col xl={5} sm={6}>
            <Link to="/">
              <img alt="" src={require("../images/logo.png").default} />
            </Link>
          </Col>
          <Col xl={17} sm={18}>
            <ul>
              <li>学校概况</li>
              <li>学校概况</li>
              <li>学校概况</li>
              <li>学校概况</li>
              <li>学校概况</li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className={st.nav}>
        <Row>
          <Col xl={5} sm={6}>
            <Link to="/">
              <div className={st.logo}>
                <img src={require("../images/logo.png").default} alt="" />
              </div>
            </Link>
          </Col>
          <Col xl={17} sm={18}>
            <div className={st.topright}>
              <ul className={st.t}>
                <a href="##">
                  <li>学生</li>
                </a>
                <a href="##">
                  <li>教职工</li>
                </a>
                <a href="##">
                  <li>校友</li>
                </a>
                <a href="##">
                  <li>访客</li>
                </a>
                <a href="##">
                  <li>智慧校园</li>
                </a>
                <a href="/search">
                  <li>
                    <SearchOutlined style={{ fontSize: "20px" }} />
                  </li>
                </a>
              </ul>
              <Menu mode="horizontal">
                <SubMenu key="one" title="学校概况">
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </SubMenu>

                <SubMenu key="two" title="机构设置">
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:5">Option 1</Menu.Item>
                    <Menu.Item key="setting:6">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.Item key="setting:7">Option 3</Menu.Item>
                  <Menu.Item key="setting:8">Option 4</Menu.Item>
                </SubMenu>

                <SubMenu key="three" title="建档工作">
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:9">Option 1</Menu.Item>
                    <Menu.Item key="setting:10">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.Item key="setting:11">Option 3</Menu.Item>
                  <Menu.Item key="setting:12">Option 4</Menu.Item>
                </SubMenu>

                <SubMenu key="four" title="工作中心">
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:13">Option 1</Menu.Item>
                    <Menu.Item key="setting:14">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.Item key="setting:15">Option 3</Menu.Item>
                  <Menu.Item key="setting:16">Option 4</Menu.Item>
                </SubMenu>

                <SubMenu key="five" title="保障工作">
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:17">Option 1</Menu.Item>
                    <Menu.Item key="setting:18">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.Item key="setting:19">Option 3</Menu.Item>
                  <Menu.Item key="setting:20">Option 4</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
};
export default Head;
