import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
// container
// import ContainerApp from './components/container/Container';
// import ModalApp from './components/modal/ModalApp';
import NavbarApp from './components/navbar/Navbar';
import CardApp from './components/card/CardApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContainerApp /> */}
    {/* <ModalApp /> */}
    <NavbarApp />
    <CardApp />
  </StrictMode>,
)
