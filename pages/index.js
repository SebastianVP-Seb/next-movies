import 'antd/dist/antd.css';
import { Button } from 'antd';
import Layout from '../components/Layout'
import Slider from '../components/Slider';
import {Html} from 'next/document';

export default function Home() {
  return (
    <Html>

      <Layout >
      {/* <Button type="primary" danger>
        Primary
      </Button> */}

        <Slider />

      </Layout>

    </Html>
  )
}
