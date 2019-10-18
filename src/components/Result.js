import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Y1(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● 学校维修及提升拨款，国民型中学2000万令吉、独中1500万令吉、国小3亿令吉；华小、淡小和寄宿学校等各5000万令吉。<br />
    ● 技职课程学生获每月100令吉额外补贴。<br/>
    ● 政府将发放7000万令吉给大马数码经济机构设立有关中心，以扩展“100 go digital”计划，同时计划在吉打、霹雳和柔佛设立3座全新的电子图书馆，以通过电子内容推动知识和教育分享。
    </div>
  </CSSTransitionGroup>;
}

function Freshgrads(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● 失业超过12个月，获聘大专毕业生获每月500令吉，雇主获每月300令吉补贴。<br/>
    ● 雇主协助雇员还高等教育基金局贷款，获扣税优惠至2021年。
    </div>
  </CSSTransitionGroup>;
}

function BSH(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● 延续生活援助金计划(BSH)，受惠群体扩大至40岁以上，月薪低于2000令吉的单身者。
  </div>
</CSSTransitionGroup>;
}

function MySalam(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● 国家健康保险计划(mySalam)保障计划将会扩大，涵盖45种疾病，多于现有的36种，包括小儿麻痹症和绝症。<br/>
  ● 月收入低于2000令吉的18岁及以上之身心障碍者，获300令吉援助金，自动获免费MySalam保险。
  </div>
</CSSTransitionGroup>;
}

function Hospital(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● 年收入高达10万令吉者，确诊及入住政府医院，可申领<strong>每天50令吉</strong>的收入补贴，长达14天。
  </div>
</CSSTransitionGroup>;
}

function Ewallet(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● 年收入10万令吉以下的<strong>18岁以上</strong>人民，获一次性<strong>30令吉</strong>“电子钱包”。
    </div>
  </CSSTransitionGroup>;
}

function Sellhouse(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● <strong>保留产业盈利税 (RPGT)</strong>，结算基准年从2000年1月1日，改为2013年1月1日。 <br/>
    ● 降低外国人在城市地区买房价格，门槛从<strong>100万令吉</strong>降至<strong>60万令吉</strong>。
    </div>
  </CSSTransitionGroup>;
}

function Youngbuyhouse(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● 协助年轻人购买首间房屋，延长<strong>青年住房计划</strong>至2021年12月31日。<br/>
  ● <strong>首购族青年</strong>的援助成功申请者将可通过抵押方式获得全额贷款，并可每月获得200令吉援助金两年。
  </div>
</CSSTransitionGroup>;
}

function Buyhouse(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● 解决无法负担10%头期款项和融资买房问题，“先租后买”融资计划提供30%担保。
  </div>
</CSSTransitionGroup>;
}

function Car(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● 2020年南北大道公司(PLUS)属下的大道，过路费获<strong>18%</strong>折扣。<br />
    ● 内阁批准收购巴生河流域4条大道，以及征收交通疏导费。<br />
    ● 2020年1月1日起, 槟城第二大桥<strong>汽车</strong>过路费从原有的8令吉50仙降至<strong>7令吉</strong>。
    </div>
  </CSSTransitionGroup>;
}

function Public(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● 政府计划投资4亿5000万令吉，购入500架电力巴士。<br />
    ● 为巴士公司拨款1亿4600 万令吉，进一步支持城乡地区的连接。<br />
    ● 继续落实柔新捷运系统(RTS)。
    </div>
  </CSSTransitionGroup>;
}

function Petrol(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● 人民生活援助金（BSH）受惠者，汽车每个月获30令吉、摩哆12令吉。<br/>
    ● 非BSH受惠者获打油卡Kad 95，每公升折扣30仙的补贴，每个月最多100公升。
    </div>
  </CSSTransitionGroup>;
}

function WorkingFemale(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● 重返职场女性，每月获500令吉薪金奖掖。雇主获每月300令吉奖掖。<br />
    ● 妇女重返职场的所得税税务豁免，也延长至2023年。<br />
    ● 2021年起，产假从原有60天延长至90天。
    </div>
  </CSSTransitionGroup>;
}
  
function Business(props) {
    return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
    <div>
    ● 中小型企业的公司税税率从18%降至17%。<br/>
    ● 拨款1亿令吉于<strong>华裔中小型企业</strong>基金。<br/>
    ● 拨款3亿令吉于供具有发展潜能的中小型企业申请。<br/>
    ● 政府将在未来5年提供总值5亿令吉的50%配对奖掖，让首10万家中小型企业申请最高5000令吉的拨款，提升其营运系统。<br/>
    ● 政府计划在全国设立14间“一站式数码提升中心”，让商界尤其是中小型企业在迎向工业革命4.0之际，获得融资和发展能力。
    </div>
  </CSSTransitionGroup>;
}

function EPF(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● 为鼓励成年人学习，公积金局将扩大它在文凭水平资格的教育提款范畴，尤其是配合国家工业革命 4.0 愿景的文凭课程，公积金局正在探讨扩大这方面的提款，以涵盖会员的家长和配偶。<br/>
  ● 政府也会准备与人力资源发展基金拨款相等的2000万令吉配对补助，以鼓励在职的成年人参与跟工业革命 4.0 有关的专业文凭考试。
  </div>
</CSSTransitionGroup>;
}

function EPFno(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● 丈夫可自愿选择由其11%的雇员缴纳额，将2%移至妻子的公积金户头。
  </div>
</CSSTransitionGroup>;
}

function DST(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● 数码税明年生效。
  </div>
</CSSTransitionGroup>;
}

function HIT(props) {
  return <CSSTransitionGroup className="container result" component="div" transitionName="fade" transitionEnterTimeout={800} transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
  <div>
  ● 年收入超过200万令吉的纳税人被征税<strong>30%</strong> (比以往的28%多了2%)。
  </div>
</CSSTransitionGroup>;
}

function Result(props) {
    const finalresult = props.quizResult;
    var List = [];
    List.push(<MySalam/>);

    if (finalresult.includes("Young") === true) {
        List.push(<Y1/>)} 
    if (finalresult.includes("lowincome" || "midincome") === true) {
        List.push(<Hospital/>)} 
    if (finalresult.includes("Adult" && "stopwork") === true) {
        List.push(<Freshgrads/>)} 
    if (finalresult.includes("Senior" && "lowincome") === true) {
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
    if (finalresult.includes("noepf") === false) {
        List.push(<EPFno/>)}    
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