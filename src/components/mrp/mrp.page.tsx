import { Button } from '../../lib/button'
import Page from '../../lib/page'
import { Input } from '../../lib/input'
import { Select } from '../../lib/select'
import { useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { Table } from '../../lib/table' // Assuming you have a Table component

interface TargetPart {
  part: string
  quantity: number
  date: string
}

interface PartFormProps {
  part: TargetPart
  index: number
  handlePartChange: (index: number, field: keyof TargetPart, value: string) => void
}

const PartForm: React.FC<PartFormProps> = ({ part, index, handlePartChange }) => {
  return (
    <div className='mb-4 flex gap-2'>
      <Select
        className='mb-2'
        value={part.part}
        onChange={(e) => { handlePartChange(index, 'part', e.target.value) }}
      >
        <option value=''>Select Part</option>
        <option value='Widget A'>Widget A</option>
        <option value='Gadget B'>Gadget B</option>
        <option value='Component X'>Component X</option>
        <option value='Material Y'>Material Y</option>
      </Select>
      <Input
        className='mb-2'
        type='number'
        placeholder='Quantity'
        value={part.quantity}
        onChange={(e) => { handlePartChange(index, 'quantity', e.target.value) }}
      />
      <Input
        className='mb-2'
        type='date'
        placeholder='Target Date'
        value={part.date}
        onChange={(e) => { handlePartChange(index, 'date', e.target.value) }}
      />
    </div>
  )
}

interface PlanItem {
  part: string
  type: 'purchase' | 'build'
  quantity: number
  startDate: string
  dueDate: string
}

const MRP = () => {
  const [parts, setParts] = useState<TargetPart[]>([
    { part: 'Widget A', quantity: 100, date: '2023-06-10' },
    { part: 'Gadget B', quantity: 50, date: '2023-06-15' }
  ])

  const handleAddPart = () => {
    setParts([...parts, { part: '', quantity: 0, date: '' }])
  }

  const handlePartChange = (index: number, field: keyof TargetPart, value: string | number) => {
    const newParts = [...parts]
    if (field === 'quantity') {
      newParts[index][field] = Number(value)
    } else {
      newParts[index][field] = value as string
    }
    setParts(newParts)
  }

  const [plan, setPlan] = useState<PlanItem[]>([
    {
      part: 'Widget A',
      type: 'build',
      quantity: 100,
      startDate: '2023-06-01',
      dueDate: '2023-06-10'
    },
    {
      part: 'Component X',
      type: 'purchase',
      quantity: 200,
      startDate: '2023-05-25',
      dueDate: '2023-06-01'
    },
    {
      part: 'Gadget B',
      type: 'build',
      quantity: 50,
      startDate: '2023-06-05',
      dueDate: '2023-06-15'
    },
    {
      part: 'Material Y',
      type: 'purchase',
      quantity: 300,
      startDate: '2023-05-28',
      dueDate: '2023-06-05'
    }
  ])

  const generatePlan = () => {
    const newPlan: PlanItem[] = parts.flatMap(part => [
      {
        part: part.part,
        type: 'build',
        quantity: part.quantity,
        startDate: new Date(part.date).toISOString().split('T')[0],
        dueDate: part.date
      },
      {
        part: `${part.part}_component`,
        type: 'purchase',
        quantity: part.quantity * 2,
        startDate: new Date(new Date(part.date).setDate(new Date(part.date).getDate() - 7)).toISOString().split('T')[0],
        dueDate: new Date(new Date(part.date).setDate(new Date(part.date).getDate() - 1)).toISOString().split('T')[0]
      }
    ])
    setPlan(newPlan)
  }

  return (
    <Page>
      <div className='flex justify-between'>
        <h1>Master schedule</h1>
      </div>
      <div>
        <h2>Targets</h2>
      </div>
      <div className='mb-4'>
        {parts.map((part, index) => (
          <PartForm part={part} index={index} handlePartChange={handlePartChange} />
        ))}
        <Button onClick={handleAddPart}>Add Part</Button>
      </div>
      <div className='flex justify-between flex-1'>
        <h2>Plan</h2>
        <span className='flex items-center gap-2'>
          <ArrowPathIcon className='h-4 w-4 cursor-pointer' onClick={generatePlan} />
          MRP last updated 3 hours ago
        </span>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Part</th>
              <th>Quantity</th>
              <th>Type</th>
              <th>Start Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {plan.map((item, index) => (
              <tr key={index}>
                <td>{item.part}</td>
                <td>{item.quantity}</td>
                <td>{item.type}</td>
                <td>{item.startDate}</td>
                <td>{item.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Page>
  )
}

export default MRP