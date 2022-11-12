import React from "react";

function ErrorAlert() {
  return (
    <>
      <div className="justify-content-center">
        <p className="pt-4 text-center text-warning">
          There is a error, Please try again . .
        </p>
        <h1 className="px-3 text-center">
          <i className="bx bx-error-alt bx-burst display-1 text-warning"></i>
        </h1>
      </div>
    </>
  );
}

export default ErrorAlert;
