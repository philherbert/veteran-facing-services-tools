import React from 'react';
import PropTypes from 'prop-types';

const SidebarBlock = props => {
  let headingContent = (
    <h2 className="vads-u-margin-top--0 vads-u-padding-bottom--1p5 vads-u-border-bottom--3px vads-u-border-color--primary sidebar-heading">
      {props.heading}
    </h2>
  );

  if (props.headingLevel === 3) {
    headingContent = (
      <h3 className="vads-u-margin-top--0 vads-u-padding-bottom--1p5 vads-u-border-bottom--3px vads-u-border-color--primary sidebar-heading">
        {props.heading}
      </h3>
    );
  }

  if (props.headingLevel === 4) {
    headingContent = (
      <h4 className="vads-u-margin-top--0 vads-u-padding-bottom--1p5 vads-u-border-bottom--3px vads-u-border-color--primary sidebar-heading">
        {props.heading}
      </h4>
    );
  }

  return (
    <div className="vads-u-margin-bottom--5">
      {headingContent}
      {props.content}
    </div>
  );
};

SidebarBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  headingLevel: PropTypes.string,
};

export default SidebarBlock;