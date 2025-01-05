import ButtonIcon from '@/ui/ButtonIcon'
import { toPersianDigits } from '@/utils/numberFormatter'
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'

function PostInteraction({ commentsCount, likesCount, isLiked, isBookmarked }) {
    return (
        <div className='flex items-center gap-x-4'>
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPersianDigits(commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="red">
                {isLiked ? <SolidHearIcon /> : <HeartIcon />}
                <span>{toPersianDigits(likesCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="primary">
                {isBookmarked ? <BookmarkIcon /> : <BookmarkIcon />}
            </ButtonIcon>
        </div>
    )
}

export default PostInteraction