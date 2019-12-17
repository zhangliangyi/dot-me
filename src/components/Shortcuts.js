import cx from 'classnames';
import {Button, Icon, Row} from 'antd';
import React from 'react';

function Shortcuts(props) {
  const data = props.data;

  return (
    <Row className={cx('row', 'shortcuts')} type="flex" align="middle" justify="end">
      {data && data.github &&
      <Button type="link" href={data.github} target="_blank">
        <Icon type="github"/>
      </Button>
      }

      {data && data.linkedin &&
      <Button type="link" href={data.linkedin} target="_blank">
        <Icon type="linkedin"/>
      </Button>
      }

      {data && data.mail &&
      <Button type="link" href={data && `mailto:${data.mail}`}>
        <Icon type="mail"/>
      </Button>
      }
    </Row>
  )
}

export default Shortcuts;
