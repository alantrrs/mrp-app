import { 
  HomeIcon, 
  Cog6ToothIcon, 
  CubeIcon, 
  BuildingStorefrontIcon, 
  WrenchScrewdriverIcon, 
  TruckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import { Button } from './lib/button'
import { SidebarLayout } from './lib/sidebar-layout'
import { Sidebar, SidebarHeader, SidebarBody, SidebarFooter, SidebarItem, SidebarSection, SidebarLabel } from './lib/sidebar'
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
            <SidebarItem href='/'>
              <HomeIcon />
              <SidebarLabel>Dashboard</SidebarLabel>
            </SidebarItem>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href='/mrp'>
                <Cog6ToothIcon />
                <SidebarLabel>MRP</SidebarLabel>
              </SidebarItem>
              <SidebarItem href='/parts'>
                <CubeIcon />
                <SidebarLabel>Parts</SidebarLabel>
              </SidebarItem>
              <SidebarItem href='/inventory'>
                <BuildingStorefrontIcon />
                <SidebarLabel>Inventory</SidebarLabel>
              </SidebarItem>
              <SidebarItem href='/production'>
                <WrenchScrewdriverIcon />
                <SidebarLabel>Production</SidebarLabel>
              </SidebarItem>
              <SidebarItem href='/procurement'>
                <TruckIcon />
                <SidebarLabel>Procurement</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter>
            <SidebarItem href='/settings'>
              <ChartBarIcon />
              <SidebarLabel>Analytics</SidebarLabel>
            </SidebarItem>
          </SidebarFooter>
        </Sidebar>
      }
    >
      <h1 className='text-2xl font-bold mb-4'>Optimal MRP</h1>
      <Button outline>Get Started</Button>
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