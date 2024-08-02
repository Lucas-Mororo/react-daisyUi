import React from 'react';

export default function DialogVisualizarOS({ ordemDeServico }: { ordemDeServico: any }) {
    const formatValue = (value: any) => value ? value : 'N/A';

    return (
        <>
            <div className="modal" role="dialog" id="my_modal_visualizar_os">
                <div className="modal-box h-4/5 max-w-4xl flex flex-col gap-5">
                    <a href="#" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
                    <h3 className="text-lg font-bold w-full flex justify-center">Ordem de Serviço</h3>

                    <div className="flex justify-center p-0">
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Categoria</th>
                                        <th>Detalhe</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Cliente */}
                                    <tr className="bg-gray-100">
                                        <td colSpan={3} className="font-semibold">Cliente</td>
                                    </tr>
                                    <tr>
                                        <td>Nome</td>
                                        <td>{formatValue(ordemDeServico?.cliente?.nome)}</td>
                                    </tr>
                                    <tr>
                                        <td>CPF/CNPJ</td>
                                        <td>{formatValue(ordemDeServico?.cliente?.cpfCnpj)}</td>
                                    </tr>
                                    <tr>
                                        <td>Endereço</td>
                                        <td>{formatValue(ordemDeServico?.cliente?.endereco)}</td>
                                    </tr>
                                    <tr>
                                        <td>Telefone</td>
                                        <td>{formatValue(ordemDeServico?.cliente?.telefone)}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{formatValue(ordemDeServico?.cliente?.email)}</td>
                                    </tr>

                                    {/* Veículo */}
                                    <tr className="bg-gray-200">
                                        <td colSpan={3} className="font-semibold">Veículo</td>
                                    </tr>
                                    <tr>
                                        <td>Placa</td>
                                        <td>{formatValue(ordemDeServico?.veiculo?.placa)}</td>
                                    </tr>
                                    <tr>
                                        <td>Marca</td>
                                        <td>{formatValue(ordemDeServico?.veiculo?.marca)}</td>
                                    </tr>
                                    <tr>
                                        <td>Modelo</td>
                                        <td>{formatValue(ordemDeServico?.veiculo?.modelo)}</td>
                                    </tr>
                                    <tr>
                                        <td>Ano</td>
                                        <td>{formatValue(ordemDeServico?.veiculo?.ano)}</td>
                                    </tr>
                                    <tr>
                                        <td>Cor</td>
                                        <td>{formatValue(ordemDeServico?.veiculo?.cor)}</td>
                                    </tr>
                                    <tr>
                                        <td>Quilometragem</td>
                                        <td>{formatValue(ordemDeServico?.veiculo?.quilometragem)}</td>
                                    </tr>
                                    <tr>
                                        <td>Chassi</td>
                                        <td>{formatValue(ordemDeServico?.veiculo?.chassi)}</td>
                                    </tr>

                                    {/* Serviços */}
                                    <tr className="bg-gray-100">
                                        <td colSpan={3} className="font-semibold">Serviços</td>
                                    </tr>
                                    <tr>
                                        <td>Solicitados</td>
                                        <td>{formatValue(ordemDeServico?.servicos?.solicitados)}</td>
                                    </tr>
                                    <tr>
                                        <td>Diagnóstico</td>
                                        <td>{formatValue(ordemDeServico?.servicos?.diagnostico)}</td>
                                    </tr>
                                    <tr>
                                        <td>Executados</td>
                                        <td>{formatValue(ordemDeServico?.servicos?.executados)}</td>
                                    </tr>
                                    <tr>
                                        <td>Peças</td>
                                        <td>{formatValue(ordemDeServico?.servicos?.pecas)}</td>
                                    </tr>
                                    <tr>
                                        <td>Materiais</td>
                                        <td>{formatValue(ordemDeServico?.servicos?.materiais)}</td>
                                    </tr>

                                    {/* Custos */}
                                    <tr className="bg-gray-200">
                                        <td colSpan={3} className="font-semibold">Custos</td>
                                    </tr>
                                    <tr>
                                        <td>Valor Peças</td>
                                        <td>{formatValue(ordemDeServico?.custos?.valorPecas)}</td>
                                    </tr>
                                    <tr>
                                        <td>Valor Mão de Obra</td>
                                        <td>{formatValue(ordemDeServico?.custos?.valorMaoDeObra)}</td>
                                    </tr>
                                    <tr>
                                        <td>Descontos</td>
                                        <td>{formatValue(ordemDeServico?.custos?.descontos)}</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>{formatValue(ordemDeServico?.custos?.total)}</td>
                                    </tr>
                                    <tr>
                                        <td>Condições de Pagamento</td>
                                        <td>{formatValue(ordemDeServico?.custos?.condicoesPagamento)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};