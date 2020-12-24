import React from 'react';
import profiles from './../data/berlin.json';

const FaceBook = () => {
  return (
    <div>
      {profiles.map((profile) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src={profile.img} alt="" style={{ width: '150px' }} />

            <div>
              <p>First Name: {profile.firstName} </p>
              <p>Last Name: {profile.lastName} </p>
              <p>Country: {profile.country} </p>
              <p>Type: {profile.student ? 'Student' : 'Teacher'} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;
