import { FormEvent, useState} from 'react';
import Modal from 'react-modal';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
    const { createTransaction } = useTransactions()

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            type,
            category,
        })
        
        setTitle('')
        setAmount(0)
        setType('')
        setCategory('')
        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-model-content"
        >
            <h2 className="text-title text-lg font-semibold my-5">Cadastrar Transação</h2>
            <form action="" className="flex-col space-y-4" onSubmit={handleCreateNewTransaction}>
                <input 
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    type="text"
                    className="bg-[#E7E9EE] w-full py-4 px-3 rounded-lg font-light hover:opacity-80 duration-200"
                />

                <input
                    type="number"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                    placeholder='Valor'
                    className="bg-[#E7E9EE] w-full py-4 px-3 rounded-lg font-light hover:opacity-80 duration-200"
                />

                <div className="flex space-x-2">
                    <button
                        type="button"
                        onClick={() => {setType('deposit')}} 
                        className={`w-1/2 py-4 inline-flex items-center justify-center border-2 border-[#E7E9EE] 
                        ${type === 'deposit' ? "bg-green/10 border-0": ""}`}
                    >
                        <img className="mr-3" src={income} alt="Entrada" />
                        Entrada
                    </button>
                    <button
                        id="withdraw"
                        type="button" 
                        onClick={() => {setType('withdraw')}}
                        className={`w-1/2 py-4 inline-flex items-center justify-center border-2 border-[#E7E9EE] 
                        ${type === 'withdraw' ? "bg-red/10 border-0" : ""}`}
                    >
                        <img className="mr-3" src={outcome} alt="Saída" />
                        Saída
                    </button>
                </div>

                <input 
                    type="text"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    placeholder='Categoria'
                    className="bg-[#E7E9EE] w-full py-4 px-3 rounded-lg font-light hover:opacity-80 duration-200"
                />

                <button 
                    type='submit'
                    className="bg-green w-full py-4 rounded-lg text-shape hover:opacity-80 duration-200"
                >
                    Cadastrar
                </button>
            </form>

        </Modal>
    )
}