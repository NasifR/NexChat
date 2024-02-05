import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId = 'de517889-e28f-4292-85e0-4056d97624b5'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
    )
}

export default ChatsPage;