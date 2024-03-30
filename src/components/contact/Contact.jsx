import { MdPhoneIphone } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

const Contact = ({ id, username, number, onDelete }) => {
  return (
    <li key={id}>
        <div>
      <BiSolidContact />
      <p>Name: {username}</p>
      </div>
      <div>
      <MdPhoneIphone />
      <p>Number: {number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
