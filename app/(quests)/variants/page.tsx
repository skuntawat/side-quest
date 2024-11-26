import React from 'react'
import { Button } from './component/button'

export default function page() {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className='flex gap-4'>
        <Button >Default</Button>
        <Button intent="success">Success</Button>
        <Button intent="info">Info</Button>
        <Button intent="warning">Warning</Button>
        <Button intent="danger">Danger</Button>
      </div>
      <div className='flex gap-4'>
        <Button variant="outline">Default</Button>
        <Button variant="outline" intent="success">Success</Button>
        <Button variant="outline" intent="info">Info</Button>
        <Button variant="outline" intent="warning">Warning</Button>
        <Button variant="outline" intent="danger">Danger</Button>
      </div>
      <div className='flex items-center gap-4'>
        <Button size={'sm'}>sm</Button>
        <Button>default</Button>
        <Button size={'lg'}>lg</Button>
      </div>
    </div>
  )
}
