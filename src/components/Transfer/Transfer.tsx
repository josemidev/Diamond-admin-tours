import React, { useState } from 'react';
import { Form, Input, Button } from "antd";

type TransferProps = {
    modal: boolean;
    setModal: (val: boolean) => void;
};

export default function Transfer({ setModal }: TransferProps): JSX.Element {
    const handleCancel = () => {
        setModal(false);
    };
    
    return (
        <>
            <section className="mt-3 mb-5 space-y-4">
                <p className="text-diamondBlack3 capitalize text-[24px] font-bold">
                    Registrar Transfer
                </p>
                <span className="text-[#646464] font-light text-sm">Completa el formulario con los datos del transfer y el cliente.</span>
            </section>
            <Form
                layout="vertical"
            >
                <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                    <Input type="text" placeholder="Lugar de recogida" />
                    <Input type="text" placeholder="Destino" />
                    <Input type="date" />
                    <Input type="time" />
                </div>

                <section className="flex mt-12 gap-x-4">
                    <Button
                        onClick={handleCancel}
                        className="w-full hover:!text-diamondBlack1"
                        type='default'
                    >
                        Cancelar
                    </Button>
                    <Button
                        htmlType="submit"
                        type='primary'
                        className="rounded-md w-full hover:!bg-[#4a6bb0]"
                    >
                        Continuar
                    </Button>
                </section>
            </Form>
        </>
    )
}