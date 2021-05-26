import React from 'react'
import { Layout, Space } from 'antd'
import { S, P, AThin, GThin, TThin, MThin, SThin } from '../logo'

export default function Header() {

  const { Header } = Layout;
  
  return (
    // styles found in App.scss
    <Header className="header">
      <Space size={5}>
        <S /><P /><S />
        <AThin /><SThin /><GThin /><MThin style={{marginLeft: '2px'}}/><TThin />
      </Space>
    </Header>
  )

};
