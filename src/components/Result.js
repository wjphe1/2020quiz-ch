import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Y1(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● RM735 million proposed for school maintenance and upgrading works.<br />
    ● Government allocates RM210m to expedite digital infrastructure establishment in public buildings like schools.
    </div>
  </CSSTransitionGroup>;
}

function Freshgrads(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● Hiring fresh graduates who have been unemployed for more than 12 months:
    Two-year pay incentives of RM500 a month. Employers get two-year hiring incentives of RM300 a month.
    </div>
  </CSSTransitionGroup>;
}

function BSH(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● BSH scheme expanded to cover 1.1 million single individuals aged above 40 earning less than RM2,000 per month.
  </div>
</CSSTransitionGroup>;
}

function MySalam(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● MySalam to be expanded so that those with critical illnesses will get RM8,000 cash. <br/>
  ● Those being treated in govt hospitals can also claim RM50 wage replacement a day for up to 14 days.
  </div>
</CSSTransitionGroup>;
}

function Ewallet(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● To boost use of e-wallets, govt to offer one-time <strong>RM30</strong> digital stimulus to qualified Malaysians 
    aged <strong>18 and above</strong> with annual income less than RM100,000.
    </div>
  </CSSTransitionGroup>;
}

function Sellhouse(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● <strong>Real property gain tax (RPGT)</strong> base year for asset purchase revised from 1/1/2000 to 1/1/2013 for asset acquired before that date. 
    I.E.: RPGT = (selling price of house – house evaluation price on 1/1/2013) x 5%. <br/>
    ● To reduce supply overhang of condominiums and apartments amounting to RM8.3 billion in the second quarter of 2019, 
    govt will lower the threshold on high rise property prices in urban areas for foreign ownership <strong>from RM1,000,000 to RM600,000</strong> in 2020.

    </div>
  </CSSTransitionGroup>;
}

function Youngbuyhouse(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● Govt to extend <strong>Youth Housing Scheme</strong> administered by Bank Simpanan Nasional from 1/1/2020 until 31/12/2021. 
  The scheme also offers a 10% loan guarantee via Cagamas to enable borrowers to get full financing and RM200 monthly 
  instalment assistance for the first two years, limited to 10,000 home units.
  </div>
</CSSTransitionGroup>;
}

function Buyhouse(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● To help those who can't come up with 10% deposit or get financing to buy homes, govt will collaborate with financial institutions to introduce the <strong>rent-to-own (RTO)</strong> financing scheme, 
  where up to RM10 billion will be provided by the financial institutions, with the government supporting via a 30% or RM3 billion guarantee. (Terms applied)
  </div>
</CSSTransitionGroup>;
}

function Car(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● Citizens to enjoy average 18% discount on all PLUS highways.<br />
    ● Effective Jan 1, 2020, toll rates for cars at the Second Penang Bridge will be reduced from RM8.50 to RM7.00.
    </div>
  </CSSTransitionGroup>;
}

function Public(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● RM450 million proposed to acquire up to 500 electric buses for public transport in selected cities nationwide.<br />
    ● Govt intends to proceed with the Rapid Transit System (RTS) between Johor Bahru and Singapore.
    </div>
  </CSSTransitionGroup>;
}

function Petrol(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
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
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● Incentives to get women into the workforce:<br />
        ❖ Two-year pay incentive of RM500 a month<br />
        ❖ Hiring incentive of RM300<br />
        ❖ Tax exemption for women returning to work will be extended until 2023.<br />
    </div>
  </CSSTransitionGroup>;
}
  
function Business(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● RM445m <strong>Bumiputera</strong> entrepreneur development grant for access to financing, provision of business premises, entrepreneurship training.<br />
    ● Govt to provide loans worth RM100m under Small Industries Entrepreneurs Financing Scheme for <strong>Chinese</strong> community.<br />
    ● Govt to provide RM20m in loans under entrepreneur development scheme for <strong>Indian</strong> community.<br />
    </div>
  </CSSTransitionGroup>;
}

function EPF(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● To encourage adult learning, the EPF will expand the scope of its education withdrawal for qualification attained at certificate level, 
  especially for accredited programmes that are in line with the nation’s IR 4.0 aspirations.
  </div>
</CSSTransitionGroup>;
}

function DST(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● Digital services tax will be implemented with effect from 1/1/2020, 
  to include services such as, but not limited to downloaded software, music, video, or digital advertising.
  </div>
</CSSTransitionGroup>;
}

function HIT(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● Govt proposes that a new band for taxable income in excess of RM2,000,000 be introduced and taxed at <strong>30%</strong>, a 2% increment from the current 28%.
  </div>
</CSSTransitionGroup>;
}

function Result(props) {
    const finalresult = props.quizResult;
    var List = [];
    List.push(<MySalam/>);

    if (finalresult.includes("Young") === true) {
        List.push(<Y1/>)} 
    if (finalresult.includes("Adult" && "stopwork") === true) {
        List.push(<Freshgrads/>)} 
    if (finalresult.includes("Senior" && "midincome") === true) {
        List.push(<BSH/>)}
    if (finalresult.includes("Young") === false) {
        List.push(<Ewallet/>)}
    if (finalresult.includes("sell") === true) {
        List.push(<Sellhouse/>)}
    if (finalresult.includes("buy") === true) {
        List.push(<Buyhouse/>)}
    if (finalresult.includes("buy" && "Adult") === true) {
        List.push(<Youngbuyhouse/>)}
    if (finalresult.includes("Female" && "Adult" && "stopwork") === true) {
        List.push(<WorkingFemale />);}
    if (finalresult.includes("Ownbusiness") === true) {
        List.push(<Business />)}
    if (finalresult.includes("yesepfyes") === true) {
        List.push(<EPF/>)}   
    if (finalresult.includes("Car") === true) {
        List.push(<Car/>,<Petrol/>)} 
    if (finalresult.includes("Bike") === true) {
        List.push(<Petrol/>)}
    if (finalresult.includes("Public") === true) {
        List.push(<Public/>)}
    if (finalresult.includes("yesdigital") === true) {
        List.push(<DST/>)}
    if (finalresult.includes("higherincome") === true) {
        List.push(<HIT/>)}

    return List;
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;