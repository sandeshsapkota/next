import React, {useContext} from 'react';
import {UserContext} from "../../UserProvider";
import DashboardApp from "./DashboardApp"
import Homepage from "../../../pages/home/partials/Homepage";

function Container(props) {
    const [userDetail] = useContext(UserContext)
    const {login} = userDetail

    return (
        <div>
          <Homepage/>
        </div>
    );
}

export default Container;