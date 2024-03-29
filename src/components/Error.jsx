import PropTypes from "prop-types";
const Error = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-[600px] p-4">
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-red-700">{message}</span>
      </div>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
