import React, {useState, useEffect} from 'react';
import {Divider, Layout} from 'antd';
import axios from 'axios';

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
    axios.get('/data/data.json').then(res => {
      setData(res.data);
    }).catch(err => {
      console.log('Fetch Error :-S', err);
    });
  }, []);

  return (
    <div className="App">
      <Layout className="layout">
        <Content className="content">
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
