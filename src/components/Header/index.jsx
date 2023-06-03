import React from 'react';
import Input from '../Input';

const Header = () => {
  return (
    <div className="row flex justify-between items-center">
      <div className="col-4">
        <Input />
      </div>
      <div className="col-8">
        <h4 className="">
          weather<span className="fw-bold">Forecast</span>
        </h4>
      </div>
    </div>
  );
};

export default Header;
