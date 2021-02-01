import React, { useState }  from "react";
import "./UploadPostWidget.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import PostCreationModal from './PostCreationModal';

function UploadPostWidget() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="post-container">
      <Container>
        <Row>
          <Col md="2" lg="2" sm="2" xs="2">
            <div className="postPhotoDiv">
              {/*User Image Display as of now dummy display*/}
            </div>
          </Col>
          <Col md="10" lg="10" sm="10" xs="10">
            <div className="postDiv" onClick={() => setModalShow(true)}>
              <p className="post-share">
                Would you mind sharing your Knowledge..!
              </p>
            </div>
            
          </Col>
        </Row>
      </Container>
      <div className="box">
        <Container>
          <Row>
            <Col sm="4" xs="4">
              <div className="icon-item" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon  icon={faImage} />
                <h5 className="icon-grp">Images</h5>
              </div>
            </Col>
            <Col sm="4" xs="4">
              <div className="icon-item" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon  icon={faNewspaper} />
                <h5 className="icon-grp">Write Article</h5>
              </div>
            </Col>
            <Col sm="4" xs="4">
              <div className="icon-item" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon  icon={faVideo} />
                <h5 className="icon-grp">Tutorial</h5>
              </div>
            </Col>
          </Row>
        </Container>
        <PostCreationModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export default UploadPostWidget;