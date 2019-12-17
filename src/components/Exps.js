import React from 'react';
import {
  Icon,
  Timeline
} from 'antd';

import Exp from './Exp';

function Exps(props) {
  return (
    <div className="exps">
      <Timeline>
        {props.exps.map(exp =>
          <Timeline.Item
            key={exp.id}
            color={exp.current ? 'blue' : 'gray'}
            dot={exp.current ? <Icon type="rocket" style={{fontSize: '1rem'}}/> : null}
          >
            <Exp data={exp}/>
          </Timeline.Item>
        )}
      </Timeline>
    </div>
  );
}

export default Exps;
