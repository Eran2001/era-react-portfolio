import PropTypes from "prop-types";

function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

// Prop validation
Pre.propTypes = {
  load: PropTypes.bool.isRequired,
};

export default Pre;
