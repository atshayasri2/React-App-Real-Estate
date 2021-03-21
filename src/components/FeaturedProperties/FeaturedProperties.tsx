import React from "react";
import "./FeaturedProperties.css";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Compareprod from "../CompareProperty/CompareProducts";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { setItemToCompareReducer } from "../../store/compare/compare.action";
export interface IRoomDetail {
  id: number;
  name: string;
  imgURL: string;
  title: string;
  location: string;
  price: string;
  type: string;
  squarefeet: number;
  noOfBeds: number;
  noOfBaths: number;
  taxiAvailability: string;
}

const mapDispatchToStore = (dispatch: Dispatch) => {
  return {
    sendToRedux: (item: IRoomDetail) => dispatch(setItemToCompareReducer(item)),
  };
};

const reduxConnector = connect(null, mapDispatchToStore);

interface IProps
  extends RouteComponentProps,
    ConnectedProps<typeof reduxConnector> {
  properties: IRoomDetail[];
}

interface IState {
  showModal: boolean;
  modalData: IRoomDetail;
  passData: IRoomDetail;
}

class FeaturedProperties extends React.Component<IProps, IState> {
  public state: IState = {
    showModal: false,
    modalData: {} as IRoomDetail,
    passData: {} as IRoomDetail,
  };

  check = (typec: string) => {
    if (typec === "For Sale") return "sale";
    else {
      return "rent";
    }
  };

  render() {
    return (
      <div className="allcards">
        <div className="cards-header">
          <h3>FEATURED PROPERTIES</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
          <p>labore et dolore magna aliquan ut enim ad minim veniam.</p>
          <div className="compareProperty">
            <Compareprod></Compareprod>
          </div>
        </div>
        <div className="row">
          {this.props.properties.map((item, index) => (
            <div className="column" key={index}>
              <div className="card">
                <div className="icon-bar">
                  <div className="top-left">
                    <img src={item.imgURL} alt="room" />
                    <div className="textover">
                      <p className={this.check(item.type)}> {item.type}</p>
                    </div>
                  </div>
                  <div className="flex3">
                    <div>
                      <p className="card-title">{item.title}</p>
                      <p className="card-location">
                        <i className="fa fa-map-marker"></i> {item.location}
                      </p>
                    </div>
                    <div>
                      <button className="btn2">{item.price}</button>
                    </div>
                  </div>
                  <div className="flex4">
                    <p>
                      <i className="fa fa-arrows-alt"></i> {item.squarefeet}
                    </p>
                    <p>
                      <i className="fa fa-bed"></i> {item.noOfBeds} Beds
                    </p>
                    <p>
                      <i className="fa fa-paw"></i> {item.noOfBaths + " Baths"}
                    </p>
                    <p>
                      <i className="fa fa-taxi"></i> {item.taxiAvailability}
                    </p>
                  </div>

                  <button
                    className="compare-btn"
                    onClick={() => {
                      // this.setState({ showModal: true, modalData: item });
                      this.props.history.push({
                        // pathname: `/products/${item.name.toLowerCase()}/${
                        //   item.id
                        // }`,
                        pathname: `/products/${item.id}`,
                        // state: { detail: this.state.passData },
                        // state: { message: "helo" },
                      });
                    }}
                  >
                    View Detail
                  </button>
                  <button
                    className="compare-btn"
                    onClick={() => {
                      this.props.sendToRedux(item);
                      this.setState({ passData: item });
                    }}
                  >
                    Compare
                  </button>
                  {/* <Link to={`/products/${item.name}`}>{item.name}</Link> */}
                  {/* <Link
                    to={{
                      pathname: `/products/${item.name}`,
                      state: {
                        rowData: { item },
                      },
                    }}
                  >
                    {" "}
                    {item.name}
                  </Link> */}
                  {/* <Product title={item.title} location={item.location} price={ item.price}/> */}
                </div>
              </div>
            </div>
          ))}
          {/* {this.state.showModal && (
            <div id="modal" className="show">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Viewing property</h5>

                    <button onClick={() => this.setState({ showModal: false })}>
                      X
                    </button>
                  </div>
                  <div className="modal-body">
                    <img
                      src={this.state.modalData.imgURL}
                      width="300"
                      height="200"
                    />
                    <h3>{this.state.modalData.title}</h3>
                    <h4>{this.state.modalData.location}</h4>
                    <h4>{this.state.modalData.type}</h4>
                    <h4>{this.state.modalData.price}</h4>
                  </div>
                  <div className="modal-footer">
                    <div>
                      <button
                        onClick={() => this.setState({ showModal: false })}
                        className="btn"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    );
  }
}
export default reduxConnector(withRouter(FeaturedProperties));
