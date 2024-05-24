import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// import soundFile from '../../public/Sounds/EmergencySound.js';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "lightbox2/dist/css/lightbox.css";
import "./YourComponent.css";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HeaderRight from "./HeaderRight";
const firebaseConfig = {
  apiKey: "AIzaSyAgGRwbMMcDLKqDwyHjBcPkqby55xqE7IY",
  authDomain: "ezeagros.firebaseapp.com",
  databaseURL: "https://ezeagros-default-rtdb.firebaseio.com",
  projectId: "ezeagros",
  storageBucket: "ezeagros.appspot.com",
  messagingSenderId: "439167074452",
  appId: "1:439167074452:web:3c7d7e9ceb86451e2f3481",
  measurementId: "G-BWYQHFVQXD",
};

let Typography = () => {
  const [locust, setLocust] = useState("yes");
  const [temperature, setTemperature] = useState("22 ℃");
  const [humidity, setHumidity] = useState("10%");
  const [aqi, setAqi] = useState("100 ppm");
  const [flames, setFlames] = useState(0);
  const [soilTemperature, setSoilTemperature] = useState("00 ℃");
  const [soilMoisture, setSoilMoisture] = useState("0%");
  const [soilTemperaturenode2, setSoilTemperaturenode2] = useState("00 ℃");
  const [soilMoisturenode2, setSoilMoisturenode2] = useState("0%");

  const thresholds = {
    temperature: 40,
    locustcheck: "Yes",
    humidity: 50,
    flames: 1,
    soilTemperature: 40,
    soilMoisture: 40,
    soilTemperatureNode2: 40,
    soilMoistureNode2: 40,
  };

  //
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [cropInfo, setCropInfo] = useState({}); // Add state to store crop information
  // const [isBlinking, setBlinking] = useState(false);
  const [isBlinkingTe, setBlinkingTe] = useState(false);
  const [isBlinkingLc, setBlinkingLc] = useState(false);
  const [isBlinkingHu, setBlinkingHu] = useState(false);
  const [isBlinkingFl, setBlinkingFl] = useState(false);
  const [isBlinkingSt, setBlinkingSt] = useState(false);
  const [isBlinkingSm, setBlinkingSm] = useState(false);
  const [isBlinkingSt2, setBlinkingSt2] = useState(false);
  const [isBlinkingSm2, setBlinkingSm2] = useState(false);
  // const [audioT, setAudioT] = useState(new Audio("/Sounds/Emergency.mp3"));
  const [audioL, setAudioL] = useState(new Audio("/Sounds/Emergency.mp3"));
  // const [audioH, setAudioH] = useState(new Audio("/Sounds/Emergency.mp3"));
  const [audioF, setAudioF] = useState(new Audio('/Sounds/Emergency.mp3'));
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  // const audio = new Audio("/Sounds/Emergency.mp3");

  useEffect(() => {
    const fetchData = () => {
      const dataRef = ref(database, "/");
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        // console.log(data);
        if (data) {
          let locustAnswer =
            data.LOCUST === 0 ? "No" : data.LOCUST === 1 ? "Yes" : "Undefined";

          setTemperature(`${data.temperature} ℃`);

          setSoilTemperature(`${data.Soil_Temperature_Node1} ℃`);
          setSoilTemperaturenode2(`${data.Soil_Temperature_Node1} ℃`);
          setAqi(`${data.CO} ppm`);
          setSoilMoisture(`${data.Soil_Moisture_Node1}%`);
          setSoilMoisturenode2(`${data.Soil_Moisture_Node1}%`);
          setHumidity(`${data.humidity}%`);
          setLocust(`${locustAnswer}`);
          setFlames(`${data.Fire}`);
        } else {
          console.error("Snapshot is null");
        }
      });
    };

    const fetchDataTimeout = setInterval(fetchData, 1000);

    return () => clearInterval(fetchDataTimeout);
  }); // Include relevant state values in the dependency array

  useEffect(() => {
    if (temperature) {
      const tempValue = parseFloat(temperature.split(" ")[0]);
      if (tempValue > thresholds.temperature) {
        // Perform actions when soil temperature is greater than 10 degrees
        console.log("Temperature is above 10 degrees.");
        // audioT.play();
        setBlinkingTe(true);
      } else {
        console.log("tempdown");
        // audioT.pause();
        // audioT.currentTime = 0;
        setBlinkingTe(false);
      }
    }
    if (locust) {
      if (locust == thresholds.locustcheck) {
        console.log("locust");
        audioL.play();
        setBlinkingLc(true);
      } else {
        audioL.pause();
        audioL.currentTime = 0;
        setBlinkingLc(false);
      }
    }
    if (humidity) {
      if (parseInt(humidity) > thresholds.humidity) {
        console.log("humidity");
        // audioH.play();
        setBlinkingHu(true);
      } else {
        // audioH.pause();
        // audioH.currentTime = 0;
        setBlinkingHu(false);
      }
    }
    if (flames) {
      if (flames == thresholds.flames) {
        console.log("flames");
        audioF.play();
        setBlinkingFl(true);
      } else {
        audioF.pause();
        audioF.currentTime = 0;
        setBlinkingFl(false);
      }
    }
    if (soilTemperature) {
      if (soilTemperature > thresholds.soilTemperature) {
        console.log("soil temperature");
        setBlinkingSt(true);
      } else {
        setBlinkingSt(false);
      }
    }
    if (soilMoisture) {
      if (soilMoisture > thresholds.soilMoisture) {
        console.log("Temperature is above 10 degrees.");
        setBlinkingSm(true);
      } else {
        setBlinkingSm(false);
      }
    }
    if (soilTemperaturenode2) {
      if (soilTemperaturenode2 > thresholds.soilTemperaturenode2) {
        console.log("Temperature is above 10 degrees.");
        setBlinkingSt2(true);
      } else {
        setBlinkingSt2(false);
      }
    }
    if (soilMoisturenode2) {
      if (soilMoisturenode2 > thresholds.soilMoisturenode2) {
        console.log("Temperature is above 10 degrees.");
        setBlinkingSm2(true);
      } else {
        setBlinkingSm2(false);
      }
    }
  }, [
    audioL,
    audioF,
    temperature,
    locust,
    humidity,
    flames,
    soilTemperature,
    soilMoisture,
    soilTemperaturenode2,
    soilMoisturenode2,
  ]);

  useEffect(() => {
    const updateCropInfo = () => {
      const cropData = {
        wheat: {
          crops: "Wheat",
          soil: "Type of soil suitable for wheat.",
          description:
            "Wheat is a staple food crop that thrives in various climates. It requires well-drained soil and is commonly grown in regions with a temperate climate.",
        },
        rice: {
          crops: "Rice",
          soil: "Type of soil suitable for rice.",
          description:
            "Rice is a primary food source for a large part of the world's population. It is typically grown in flooded fields and prefers loamy soil with good water retention.",
        },
        tomato: {
          crops: "Tomato",
          soil: "Sandy Loam Soil is the best for Tomato farming.",
          description:
            "Tomatoes are versatile vegetables used in various cuisines. They thrive in sandy loam soil, which provides good drainage and aeration for healthy plant growth.",
        },
        soybean: {
          crops: "Soybean",
          soil: "Loamy Soil is the best for Soybean farming.",
          description:
            "Soybeans are a valuable crop with numerous uses. They prefer loamy soil, a balanced mix of sand, silt, and clay, which provides optimal conditions for their development.",
        },
        cotton: {
          crops: "Cotton",
          soil: "Black Soil is the best for Cotton farming.",
          description:
            "Cotton is a vital fiber used in textile production. It flourishes in black soil, known for its fertility and moisture-retaining properties, creating favorable conditions for cotton plants.",
        },
        maize: {
          crops: "Maize",
          soil: "Well-Drained Soil is suitable for Maize farming.",
          description:
            "Maize, also known as corn, is a widely cultivated cereal crop. It thrives in well-drained soil and requires adequate sunlight and water for optimal growth.",
        },
        potato: {
          crops: "Potato",
          soil: "Loamy Soil with good drainage is ideal for Potato farming.",
          description:
            "Potatoes are an essential food crop globally. They prefer loamy soil with good drainage to prevent waterlogging, and they are grown for their underground tubers.",
        },
        sugarcane: {
          crops: "Sugarcane",
          soil: "Sandy Soil is suitable for Sugarcane farming.",
          description:
            "Sugarcane is a major source of sugar production. It grows well in sandy soil, which allows proper aeration and drainage, contributing to the development of its fibrous root system.",
        },
        coffee: {
          crops: "Coffee",
          soil: "Well-Drained, Acidic Soil is ideal for Coffee farming.",
          description:
            "Coffee plants thrive in well-drained, acidic soil. The altitude, rainfall, and temperature also play crucial roles in determining the quality of coffee beans produced.",
        },
        tea: {
          crops: "Tea",
          soil: "Acidic, Well-Drained Soil is suitable for Tea farming.",
          description:
            "Tea plants prefer acidic, well-drained soil. They are grown at higher elevations, and the climate and soil conditions significantly influence the flavor and aroma of tea leaves.",
        },
      };

      setCropInfo(cropData[selectedCrop] || {});
    };
    updateCropInfo();
  }, [selectedCrop]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.agileinfo-team-grid img {\n    width: 100%;\n    height: 400px; /* Adjust the height as needed */\n    object-fit: fill;\n}\n/* Style for the team member container */\n.agileinfo-team-grid {\n    float: left;\n    width: 16.666%; /* 100% divided by 6 members */\n    padding: 10px;\n    text-align: center;\n    box-sizing: border-box;}\n\n/* Adjust the width based on how many members you want per row */\n@media (max-width: 768px) {\n    .agileinfo-team-grid {\n        width: 33.33%; /* Show 3 members per row on smaller screens */\n    }\n}\n\n/* Add additional styles as needed for spacing and responsiveness */\n\n",
        }}
      />
      <div className="banner about-banner">
        <div className="header">
          <div className="container">
            <div className="header-left">
              <div className="w3layouts-logo">
                <h1>
                  <a href="/">
                    EzeAgro{" "}
                    <span>
                      <sup> </sup>
                    </span>
                  </a>
                </h1>
              </div>
            </div>
            <HeaderRight />
            <div className="clearfix"> </div>
          </div>
        </div>
        <NavBar />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `body{background-color:#fff;font-family:Arial,Helvetica,sans-serif;margin:0;padding:0;}
  .data-container{display:flex;flex-wrap:wrap;justify-content:space-between;margin:50px auto;background-color:#ffffff;box-shadow:1px 3px 20px rgba(0,0,0,0.1);border-radius:10px;padding:20px;}
  .data-item{text-align:center;width:calc(50% - 20px);margin-bottom:20px;border: 1px solid #ddd; padding: 10px;}
  .data-item h2{font-size:24px;font-weight:bold;margin:10px;}
  .data-item p{font-size:48px;font-weight:bold;color:#6eb7ff;}
  .data-head{margin:auto;width:50%;text-align:center;font-size:45px;font-weight:bold;margin:50px auto;padding:20px;box-shadow:0 5px 20px rgba(0,0,0,0.1);border-radius:20px;}`,
        }}
      />

      <div className="data-head">Sensor's Real Time Reading</div>
      <div className="data-container">
        <div className={`data-item ${isBlinkingLc ? "blinking" : ""}`}>
          <h2>Locus</h2>
          <p className="value" id="Locust">
            {locust}
          </p>
        </div>
        <div className={`data-item ${isBlinkingTe ? "blinking" : ""}`}>
          <h2>Surrounding Temp.</h2>
          <p className="value" id="temperature">
            {temperature}
          </p>
        </div>
        <div className={`data-item ${isBlinkingHu ? "blinking" : ""}`}>
          <h2>Surrounding Humidity</h2>
          <p className="value" id="humidity">
            {humidity}
          </p>
        </div>
        <div className={`data-item`}>
          <h2>CO</h2>
          <p className="value" id="AQI">
            {aqi}
          </p>
        </div>
        <div className={`data-item ${isBlinkingFl ? "blinking" : ""}`}>
          <h2>Flames</h2>
          <p className="value" id="Flame">
            {flames}
          </p>
        </div>
      </div>
      <div>
        {/* First Block */}
        <div className="data-container1">
          <div
            className={`data-item1 ${
              isBlinkingSm || isBlinkingSt ? "blinking" : ""
            }`}
          >
            <h3>Node1Values</h3>
            <h2>Soil Moisture</h2>
            <p className="value" id="Soil_Moisture">
              {soilMoisturenode2}
            </p>
            <h2>soilTemprature</h2>
            <p className="value" id="AQI">
              {soilTemperaturenode2}
            </p>
          </div>
          <div
            className={`data-item ${
              isBlinkingSm2 || isBlinkingSt2 ? "blinking" : ""
            }`}
          >
            <h3>Node2Values</h3>
            <h2>Soil Moisture</h2>
            <p className="value" id="AQI">
              {soilMoisture}
            </p>
            <h2>soilTemprature</h2>
            <p className="value" id="AQI">
              {soilTemperature}
            </p>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
    body {
      background-color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
    }
    
    .data-container1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 50px auto;
      background-color: #ffffff;
      box-shadow: 1px 3px 20px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 20px;
    }
    
    .data-item1 {
      text-align: center;
      width: calc(50% - 20px);
      margin-bottom: 20px;
      border: 1px solid #ddd;
      padding: 10px;
    }
    
    .data-item1 h2 {
      font-size: 24px;
      font-weight: bold;
      margin: 10px;
    }
    
    .data-item1 p {
      font-size: 48px;
      font-weight: bold;
      color: #6eb7ff;
    }
    
    .data-head1 {
      margin: auto;
      width: 50%;
      text-align: center;
      font-size: 45px;
      font-weight: bold;
      margin: 50px auto;
      padding: 20px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
    }
  `,
          }}
        />

        {/* Second Block */}
        {/* <div className="data-container1">
          <div className="data-item1">
            <h2>NPK values</h2>

            <p className="value" id="ph_Value">
              Nitrogen: {Nitrogen}
            </p>
            <p className="value" id="ph_Value">
              Potassuium: {Potassuium}
            </p>
            <p className="value" id="ph_Value">
              Phosphorus: {Phosphorus}
            </p>
          </div>
          <div className="data-item1">
            <h2>Ph Value</h2>
            <p className="value" id="ph_Value">
              {phValue}
            </p>
          </div>
        </div> */}
      </div>

      <div className="data-head">Select a Crop</div>
      <div className="data-container">
        {/* Create a dropdown menu for selecting a crop */}
        <select
          id="crop-select"
          onChange={(e) => setSelectedCrop(e.target.value)}
          value={selectedCrop}
        >
          <option value="wheat">Wheat</option>
          <option value="rice">Rice</option>
          <option value="tomato">Tomato</option>
          <option value="soybean">Soybean</option>
          <option value="cotton">Cotton</option>
          <option value="maize">Maize</option>
          <option value="potato">Potato</option>
          <option value="sugarcane">Sugarcane</option>
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
        </select>

        <div id="crop-info">
          <h2>Crop Information</h2>
          <p>{cropInfo.crops}</p>
          <p>{cropInfo.soil}</p>
          <p>{cropInfo.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Typography;
