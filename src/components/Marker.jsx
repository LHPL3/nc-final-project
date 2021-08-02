import React, { useEffect, useState } from 'react';
import { getGroupData } from '../utils/api';
import { Entity, Scene } from 'aframe-react';

const Marker = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [groupData, setGroupData] = useState({});
  const [lookupObj, setLookupObj] = useState([]);
  const [html, setHTML] = useState('');

  const groupName = localStorage.getItem('groupName');

  // useEffect(() => {
  //   getGroupData(groupName)
  //     .then((response) => {
  //       setGroupData(response);
  //       setLookupObj(Object.keys(groupData));
  //     })
  //     .then((response) => {
  //       setIsLoading(false);
  //       setTimeout(() => {
  //         let wrapper = document.createElement('div');
  //         let query = `<a href='https://rorymcdonnell.github.io/nc-final-project/${groupName}'><button class="a-enter-vr-button">Exit</button></a><a-scene artoolkit vr-mode-ui="enabled: false"><a-camera gps-camera rotation-reader></a-camera>`;
  //         let trackers = '';
  //         lookupObj.forEach((member) => {
  //           trackers += `<a-box color="yellow" gps-entity-place="latitude: ${groupData[member].position.latitude}; longitude: ${groupData[member].position.longitude}"/>`;
  //         });
  //         query += trackers;
  //         query += `</a-scene>`;
  //         setHTML(query);
  //         console.log(html);
  //         wrapper.innerHTML = html;
  //         document.body.appendChild(wrapper);
  //       }, 3000);
  //     });
  // }, [location]);
  //a-camera gps-camera rotation-reader
  return (
    <Scene vr-mode-ui="enabled: false">
      <Entity camera="gps-camera rotation reader" />
      <Entity
        primitive="a-box"
        gps-entity-place="latitude: 52; longitude: 10"
        color="blue"
      />
    </Scene>
  );
};

export default Marker;

/*

 `<a-scene artoolkit><a-camera gps-camera rotation-reader></a-camera><a-box color="yellow" gps-entity-place="latitude: 52.675541; longitude: 1.231280"/><a-box color="red" gps-entity-place="latitude: 52.675507; longitude: 1.230954"/><a-box color="blue" gps-entity-place="latitude: 52.675585; longitude: 1.231684"/></a-scene>`;
*/
