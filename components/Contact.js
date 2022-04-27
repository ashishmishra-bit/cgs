import React from "react";

const Contact = ({setActiveItem}) => {
  const [isInner, setIsInner] = React.useState(0);
  const Inner = () => {};

  const outer = () => {
    const obj = document.getElementById("off");
    if (obj.contains(event.target)) {
      setIsInner(0);
      console.log("Inner Click");
    } else {
        setActiveItem(0)
      console.log("Outer Click");
    }
  };

  const [inputVals, setInputVals] = React.useState({
    company_name: "",
    email: "",
    message: "",
    phone_number: "",
    service_type: "Development",
  });

  const handleChange = (e) => {
    setInputVals({
      ...inputVals,
      [e.target.name]: e.target.value,
    });
  };


  const addContacts = async (e)=>{
    e.preventDefault()
    console.log(inputVals)
    // return ;
    const data = {
      company_name:inputVals.company_name,
      email:inputVals.email,
      message:inputVals.message,
      phone_number:inputVals.phone_number,
    service_type: "Consulting",

    }
    const response =  await fetch("https://cgsapi.herokuapp.com/api/forms",{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data})
    })
    if(response)
    {
      setInputVals({
        company_name: "",
        email: "",
        message: "",
        phone_number: "",
        service_type: "",
      })
      setActiveItem(0)
    }

  }
  return (
    <div
      className=" myModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      onClick={outer}
    >
        <div ></div>
      <div className="modal-dialog" role="document">
        <div
          className="modal-content"
          id="off"
        >
          <div className="modal-body">
            <div className="modal-one-content">
              <div className="modal-one-content-heading">
                <h3>Let’s Launch!</h3>
                <span data-dismiss="modal" aria-label="Close" onClick={()=>setActiveItem(0)}>
                  <img src="/img/close.png" alt="images not found" />
                </span>
              </div>
              <div className="modal-one-content-form">
                <form onSubmit={addContacts}>
                  <div className="modal-one-content-form-wrapper">
                    <div className="modal-one-input">
                      <label>Company Name:</label>
                      <input
                        required
                        name="company_name"
                        type="text"
                        placeholder="Andrian Lavriv"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="modal-one-input">
                      <label>Phone Number:</label>
                      <input
                      name="phone_number"
                        onKeyPress="return hanyaAngka(event)"
                        type="text"
                        placeholder="Etner phone"
                        onChange={handleChange}

                      />
                    </div>
                    <div className="modal-one-input">
                      <label>Email:</label>
                      <input
                        required
                        name="email"
                        className="email"
                        type="email"
                        placeholder="Etner email"
                        onChange={handleChange}

                      />
                      <span className="text-danger">
                        please enter a valid email
                      </span>
                    </div>
                    <div className="modal-one-radio">
                    <label>Services type:</label>

                    <div style={{
                      display:"flex",
                      justifyContent:"space-between",
                      alignItems:"center"
                    }}>
                      <div className="radio-item" onClick={()=>{
                       setInputVals({
                         ...inputVals,
                         service_type:"Consulting"
                       }) 
                      }}>
                        <div className= {inputVals.service_type=="Consulting"?"activeRadio":"inActiveRadio"} ></div>
                        <div>Consulting</div>
                      </div>
                      <div className="radio-item" onClick={()=>{
                       setInputVals({
                         ...inputVals,
                         service_type:"Development"
                       }) 
                      }}>
                        <div className= {inputVals.service_type=="Development"?"activeRadio":"inActiveRadio"}></div>
                        <div>Development</div>
                      </div>
                      <div className="radio-item" onClick={()=>{
                       setInputVals({
                         ...inputVals,
                         service_type:"Characterization & Specification"
                       }) 
                      }} >
                        <div className= {inputVals.service_type=="Characterization & Specification"?"activeRadio":"inActiveRadio"}></div>
                        <div>Characterization <br /> & Specification</div>
                      </div>
                    </div>
                    </div>

                    {/* Old Radio Button */}
                    <div className="modal-one-radio">
                      {/* <label>Services type:</label>
                      <div className="modal-one-radio-flex">
                        <div className="modal-one-rf-one">
                          <label className="crb-area">
                            Consulting
                            <input
                              type="radio"
                              checked="checked"
                              name="radio"
                            />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="modal-one-rf-one" >
                          <label className="crb-area">
                            Development
                            <input
                              type="radio"
                              checked="checked"
                              name="radio"
                            />
                            <span className="checkmark"  ></span>
                          </label>
                        </div>
                        <div className="modal-one-rf-one modal-one-rf-two">
                          <label className="crb-area">
                            {" "}
                            Characterization <br /> & Specification
                            <input
                              type="radio"
                              checked="checked"
                              name="radio"
                            />
                            <span className="checkmark" ></span>
                          </label>
                        </div>
                      </div> */}
                      <div className="modal-one-rf-submit text-center">
                        <button type="submit">
                          Send <img src="/img/wa.svg" alt="images not found" />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="thanks">
                <h2>Thanks You</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .myModal {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: red;
            z-index: 99999;
            background: rgba(229, 229, 229, 0.6) !important;
            backdrop-filter: blur(20px) !important;
          }
          .modal-content {
            width: max-content;
          }
          .radio-item{
            display:flex;
            cursor:pointer;
            align-items:center;
            margin-right:45px;
          }
          .inActiveRadio{
            width:20px;
            height:20px;
            border: 1px solid #2365DC;
            border-radius: 50%;
            margin-right:0.5rem;
          }
          .activeRadio{
            width:20px;
            height:20px;
            border: 1px solid #2365DC;
            border-radius: 50%;
            background:#2196F3;
            margin-right:0.5rem;
            
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
