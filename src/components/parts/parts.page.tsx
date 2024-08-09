import React, { useState } from 'react'
import { ClockIcon, CogIcon } from '@heroicons/react/24/outline'
import { Button } from '../../lib/button'
import Page from '../../lib/page'

interface Part {
  partNumber: string
  description: string
  quantity: number
}

const initialParts: Part[] = [
  { partNumber: '001', description: 'Base', quantity: 1 },
  { partNumber: '002', description: 'Arm', quantity: 2 },
  { partNumber: '003', description: 'Gripper', quantity: 1 },
]

const PartsPage: React.FC = () => {
  const [parts] = useState<Part[]>(initialParts)

  const addPart = () => {
    // Logic to add a new part
  }

  return (
    <Page>
      <h1>Parts</h1>
      <div className='ml-auto flex space-x-2 pb-4'>
        <Button onClick={addPart}>Add More</Button>
        <Button>Import</Button>
      </div>
      <div className='ml-auto flex items-center mb-4'>
        <ClockIcon className='h-5 w-5 mr-2' />
        <span>Last synced: Just now</span>
      </div>

      <div className='grid gap-4'>
        {parts.map((part, index) => (
          <div key={index} className='p-4 border rounded shadow'>
            <div className='flex items-center mb-2'>
              <CogIcon className='h-5 w-5 mr-2' />
              <span className='font-bold'>{part.partNumber}</span>
            </div>
            <div>{part.description}</div>
            <div>Quantity: {part.quantity}</div>
          </div>
        ))}
      </div>
    </Page>
  )
}

export default PartsPage
