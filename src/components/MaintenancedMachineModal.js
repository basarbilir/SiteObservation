import React from "react";
import Modal from "react-modal";
import moment from "moment";
const MaintenancedMachineModal = props => (
  <div>
    <Modal
      isOpen={props.selectedBox === "maintenancedmachine" ? true : false}
      contentLabel="Information Box"
      closeTimeoutMS={200}
    >
      <a onClick={props.handleClearSelectedBox} href="#" className="close"/>
      <div>
        <h1 id="title">Bakımdaki Makina Bilgisi</h1>
        <table id="students">
          <tbody>
            <tr>{props.renderTableHeaderMaintenancedMachine()}</tr>
            {props.machineEvents.machineDetails ? (
              props.machineEvents.machineDetails.map((student, index) => {
                const { events, factory, line, machine } = student; //destructuring
                let keyParameter = Object.keys(events)[0];
                let valueParameter = Object.values(events)[0];
                return (
                  <tr key={index}>
                    <td>{factory}</td>
                    <td>{line}</td>
                    <td>{machine}</td>
                    <td>{keyParameter}</td>
                    <td>{moment.unix(valueParameter/1000).format("HH:mm / DD.MM.YYYY")}</td>
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

export default MaintenancedMachineModal;
