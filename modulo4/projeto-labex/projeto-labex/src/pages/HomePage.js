import React, {useState,useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import applicationFormPage from "./ApplicationFormPage"
import CreatTripPage from "./CreatTripPage"
import LoginPage from "./LoginPage"
import ListTripsPage from "./ListTripsPage"
import TripDetailsPage from "./TripDetailsPage"

const HomePage =() => {

    return (
         <div> 
          <h1> LABEX </h1>
          <div>
              <button> Viagens </button>
              <button> Login Administrador </button>
          </div>
         </div> 

    )
}

export default HomePage 