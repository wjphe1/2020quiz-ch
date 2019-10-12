import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Y1(props) {
    return <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
    ● RM735 million proposed for school maintenance and upgrading works.<br />
    ● Government allocates RM210m to expedite digital infrastructure establishment in public buildings like schools.
    </div>
  </CSSTransitionGroup>;
}

function A1(props) {
    return <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
    ● Hiring fresh graduates: Two-year pay incentives of RM500 a month. Hiring incentive of RM300 a month.
    </div>
  </CSSTransitionGroup>;
}

function A2(props) {
    return <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
    ● To boost use of e-wallets, govt to offer one-time <strong>RM30</strong> digital stimulus to qualified Malaysians 
    aged <strong>18 and above</strong> with annual income less than RM100,000.
    </div>
  </CSSTransitionGroup>;
}

function S1(props) {
    return <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
    ● Allocation for subsidies and social assistance increased to RM24.2 billion, 
     including welfare aid such as Bantuan Sara Hidup (BSH). <br />
    ● BSH scheme expanded to cover 1.1 million single individuals aged above 40 earning less than RM2,000 per month.
    </div>
  </CSSTransitionGroup>;
}


function Car(props) {
    return <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
    ● Citizens to enjoy average 18% discount on all PLUS highways.<br />
    ● Effective Jan 1, 2020, toll rates for cars at the Second Penang Bridge will be reduced from RM8.50 to RM7.00.
    </div>
  </CSSTransitionGroup>;
}

function Public(props) {
    return <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
    ● RM450 million proposed to acquire up to 500 electric buses for public transport in selected cities nationwide.<br />
    ● Govt intends to proceed with the Rapid Transit System (RTS) between Johor Bahru and Singapore.
    </div>
  </CSSTransitionGroup>;
}

function Petrol(props) {
    return <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
    ● Individuals owning not more than <strong>two cars</strong> and <strong>two motorcycles</strong> can get fuel subsidy for one vehicle. The qualifying criteria are:<br />
        ❖ A passenger car with 1,600cc engine capacity and below, or<br />
        ❖ Any car above 1,600cc must be more than 10 years old, or<br />
        ❖ A qualified motorcycle must be 150cc and below, or<br />
        ❖ Any motorcycles above 150cc must be more than 7 years old.
    </div>
  </CSSTransitionGroup>;
}

function WorkingFemale(props) {
    return <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
    ● Incentives to get women into the workforce:<br />
        ❖ Two-year pay incentive of RM500 a month<br />
        ❖ Hiring incentive of RM300<br />
        ❖ Tax exemption for women returning to work will be extended until 2023.<br />
    </div>
  </CSSTransitionGroup>;
}
  
function Business(props) {
    return <CSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
    ● RM445m <strong>Bumiputera</strong> entrepreneur development grant for access to financing, provision of business premises, entrepreneurship training.<br />
    ● Govt to provide loans worth RM100m under Small Industries Entrepreneurs Financing Scheme for <strong>Chinese</strong> community.<br />
    ● Govt to provide RM20m in loans under entrepreneur development scheme for <strong>Indian</strong> community.<br />
    </div>
  </CSSTransitionGroup>;
}

function Result(props) {
    const finalresult = props.quizResult;
    var List = [];

    if (finalresult.includes("Young") === true) {
        List.push(<Y1 />)
    } else if (finalresult.includes("Adult" && "Ownbusiness") === true) {
        List.push(<A2/>)
    } else if (finalresult.includes("Adult" && "Noownbusiness") === true) {
        List.push(<A1/>,<A2/>)
    }else {
        List.push(<S1 />,<A2/>)
    }

    if (finalresult.includes("Female" && "Adult" && "Noownbusiness") === true) {
        List.push(<WorkingFemale />);
    }else if (finalresult.includes("Adult" && "Ownbusiness") === true) {
        List.push(<Business />);
    }
    
    if (finalresult.includes("Car") === true) {
        List.push(<Car/>);
    }else if (finalresult.includes("Bike") === true) {
        List.push(<Petrol />);
    }else{
        List.push(<Public />)
    }
    return List;
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;