import React from "react";
import { useNavigate } from "react-router-dom";
import {goToTripsPage} from "../routes/Coordinator";
import { goToLoginPage} from "../routes/Coordinator";



const HomePage =() => {
    const navigate = useNavigate()

    return (
         <div> 
          <h1> HomePage - LABEX </h1>
          <div>
              <button onClick={()=> goToTripsPage ( navigate) } > Viagens </button>
              <button onAuxClick={() => goToLoginPage ( navigate) } > Login Administrador </button>
          </div>
         </div> 

    );
};

export default HomePage 