import { Button } from './lib/button'
import { SidebarLayout } from './lib/sidebar-layout'
import { Sidebar, SidebarHeader, SidebarBody, SidebarFooter, SidebarItem } from './lib/sidebar'
import { Navbar, NavbarItem } from './lib/navbar'
import { BrowserRouter } from 'react-router-dom'

const AppLayout = () => {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarItem>Optimal MRP</NavbarItem>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarItem href='/'>Dashboard</SidebarItem>
          </SidebarHeader>
          <SidebarBody>
            <SidebarItem href='/parts'>Parts</SidebarItem>
            <SidebarItem href='/inventory'>Inventory</SidebarItem>
            <SidebarItem href='/production'>Production</SidebarItem>
            <SidebarItem href='/procurement'>Procurement</SidebarItem>
        </SidebarBody>
          <SidebarFooter>
            <SidebarItem href='/settings'>Settings</SidebarItem>
          </SidebarFooter>
        </Sidebar>
      }
    >
      <h1 className='text-2xl font-bold mb-4'>Optimal MRP</h1>
      <Button>Get Started</Button>
    </SidebarLayout>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App