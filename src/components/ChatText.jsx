import React from 'react'

const ChatText = ({ chatText, date }) => {
  return (
    <div className="flex flex-col items-end mx-10">
      <div className="relative bg-secondText/8 text-secondText px-5 py-3 rounded-xl max-w-sm">
        <p className="font-poppins font-medium text-base">
          {chatText}
        </p>

        {/* Bubble Tail */}
        {/* <div className="absolute bottom-1 -right-1 w-4 h-4 bg-secondText/20 rotate-60"></div> */}
      </div>

      <p className="text-xs text-gray-500 mt-1">
        {date}
      </p>
    </div>
  )
}


export default ChatText
