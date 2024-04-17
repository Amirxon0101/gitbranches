import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './customToastStyles.css'; // Import custom CSS file for styling

function Navbar() {
  const notify = () => toast("Good job");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        className="custom-toast-container" // Apply custom class for styling
      />
    </div>
  );
}

export default Navbar;
