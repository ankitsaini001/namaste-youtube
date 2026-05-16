

const ChatMessages = ({ name, message }) => {

    return (
        <>
            <div className="flex items-start gap-2 bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors">
                <img className="w-8 h-8 rounded-full flex-shrink-0" src="https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg" alt="user avatar" />
                <p className="text-sm"><span className="font-bold">{name}: </span>{message}</p>
            </div>
        </>
    );
}

export default ChatMessages;