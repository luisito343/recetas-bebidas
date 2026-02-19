import { Outlet } from "react-router"
import Header from "./Header"
import Footer  from "./Footer"
import Modal from "./Modal"
import Notification from "./Notification"

export const IndexLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Modal />
            <Notification />
            <Footer />
        </div>
    )
}
