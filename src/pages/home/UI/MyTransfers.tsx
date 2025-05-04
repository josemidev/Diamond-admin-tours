import { InitialStatus } from "@/components/Cards/StatusCard";
import { PlusOutlined, CopyOutlined } from "@ant-design/icons";
import { Button, notification, Table, TableColumnsType } from "antd";
import TransferCreate from "@/components/Transfer/TransferCreate";

export default function MyTransfers(): JSX.Element {
    const handleCopy = async (id: string) => {
        try {
            await navigator.clipboard.writeText(id);
            notification.success({
            message: 'Copiado',
            description: 'El ID de la reserva ha sido copiado al portapapeles',
            placement: 'topRight'
            });
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const columns: TableColumnsType = [
        {
            title: 'ID de Reserva',
            dataIndex: 'idReservation',
            key: 'idReservation',
            render: (idReservation) => (
                <div className="flex items-center gap-2">
                    <span>{idReservation}</span>
                    <Button
                        onClick={() => handleCopy(idReservation)}
                        icon={<CopyOutlined style={{ color: '#969696', fontSize: 12 }} />}
                        size="small"
                    />
                </div>
            )
        },
        {
            title: 'Cliente',
            dataIndex: 'client',
            key: 'client',
            render: (client) => <span className="font-medium">{client}</span>
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (email) => <span className="font-medium">{email}</span>
        },
        {
            title: 'Fecha',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Teléfono',
            dataIndex: 'phone',
            key: 'phone',
            render: (phone) => <span className="font-medium">{phone}</span>
        },
        {
            title: '# de Orden',
            dataIndex: 'numberOfOrder', 
            key: 'numberOfOrder',
            render: (numberOfOrder) => <span className="font-medium">{numberOfOrder}</span>
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (<InitialStatus statusOrder={status} />)
        },
        {
            title: 'T. Reserva',
            dataIndex: 'typeReservation',
            key: 'typeReservation',
        },
    ];

    const dataSource = [
        {
            key: '1',
            idReservation: '2072404c3',
            client: 'Manuel Perez',
            email: 'manuelrdg@gmail.com',
            date: 'Ago 12, 2024',
            phone: '+57 300 1234567',
            numberOfOrder: '1153993901',
            status: 'unrevised',
            typeReservation: 0,
        },
        {
            key: '2',
            idReservation: '2072404c3',
            client: 'Manuel Perez',
            email: 'manuelrdg@gmail.com',
            date: 'Ago 12, 2024',
            phone: '+57 300 456 5678',
            numberOfOrder: '434425',
            status: 'review',
            typeReservation: 1,
        },
        {
            key: '3',
            idReservation: '2072404c3',
            client: 'Manuel Perez',
            email: 'manuelrdg@gmail.com',
            date: 'Ago 12, 2024',
            phone: '+57 300 456 5678',
            numberOfOrder: '435153',
            status: 'approved',
            typeReservation: 1,
        },
        {
            key: '4',
            idReservation: '2072404c3',
            client: 'Manuel Perez',
            email: 'manuelrdg@gmail.com',
            date: 'Ago 12, 2024',
            phone: '+57 300 456 5678',
            numberOfOrder: '435231',
            status: 'rejected',
            typeReservation: 1,
        },
    ];

    return (
        <>
            <section className="sticky top-0 z-10 w-full pt-2 pb-6 bg-white border-b">
                <section className="flex items-center justify-between w-full px-5 my-8">
                    <h1 className="text-[28px] font-bold text-[#000000] capitalize leading-none">
                        Mis Transfers
                    </h1>

                    <TransferCreate>
                        <Button
                            className="!h-[38px] rounded-xl"
                            icon={<PlusOutlined />}
                            iconPosition='start'
                            type="primary"
                            size='middle'
                        >
                            Registrar Transfer
                        </Button>
                    </TransferCreate>
                </section>
                <section className=" pb-5 !overflow-y-auto !h-[calc(100vh-250px)]">
                    <Table
                        virtual={false}
                        rowHoverable
                        size="small"
                        bordered={false}
                        columns={columns}
                        dataSource={dataSource}
                        pagination={false}
                        scroll={{ x: 1000, y: 800 }}
                    />
                </section>
            </section>
        </>
    )
}