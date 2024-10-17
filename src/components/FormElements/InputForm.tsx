import { Form, Input, type InputProps } from "antd";

interface InputFormProps extends InputProps {
  formName: string;
  label?: string;
  type: 'text' | 'password' | 'number';
  required?: boolean;
}

export default function InputForm({ formName, label, type, required = true, ...props }: InputFormProps) {
  const typeOfInput = {
    text: <Input placeholder="Escribe aquí" {...props} />,
    password: <Input.Password placeholder="Escribe aquí" {...props} />,
    number: <Input type='number' min={50} placeholder="Escribe aquí" {...props} />,
  }
  return (
    <section className="flex flex-col gap-1">
      {label && <p className="text-[14px] text-[#000000] ml-1 text-start">{label} *</p>}
      <Form.Item name={formName} noStyle rules={[{ required: required, message: 'Please fill this field' }]}>
        {typeOfInput[type || 'text'] || <Input placeholder="Escribe aquí" {...props} />}
      </Form.Item>
    </section>
  );
}
