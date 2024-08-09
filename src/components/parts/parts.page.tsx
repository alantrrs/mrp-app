import React, { useState } from 'react'
import { ArrowPathIcon, CogIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline'
import { Button } from '../../lib/button'
import Page from '../../lib/page'

interface Part {
  partNumber: string
  description: string
  quantity: number
  leadTime: string
}

const initialParts: Part[] = [
  { partNumber: '001', description: 'Base', quantity: 1, leadTime: '2 weeks' },
  { partNumber: '002', description: 'Arm', quantity: 2, leadTime: '1 week' },
  { partNumber: '003', description: 'Gripper', quantity: 1, leadTime: '3 weeks' },
]

const PartCard: React.FC<{ part: Part }> = ({ part }) => (
  <div className='p-4 border rounded shadow relative'>
    <div className='flex items-center mb-2'>
      <CogIcon className='h-5 w-5 mr-2' />
      <span className='font-bold'>{part.partNumber}</span>
    </div>
    <div>{part.description}</div>
    <div className='absolute top-4 right-4 font-semibold'>
      Qty: {part.quantity}
    </div>
    <div className='absolute bottom-4 right-4 text-sm text-gray-600'>
      Lead time: {part.leadTime}
    </div>
  </div>
)

const PartsPage: React.FC = () => {
  const [parts] = useState<Part[]>(initialParts)

  return (
    <Page>
      
      <div className='flex justify-between items-center'>
        <h1>Parts</h1>
        <Button>
          <DocumentArrowUpIcon />
          Import
        </Button>
      </div>
      <div className='ml-auto flex items-center mb-4'>
        <ArrowPathIcon className='h-4 w-4 mr-2' />
        <span className='text-sm'>Last synced: Just now</span>
      </div>

      <div className='grid gap-4'>
        {parts.map((part, index) => (
          <PartCard key={index} part={part} />
        ))}
      </div>
    </Page>
  )
}

export default PartsPage