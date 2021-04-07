import React, { Component } from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterUpdate } from '../../redux/contacts/contacts-actions';

class Filter extends Component {
  static propTypes = {
    onChangeFilter: PropTypes.func,
  };

  render() {
    const { filterUpdate } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          className={styles.input}
          name="filter"
          type="text"
          onChange={e => filterUpdate(e.target.value)}
        ></input>
      </label>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { filterUpdate: contactName => dispatch(filterUpdate(contactName)) };
};

export default connect(undefined, mapDispatchToProps)(Filter);
