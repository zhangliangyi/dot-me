import React from 'react';
import {
  Row,
  Col,
  List,
  Tag,
  Typography
} from 'antd';

import {blue} from '@ant-design/colors';

const {Text, Title} = Typography;
const tagColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple'
];

function getTimeText(value) {
  const {start, end, current} = value;

  if (current) {
    return `${start} - Present`;
  }

  return `${start} - ${end}`;
}

function Exp(props) {
  const data = props.data;

  return (
    <Row className="exp" type="flex" justify="space-between">
      <Col span={18}>
        {data.current
          ? <Title level={4} style={{color: blue.primary}}>{data.name}</Title>
          : <Title level={4} type="secondary">{data.name}</Title>
        }

        <Text>{getTimeText({start: data.start, end: data.end, current: data.current})}</Text>

        <br/>

        {(data.tags || []).map((tag, index) => (
          <Tag key={tag} color={tagColors[index]}>{tag}</Tag>
        ))}

        <List
          itemLayout="horizontal"
          size="large"
          dataSource={data.items}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta title={<Text strong={true}>{item.title}</Text>}
                              description={item.desc}/>
            </List.Item>
          )}
        />
      </Col>

      <Col span={6}>
        <Row type="flex" justify="end">
          <img alt={data.name} src={data.logo}/>
        </Row>
      </Col>
    </Row>
  );
}

export default Exp;
