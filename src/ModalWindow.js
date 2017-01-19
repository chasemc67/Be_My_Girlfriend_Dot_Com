import React, { Component } from 'react';
import Modal from "react-modal";

export default class ModalWindow extends React.Component {
    constructor () {
      super();
      this.state = {
        accepted: false,
        declined: false
      }
      this.acceptTerms = this.acceptTerms.bind(this);
      this.declineTerms = this.declineTerms.bind(this);
      this.requstCloseModal = this.requstCloseModal.bind(this);
    }

    acceptTerms() {
      this.setState({
        accepted: true,
        declined: false
      });

      $.ajax({
        type: 'POST',
        url: '/contact',
        data: {
          message: "She said yes"
        }
      })
        .done((data) => {
          console.log(data.message);
        })
        .fail((jqXhr) => {
          // console.log(jqXhr.responseJSON.message);
          console.log("Post request failed");
        });
    }

    declineTerms() {
     this.setState({
        declined: true,
        accepted: false
      }); 

     $.ajax({
        type: 'POST',
        url: '/contact',
        data: {
          message: "She said no"
        }
      })
        .done((data) => {
          console.log(data.message);
        })
        .fail((jqXhr) => {
          // console.log(jqXhr.responseJSON.message);
          console.log("Post request failed");
        });
    }

    requstCloseModal() {
      this.props.closeModal();
      this.setState({
        accepted: false,
        declined: false
      });
    }

    getText() {
      if (this.props.modalType == "terms" && this.state.accepted == false && this.state.declined == false) {
        return (
          <div>
          <h1>Terms and Conditions</h1>
            <p>
              1. Genuinely liking and respecting each other <br/><br/>
              2. Doing things just to make each other happy <br/><br/>
              3. Enjoying and valuing time together; and actively working to make it happen <br/><br/>
              4. An ability to show – and accept – affection <br/><br/>
              5. A strong sense of commitment to the relationship; a willingness to stick with the relationship through momentary conflicts and periods of disinterest, or even dislike <br/><br/>
              6. Effective communication and problem-solving skills <br/><br/>
              7. A commitment to work through conflicts and disagreements in a respectful manner; along with an ability to forgive and accept forgiveness <br/><br/>
              8. Realistic and agreed upon expectations of each other; with a willingness to live up to those expectations <br/><br/>
              9. A shared philosophy of life—including values and priorities. This is very broad and very important. For instance, it includes shared attitudes about family and friends; and a shared philosophy on parenting <br/><br/>
              10. A satisfying sexual relationship <br/><br/>
          </p>

          <div className="acceptButton" style={{display: "inline-block", float: "left", marginLeft: "15%"}} onClick={this.acceptTerms}>
            <h1>Accept</h1>
          </div>

          <div className="acceptButton" style={{display: "inline-block", float: "right", marginRight: "15%"}} onClick={this.declineTerms}>
            <h1>decline</h1>
          </div>
          </div>
        );
      } else if (this.props.modalType == "declined" || this.state.declined == true) {
        return(
          <div className="smallText">
            <p>
              Fine. No love for you then.
          </p>
          </div>
        );
      } else if (this.state.accepted == true) {
        return(
          <div className="smallText">
            <p>
              Your request has been noted, and submitted for processing.<br/><br/>
              We will get back to you within 5-10 business days.<br/><br/>
            </p>
          </div>
        );
      }
    }

    render () {
      return (
        <div>
          <Modal onRequestClose={this.requstCloseModal} contentLabel={"Terms and Conditions"} isOpen={this.props.isOpen} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.4)'}}}>
          <button className="closeModalButton" onClick={this.requstCloseModal}>Close</button>
            {this.getText()}            

          </Modal>
        </div>
      );
    }
  }
