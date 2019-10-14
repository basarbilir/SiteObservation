import React from "react";
import Modal from "react-modal";
import moment from "moment";
const MachineChangeModal = props => (
  <div>
    <Modal
      isOpen={props.selectedBox === "machinechange" ? true : false}
      contentLabel="Information Box"
      closeTimeoutMS={200}
    >
      <a onClick={props.handleClearSelectedBox} href="#" className="close"/>
      <div>
        <h1 id="title">Makina Değişiklik Ekranı</h1>
        <table id="students">
          <tbody>
            <tr>{props.renderTableHeaderMachineChange()}</tr>
            {props.changes ? (
              props.changes.map((student, index) => {
                const {
                  barcode,
                  changeId,
                  changeType,
                  deleteFlag,
                  description,
                  header,
                  material,
                  orderId,
                  personnelNo,
                  subChangeType,
                  timestamp
                } = student; //destructuring
                return (
                  <tr key={changeId}>
                    <td>{header.factory}</td>
                    <td>{header.line}</td>
                    <td>{header.machine}</td>
                    <td>{changeId}</td>
                    <td>{barcode}</td>
                    <td>{orderId}</td>
                    <td>{material}</td>
                    <td>{changeType}</td>
                    <td>{subChangeType}</td>
                    <td>{personnelNo}</td>
                    <td>{moment.unix(timestamp/1000).format("HH:mm / DD.MM.YYYY")}</td>
                    <td>{description}</td>
                    <td>{deleteFlag.toString()}</td>
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

export default MachineChangeModal;
