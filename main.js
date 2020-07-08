import React from 'react';
import { render } from 'react-dom';

import '../css/main.css';

import DonutChart from '../../../index';

import mock from '../../../mock/graph.js';

const mountNode = document.querySelector('#root');

render(<div>
       <h1><center>My Daily Progress:</center></h1>
       <br></br>
       <DonutChart
       data= { mock }
       onMouseEnter = {
           (item) => {
               console.log(`mousing over: ${item.label}`);
               return item;
           }
       }
       onClick = {
           (item, toggled) => {
               if (toggled) {
                   console.log(`selecting: ${item.label}`);
               } else {
                   console.log(`unselecting: ${item.label}`);
               }
               return item;
           }
       }
       />
       </div>, mountNode);
