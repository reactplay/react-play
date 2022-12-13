import React from "react";

const Container = ({ children }) => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default Container;
