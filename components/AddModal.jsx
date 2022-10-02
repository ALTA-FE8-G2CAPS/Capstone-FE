import React from "react";
import Image from "next/image";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";

const AddModal = ({ show, add, handleClose, handleSubmit, handleInput }) => {
  return (
    <div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {(add === "venue" && "Add Venue / Edit Venue") ||
              (add === "field" && "Add Field / Edit Field") ||
              (add === "review" && "Add Review") ||
              (add === "profile" && "Edit Profile")}
          </Modal.Title>
        </Modal.Header>

        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Body>
            {(add === "venue" && (
              <div>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Venue Name"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="placeholder" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Address"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="placeholder" />
                </FloatingLabel>
                <div>
                  <Image src="/map.jpg" width={500} height={200} />
                </div>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Upload your venue photo"
                  className="mb-3"
                >
                  <Form.Control type="file" placeholder="placeholder" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Description"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "150px" }}
                  />
                </FloatingLabel>
              </div>
            )) ||
              (add === "field" && (
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Category"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="placeholder" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Price/Hour"
                    className="mb-3"
                  >
                    <Form.Control type="number" placeholder="placeholder" />
                  </FloatingLabel>
                </div>
              )) ||
              (add === "review" && (
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Rate (out of 5)"
                    className="mb-3"
                  >
                    <Form.Control type="number" placeholder="placeholder" />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingTextarea2" label="Review">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "150px" }}
                    />
                  </FloatingLabel>
                </div>
              )) ||
              (add === "profile" && (
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="placeholder" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="placeholder" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="placeholder" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Address"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="placeholder" />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Upload your picture"
                    className="mb-3"
                  >
                    <Form.Control type="file" placeholder="placeholder" />
                  </FloatingLabel>
                </div>
              ))}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AddModal;
