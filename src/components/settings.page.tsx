import DarkModeSelector from '../lib/dark-mode-select'

const Settings = () => {
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-6'>Settings</h1>
      <div className='mb-4'>
        <h2 className='text-lg font-semibold mb-2'>Theme</h2>
        <DarkModeSelector />
      </div>
    </div>
  )
}

export default Settings
