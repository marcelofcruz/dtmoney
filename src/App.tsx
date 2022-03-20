import { useState } from "react";

import { NewTransactionModal } from "./components/NewTransactionModal";
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import Modal from 'react-modal'
import { TransactionsProvider } from "./hooks/useTransactions";


Modal.setAppElement('#root')

export const App = () => {  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

  return(
    <TransactionsProvider>
      <div className="h-screen bg-bkg">
        <Header
          onOpenNewTransactionModal={handleOpenNewTransactionModal}
        />
        <Dashboard/>

        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </div>
    </TransactionsProvider>
  )
}