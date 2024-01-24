import React, { useState } from "react";
import Chart from "react-apexcharts";

import "./Product.css";

const Product = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <div className="Product_Container">
      <div className="first">
        <p className="executive1">Executive Summary</p>
        <p className="executive2">Product 360</p>
      </div>
      <div className="bottom_border"></div>
      <div className="main_sec">
        <div className="second">
          <div className="sec_F">
            <div className="product_overview">
              <p>Products Overview</p>
              <div className="box">
                <div className="box1">
                  <h3>25</h3>
                  <p>Cards</p>
                </div>
                <div className="border_right"></div>
                <div className="box2">
                  <h3>20</h3>
                  <p>Active</p>
                </div>
                <div className="box3">
                  <h3>5</h3>
                  <p>Inactive</p>
                </div>
              </div>
            </div>
            <div className="product_byAge"></div>
          </div>
          <p className="products_Age">Products by Age in month</p>
          <div className="sec_S">
            <div className="box4">
              <h3>2</h3>
              <p>{"<"} 6 months</p>
            </div>
            <div className="box4">
              <h3>5</h3>
              <p>
                {">"} 6 & {"<"} 12
              </p>
            </div>
            <div className="box4">
              <h3>8</h3>
              <p>
                {">"} 12 & {"<"} 24
              </p>
            </div>
            <div className="box4">
              <h3>5</h3>
              <p>{">"} 24</p>
            </div>
          </div>
          <div className="sec_C"></div>
        </div>
        <div className="scroll-container ">
          <table>
            <tbody>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Card 2</td>
                <td>11-Nov-22</td>
                <td>950</td>
              </tr>
              <tr>
                <td>Card 3</td>
                <td>10-Oct-22</td>
                <td>850</td>
              </tr>
              <tr>
                <td>Card 4</td>
                <td>06-Sep-21</td>
                <td>800</td>
              </tr>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Card 1</td>
                <td>01-Dec-22</td>
                <td>1,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="chart">
          <Chart
            options={state.options}
            series={state.series}
            type="scatter"
            width="300"
          />
        </div>
      </div>
      <div className="third_section">
        <div className="analysis4d">
          <h3>Top Cards(4D Analysis)</h3>
          <div className="scroll-container1 ">
            <h4>Card by vol</h4>
            <table>
              <tbody>
                <tr>
                  <td>Card 1</td>
                  <td>5,000</td>
                </tr>
                <tr>
                  <td>Card 2</td>
                  <td>4,500</td>
                </tr>
                <tr>
                  <td>Card 3</td>
                  <td>4,000</td>
                </tr>
                <tr>
                  <td>Card 4</td>
                  <td>3,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="scroll-container1">
            <h4>Card by $</h4>
            <table>
              <tbody>
                <tr>
                  <td>Card 1</td>
                  <td>5,000</td>
                </tr>
                <tr>
                  <td>Card 2</td>
                  <td>4,500</td>
                </tr>
                <tr>
                  <td>Card 3</td>
                  <td>4000</td>
                </tr>
                <tr>
                  <td>Card 4</td>
                  <td>3,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="scroll-container1">
            <h4>Cards by Trans#</h4>
            <table>
              <tbody>
                <tr>
                  <td>Card 1</td>
                  <td>5,000</td>
                </tr>
                <tr>
                  <td>Card 2</td>
                  <td>4,500</td>
                </tr>
                <tr>
                  <td>Card 3</td>
                  <td>4,000</td>
                </tr>
                <tr>
                  <td>Card 4</td>
                  <td>3,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="scroll-container1">
            <h4>Cards by Size</h4>
            <table>
              <tbody>
                <tr>
                  <td>Card 1</td>
                  <td>5,000</td>
                </tr>
                <tr>
                  <td>Card 2</td>
                  <td>4,500</td>
                </tr>
                <tr>
                  <td>Card 3</td>
                  <td>4,000</td>
                </tr>
                <tr>
                  <td>Card 4</td>
                  <td>3,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="analysis4d">
          <h3>Cards - Performance Analytics</h3>
          <div className="scroll-container1 ">
            <h4>Utilization</h4>
            <table>
              <tbody>
                <tr>
                  <td>Card 1</td>
                  <td>80%</td>
                </tr>
                <tr>
                  <td>Card 2</td>
                  <td>75%</td>
                </tr>
                <tr>
                  <td>Card 3</td>
                  <td>70%</td>
                </tr>
                <tr>
                  <td>Card 4</td>
                  <td>69%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="scroll-container1">
            <h4>Expenses</h4>
            <table>
              <tbody>
                <tr>
                  <td>Card 1</td>
                  <td>$1,000</td>
                </tr>
                <tr>
                  <td>Card 2</td>
                  <td>$990</td>
                </tr>
                <tr>
                  <td>Card 3</td>
                  <td>$770</td>
                </tr>
                <tr>
                  <td>Card 4</td>
                  <td>$700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="scroll-container1">
            <h4>Income</h4>
            <table>
              <tbody>
                <tr>
                  <td>Card 1</td>
                  <td>5,000</td>
                </tr>
                <tr>
                  <td>Card 2</td>
                  <td>4,500</td>
                </tr>
                <tr>
                  <td>Card 3</td>
                  <td>4,000</td>
                </tr>
                <tr>
                  <td>Card 4</td>
                  <td>3,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="scroll-container1">
            <h4>Fraud Rate/Claims</h4>
            <table>
              <tbody>
                <tr>
                  <td>Card 1</td>
                  <td>2%</td>
                </tr>
                <tr>
                  <td>Card 2</td>
                  <td>1.8%</td>
                </tr>
                <tr>
                  <td>Card 3</td>
                  <td>1.5%</td>
                </tr>
                <tr>
                  <td>Card 4</td>
                  <td>1.2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
