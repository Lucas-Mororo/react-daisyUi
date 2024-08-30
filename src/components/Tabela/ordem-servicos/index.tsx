import React from 'react';
import DialogVisualizarOS from '../../Dialog/Visualizar/Os';

const TabOS = () => {
    return (

        <div className="flex justify-center p-4 bg-base-100">
            <div className="overflow-x-auto w-full">
                <table className="min-w-full bg-neutral rounded-lg shadow-md">
                    {/* head */}
                    <thead className="bg-primary text-primary-content uppercase text-sm leading-normal">
                        <tr>
                            <th className="py-3 px-6 text-left">OS</th>
                            <th className="py-3 px-6 text-left">Nome</th>
                            <th className="py-3 px-6 text-left">Veiculo</th>
                            <th className="py-3 px-6 text-left">Placa</th>
                            <th className="py-3 px-6 text-left">Status</th>
                            <th className="py-3 px-6 text-left">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="text-base-content text-sm font-light">
                        {/* row 1 */}
                        <tr className="bg-base-200 hover:bg-base-300">
                            <td className="py-3 px-6">001</td>
                            <td className="py-3 px-6">João Silva</td>
                            <td className="py-3 px-6">Kwid 1.0 Intense</td>
                            <td className="py-3 px-6">AAA-000</td>
                            <td className="py-3 px-6">Aberta</td>
                            <td className="py-3 px-6">
                                <button className="text-info hover:text-info-content">Editar</button>
                                <button className="text-error hover:text-error-content ml-4">Excluir</button>
                            </td>
                        </tr>
                        <tr className="bg-base-200 hover:bg-base-300">
                            <td className="py-3 px-6">002</td>
                            <td className="py-3 px-6">Maria Oliveira</td>
                            <td className="py-3 px-6">Renegade Sport</td>
                            <td className="py-3 px-6">BBB-111</td>
                            <td className="py-3 px-6">Aberta</td>
                            <td className="py-3 px-6">
                                <button className="text-info hover:text-info-content">Editar</button>
                                <button className="text-error hover:text-error-content ml-4">Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};


export default function TabelaOrdemServicos() {
    const ordemDeServico = {
        cliente: {
            nome: 'João da Silva',
            cpfCnpj: '123.456.789-00',
            endereco: 'Rua A, 123, Bairro B',
            telefone: '(11) 1234-5678',
            email: 'joao@example.com',
        },
        veiculo: {
            placa: 'ABC-1234',
            marca: 'Toyota',
            modelo: 'Corolla',
            ano: '2015',
            cor: 'Prata',
            quilometragem: '75.000 km',
            chassi: '9BWZZZ377VT004251',
        },
        servicos: {
            solicitados: 'Troca de óleo, Revisão dos freios',
            diagnostico: 'Freios desgastados, Óleo vencido',
            executados: 'Troca de óleo, Troca de pastilhas de freio',
            pecas: 'Óleo, Pastilhas de freio',
            materiais: 'Filtro de óleo',
        },
        custos: {
            valorPecas: 'R$ 300,00',
            valorMaoDeObra: 'R$ 200,00',
            descontos: 'R$ 50,00',
            total: 'R$ 450,00',
            condicoesPagamento: 'À vista',
        },
    };


    return (
        <>
            <div className="flex justify-center p-4">
                <div className="w-full">
                    <TabOS />
                </div>
            </div>

            <li><a href="#my_modal_visualizar_os">Visualizar Ordem de Serviço</a></li>
            <DialogVisualizarOS ordemDeServico={ordemDeServico} />
        </>
    )
}
