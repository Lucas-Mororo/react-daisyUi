import DialogCadastroItens from '../../components/Dialog/Cadastros/Itens';
import DialogCadastroOs from '../../components/Dialog/Cadastros/Os';
import TabelaEstoque from '../../components/Tabela/estoque';

export default function Estoque() {

    return (
        <>
            {/* -------- Botões de Cadastro -------- */}
            <div className="w-full p-1 flex justify-center ">
                <div className="flex justify-end w-full">
                    <a role="button" href="#my_modal_os" className="btn m-1 btn-primary">Nova OS</a>

                    {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 btn-primary">Cadastro</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="#my_modal_item">Item</a></li>
                        <li><a href="#my_modal_os">OS</a></li>
                    </ul>
                </div> */}

                </div>
            </div>
            {/* -------- Dialogs de Cadastro -------- */}
            <DialogCadastroItens />
            <DialogCadastroOs />

            <TabelaEstoque />
        </>
    )
}