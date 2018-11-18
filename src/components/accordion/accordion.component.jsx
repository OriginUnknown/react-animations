import React from 'react';
import './accordion.component.scss';
import UserLabel from './user-label/user-label.component';
import UserDetails from './user-details/user-details.component';

const accordion = (props) => {
    const Aux = props => props.children;

    return (
        <div className="accordion-container">
            <UserLabel customise={ props.config.header } />
            { props.config.users.map( (user, index) => (
                <Aux>
                    <UserLabel customise={ user.header } onToggleUserDetailsView={ () => props.showHideUserDetails(index) } />
                    <UserDetails user={ user } showUserDetails={ user.showUserDetailsView } />
                </Aux>
            ) ) }

        </div>
    )
};

export default accordion;