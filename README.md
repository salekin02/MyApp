# Design system Application

This project is a simple setup for building a React application using TypeScript and Vite. The project also demonstrates how to integrate and use components from the `salekin-design-system`.



## Installing Salekin Design System

To install the `salekin-design-system`, run the following command:

```sh
npm install salekin-design-system
```

## Example Usage

Here is an example of how to use components from the `salekin-design-system` in your application:

```tsx
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
```