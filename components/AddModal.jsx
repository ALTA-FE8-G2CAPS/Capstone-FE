import React from "react";
import dynamic from "next/dynamic";
import {
  Button,
  FloatingLabel,
  Form,
  Modal,
  InputGroup,
} from "react-bootstrap";
import styles from "../styles/Modal.module.css";

export const AddModal = ({
  show,
  add,
  handleClose,
  handleSubmit,
  handleInput,
  profile,
}) => {
  const OpenStreetMap = dynamic(() => import("./InputMap"), {
    ssr: false,
  });

  return (
    <div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title>
            {(add === "venue" && "Add Venue / Edit Venue") ||
              (add === "field" && "Add Field") ||
              (add === "review" && "Add Review") ||
              (add === "profile" && "Edit Profile") ||
              (add === "profileImage" && "Edit Image")}
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

                <Form.Group className="mt-3">
                  <Form.Label>
                    Mark Your Venue (click to see your mark)
                  </Form.Label>
                  <OpenStreetMap />
                </Form.Group>

                <InputGroup className="mt-3">
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    onChange={(e) => handleInput(e)}
                  />
                  <Form.Control
                    disabled
                    value="Check this box to save your mark"
                    aria-label="Text input with checkbox"
                  />
                </InputGroup>
              </div>
            )) ||
              (add === "field" && (
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Category"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="category"
                      placeholder="placeholder"
                      onChange={(e) => handleInput(e)}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Price/Hour"
                    className="mb-3"
                  >
                    <Form.Control
                      type="number"
                      name="price"
                      placeholder="placeholder"
                      onChange={(e) => handleInput(e)}
                    />
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
                    <Form.Control
                      type="number"
                      name="rate"
                      placeholder="placeholder"
                      onChange={(e) => handleInput(e)}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="floatingTextarea24"
                    label="Add review photo"
                    className="mb-3"
                  >
                    <Form.Control
                      name="foto_review"
                      type="file"
                      onChange={(e) => handleInput(e)}
                    />
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingTextarea2" label="Review">
                    <Form.Control
                      as="textarea"
                      name="feedback"
                      placeholder="Leave a comment here"
                      onChange={(e) => handleInput(e)}
                      style={{ height: "150px" }}
                    />
                  </FloatingLabel>
                </div>
              )) ||
              (add === "profile" && (
                <div>
                  <FloatingLabel
                    controlId="floatingusername"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control
                      name="name_user"
                      onChange={(e) => handleInput(e)}
                      value={profile?.name_user}
                      type="text"
                      placeholder="placeholder"
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    className="mb-3"
                    controlId="floatingTextarea23"
                    label="Address"
                  >
                    <Form.Control
                      name="address_user"
                      onChange={(e) => handleInput(e)}
                      value={profile?.address_user}
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </div>
              )) ||
              (add === "profileImage" && (
                <div>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Profile picture"
                    className="mb-3"
                  >
                    <Form.Control
                      name="foto_user"
                      onChange={(e) => handleInput(e)}
                      type="file"
                      placeholder="placeholder"
                    />
                  </FloatingLabel>
                </div>
              ))}
          </Modal.Body>

          <Modal.Footer>
            <button onClick={handleClose} className={styles.close}>
              Close
            </button>
            <button type="submit" className={styles.save}>
              Save
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export const RegisPlus = ({
  show,
  handleClose,
  handleRegSubmit,
  handleReg,
}) => {
  return (
    <div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title>Register User Plus</Modal.Title>
        </Modal.Header>

        <Form onSubmit={(e) => handleRegSubmit(e)}>
          <Modal.Body>
            <div>
              <p>
                For being an user plus please upload your venue picture and wait
                for our admin to verify your register. Please upload here
              </p>
            </div>
            <FloatingLabel controlId="floatingInput" label="Upload Picture">
              <Form.Control
                onChange={(e) => handleReg(e)}
                type="file"
                placeholder="placeholder"
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose} className={styles.close}>
              Close
            </button>
            <button className={styles.save} type="submit">
              Save
            </button>
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
        <Modal.Header closeButton className={styles.header}>
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
            <button className={styles.close} onClick={handleClose}>
              Close
            </button>
            <button className={styles.save} type="submit">
              Save
            </button>
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
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title>Add Venue Photo</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => handleFoto(e)}>
          <Modal.Body>
            <div>
              <p>Select your image</p>
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
            <button className={styles.close} onClick={handleClose}>
              Close
            </button>
            <button className={styles.save} type="submit">
              Save
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export const EditField = ({ showEdit, closeEdit, inputEdit, submitEdit }) => {
  return (
    <div>
      <Modal centered show={showEdit} onHide={closeEdit}>
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title>Edit Field</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => submitEdit(e)}>
          <Modal.Body>
            <div>
              <FloatingLabel
                controlId="floatingInput"
                label="Category"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="category"
                  placeholder="placeholder"
                  onChange={(e) => inputEdit(e)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Price/Hour"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="placeholder"
                  onChange={(e) => inputEdit(e)}
                />
              </FloatingLabel>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className={styles.close} onClick={closeEdit}>
              Close
            </button>
            <button className={styles.save} type="submit">
              Save
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export const AddSchedule = ({ showAdd, closeAdd, inputAdd, submitAdd }) => {
  return (
    <div>
      <Modal centered show={showAdd} onHide={closeAdd}>
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title>Add Schedule</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => submitAdd(e)}>
          <Modal.Body>
            <div>
              <FloatingLabel
                controlId="floatingInput"
                label="Day"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="day"
                  placeholder="placeholder"
                  onChange={(e) => inputAdd(e)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Open (ex: 08:00, 13:00, etc)"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="start_hours"
                  placeholder="placeholder"
                  onChange={(e) => inputAdd(e)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Close (ex: 08:00, 13:00, etc)"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="end_hours"
                  placeholder="placeholder"
                  onChange={(e) => inputAdd(e)}
                />
              </FloatingLabel>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className={styles.close} onClick={closeAdd}>
              Close
            </button>
            <button className={styles.save} type="submit">
              Save
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};
