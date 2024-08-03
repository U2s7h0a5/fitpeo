import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsMenuButtonWideFill
} from "react-icons/bs";
import {
  BarChart,
  Bar,  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer, 
} from "recharts";

function Home() {

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const cardData = [
    {
      name: "Total Orders",
      icon: <BsFillArchiveFill />,
      amount: 75,
      percentage: "5%",
    },
    {
      name: "Total Delivered",
      icon: <BsFillGrid3X3GapFill />,
      amount: 75,
      percentage: "5%",
    },
    {
      name: "Total Cancelled",
      icon: <BsPeopleFill />,
      amount: 75,
      percentage: "5%",
    },
    {
      name: "Total Revenue",
      icon: <BsFillBellFill />,
      amount: 75,
      percentage: "5%",
    },
  ];

  return (
    <main className="main-container">
      {/* <div className="main-title">
        <h3>DASHBOARD</h3>
      </div> */}
      <div className="body">
        <div className="col-md-12">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="main-cards">
                {cardData.map((item, i) => {
                  return (
                    <div className="card" >
                      <div className="card-inner">
                        <div>{item.icon}</div>
                        <div style={{color:'white'}}>{item.name}</div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{color:'white'}}>{item.amount}</div>
                          <div style={{color:'white'}}>{item.percentage}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="main-cards1">
                <div className="card">
                  <div className="card-inner">
                    <div style={{color:'white'}}>Net Profit</div>
                    <div style={{color:'white'}}>$6759.25</div>
                    <div style={{color:'white'}}>3%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        {/* <div className="col-md-12"> */}
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="">
            <div className="charts">
              <ResponsiveContainer width="100%" height="90%">
              <h5 style={{ color: 'white'}}>My Bar Chart</h5>
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,                                       
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#ffffff"/>
                  <YAxis  stroke="#ffffff"/>
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="charts">
              <div className="card">
                {/* <div  > */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "red", 
                        borderRadius: "50%", 
                        padding: "10px", 
                        marginRight: "8px", 
                        display: "flex", 
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BsMenuButtonWideFill style={{ color: "#333" }} />{" "}
                      {/* Color of the icon */}
                    </div>
                    <div style={{color:'white'}}>Goals</div>
                  </div>
                  <div style={{ padding: "15px" }}>
                    <BsFillBellFill />
                  </div>
                </div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "orange", 
                        borderRadius: "50%", 
                        padding: "10px",
                        marginRight: "8px", 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BsMenuButtonWideFill style={{ color: "#333" }} />{" "}
                      {/* Color of the icon */}
                    </div>
                    <div style={{color:'white'}}>Menus</div>
                  </div>
                  <div style={{ padding: "15px" }}>
                    <BsFillBellFill />
                  </div>
                </div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "pink", 
                        borderRadius: "50%", 
                        padding: "10px", 
                        marginRight: "8px", 
                        display: "flex", 
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BsMenuButtonWideFill style={{ color: "#333" }} />{" "}
                      {/* Color of the icon */}
                    </div>
                    <div style={{color:'white'}}>Popular Dishes</div>
                  </div>
                  <div style={{ padding: "15px" }}>
                    <BsFillBellFill />
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="body">
        {/* <div className="col-md-12"> */}
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="charts">
              <div className="card">
                {/* <div  > */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{color:'white'}}>Customer name</div>
                  </div>
                  <div style={{color:'white'}}>Order Number</div>
                  <div style={{color:'white'}}>Amount</div>
                  <div style={{color:'white'}}>Status</div>
                </div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: "red",
                        borderRadius: "50%",
                        padding: "5px",
                        marginRight: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BsPeopleFill style={{ color: "#333" }} />{" "}
                    </div>
                    <div style={{color:'white'}}>kavya</div>
                  </div>
                  <div style={{marginLeft:'8%', color:'white'}}>123456</div>
                  <div style={{color:'white'}}>$15.02</div>
                  <div
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px",
                      borderRadius: "4px",
                    }}
                  >
                    Delivered
                  </div>
                </div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: "pink",
                        borderRadius: "50%",
                        padding: "5px",
                        marginRight: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BsPeopleFill style={{ color: "#333" }} />{" "}
                    </div>
                    <div style={{color:'white'}}>Bindhu</div>
                  </div>
                  <div style={{marginLeft:'8%', color:'white'}}>456789</div>
                  <div style={{color:'white'}}>$45.45</div>
                  <div
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "10px",
                      borderRadius: "4px",
                    }}
                  >
                    Delivered
                  </div>
                </div>
                <hr />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: "blue",
                        borderRadius: "50%",
                        padding: "5px",
                        marginRight: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BsPeopleFill style={{ color: "#333" }} />{" "}
                    </div>
                    <div style={{color:'white'}}>Navya</div>
                  </div>
                  <div style={{marginLeft:'8%', color:'white'}}>789456</div>
                  <div style={{color:'white'}}>$89.56</div>
                  <div
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      padding: "10px",
                      borderRadius: "4px",
                    }}
                  >
                    Pending
                  </div>
                </div>
                {/* <hr /> */}
                {/* <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: "#f0f0f0",
                        borderRadius: "50%",
                        padding: "5px",
                        marginRight: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BsFillArchiveFill style={{ color: "#333" }} />{" "}
                    </div>
                    <div>name</div>
                  </div>
                  <div>Order Number</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="charts">
              <div className="card">
              <div style={{color:'white'}}>Cutomer's Feedback</div>
                {/* <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                > */}
                 
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "yellow",
                        borderRadius: "50%",
                        padding: "10px",
                        marginRight: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BsFillArchiveFill style={{ color: "#333" }} />{" "}
                      {/* Color of the icon */}
                    </div>
                    <div style={{color:'white'}}>Jenni Eilson</div>
                  </div>
                  <p style={{color:'white'}}>
                    The food was Excellent and so was service
                  </p>
                <hr/>
                <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "green",
                        borderRadius: "50%",
                        padding: "10px",
                        marginRight: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <BsFillArchiveFill style={{ color: "#333" }} />{" "}
                      {/* Color of the icon */}
                    </div>
                    <div style={{color:'white'}}>Jenni Eilson</div>
                  </div>
                  <p style={{color:'white'}}>
                    The food was Excellent and so was service
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
