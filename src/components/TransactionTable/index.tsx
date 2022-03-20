import { useTransactions } from "../../hooks/useTransactions"

export function TransactionTable () {
    const { transactions } = useTransactions();

    return(
        <section className="max-w-5xl mx-auto overflow-x-auto px-4 mb-20">
                <table className="w-full border-separate border-spacing-2">
                    <thead>
                        <tr>
                            <th className= "font-normal text-txt py-6 px-4 text-left">Título</th>
                            <th className= "font-normal text-txt py-6 px-4 text-left">Preço</th>
                            <th className= "font-normal text-txt py-6 px-4 text-left">Categoria</th>
                            <th className= "font-normal text-txt py-6 px-4 text-left">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction =>  (
                            <tr 
                                className="bg-shape hover:opacity-70"
                                key={transaction.id}
                            >
                                <td className="font-normal text-title py-4 px-3  rounded-tl-lg rounded-bl-lg min-w-max">
                                    {transaction.title}
                                </td>

                                <td className={`${transaction.type === 'deposit'? "text-green": "text-red"}`}>
                                    {new Intl.NumberFormat('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>

                                <td className="font-normal text-txt px-5">
                                    {transaction.category}
                                </td>

                                <td className="font-normal text-txt rounded-tr-lg rounded-br-lg px-5">
                                    {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.created_at))}
                                </td>
                            </tr>
                            )
                        )}
                    </tbody>
                </table>
 
        </section>
    )
}