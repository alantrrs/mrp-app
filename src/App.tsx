import { 
  HomeIcon, 
  CubeIcon, 
  BuildingStorefrontIcon, 
  WrenchScrewdriverIcon, 
  TruckIcon,
  Cog8ToothIcon,
  CalendarDateRangeIcon
} from '@heroicons/react/24/outline'
import { SidebarLayout } from './lib/sidebar-layout'
import { Sidebar, SidebarHeader, SidebarBody, SidebarFooter, SidebarItem, SidebarSection, SidebarLabel } from './lib/sidebar'
import { Navbar, NavbarItem } from './lib/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MRP from './components/mrp/mrp.page'
import Parts from './components/parts/parts.page'
import Home from './components/home.page'
import Settings from './components/settings.page'

// Dummy components for each route
const Inventory = () => <div>Inventory Page</div>
const Production = () => <div>Production Page</div>
const Procurement = () => <div>Procurement Page</div>

const AppLayout = ({ children }: { children: React.ReactNode }) => {
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
              <SidebarLabel>Optimal MRP</SidebarLabel>
            </SidebarItem>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href='/mrp'>
                <CalendarDateRangeIcon />
                <SidebarLabel>Master Schedule</SidebarLabel>
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
              <Cog8ToothIcon />
              <SidebarLabel>Settings</SidebarLabel>
            </SidebarItem>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mrp' element={<MRP />} />
      <Route path='/parts' element={<Parts />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/production' element={<Production />} />
      <Route path='/procurement' element={<Procurement />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </BrowserRouter>
  )
}

export default App