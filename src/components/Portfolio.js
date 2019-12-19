import React, {useState} from 'react';
import {
  Row,
  Radio,
  Carousel,
  List,
  Avatar,
  Icon,
  Empty,
  Card
} from 'antd';

const {Meta} = Card;

function getPortfolioAvatar(avatar) {
  switch (avatar.type) {
    case 'icon':
      return <Avatar icon={<Icon type={avatar.value}/>}/>;

    case 'image':
    default:
      return <Avatar src={avatar.src}/>;
  }
}

function Portfolio(props) {
  const [display, setDisplay] = useState('carousel');

  return (
    <div>
      <Row className="row" type="flex" justify="end">
        <Radio.Group defaultValue={display} buttonStyle="solid" size="small" onChange={e => setDisplay(e.target.value)}>
          <Radio.Button value="carousel">
            <Icon type="profile"/>
          </Radio.Button>

          <Radio.Button value="list">
            <Icon type="unordered-list"/>
          </Radio.Button>
        </Radio.Group>
      </Row>

      {display === 'carousel' &&
      <Carousel autoplay>
        {props.items.map(item => (
          <Card
            key={item.title}
            cover={
              item.screenshot
                ? <img alt="logo" src={item.screenshot}/>
                : <Empty description={false} imageStyle={{width: '100%', height: '384px'}}/>
            }
          >
            <Meta
              avatar={getPortfolioAvatar(item.avatar)}
              title={item.href ? <a href={item.href}>{item.title}</a> : item.title}
              description={item.description}
            />
          </Card>
        ))}
      </Carousel>
      }

      {display === 'list' &&
      <List
        itemLayout="vertical"
        size="large"
        dataSource={props.items}
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={
              item.screenshot
                ? <img width={272} alt="logo" src={item.screenshot}/>
                : <Empty description={false} style={{width: '272px'}}/>
            }
          >
            <List.Item.Meta
              avatar={getPortfolioAvatar(item.avatar)}
              title={item.href ? <a href={item.href}>{item.title}</a> : item.title}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
      }
    </div>
  );
}

export default Portfolio;
