import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';

const NotFound = () => {
  return (
    <div className="panel panel-default row">
      <div className="col-xs-0 col-sm-1 col-md-2" />
      <section className="col-xs-12 col-sm-10 col-md-8">
        <div className="well row">
          <p className="bg-danger text-center">Data not found</p>
        </div>
      </section>
      <div className="col-xs-0 col-sm-1 col-md-2" />
    </div>
  );
};

export default NotFound;
