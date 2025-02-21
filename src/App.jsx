import { Layout } from './layout/index.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  )
}

export default App
