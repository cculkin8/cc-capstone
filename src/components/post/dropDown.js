
 import React from 'react';
 import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
 
 export const dropDowns = () => {
   constructor() 
     super();

 
   render() 
     return (
         <div className="dropDownDiv">
<       DropdownMenu className="skillDrop" text="Skill Level">
        <MenuItem text="Beginner"/>
        <MenuItem text="Intermediate"/>
        <MenuItem text="Advanced"/>
        </DropdownMenu>
        <DropdownMenu className="trafficDrop" text="Traffic Level">
        <MenuItem text="Low"/>
        <MenuItem text="Medium"/>
        <MenuItem text="High"/>
         </DropdownMenu>
         <DropdownMenu className="trafficDrop" text="Traffic Level">
        <MenuItem text="Short"/>
        <MenuItem text="Average"/>
        <MenuItem text="Long"/>
         </DropdownMenu>
        </div>
     );
   }

 