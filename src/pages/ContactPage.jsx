import { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

function ContactPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function submitHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="Top">
      <Header />
      <h1 className="Contact">Contact Us</h1>
      <span className="OpenHours">
        <h2>Open Hours</h2>
        <p>Mondays: 7:00am-7:00pm</p>
        <p>Tuesdays: 7:00am-7:00pm</p>
        <p>Wednesdays: 7:00am-7:00pm</p>
        <p>Thursdays: 7:00am-7:00pm</p>
        <p>Friadays: 8:00am-10:00pm</p>
        <p>Saturdays: 8:00am-10:00pm</p>
        <p>Sundays: Closed</p>
      </span>
      <span className="Description">
        <span className=" Location">
          <p>
            {" "}
            <img
              src={require("../images/address.png")}
              className="Address"
              alt="address"
            />
            Address:
          </p>
          <p>34,Goshen Street,Federal Housing Lugbe, Abuja.</p>
        </span>
        <span className=" Mobile">
          <p>
            {" "}
            <img
              src={require("../images/call.png")}
              className="MobileCall"
              alt="call"
            />
            Call Us:
          </p>
          <p>+234 456 7455 432.</p>
          <p>+234 706 3375 519.</p>
        </span>
        <span className=" Whatsapp">
          <p>
            {" "}
            <img
              src={require("../images/whatsapp.png")}
              className="Whatsapp"
              alt="whatsapp"
            />
            Whatsapp:
          </p>
          <p>+234 706 3375 519.</p>
        </span>
        <span className=" Mail">
          <p>
            {" "}
            <img
              src={require("../images/mail.png")}
              className="Email"
              alt="mail"
            />
            Email:
          </p>
          <p>olaniyiopeyemi633@gmail.com</p>
        </span>
      </span>

      <span className="MessageUs">
        <h2 className="Message">Send Us a Message</h2>
        <p className="Caption">Your Satisfaction Is Our Number One Priority.</p>
        <fieldset>
          <legend>Contact Us </legend>
          <form>
            <p>
              {" "}
              <input
                type="text"
                placeholder="Enter your name"
                className="Name"
                required
              />{" "}
            </p>
            <p>
              {" "}
              <input
                type="email"
                placeholder="Enter your email address"
                className="Email"
                required
              />{" "}
            </p>
            <p>
              <input
                type="text"
                placeholder="Message "
                className="Request"
                required
              />
            </p>
            <div>
              <button className="Submit" onClick={submitHandler}>
                {" "}
                Submit
              </button>
            </div>
          </form>
        </fieldset>
      </span>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default ContactPage;
