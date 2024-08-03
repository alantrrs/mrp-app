import React from 'react'

type PageContainerProps = {
  children: React.ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className='p-4 flex flex-col'>{children}</div>
}

export default PageContainer
