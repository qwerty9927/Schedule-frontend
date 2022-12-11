import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './assets/css/style.css'
import SearchBar from "./views/SearchBar"
import Table from "./views/Table"
import Schedule from "./views/Schedule"
import TableResult from './views/TableResult'
import Footer from './views/Footer'

function Core(){
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="core">
        <SearchBar />
        <Table />
        <TableResult />
        <Schedule />
      </div>
      <Footer />
    </>
  )
}

export default Core