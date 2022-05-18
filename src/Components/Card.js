import React from "react";
import "../App.css";
import { Card, CardBody, CardImg, CardTitle, CardGroup, Col } from "reactstrap";

const RoboCard = ({ image_url, name, username, email }) => {
  return (
    <>
      <Col md={3}>
        <CardGroup>
          <Card
            className="shadow mt-3 border-0 border-rounded effect"
            style={{
              cursor: "pointer",
            }}
          >
            <CardImg alt="Card image cap" src={image_url} />
            <CardBody>
              <CardTitle tag="h5" className="text-center">
                {name}
              </CardTitle>
              <p className="text-center">{username}</p>
              <p className="text-center text-primary ">{email}</p>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </>
  );
};

export default RoboCard;
