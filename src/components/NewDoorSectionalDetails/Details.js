import React from "react";
import { useState ,useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { FormActions } from "../../redux/FormDataSlice";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import img from "../../Data/Images/Help icon Copy 3.png";
import './Details.css';

function Category() {
  const image = <img src={img} alt="aaaa" />;
const dispatch=useDispatch();
const formSlice=useSelector(state=>state.ColectFormDataSlice);
const formEdit=formSlice.formWillEdit;
const reqData=formSlice.dataArray[formSlice.dataArray.length-1];

  const [formData,updateformData]= useState({
    Assembly_type: "",
    Width: "",
    Height: "",
    WindCode: "",
    Design: "",
    Color: "",
    Glass_Type:"",
    Glazed:"",
    Framing:""
  });
 useEffect(()=>{
  if(formEdit){
  updateformData({...reqData});
  }
 },[])

  const [keyfield,updatekeyfield] = useState('Required');
  const [section,updateSection]= useState(0);

let num=0;
  useEffect(()=>{
    for(const key in formData){
      if(!formData[key]){
        return}
else   {     num++;
if(num===6){updateSection(50)}
if(num===9){updateSection(100)}
      }
    }
  },[formData]);

  const handlechange = (e) => {
   updateformData({...formData ,[e.target.name]:e.target.value});
  };

  const SubmitData = () => {
    for(const key in formData){
      if(!formData[key]){
       updatekeyfield(`Please fill ${key} details.`) ;
       console.log(key,keyfield)
        return
      }
    }
    dispatch(FormActions.CollectItems(formData));
    updatekeyfield('Required');
    dispatch(FormActions.FormisFilled())
  };
const ConfirmData=()=>{
  dispatch(FormActions.ConfirmForm(formData));
}

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <div
        style={{
          Height: "2rem",
          width: "50%",
          margin: "0 25%",
          backgroundColor: "inherit",
          padding: "0.5rem",
        }}
      >
       {!section && <div className="initial-progress-bar"
        >
        </div>}
         
       {section===50 && <div className="progress-bar">
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>}
        {section===100 &&
        <div className="final-progress-bar">
        </div> }

        <div style={{ textAlign: "center" }}>
          <b>{section}</b>% Completed
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Form
          style={{
            width: "60%",
            marginLeft: "20%",
            marginTop: "1rem",
            borderRadius: "4px",
            backgroundColor: "white",
          }}
        >
          <p
            style={{
              backgroundColor: "grey",
              height: "2.75rem",
              color: "rgba(52,73,94,1)",
              padding: "0.5rem",
              display:'flex',
              flexDirection:'row',
              
            }}
          >
            Layout Options<span style={{color:'red',fontSize:'12px' , marginLeft:'0.5rem' , alignSelf:'center'}}>{keyfield}</span>
          </p>
          <div style={{ padding: "1rem 1.5rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Assembly Type
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }} name="Assembly_type"
                onChange={handlechange}
              >
                <option >{formEdit ? reqData.Assembly_type :'Complete Door'}</option>
                <option  value="One">
                  One
                </option>
                <option  value="Two">
                  Two
                </option>
                <option  value="Three">
                  Three
                </option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Measure Size {image}
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      width: "inherit",
                      marginTop: "0.5rem",
                      color: "rgba(52,73,94,1)",
                      fontSize: "17px",
                      lineHeight: "16.41px",
                    }}
                  >
                    Width
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "80%",
                      marginLeft: "1rem",
                    }}
                  >
                    <Form.Select
                      aria-label="Default select example"
                      style={{ marginRight: "1rem" }}
                      onChange={handlechange} name="Width"
                    >
                      <option>{formEdit ? reqData.Width : '8 ft.'}</option>
                      <option >1 ft.</option>
                      <option >2 ft.</option>
                      <option >3 ft.</option>
                      <option >4 ft.</option>
                      <option >5 ft.</option>
                      <option >6 ft.</option>
                      <option >7 ft.</option>
                      <option >8 ft.</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                      <option>2 in.</option>
                      <option value="1">1 in.</option>
                      <option value="2">2 in.</option>
                      <option value="3">3 in.</option>
                      <option value="4">4 in.</option>
                    </Form.Select>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      width: "inherit",
                      marginTop: "0.5rem",
                      color: "rgba(52,73,94,1)",
                      fontSize: "17px",
                      lineHeight: "16.41px",
                    }}
                  >
                    Height
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "80%",
                      marginLeft: "1rem",
                    }}
                  >
                    <Form.Select
                      aria-label="Default select example"
                      style={{ marginRight: "1rem" }}
                      onChange={handlechange} name="Height"
                    >
                      <option>{formEdit ? reqData.Height : '8 ft.'}</option>
                      <option >1 ft.</option>
                      <option >2 ft.</option>
                      <option >3 ft.</option>
                      <option >4 ft.</option>
                      <option >5 ft.</option>
                      <option >6 ft.</option>
                      <option >7 ft.</option>
                      <option >8 ft.</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                      <option>2 in.</option>
                      <option value="1">1 in.</option>
                      <option value="2">2 in.</option>
                      <option value="3">3 in.</option>
                      <option value="4">4 in.</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                WindCode{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}
                onChange={handlechange} name="WindCode"
              >
                <option>{formEdit ? reqData.WindCode : 'WindCode W1'}</option>
                <option  >One</option>
                <option >Two</option>
                <option >Three</option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Design{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}
                onChange={handlechange} name="Design"
              >
                <option>{formEdit ? reqData.Design : 'CC'}</option>
                <option >One</option>
                <option >Two</option>
                <option >Three</option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Color{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}
                onChange={handlechange} name="Color"
              >
                <option>{formEdit ? reqData.Color : 'Dark Finish'}</option>
                <option >One</option>
                <option >Two</option>
                <option >Three</option>
              </Form.Select>
            </div>
          </div>
        </Form>
        <div
          style={{
            width: "60%",
            marginLeft: "20%",
            marginTop: "1rem",
            borderRadius: "4px",
            backgroundColor: "white",
          }}
        >
          <p
            style={{
              backgroundColor: "grey",
              height: "2.75rem",
              color: "rgba(52,73,94,1)",
              padding: "0.5rem",
              display:'flex',
              flexDirection:'row',
            }}
          >
            Window Options <span style={{color:'red',fontSize:'12px' , marginLeft:'0.5rem',  alignSelf:'center'}}>{keyfield}</span>
          </p>
          <div style={{ padding: "1rem 1.5rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Glass Type{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }} onChange={handlechange} name="Glass_Type"
                
              >
                <option>{formEdit ? reqData.Glass_Type : 'Glass Type'}</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Section(S) Glazed{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }} onChange={handlechange} name="Glazed"
                
              >
                <option>{formEdit ? reqData.Glazed : 'Glazed'}</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Framing{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }} onChange={handlechange} name="Framing"
                
              >
                <option>{formEdit ? reqData.Framing : 'Framing'}</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "60%",
            marginLeft: "20%",
            marginTop: "1rem",
            borderRadius: "4px",
            backgroundColor: "white",
          }}
        >
          <p
            style={{
              backgroundColor: "grey",
              height: "2.75rem",
              color: "rgba(52,73,94,1)",
              padding: "0.5rem",
            }}
          >
            Track Options
          </p>
          <div style={{ padding: "1rem 1.5rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Spring{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}  disabled
                
              >
                <option>Residential Door</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Track Size{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}  disabled
                
              >
                <option>Residential Door</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Track Mount{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}  disabled
                
              >
                <option>Residential Door</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Track Lift{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}  disabled
                
              >
                <option>Residential Door</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Track Radius{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}  disabled
                
              >
                <option>Residential Door</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "60%",
            marginLeft: "20%",
            marginTop: "1rem",
            borderRadius: "4px",
            backgroundColor: "white",
          }}
        >
          <p
            style={{
              backgroundColor: "grey",
              height: "2.75rem",
              color: "rgba(52,73,94,1)",
              padding: "0.5rem",
            }}
          >
            Other Options
          </p>
          <div style={{ padding: "1rem 1.5rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Lock{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}  disabled
                
              >
                <option>Residential Door</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                MISC Lock Options
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}  disabled
                
              >
                <option>Residential Door</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Packaging{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}  disabled
                
              >
                <option>Residential Door</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  width: "inherit",
                  marginTop: "0.5rem",
                  color: "rgba(52,73,94,1)",
                  fontSize: "17px",
                  lineHeight: "16.41px",
                }}
              >
                Additional Options{image}
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{ width: "60%" }}  disabled
                
              >
                <option>Residential Door</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "60%",
            height: "4rem",
            marginLeft: "20%",
            marginTop: "1rem",
            borderRadius: "4px",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          <Button variant="outline-secondary">PREVIEW</Button>
          <Button
            variant="success"
            style={{ backgroundColor: "rgba(102,51,43,1)", marginLeft: "1rem" }}
            onClick={formEdit ? ConfirmData :SubmitData}
          >
             {formEdit ? 'CONFIRM' : 'ADD TO CART'} 
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Category;
