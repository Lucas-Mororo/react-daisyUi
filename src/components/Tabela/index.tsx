import React from 'react';
import DialogVisualizarOS from '../Dialog/Visualizar/Os';

const Tab1Itens = () => {
    return (
        <div className="flex justify-center p-4" >
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

const Tab2OS = () => {
    return (
        <div className="flex justify-center p-4" >
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default function Tabela() {
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
                    <div role="tablist" className="tabs tabs-lifted">
                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab w-1/2 text-center cursor-pointer"
                            aria-label="Tabela de Itens"
                            defaultChecked
                        />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <Tab1Itens />
                        </div>

                        <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab"
                            aria-label="tabela de OS"
                        />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <Tab2OS />
                        </div>
                    </div>
                </div>
            </div>

            <li><a href="#my_modal_visualizar_os">Visualizar Ordem de Serviço</a></li>
            <DialogVisualizarOS ordemDeServico={ordemDeServico} />
        </>
    )
}
