import { Layout, Image } from "antd";
import { Menu } from "antd";
import SideMenu from "./components/Sidemenu";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import AppRoutes from "./components/AppRoutes";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const { Sider, Content, Footer, Header } = Layout;
Amplify.configure(awsconfig);

function App() {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="https://pulsosanluisrm.blob.core.windows.net/images/2019/07/17/uefbpost-focus-0-0-696-423.png"
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: "center" }}>ubereats copyright</Footer>
      </Layout>
    </Layout>
  );
}

export default withAuthenticator(App);
