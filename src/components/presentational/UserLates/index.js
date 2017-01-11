import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class UserLates extends Component {

  render() {
    return (
      <div>
      <svg 
      className={classnames('foo', { bar: true, duck: false }, 'baz', { quux: true })} 
      width='15px' 
      height='15px' 
      viewBox="0 0 24 24" 
      fill="red">
      <path d="M13,13H11V7H13M12,17.3A1.3,1.3 0 0,1 10.7,16A1.3,1.3 0 0,1 12,14.7A1.3,1.3 0 0,1 13.3,16A1.3,1.3 0 0,1 12,17.3M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3Z" />
      </svg>
      ----User Lates
      </div>
      )
  }
}