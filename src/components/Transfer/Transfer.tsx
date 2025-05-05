import React, { useState } from 'react';
import { Form, Input, Button, Select } from "antd";

type TransferProps = {
    modal: boolean;
    value: number;
    setModal: (val: boolean) => void;
};

export default function Transfer({ setModal, value }: TransferProps): JSX.Element {
    const handleCancel = () => {
        setModal(false);
    };
    
    return (
        <>
            <section className="mt-3 mb-5 space-y-4">
                <p className="text-diamondBlack3 capitalize text-[24px] font-bold">
                    {value === 1 && (
                        <span>Registrar Transfer</span>
                    )}

                    {value === 2 && (
                        <span>Registrar Airport Transfer</span>
                    )}

                    {value === 3 && (
                        <span>Registrar Return to Airport Transfer</span>
                    )}
                </p>
                <span className="text-[#646464] font-light text-sm">Completa el formulario con los datos del transfer y el cliente.</span>
            </section>
            <Form
                layout="vertical"
            >
                <div className="grid grid-cols-2 gap-3 mt-4">
                    {(value === 1 || value === 3) && (
                        <Input type="text" placeholder="Lugar de recogida" />
                    )}

                    {(value === 1 || value === 2) && (
                        <Input type="text" placeholder="Destino" />
                    )}

                    {(value === 3 || value === 2) && (
                        <Select
                            showSearch
                            optionFilterProp="label"
                            placeholder="Aeropuerto"
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    )}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
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