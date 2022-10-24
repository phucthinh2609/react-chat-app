import React from 'react';
import { Row, Col } from 'antd';
import Sidebar from './Sidebar/Sidebar';
import ChatWindow from './ChatWindow/ChatWindow';

export default function ChatRoom() {
  return (
    <Row>
      <Col span={8}><Sidebar/></Col>
      <Col span={16}><ChatWindow/></Col>
    </Row>
  )
}
