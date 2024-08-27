import { Form, Input, type InputProps } from "antd";

interface InputFormProps extends InputProps {
  formName: string;
  label?: string;
  type?: 'text' | 'password';
}

export default function InputForm({ formName, label, type, ...props }: InputFormProps) {
  return (
    <section className="flex flex-col gap-1">
      {label && <p className="text-[14px] text-[#000000] ml-1 text-start">{label} *</p>}
      <Form.Item name={formName} noStyle required>
        {type === 'password' ?
          <Input.Password placeholder="Type here" {...props} />
          :
          <Input placeholder="Type here" {...props} />
        }
      </Form.Item>
    </section>
  );
}
