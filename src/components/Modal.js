function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confrimHandler() {
    props.onConfirm();
  }
  return (
    <div className="Modal">
      <p>Are you Sure?</p>
      <button className="btn" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confrimHandler}>
        Confrim
      </button>
    </div>
  );
}
export default Modal;
