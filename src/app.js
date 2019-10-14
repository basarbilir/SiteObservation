import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AlarmedMachineModal from "./components/AlarmedMachineModal";
import BrokenMachineModal from "./components/BrokenMachineModal";
import DailyScrapModal from "./components/DailyScrapModal";
import MachineChangeModal from "./components/MachineChangeModal";
import MaintenancedMachineModal from "./components/MaintenancedMachineModal";
import ScrapReasonModal from "./components/ScrapReasonModal";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      changes: [],
      machineEvents: [],
      manuelScrapInfo: [],
      plan: true,
      scrapInfo: [],
      selectedBox: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://kseramik-iot.appspot.com/_ah/api/sap/v1/summarize?factory=Granit"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            changes: result.changes,
            machineEvents: result.machineEvents,
            manuelScrapInfo: result.manuelScrapInfo,
            changes: result.changes,
            plan: true,
            scrapInfo: result.scrapInfo
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleClearSelectedBox = () =>
    this.setState(() => ({
      selectedBox: false
    }));

  renderTableHeaderMachineChange = () => {
    // let header = Object.keys(this.state.changes[0]);
    let header = [
      "FABRİKA",
      "HAT",
      "MAKİNA",
      "DEĞİŞİKLİK",
      "BARKOD",
      "SİPARİŞ",
      "MALZEME NO",
      "DEĞİŞİKLİK",
      "ALT DEĞİŞİKLİK",
      "PERSONEL NO",
      "TARİH",
      "AÇIKLAMA",
      "SİLME"
    ];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });

    //  )
  };

  renderTableHeaderAlarmedMachine = () => {
    // let header = Object.keys(
    //   this.state.machineEvents.machineDetails[1].machineDetails[0]
    // );
    let header = ["FABRİKA", "HAT", "MAKİNA", "BİLDİRİM KODU", "TARİH"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  renderTableHeaderBrokenMachine = () => {
    // let header = Object.keys(
    //   this.state.machineEvents.machineDetails[1].machineDetails[0]
    // );
    let header = ["FABRİKA", "HAT", "MAKİNA", "BİLDİRİM KODU", "TARİH"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  renderTableHeaderMaintenancedMachine = () => {
    // let header = Object.keys(
    //   this.state.machineEvents.machineDetails[1].machineDetails[0]
    // );
    let header = ["FABRİKA", "HAT", "MAKİNA", "BİLDİRİM KODU", "TARİH"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  renderTableHeaderScrapReason = () => {
    //let header = Object.keys(this.state.manuelScrapInfo[0]);
    let header = ["ISKARTA NEDENİ", "ISKARTA SAYISI"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  renderTableHeaderDailyScrap = () => {
    // let header = Object.keys(this.state.scrapInfo.scraps[0]);
    let header = [
      "BARKOD NO",
      "FABRİKA",
      "HAT",
      "KAMERA",
      "SİPARİŞ NO",
      "MALZEME TANIMI"
    ];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  render() {
    const myfunction = a =>
      this.setState(() => ({
        selectedBox: a
      }));
    const {
      error,
      isLoaded,
      changes,
      machineEvents,
      manuelScrapInfo,
      plan,
      scrapInfo
    } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="top-div">Saha Takip Ekranı - Granit Fabrikası</div>
          <div className="row-div">
            <div
              className="column-div"
              // onClick={myfunction}
              onClick={e => {
                myfunction("alarmedmachine");
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="alarmWidget">
                <h3 className="h3Class">Alarmlı Makina</h3>
                <h1 className="h1Class">
                  {machineEvents.machineDetails[0].count}
                </h1>

                <AlarmedMachineModal
                  machineEvents={this.state.machineEvents.machineDetails[0]}
                  renderTableHeaderAlarmedMachine={
                    this.renderTableHeaderAlarmedMachine
                  }
                  handleClearSelectedBox={this.handleClearSelectedBox}
                  selectedBox={this.state.selectedBox}
                ></AlarmedMachineModal>
              </div>
            </div>
            <div
              className="column-div"
              // onClick={myfunction}
              onClick={e => {
                myfunction("brokenmachine");
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="brokenWidget">
                <h3 className="h3Class">Arızalı Makina</h3>
                <h1 className="h1Class">
                  {machineEvents.machineDetails[1].count}
                </h1>
                <BrokenMachineModal
                  machineEvents={this.state.machineEvents.machineDetails[1]}
                  renderTableHeaderBrokenMachine={
                    this.renderTableHeaderBrokenMachine
                  }
                  handleClearSelectedBox={this.handleClearSelectedBox}
                  selectedBox={this.state.selectedBox}
                ></BrokenMachineModal>
              </div>
            </div>
            <div
              className="column-div"
              onClick={e => {
                myfunction("maintenancedmachine");
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="maintenancedWidget">
                <h3 className="h3Class">Bakımdaki Makina</h3>
                <h1 className="h1Class">
                  {machineEvents.machineDetails[2].count}
                </h1>
                <MaintenancedMachineModal
                  machineEvents={this.state.machineEvents.machineDetails[2]}
                  renderTableHeaderMaintenancedMachine={
                    this.renderTableHeaderMaintenancedMachine
                  }
                  handleClearSelectedBox={this.handleClearSelectedBox}
                  selectedBox={this.state.selectedBox}
                ></MaintenancedMachineModal>
              </div>
            </div>
          </div>
          <div className="row-div">
            <div
              className="column-div"
              // onClick={myfunction}
              onClick={e => {
                myfunction("dailyscrap");
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="widget">
                <h3 className="h3Class">Günlük Iskarta</h3>
                <h1 className="h1Class">{scrapInfo.count}</h1>
                <DailyScrapModal
                  scraps={this.state.scrapInfo.scraps}
                  renderTableHeaderDailyScrap={this.renderTableHeaderDailyScrap}
                  handleClearSelectedBox={this.handleClearSelectedBox}
                  selectedBox={this.state.selectedBox}
                ></DailyScrapModal>
              </div>
            </div>
            <div
              className="column-div"
              onClick={myfunction}
              style={{ cursor: "pointer" }}
            >
              <div className="widget">
                <h3 className="h3Class">Iskarta Yüzdesi</h3>
                <h1 className="h1Class">{scrapInfo.percentage}%</h1>
              </div>
            </div>
            <div
              className="column-div"
              onClick={myfunction}
              style={{ cursor: "pointer" }}
            >
              <div className="widget">
                <h3 className="h3Class">Plana Uyum</h3>
                <h1 className="h1Class">{plan ? "UYGUN" : "DEĞİL"}</h1>
              </div>
            </div>
          </div>
          <div className="row-div">
            <div
              className="column-div2"
              // onClick={myfunction}
              onClick={e => {
                myfunction("scrapreason");
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="widget">
                <h3 className="h3Class">Iskarta Nedenleri</h3>
                <ScrapReasonModal
                  manuelScrapInfo={this.state.manuelScrapInfo}
                  renderTableHeaderScrapReason={
                    this.renderTableHeaderScrapReason
                  }
                  handleClearSelectedBox={this.handleClearSelectedBox}
                  selectedBox={this.state.selectedBox}
                ></ScrapReasonModal>
                {manuelScrapInfo
                  .sort((a, b) => (a.value < b.value ? 1 : -1))
                  .map((scrap, index) =>
                    index < 4 ? (
                      <p key={scrap.description}>
                        {index + 1}-) {scrap.description}: {scrap.value}
                      </p>
                    ) : (
                      ""
                    )
                  )}
              </div>
            </div>
            <div
              className="column-div"
              onClick={e => {
                myfunction("machinechange");
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="widget">
                <h3 className="h3Class">Değişiklik Girişi</h3>
                <h1 className="h1Class">{!!changes ? changes.length : 0}</h1>
                <MachineChangeModal
                  changes={this.state.changes}
                  renderTableHeaderMachineChange={
                    this.renderTableHeaderMachineChange
                  }
                  handleClearSelectedBox={this.handleClearSelectedBox}
                  selectedBox={this.state.selectedBox}
                ></MachineChangeModal>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("app"));
