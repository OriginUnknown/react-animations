import React from 'react';
import './user-details.component.scss';
import avatarPlaceholder from '../../../assets/avatar-placeholder.png';

const userDetails = (props) => {
    const showUserDetails = (props.user.showUserDetailsView) ? (
        <div className="user-details">
            <div className="header">
                <img className="user-photograph" src={ avatarPlaceholder } alt="user image" />
                <div className="user-title">
                    <h2>{ props.user.data.name }</h2>
                    <p>{ props.user.data.title }</p>
                </div>
            </div>
            <div className="user-contact-details">
                <h4>User details</h4>
                <div className="user-details-list">
                    <p>
                        <span>Email:</span> { props.user.data.name }
                    </p>
                    <p>
                        <span>Phone:</span> { props.user.data.phone }
                    </p>
                    <p>
                        <span>Group:</span> { props.user.data.group }
                    </p>
                    <p>
                        <span>Current Location:</span> { props.user.data.location }
                    </p>
                </div>
            </div> 
        </div>
    ) : null;
    return showUserDetails;
};

export default userDetails;