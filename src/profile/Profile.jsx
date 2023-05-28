import React from "react";
import PropTypes from "prop-types";

function Profile({ fullName, bio, profession, children, handleName }) {
  return (
    <div>
      <div style={styles.imageContainer}>{children}</div>
      <h1 style={styles.h1}>{fullName}</h1>
      <p style={styles.p}>{bio}</p>
      <p style={styles.p}>{profession}</p>
      <div style={styles.buttonContainer}>
        <button onClick={handleName} style={styles.button}>
          Show Name
        </button>
      </div>
    </div>
  );
}
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: "Unknown",
  bio: "No bio available",
  profession: "Unknown",
  children: <div>No image available</div>,
  handleName: () => {},
};

const styles = {
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
  p: {
    color: "#fff",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "400",
    marginBottom: "10px",
  },
  h1: {
    fontSize: "25px",
    color: "#fff",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "800",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default Profile;
