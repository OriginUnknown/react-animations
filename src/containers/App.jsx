import React from 'react';
import DATA_DETAILS from '../resources/data';
import './App.scss';
import Accordion from '../components/accordion/accordion.component';

class App extends React.PureComponent {
  state = {
    usersData: {
      header: {
        checkbox: {
          id: 'users',
          name: 'Users'
        },
        cssStyleKeys: ["upperCaseLabels", "boldText"],
        content: {
          caption: {
            forPara1: "Group",
            forPara2: "Last Active"
          }
        }
      },
      users: DATA_DETAILS.data.map( (user) => {
        let userObj = {
          header: {
            checkbox: {},
            content: { caption: {}, showCaret: true },
            caret: {
              animate: false
            }
          },
          data: {},
          showUserDetailsView: false
        };
        userObj.header.checkbox['id'] = user.email;
        userObj.header.checkbox['name'] = user.email;
        userObj.header.content.caption['forPara1'] = user.group;
        userObj.header.content.caption['forPara2'] = user.lastactive;
        userObj.data = user;
        return userObj;
      })
    }
  };

  showSelectedUser = (userIndex) => {
    let users = [...this.state.usersData.users];
    users[userIndex] = { 
      ...users[userIndex],  
      showUserDetailsView: !users[userIndex].showUserDetailsView,
      header: {
        ...users[userIndex].header,
        caret: { animate: !users[userIndex].header.caret.animate }
      }
    };

    console.log(users);

    this.setState((prevState) => ({
      ...prevState, usersData: {
        ...prevState.usersData, users: users
      }
    }));
  }

  render() {
    return (
      <div>
        <Accordion config={ this.state.usersData } showHideUserDetails={ this.showSelectedUser } />
      </div>
    );
  }
}

export default App;
