import DialogCadastroItens from '../../components/Dialog/Cadastros/Itens';
import DialogCadastroOs from '../../components/Dialog/Cadastros/Os';
import TabelaEstoque from '../../components/Tabela/Estoque';

export default function Estoque() {

    return (
        <>
            {/* -------- Botões de Cadastro -------- */}
            <div className="w-full p-1 flex justify-center ">
                <div className="flex justify-end w-full">
                    <a role="button" href="#my_modal_item" className="btn m-1 btn-primary">Cadastro de Estoque</a>
                </div>
            </div>
            {/* -------- Dialogs de Cadastro -------- */}
            <DialogCadastroItens />
            <DialogCadastroOs />

            <TabelaEstoque />
        </>
    )
}