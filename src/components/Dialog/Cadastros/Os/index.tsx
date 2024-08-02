import React from 'react';

interface Cliente {
    nome: string;
    cpfCnpj: string;
    endereco: string;
    telefone: string;
    email: string;
}

interface Veiculo {
    placa: string;
    marca: string;
    modelo: string;
    ano: string;
    cor: string;
    quilometragem: string;
    chassi: string;
}

interface Servicos {
    solicitados: string;
    diagnostico: string;
    executados: string;
    pecas: string;
    materiais: string;
}

interface Custos {
    valorPecas: string;
    valorMaoDeObra: string;
    descontos: string;
    total: string;
    condicoesPagamento: string;
}

interface FormData {
    cliente: Cliente;
    veiculo: Veiculo;
    servicos: Servicos;
    custos: Custos;
}

export default function DialogCadastroOs() {

    // -------- Modal-OS -------- // 
    const [step, setStep] = React.useState(1);
    const [formData, setFormData] = React.useState<FormData>({
        cliente: {
            nome: '',
            cpfCnpj: '',
            endereco: '',
            telefone: '',
            email: '',
        },
        veiculo: {
            placa: '',
            marca: '',
            modelo: '',
            ano: '',
            cor: '',
            quilometragem: '',
            chassi: '',
        },
        servicos: {
            solicitados: '',
            diagnostico: '',
            executados: '',
            pecas: '',
            materiais: '',
        },
        custos: {
            valorPecas: '',
            valorMaoDeObra: '',
            descontos: '',
            total: '',
            condicoesPagamento: '',
        },
    });
    const handleInputChange = <T extends keyof FormData>(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, category: T) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [category]: { ...prev[category], [name]: value, }, }));
    };
    // -------- Modal-OS -------- // 


    return (
        <div className="modal" role="dialog" id="my_modal_os">
            <div className="modal-box w-11/12 max-w-5xl flex flex-col justify-center items-center">

                <h3 className="text-lg font-bold w-full flex justify-center">Cadastro de Ordem de Serviço</h3>

                <div className="w-11/12 max-w-5xl">
                    <form method="dialog" className="flex justify-between">
                        <a href="#" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
                    </form>
                    <div className="steps w-full">
                        <button className={`step ${step >= 1 && 'step-primary'}`} onClick={() => setStep(1)}>
                            Cliente
                        </button>
                        <button className={`step ${step >= 2 && 'step-primary'}`} onClick={() => setStep(2)}>
                            Veículo
                        </button>
                        <button className={`step ${step >= 3 && 'step-primary'}`} onClick={() => setStep(3)}>
                            Serviços
                        </button>
                        <button className={`step ${step >= 4 && 'step-primary'}`} onClick={() => setStep(4)}>
                            Custos
                        </button>
                    </div>
                    <div className="mt-4">
                        {step === 1 && (
                            <div>
                                <h3 className="font-bold text-lg">Informações do Cliente</h3>
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    className="input input-bordered w-full mt-2"
                                    name="nome"
                                    value={formData.cliente.nome}
                                    onChange={(e) => handleInputChange(e, 'cliente')}
                                />
                                <input
                                    type="text"
                                    placeholder="CPF/CNPJ"
                                    className="input input-bordered w-full mt-2"
                                    name="cpfCnpj"
                                    value={formData.cliente.cpfCnpj}
                                    onChange={(e) => handleInputChange(e, 'cliente')}
                                />
                                <input
                                    type="text"
                                    placeholder="Endereço"
                                    className="input input-bordered w-full mt-2"
                                    name="endereco"
                                    value={formData.cliente.endereco}
                                    onChange={(e) => handleInputChange(e, 'cliente')}
                                />
                                <input
                                    type="text"
                                    placeholder="Telefone"
                                    className="input input-bordered w-full mt-2"
                                    name="telefone"
                                    value={formData.cliente.telefone}
                                    onChange={(e) => handleInputChange(e, 'cliente')}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full mt-2"
                                    name="email"
                                    value={formData.cliente.email}
                                    onChange={(e) => handleInputChange(e, 'cliente')}
                                />
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <h3 className="font-bold text-lg">Informações do Veículo</h3>
                                <input
                                    type="text"
                                    placeholder="Placa"
                                    className="input input-bordered w-full mt-2"
                                    name="placa"
                                    value={formData.veiculo.placa}
                                    onChange={(e) => handleInputChange(e, 'veiculo')}
                                />
                                <input
                                    type="text"
                                    placeholder="Marca"
                                    className="input input-bordered w-full mt-2"
                                    name="marca"
                                    value={formData.veiculo.marca}
                                    onChange={(e) => handleInputChange(e, 'veiculo')}
                                />
                                <input
                                    type="text"
                                    placeholder="Modelo"
                                    className="input input-bordered w-full mt-2"
                                    name="modelo"
                                    value={formData.veiculo.modelo}
                                    onChange={(e) => handleInputChange(e, 'veiculo')}
                                />
                                <input
                                    type="text"
                                    placeholder="Ano"
                                    className="input input-bordered w-full mt-2"
                                    name="ano"
                                    value={formData.veiculo.ano}
                                    onChange={(e) => handleInputChange(e, 'veiculo')}
                                />
                                <input
                                    type="text"
                                    placeholder="Cor"
                                    className="input input-bordered w-full mt-2"
                                    name="cor"
                                    value={formData.veiculo.cor}
                                    onChange={(e) => handleInputChange(e, 'veiculo')}
                                />
                                <input
                                    type="text"
                                    placeholder="Quilometragem"
                                    className="input input-bordered w-full mt-2"
                                    name="quilometragem"
                                    value={formData.veiculo.quilometragem}
                                    onChange={(e) => handleInputChange(e, 'veiculo')}
                                />
                                <input
                                    type="text"
                                    placeholder="Chassi"
                                    className="input input-bordered w-full mt-2"
                                    name="chassi"
                                    value={formData.veiculo.chassi}
                                    onChange={(e) => handleInputChange(e, 'veiculo')}
                                />
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <h3 className="font-bold text-lg">Descrição dos Serviços</h3>
                                <textarea
                                    placeholder="Serviços Solicitados"
                                    className="textarea textarea-bordered w-full mt-2"
                                    name="solicitados"
                                    value={formData.servicos.solicitados}
                                    onChange={(e) => handleInputChange(e, 'servicos')}
                                />
                                <textarea
                                    placeholder="Diagnóstico"
                                    className="textarea textarea-bordered w-full mt-2"
                                    name="diagnostico"
                                    value={formData.servicos.diagnostico}
                                    onChange={(e) => handleInputChange(e, 'servicos')}
                                />
                                <textarea
                                    placeholder="Serviços Executados"
                                    className="textarea textarea-bordered w-full mt-2"
                                    name="executados"
                                    value={formData.servicos.executados}
                                    onChange={(e) => handleInputChange(e, 'servicos')}
                                />
                                <textarea
                                    placeholder="Peças Substituídas"
                                    className="textarea textarea-bordered w-full mt-2"
                                    name="pecas"
                                    value={formData.servicos.pecas}
                                    onChange={(e) => handleInputChange(e, 'servicos')}
                                />
                                <textarea
                                    placeholder="Materiais Utilizados"
                                    className="textarea textarea-bordered w-full mt-2"
                                    name="materiais"
                                    value={formData.servicos.materiais}
                                    onChange={(e) => handleInputChange(e, 'servicos')}
                                />
                            </div>
                        )}
                        {step === 4 && (
                            <div>
                                <h3 className="font-bold text-lg">Custos e Finalização</h3>
                                <input
                                    type="text"
                                    placeholder="Valor das Peças"
                                    className="input input-bordered w-full mt-2"
                                    name="valorPecas"
                                    value={formData.custos.valorPecas}
                                    onChange={(e) => handleInputChange(e, 'custos')}
                                />
                                <input
                                    type="text"
                                    placeholder="Valor da Mão de Obra"
                                    className="input input-bordered w-full mt-2"
                                    name="valorMaoDeObra"
                                    value={formData.custos.valorMaoDeObra}
                                    onChange={(e) => handleInputChange(e, 'custos')}
                                />
                                <input
                                    type="text"
                                    placeholder="Descontos"
                                    className="input input-bordered w-full mt-2"
                                    name="descontos"
                                    value={formData.custos.descontos}
                                    onChange={(e) => handleInputChange(e, 'custos')}
                                />
                                <input
                                    type="text"
                                    placeholder="Total a Pagar"
                                    className="input input-bordered w-full mt-2"
                                    name="total"
                                    value={formData.custos.total}
                                    onChange={(e) => handleInputChange(e, 'custos')}
                                />
                                <input
                                    type="text"
                                    placeholder="Condições de Pagamento"
                                    className="input input-bordered w-full mt-2"
                                    name="condicoesPagamento"
                                    value={formData.custos.condicoesPagamento}
                                    onChange={(e) => handleInputChange(e, 'custos')}
                                />

                                <a href="#" className="btn btn-primary w-full mt-4">Salvar</a>
                            </div>
                        )}
                    </div>

                    <div className="modal-action flex justify-between">
                        <div className="w-2/5 flex justify-start">
                            {step > 1 && (
                                <button className="btn btn-primary-content" onClick={() => setStep((prev) => prev - 1)}>
                                    Anterior
                                </button>
                            )}
                        </div>
                        <div className="w-2/5 flex justify-end">
                            {step < 4 && (
                                <button className="btn btn-primary" onClick={() => setStep((prev) => prev + 1)}>
                                    Próximo
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}