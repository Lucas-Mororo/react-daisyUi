import React from 'react';

export default function DialogCadastroClientes() {

    const [value, setValue] = React.useState({ nome: "", descrição: "", valor: "R$ 0,00" });

    return (
        <div className="modal" role="dialog" id="my_modal_cliente">
            <div className="modal-box flex flex-col gap-5">
                <a href="#" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
                <h3 className="text-lg font-bold w-full flex justify-center">Cadastro de Item</h3>

                <div className="flex flex-col w-full gap-3">
                    <input type="text"
                        placeholder="Nome"
                        className="input input-bordered w-full"
                        value={value?.nome}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            setValue((prev) => ({ ...prev, nome: inputValue }));
                        }}
                    />
                    <input type="text"
                        placeholder="Descrição"
                        className="input input-bordered w-full"
                        value={value?.descrição}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            setValue((prev) => ({ ...prev, descrição: inputValue }));
                        }}
                    />
                </div>

                <div className="modal-action m-0">
                    <a href="#" className="btn">Salvar</a>
                </div>
            </div>
        </div>
    )
}