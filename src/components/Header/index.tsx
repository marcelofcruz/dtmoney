import logo  from '../../assets/logo.svg';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps){
    return (
        <header className="h-56 bg-blue py-12">
            <div className="max-w-5xl mx-auto px-4">
                <div className="w-full grid grid-cols-1 gap-8 md:inline-flex md:justify-between md:items-center">
                    <img className="mx-auto md:mx-0" src={logo} alt="Logo dt_money"/>
                    <button 
                        className="bg-blue-light text-shape px-4 py-3 rounded-md duration-200 hover:brightness-90 "
                        onClick={onOpenNewTransactionModal}    
                    >
                        Nova Transação
                    </button>
                </div>
            </div>
        </header>
    )
}