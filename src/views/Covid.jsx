
import React, { Component, useState, useEffect, useCallback } from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboardNASDAQChart
} from "variables/charts.jsx";

import axios from 'axios'
import numeral from "numeral";

// class Dashboard extends React.Component {

const Dashboard = () => {
  const [covidData, setCovidData] = useState({});
  const [covidAllData, setCovidAllData] = useState({});
  const [newConfirmed, setNewConfirmed] = useState([]);
  const [newRecovered, setNewRecovered] = useState([]);
  const [newDeaths, setNewDeaths] = useState([]);

  const [dateV, setDateV] = useState([]);
  const getData = async () => {
    try {

      const res = await axios.get('https://covid19.th-stat.com/api/open/today');
      //console.log(res.data);
      setCovidData(res.data);


    } catch (error) {
      console.log(error);
    }
  }
  const getAllData = async () => {
    try {

      const res = await axios.get('https://covid19.th-stat.com/api/open/timeline');
      //console.log(res.data);
      setCovidAllData(res.data);
      const newConfirmedVal = []
      const dateVal = []
      const newRecoveredVal = []
      const newDeathsVal = []

      res.data.Data.slice(60, res.data.Data.count).map((v, i) => {
        newConfirmedVal.push(v.NewConfirmed);
        dateVal.push(v.Date);
        newRecoveredVal.push(v.NewRecovered);
        newDeathsVal.push(v.NewDeaths);
      })

      setNewConfirmed(newConfirmedVal);
      setDateV(dateVal);
      setNewRecovered(newRecoveredVal);
      setNewDeaths(newDeathsVal);
      console.log(newDeathsVal);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    getData();
    getAllData();

    return () => {
      console.log('clenShop');
    }
  }, [])

  // const dashboardNASDAQChart = {
  //   data: {
  //     labels: dateV,
  //     datasets: [
  //       {
  //         data: newConfirmed,
  //         fill: false,
  //         borderColor: "#fbc658",
  //         backgroundColor: "transparent",
  //         pointBorderColor: "#fbc658",
  //         pointRadius: 4,
  //         pointHoverRadius: 4,
  //         pointBorderWidth: 8
  //       },
  //       {
  //         data: newRecovered,
  //         fill: false,
  //         borderColor: "#51CACF",
  //         backgroundColor: "transparent",
  //         pointBorderColor: "#51CACF",
  //         pointRadius: 4,
  //         pointHoverRadius: 4,
  //         pointBorderWidth: 8
  //       },
  //       {
  //         data: newDeaths,
  //         fill: false,
  //         borderColor: "#EF8157",
  //         backgroundColor: "transparent",
  //         pointBorderColor: "#EF8157",
  //         pointRadius: 4,
  //         pointHoverRadius: 4,
  //         pointBorderWidth: 8
  //       }
  //     ]
  //   },
  //   options: {
  //     legend: {
  //       display: false,
  //       position: "top"
  //     }
  //   }
  // };

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-world-2 text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ผู้ติดเชื้อเพิ่ม</p>
                      <CardTitle tag="p">{covidData.NewConfirmed}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> ข้อมูล ณ : {covidData.UpdateDate}
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-briefcase-24 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ผู้ติดเชื้อรวม</p>
                      <CardTitle tag="p">{numeral(covidData.Confirmed).format('0,0')}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> สถิติติดเชื้อ (เพิ่ม/ลด) : {covidData.NewHospitalized}
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-success">
                      <i className="nc-icon nc-satisfied text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">รักษาหายแล้ว</p>
                      <CardTitle tag="p">{numeral(covidData.Recovered).format('0,0')}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" />กำลังรักษาอีก : {numeral(covidData.Hospitalized).format('0,0')}
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-sound-wave text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">เสียชีวิตเพิ่ม</p>
                      <CardTitle tag="p">{covidData.NewDeaths}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> เสียชีวิตรวม : {covidData.Deaths}
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">กราฟสถิติผู้ติดเชื้อ : ประเทศไทย</CardTitle>
                <p className="card-category">Amount</p>
                {
                  console.log(covidAllData.Data)
                }
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart({dateV,newConfirmed,newRecovered,newDeaths}).data}
                  options={dashboardNASDAQChart({dateV,newConfirmed,newRecovered,newDeaths}).options}
                  width={400}
                  height={150}
                  datasetKeyProvider={() => Math.random()}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-warning" /> จำนวนผู้ติดเชื้อเพิ่ม {" "}
                  <i className="fa fa-circle text-info" /> จำนวนผู้รักษาหายแล้ว{" "}
                  <i className="fa fa-circle text-danger" /> จำนวนผู้เสียชีวิต{" "}
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data At : {covidData.UpdateDate}
                  </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
