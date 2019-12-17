import React, {useState, useEffect} from 'react';
import {Divider, Layout} from 'antd';
import cx from 'classnames';

import {
  Subject,
  Exps,
  Portfolio
} from './components'

import 'antd/dist/antd.min.css';
import './App.css';

const {Content, Footer} = Layout;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/data.json').then(res => {
      if (res.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${res.status}`);
        return;
      }

      res.json().then(data => {
        setData(data);
      });
    }).catch(err => {
      console.log('Fetch Error :-S', err);
    });
  }, []);

  return (
    <div className="App">
      <Layout className="layout">
        <Content className={cx('content')}>
          <Subject data={data}/>

          <Divider>EXPERIENCES</Divider>

          <Exps exps={data ? data.experiences : []}/>

          <Divider>PORTFOLIO</Divider>

          <Portfolio items={data ? data.portfolio: []}/>
        </Content>

        <Footer style={{ textAlign: 'center' }}>{data && data.name} ©2019 Created by Ant Design</Footer>
      </Layout>
    </div>
  );
}

export default App;
