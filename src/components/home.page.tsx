
const HomePage = () => {

    return (
        <div className='p-4'>
            <h1>Optimal MRP</h1>
            <div className='mb-4'>
                <p>MRP last run: 2023-10-01 12:00 PM</p>
                <p>Parts last synced: 2023-10-01 11:00 AM</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='p-4 rounded shadow'>
                    <h2 className='text-xl font-bold mb-2'>Factory State</h2>
                </div>
                <div className='rounded shadow'>
                    <h2 className='text-xl font-bold mb-2'>Inventory Status</h2>
                    <p>Inventory: 12 items</p>
                    <p>Work Orders: 19 items</p>
                    <p>Purchase Orders: 3 items</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage
