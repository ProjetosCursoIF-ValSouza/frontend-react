import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"
import CardUser from "../ui/CardUser"

const QuemSomos = () => {
  return (
    <>
        <Header />
        <div id="main">
            <Sidebar />
            <Content>
              <h1>Quem Somos</h1>
              <CardUser />
            </Content>
        </div>
        <Footer />
    </>
  )
}

export default QuemSomos