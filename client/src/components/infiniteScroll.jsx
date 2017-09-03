/* global document */
/* global window */
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const defaultProps = {
  className: '',
};

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onScroll: PropTypes.func.isRequired,
};

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
      const { onScroll } = this.props;
      onScroll();
    }
  }

  render() {
    const { children, className } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

InfiniteScroll.defaultProps = defaultProps;
InfiniteScroll.propTypes = propTypes;

export default InfiniteScroll;