import React, { useEffect, useState } from 'react';
import { IUserProps } from "@/types/reservationsTypes";
import { Button, Form, Modal, Grid, Radio, RadioChangeEvent } from "antd";
import RegisterTransfer from './RegisterTransfer';

const { useBreakpoint } = Grid

export default function ReservationCreate({ children }: IUserProps) {
    const screens = useBreakpoint()
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [select, setSelect] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        setSelect(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const typeReservation = () => {
        setSelect(true);
    };    

    useEffect(() => {
        if (screens.xs) {
            setIsModalOpen(false)
        }
    }, [screens, setIsModalOpen])

    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 9,
    };

    return (
        <>
            <section onClick={showModal}>
                {children}
            </section>
            <Modal open={isModalOpen} width={500} onCancel={handleCancel} footer closable={false}>
                {select === false ? (
                    <section>
                        <section className="mt-3 mb-5">
                            <p className="text-diamondBlack3 text-center capitalize text-[24px] font-bold">
                                Tipo de Reserva
                            </p>
                        </section>
                        <Form
                            layout="vertical"
                        >   
                            <Radio.Group
                                style={style} 
                                onChange={onChange}
                                value={value}
                                options={[
                                    {value: 1, label: 'Transfer'},
                                    {value: 2, label: 'Airport Transfer'},
                                    {value: 3, label: 'Return to Airport Transfer'},
                                ]}
                            />

                            <section className="flex mt-12 gap-x-4">
                                <Button
                                    onClick={handleCancel}
                                    className="w-full hover:!text-diamondBlack1"
                                    type='default'
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    onClick={typeReservation}
                                    type='primary'
                                    className="rounded-md w-full hover:!bg-[#4a6bb0]"
                                >
                                    Continuar
                                </Button>
                            </section>
                        </Form>
                    </section>
                ) : (
                    <RegisterTransfer value={value} modal={isModalOpen} setModal={setIsModalOpen} />
                )}
            </Modal>
        </>
    )
}