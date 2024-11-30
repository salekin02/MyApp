import { useState } from 'react'
import './App.css'
import { Button, Card, Modal } from 'salekin-design-system'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const footerItems = [
    <Button onClick={() => setOpenModal(true)} colorPrimary='black' fontSize={20} type="primary">Add</Button>,
    <Button danger variant="outlined">Remove</Button>,
    <Button variant="solid">Hide</Button>,
  ]

  return (
    <>
      <Card title="Card Title"
        body="this is the body of the card"
        footerItems={footerItems} style={{ width: 300 }} />

        <Modal open={openModal} setOpenModal={setOpenModal} title="Modal Title" modalBody={
          "this is the body of the modal"
        } />
    </>
  )
}

export default App
