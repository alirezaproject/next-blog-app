import React from 'react'

function Layout({ children }) {
    return (
        <div className='flex items-center mt-20 justify-center'>
            <div className='w-full max-w-md p-2'>
                {children}
            </div>
        </div>
    )
}

export default Layout