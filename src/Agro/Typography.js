import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
// import soundFile from '../../public/Sounds/EmergencySound.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.css';
import './YourComponent.css';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import HeaderRight from './HeaderRight';
const firebaseConfig = {
  apiKey: "AIzaSyAgGRwbMMcDLKqDwyHjBcPkqby55xqE7IY",
  authDomain: "ezeagros.firebaseapp.com",
  databaseURL: "https://ezeagros-default-rtdb.firebaseio.com",
  projectId: "ezeagros",
  storageBucket: "ezeagros.appspot.com",
  messagingSenderId: "439167074452",
  appId: "1:439167074452:web:3c7d7e9ceb86451e2f3481",
  measurementId: "G-BWYQHFVQXD"
};


const Typography = () => {
  const [temperature, setTemperature] = useState("'22 ℃'");
  const [humidity, setHumidity] = useState('10%');
  const [soilTemperature, setSoilTemperature] = useState('00 ℃');
  const [soilMoisture, setSoilMoisture] = useState('00%');
  const [soilTemperaturenode2, setSoilTemperaturenode2] = useState('00 ℃');
  const [soilMoisturenode2, setSoilMoisturenode2] = useState('00%');
  const [aqi, setAqi] = useState('100 bpm');
  const [phValue, setPhValue] = useState('00');
  const [locust, setLocust] = useState('yes');
  const [Nitrogen, setNitrogen] = useState('yes');
  const [Potassuium, setPotassium] = useState('23');
  const [Phosphorus, setPhosphorus] = useState('23');
  const [selectedCrop, setSelectedCrop] = useState('wheat');
  const [cropInfo, setCropInfo] = useState({}); // Add state to store crop information
  const [answer, setAnswer] = useState(0);
  const [flames, setFlames] = useState(0);
  const [isBlinking, setBlinking] = useState(false);
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const audio = new Audio('/Sounds/Emergency.mp3');
  console.log("jbh", audio);


  //   useEffect(() => {

  //     const fetchData = () => {

  //       const randomTemperature = (20 + Math.random() * 10).toFixed(2);
  //       const randomSoilTemperature = (15 + Math.random() * 10).toFixed(2);
  //       const randomAqi = Math.floor(80 + Math.random() * 40);
  //       const randomSoilMoistureNode2 = Math.floor(40 + Math.random() * 30);
  //       const randomSoilMoisture = Math.floor(40 + Math.random() * 30);
  //       const randomSoilTemperatureNode2 = (15 + Math.random() * 10).toFixed(2);
  //       const randomNumber = parseFloat((7 + Math.random() * 1).toFixed(2));
  //       const humidityNumber = Math.round(30 + Math.random() * 5);
  //       const nitrogen = Math.round(30 + Math.random() * 5);
  //       const pottasium = Math.round(30 + Math.random() * 5);
  //       const phosphorus = Math.round(30 + Math.random() * 5);
  //       const loctus = Math.round(Math.random());

  //       let answers;
  //       if (loctus === 0) {
  //         answers = 'No';
  //       } else if (loctus === 1) {
  //         answers = 'Yes';
  //       } else {

  //         answers = 'Undefined';
  //       }
  //       const database = firebase.database();
  //       const dataRef = database.ref('your_data_path');
  //       dataRef.once('value').then((snapshot) => {
  //         const data = snapshot.val();
  //       setTemperature(`${database.ref('/temperature')} ℃`);
  //       setSoilTemperature(`${randomSoilTemperature} ℃`);
  //       setSoilTemperaturenode2(`${randomSoilTemperatureNode2} ℃`);
  //       setAqi(`${randomAqi} bpm`);
  //       setSoilMoisture(`${randomSoilMoisture}%`);
  //       setSoilMoisturenode2(`${randomSoilMoistureNode2}%`);
  //       setPhValue(randomNumber.toString());
  //       setHumidity(`${humidityNumber}%`);
  //       setLocust(`${loctus}`);
  //       setNitrogen(`${nitrogen}`);
  //       setPotassium(`${pottasium}`);
  //       setPhosphorus(`${phosphorus}`);
  //       setAnswer(`${answers}`);
  //     });
  //   };
  //   const fetchDataTimeout = setInterval(fetchData, 1000);

  //   return () => {
  //     clearInterval(fetchDataTimeout);
  //   };
  // }, []);

  useEffect(() => {

    const fetchData = () => {
      const dataRef = ref(database, '/');
      const thresholds = {
        temperature: 0,
        soilTemperature: 30,

      };
      const checkAndBlink = (value, threshold) => {
        console.log('Value:', value, 'Threshold:', threshold);
        if (Number(value) > threshold) {
          console.log('Blinking');
          setBlinking(true);
          // Add sound logic here (using an audio library or HTML audio element)
          // const audio = new Audio(soundFile);
          // audio.play();
        } else {
          console.log('Not Blinking');
          setBlinking(false);
        }
      };

      checkAndBlink(temperature, thresholds.temperature);
      checkAndBlink(soilTemperature, thresholds.soilTemperature);

      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        // console.log(data);
        if (data) {
          let locustAnswer;

          if (data.LOCUST === 0) {
            locustAnswer = 'No';
          } else if (data.LOCUST === 1) {
            locustAnswer = 'Yes';
          } else {

            locustAnswer = 'Undefined';
          }
          // console.log(answers);
          setTemperature(`${data.temperature} ℃`);
          setSoilTemperature(`${data.Soil_Temperature_Node1} ℃`);
          setSoilTemperaturenode2(`${data.Soil_Temperature_Node1} ℃`);
          setAqi(`${data.AQI} bpm`);
          setSoilMoisture(`${data.Soil_Moisture_Node1}%`);
          setSoilMoisturenode2(`${data.Soil_Moisture_Node1}%`);
          setPhValue(data.pH_Value);
          setHumidity(`${data.humidity}%`);
          setLocust(`${locustAnswer}`);
          setNitrogen(`${data.Nitrogen}`);
          setPotassium(`${data.Potassium}`);
          setPhosphorus(`${data.Phosphorous}`);
          setAnswer(`${locustAnswer}`);
          setFlames(`${data.FLAME}`);
        } else {
          // Handle the case when the snapshot is null
          console.error("Snapshot is null");
          // You might want to set default values or handle it differently
        }
      });
    };

    const fetchDataTimeout = setInterval(fetchData, 1000);

    return () => clearInterval(fetchDataTimeout);
  }, []); // Include relevant state values in the dependency array

  useEffect(() => {

    const updateCropInfo = () => {

      const cropData = {
        wheat: {
          crops: "Wheat",
          soil: "Type of soil suitable for wheat.",
          description: "Wheat is a staple food crop that thrives in various climates. It requires well-drained soil and is commonly grown in regions with a temperate climate."
        },
        rice: {
          crops: "Rice",
          soil: "Type of soil suitable for rice.",
          description: "Rice is a primary food source for a large part of the world's population. It is typically grown in flooded fields and prefers loamy soil with good water retention."
        },
        tomato: {
          crops: "Tomato",
          soil: "Sandy Loam Soil is the best for Tomato farming.",
          description: "Tomatoes are versatile vegetables used in various cuisines. They thrive in sandy loam soil, which provides good drainage and aeration for healthy plant growth."
        },
        soybean: {
          crops: "Soybean",
          soil: "Loamy Soil is the best for Soybean farming.",
          description: "Soybeans are a valuable crop with numerous uses. They prefer loamy soil, a balanced mix of sand, silt, and clay, which provides optimal conditions for their development."
        },
        cotton: {
          crops: "Cotton",
          soil: "Black Soil is the best for Cotton farming.",
          description: "Cotton is a vital fiber used in textile production. It flourishes in black soil, known for its fertility and moisture-retaining properties, creating favorable conditions for cotton plants."
        },
        maize: {
          crops: "Maize",
          soil: "Well-Drained Soil is suitable for Maize farming.",
          description: "Maize, also known as corn, is a widely cultivated cereal crop. It thrives in well-drained soil and requires adequate sunlight and water for optimal growth."
        },
        potato: {
          crops: "Potato",
          soil: "Loamy Soil with good drainage is ideal for Potato farming.",
          description: "Potatoes are an essential food crop globally. They prefer loamy soil with good drainage to prevent waterlogging, and they are grown for their underground tubers."
        },
        sugarcane: {
          crops: "Sugarcane",
          soil: "Sandy Soil is suitable for Sugarcane farming.",
          description: "Sugarcane is a major source of sugar production. It grows well in sandy soil, which allows proper aeration and drainage, contributing to the development of its fibrous root system."
        },
        coffee: {
          crops: "Coffee",
          soil: "Well-Drained, Acidic Soil is ideal for Coffee farming.",
          description: "Coffee plants thrive in well-drained, acidic soil. The altitude, rainfall, and temperature also play crucial roles in determining the quality of coffee beans produced."
        },
        tea: {
          crops: "Tea",
          soil: "Acidic, Well-Drained Soil is suitable for Tea farming.",
          description: "Tea plants prefer acidic, well-drained soil. They are grown at higher elevations, and the climate and soil conditions significantly influence the flavor and aroma of tea leaves."
        }
      };

      setCropInfo(cropData[selectedCrop] || {});
    };

    // Call the updateCropInfo function when selectedCrop changes
    updateCropInfo();
  }, [selectedCrop]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.agileinfo-team-grid img {\n    width: 100%;\n    height: 400px; /* Adjust the height as needed */\n    object-fit: fill;\n}\n/* Style for the team member container */\n.agileinfo-team-grid {\n    float: left;\n    width: 16.666%; /* 100% divided by 6 members */\n    padding: 10px;\n    text-align: center;\n    box-sizing: border-box;}\n\n/* Adjust the width based on how many members you want per row */\n@media (max-width: 768px) {\n    .agileinfo-team-grid {\n        width: 33.33%; /* Show 3 members per row on smaller screens */\n    }\n}\n\n/* Add additional styles as needed for spacing and responsiveness */\n\n"
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
                      <sup>Ezebudies</sup>
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
      <style dangerouslySetInnerHTML={{
        __html: `body{background-color:#fff;font-family:Arial,Helvetica,sans-serif;margin:0;padding:0;}
  .data-container{display:flex;flex-wrap:wrap;justify-content:space-between;margin:50px auto;background-color:#ffffff;box-shadow:1px 3px 20px rgba(0,0,0,0.1);border-radius:10px;padding:20px;}
  .data-item{text-align:center;width:calc(50% - 20px);margin-bottom:20px;border: 1px solid #ddd; padding: 10px;}
  .data-item h2{font-size:24px;font-weight:bold;margin:10px;}
  .data-item p{font-size:48px;font-weight:bold;color:#6eb7ff;}
  .data-head{margin:auto;width:50%;text-align:center;font-size:45px;font-weight:bold;margin:50px auto;padding:20px;box-shadow:0 5px 20px rgba(0,0,0,0.1);border-radius:20px;}`,
      }} />



      <div className="data-head"  >Sensor's Real Time Reading</div>
      <div className="data-container">
        <div className={`data-item ${isBlinking ? 'blinking' : ''}`}>
          <h2>Locus</h2>
          <p className="value" id="Locust">
            {locust}
          </p>
        </div>
        <div className="data-item">
          <h2>Surrounding Temp.</h2>
          <p className="value" id="temperature">
            {temperature}
          </p>
        </div>
        <div className="data-item">
          <h2>Surrounding Humidity</h2>
          <p className="value" id="humidity">
            {humidity}
          </p>
        </div>
        <div className="data-item">
          <h2>AQI</h2>
          <p className="value" id="AQI">
            {aqi}
          </p>
        </div>
        <div className="data-item">
          <h2>Flames</h2>
          <p className="value" id="Flame">
            {flames}
          </p>
        </div>
      </div>
      <div>
        {/* First Block */}
        <div className="data-container1">
          <div className="data-item1">
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
          <div className="data-item1">
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

        <style dangerouslySetInnerHTML={{
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
        }} />

        {/* Second Block */}
        <div className="data-container1">
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
        </div>
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
