
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
  const [newHospitalized, setNewHospitalized] = useState([]);

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
      //ไม่เอาข้อมูล 60 รายการแรก
      const useData = res.data.Data.slice(60, res.data.Data.count);
      const updateState = (data,field)=>{
        setNewConfirmed(data.map(v => v.field));
      }
      //setCovidAllData(res.data);
      // const newConfirmedVal = []
      // const dateVal = []
      // const newRecoveredVal = []
      // const newDeathsVal = []
      // const NewHospitalized = useData.map(v => v.NewHospitalized)
      // console.log(NewHospitalized)

      // useData.map((v, i) => {
      //   newConfirmedVal.push(v.NewConfirmed);
      //   dateVal.push(v.Date);
      //   newRecoveredVal.push(v.NewRecovered);
      //   newDeathsVal.push(v.NewDeaths);
      // })

      setNewConfirmed(useData.map(v => v.NewConfirmed));
      setDateV(useData.map(v => v.Date));
      setNewRecovered(useData.map(v => v.NewRecovered));
      setNewDeaths(useData.map(v => v.NewDeaths));
      setNewHospitalized(useData.map(v => v.NewHospitalized));
      //console.log(newDeathsVal);

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
                  <i className="far fa-calendar" /> รักษาตัวในโรงพยาบาล (เพิ่ม/ลด) : {covidData.NewHospitalized}
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

              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart({dateV,newConfirmed,newRecovered,newDeaths,newHospitalized}).data}
                  options={dashboardNASDAQChart({dateV,newConfirmed,newRecovered,newDeaths,newHospitalized}).options}
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
                  <i className="fa fa-circle text-primary" /> รักษาตัวในโรงพยาบาล{" "}
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