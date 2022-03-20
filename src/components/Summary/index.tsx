import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summery() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
           acc.deposits+= transaction.amount
           acc.total+= transaction.amount
        } else {
            acc.withdraws+= transaction.amount
           acc.total-= transaction.amount
        }
        return acc
    },{
        deposits: 0,
        withdraws: 0,
        total: 0,
    }) 

    return (
        <main className="max-w-5xl mx-auto px-4 overflow-x-auto -mt-8 md:-mt-20">
            <div className="inline-flex justify-between space-x-4">
                <div className="w-80 py-6 px-8 bg-shape rounded-md">
                    <header className="w-full inline-flex justify-between mb-8 items-center">
                        <span className="font-normal text-title">Entradas</span>
                        <img src={income} alt="Ícone de Entrada"/>
                    </header>
                    <strong className="text-3xl font-semibold text-title">
                        {
                            new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(summary.deposits)
                        }
                    </strong>
                </div>

                <div className="w-80 py-6 px-8 bg-shape rounded-md">
                    <header className="w-full inline-flex justify-between mb-8 items-center">
                        <span className="font-normal text-title">Saídas</span>
                        <img src={outcome} alt="Ícone de Entrada"/>
                    </header>
                    <strong className="text-3xl font-semibold text-title">
                        {
                            new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(summary.withdraws)
                        }
                    </strong>
                </div>

                <div className="w-80 py-6 px-8 bg-green text-shape rounded-md">
                    <header className="w-full inline-flex justify-between mb-8 mr-8 items-center">
                        <span>Total</span>
                        <img src={totalImg} alt="Ícone de Entrada"/>
                    </header>
                    <strong className="text-3xl font-semibold">
                        {
                            new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(summary.total)
                        }
                    </strong>
                </div>
            </div>
        </main>
    )
}