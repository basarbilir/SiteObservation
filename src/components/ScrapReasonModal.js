import React from "react";
import Modal from "react-modal";
const ScrapReasonModal = props => (
  <div>
    <Modal
      isOpen={props.selectedBox === "scrapreason" ? true : false}
      contentLabel="Information Box"
      closeTimeoutMS={200}
    >
      <a onClick={props.handleClearSelectedBox} href="#" className="close"/>
      <div>
        <h1 id="title">Iskarta Nedenleri</h1>
        <table id="students">
          <tbody>
            <tr>{props.renderTableHeaderScrapReason()}</tr>
            {props.manuelScrapInfo[0] ? (
              props.manuelScrapInfo.map((student, index) => {
                const { description, value } = student; //destructuring
                return (
                  <tr key={index}>
                    <td>{description}</td>
                    <td>{value}</td>
                  </tr>
                );
              })
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>
      {/* <button className="big-button" onClick={props.handleClearSelectedBox}>
        Tamam
      </button> */}
    </Modal>
  </div>
);

export default ScrapReasonModal;
