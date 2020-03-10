import React from 'react';

const H4 = (props) => {
  const { children } = props;
  const id = children.toString().replace(/\s+/g, '-').toLowerCase();
  return (
    <>
      <a id={id} className="docs-b-Link--anchor" />
      <h4
        className="
          docs-b-h4
          sprk-b-TypeDisplayFour
          sprk-u-mbm
          sprk-u-Measure
        "
        id={id}
        {...props}
      >
        {children}
      </h4>
    </>
  );
};

export default H4;
