import React, { useState } from 'react';
import { Form, Input, Button, Select, theme, Steps, message } from "antd";

type TransferProps = {
    modal: boolean;
    value: number;
    setModal: (val: boolean) => void;
};

export default function Transfer({ setModal, value }: TransferProps): JSX.Element {
    const handleCancel = () => {
        setModal(false);
    };

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const steps = [
        {
            key: 1,
            title: '',
        },
        {
            key: 2,
            title: '',
        },
        {
            key: 3,
            title: '',
        },
        {
            key: 4,
            title: '',
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    
    return (
        <>
            <Steps current={current} items={items} />

            <Form
                layout="vertical"
            >
                {steps[current].key === 1 &&(
                    <section>
                        <section className="space-y-4 my-7">
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
                    </section>
                )}

                {steps[current].key === 2 &&(
                    <section>
                        <section className="space-y-4 my-7">
                            <p className="text-diamondBlack3 capitalize text-[24px] font-bold">
                                Seleccionar Vehículo
                            </p>
                            <span className="text-[#646464] font-light text-sm">Completa el formulario con los datos del transfer y el cliente.</span>
                        </section>
                        <div className='grid grid-cols-1 mb-10'>
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
                        </div>
                    </section>
                )}

                {steps[current].key === 3 &&(
                    <section>
                        <section className="mt-3 mb-5 space-y-4">
                            <p className="text-diamondBlack3 capitalize text-[24px] font-bold">
                                Detalles del Cliente
                            </p>
                            <span className="text-[#646464] font-light text-sm">Completa el formulario con los datos del transfer y el cliente.</span>
                        </section>
                    </section>
                )}

                {steps[current].key === 4 &&(
                    <section>
                        <section className="my-7">
                            <p className="text-diamondBlack3 capitalize text-[24px] font-bold">
                                Opciones de Pago
                            </p>
                        </section>
                    </section>
                )}

                <section className="flex mt-12 gap-x-4">
                    <Button
                        onClick={handleCancel}
                        className="w-full hover:!text-diamondBlack1"
                        type='default'
                    >
                        Cancelar
                    </Button>

                    {current < steps.length - 1 && (
                        <Button
                            onClick={() => next()}
                            type='primary'
                            className="rounded-md w-full hover:!bg-[#4a6bb0]"
                        >
                            Continuar
                        </Button>
                    )}

                    {current === steps.length - 1 && (
                        <Button 
                            onClick={() => message.success('Processing complete!')}
                            type="primary"
                            className="rounded-md w-full hover:!bg-[#4a6bb0]"
                        >
                            Done
                        </Button>
                    )}
                </section>
            </Form>
        </>
    )
}