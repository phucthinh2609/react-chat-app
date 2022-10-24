import { Avatar, Button, Form, Input, Tooltip } from 'antd';
import React from 'react'
import styled from 'styled-components';
import { UserAddOutlined } from '@ant-design/icons'
import Message from './Message';

const WrapperStyled = styled.div`
  height: 100vh;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgba(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
`;
const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  padding: 2px 2px 2px 0px;
  algin-items: center;
  border: 1px solid rgba(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;


export default function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className='header__info'>
          <p className='header__title'>Room 1</p>
          <span className='header__description'>Đây là room 1</span>
        </div>
        <div>
          <ButtonStyled>
            <Button icon={<UserAddOutlined />} type='text'>Mời</Button>
            <Avatar.Group size='small' maxCount={3}>
              <Tooltip title='A'>
                <Avatar>A</Avatar>
              </Tooltip>
              <Tooltip title='B'>
                <Avatar>B</Avatar>
              </Tooltip>
              <Tooltip title='C'>
                <Avatar>C</Avatar>
              </Tooltip>
              <Tooltip title='D'>
                <Avatar>D</Avatar>
              </Tooltip>
            </Avatar.Group>
          </ButtonStyled>
        </div>
      </HeaderStyled>

      <ContentStyled>
        <MessageListStyled>
          <Message text="Test" displayName="Thinh" photoURL={null} createdAt={1242421} />
          <Message text="Test" displayName="Thinh" photoURL={null} createdAt={1242421} />
          <Message text="Test" displayName="Thinh" photoURL={null} createdAt={1242421} />
          <Message text="Test" displayName="Thinh" photoURL={null} createdAt={1242421} />
          <Message text="Test" displayName="Thinh" photoURL={null} createdAt={1242421} />
        </MessageListStyled>
        <FormStyled>
          <Form.Item>
            <Input placeholder="Nhập tin nhắn..." bordered={false} autoComplete='off'/>
          </Form.Item>
          <Button type='primary'>Gửi</Button>
        </FormStyled>
      </ContentStyled>
    </WrapperStyled>
  )
}
