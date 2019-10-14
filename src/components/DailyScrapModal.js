import React from "react";
import Modal from "react-modal";
const DailyScrapModal = props => (
  <div>
    <Modal
      isOpen={props.selectedBox === "dailyscrap" ? true : false}
      contentLabel="Information Box"
      closeTimeoutMS={200}
    >
      <a onClick={props.handleClearSelectedBox} href="#" className="close"/>
      <div>
      <button onClick={props.handleClearSelectedBox}>X</button>
        <h1 id="title">Günkük Iskarta</h1>
        <table id="students">
          <tbody>
            <tr>{props.renderTableHeaderDailyScrap()}</tr>
            {props.scraps.map((student, index) => {
              const {
                barcodeId,
                factory,
                line,
                camId,
                orderId,
                materialDescription
              } = student; //destructuring
              return (
                <tr key={barcodeId}>
                  <td>{barcodeId}</td>
                  <td>{factory}</td>
                  <td>{line}</td>
                  <td>{camId}</td>
                  <td>{orderId}</td>
                  <td>{materialDescription}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <button className="big-button" onClick={props.handleClearSelectedBox}>
        Tamam
      </button> */}
    </Modal>
  </div>
);

export default DailyScrapModal;
