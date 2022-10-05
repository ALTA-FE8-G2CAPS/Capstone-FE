import React from "react";
import Image from "next/image";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

export const AddModal = ({
  show,
  add,
  handleClose,
  handleSubmit,
  handleInput,
}) => {
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
                  <Form.Control
                    name="name_venue"
                    type="text"
                    placeholder="placeholder"
                    onChange={(e) => handleInput(e)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Address"
                  className="mb-3"
                >
                  <Form.Control
                    name="Address_venue"
                    type="text"
                    placeholder="placeholder"
                    onChange={(e) => handleInput(e)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Latitude"
                  className="mb-3"
                >
                  <Form.Control
                    name="latitude"
                    type="number"
                    placeholder="placeholder"
                    onChange={(e) => handleInput(e)}
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Longitude"
                  className="mb-3"
                >
                  <Form.Control
                    name="longitude"
                    type="number"
                    placeholder="placeholder"
                    onChange={(e) => handleInput(e)}
                  />
                </FloatingLabel>
                <div>
                  <Image src="/map.jpg" width={500} height={200} />
                </div>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Description"
                >
                  <Form.Control
                    as="textarea"
                    name="description_venue"
                    placeholder="Leave a comment here"
                    style={{ height: "150px" }}
                    onChange={(e) => handleInput(e)}
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

export const RegisPlus = ({ show, handleClose, handleSubmit, handleInput }) => {
  return (
    <div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register User Plus</Modal.Title>
        </Modal.Header>

        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Body>
            <div>
              <p>
                For being an user plus please upload your venue picture and wait
                for our admin to verify your register. Please upload here
              </p>
            </div>
            <FloatingLabel controlId="floatingInput" label="Upload Picture">
              <Form.Control type="file" placeholder="placeholder" />
            </FloatingLabel>
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

export const VerifyModal = ({
  show,
  handleClose,
  handleSubmit,
  handleInput,
}) => {
  return (
    <div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Verify Account</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Modal.Body>
            <div>
              <p>Please verify this user plus account</p>
            </div>
            <FloatingLabel controlId="floatingSelect" label="Select verify">
              <Form.Select aria-label="Floating label select example">
                <option>Select</option>
                <option value="pending">Pending</option>
                <option value="verified">Verified</option>
              </Form.Select>
            </FloatingLabel>
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

export const AddFotoVenue = ({ show, handleClose, handleForm, handleFoto }) => {
  return (
    <div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Venue Photo</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => handleFoto(e)}>
          <Modal.Body>
            <div>
              <p>You can upload your picture here</p>
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="Upload your venue photo"
              className="mb-3"
            >
              <Form.Control
                type="file"
                name="foto_venue"
                placeholder="placeholder"
                onChange={(e) => handleForm(e)}
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
            <Button type="submit">Save</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
