import { Button, Collapse, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import { AuthContext } from '../../Context/AuthProvider';
import useFireStore from '../../hooks/useFireStore';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header, p {
            color: #fff;
        }

        .ant-collapse-content-box {
            padding: 0px 40px;
        }

        .add-room {
            color: #fff;
            padding: 0;
        }
    }
`;

const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: #fff;
`;

export default function RoomList() {

    const { user: { uid } } = React.useContext(AuthContext);

    
    const roomsCondition = React.useMemo(() => {
        return {
            filedName: 'members',
            operator: 'array-contains',
            compareValue: uid
        };
    }, [uid]);
    
    const rooms = useFireStore('rooms', roomsCondition);

    console.log( { rooms } );

    return (
        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header="Danh sách các phòng" key='1'>
                {rooms.map((room) => (
                    <LinkStyled key={room.id}>{room.name}</LinkStyled>
                ))}
                <Button type='text' icon={<PlusSquareOutlined />} className={'add-room'}>Thêm phòng</Button>
            </PanelStyled>
        </Collapse>
    )
}
