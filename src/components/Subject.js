import React from 'react';
import cx from 'classnames';
import {
  Avatar,
  Row,
  Col,
  Statistic,
  Typography
} from 'antd';

import {blue} from '@ant-design/colors';
import Shortcuts from './Shortcuts';

const {Text, Title} = Typography;

function getYears(dateStr) {
  if (!dateStr) {
    return 0;
  }

  const now           = new Date(),
        year          = now.getFullYear(),
        month         = now.getMonth() + 1,
        date          = now.getDate(),
        inputDateTime = new Date(dateStr),
        inputYear     = inputDateTime.getFullYear(),
        inputMonth    = inputDateTime.getMonth() + 1,
        inputDate     = inputDateTime.getDate();

  let age = year - inputYear;

  if ((month < inputMonth) || (month === inputMonth && date < inputDate)) {
    age -= 1;
  }

  return age;
}


function Subject(props) {
  const data = props.data || {};

  return (
    <div className="subjectContainer">
      <Shortcuts data={data}/>

      <Row className={cx('row')}>
        <Avatar size={200} src="/images/avatar.jpeg"/>
      </Row>

      <Row className={cx('row')}>
        <Col>
          <Title>{data.name}</Title>
          <Title level={2} style={{marginTop: 0}}>{data['name_en']}</Title>
          <Title level={3}>
            <Text type="warning">{data.job}</Text>
            <Text type="secondary"> in </Text>
            <Text style={{color: blue.primary}}>{data.company}</Text>
          </Title>
        </Col>
      </Row>

      <Row className={cx('row')}>
        <Col>
          <Title type="secondary" className="bio" level={2}>{data.bio}</Title>
        </Col>
      </Row>

      <Row className={cx('row')}>
        <Col span={6}>
          <Statistic title="Age" value={getYears(data.birthday)}/>
        </Col>
        <Col span={6}>
          <Statistic title="Working" value={getYears(data.startWork)} suffix="years"/>
        </Col>
        <Col span={6}>
          <Row className="ant-statistic">
            <div className="ant-statistic-title">IDE</div>
            <div className="ant-statistic-content">{data.IDE}</div>
          </Row>
        </Col>
        <Col span={6}>
          <Row className="ant-statistic">
            <div className="ant-statistic-title">Location</div>
            <div className="ant-statistic-content">{data.location}</div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Subject;
