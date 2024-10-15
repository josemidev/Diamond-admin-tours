import { Form, Select, type SelectProps } from "antd";

interface SelectFormProps extends SelectProps {
  formName: string;
  label?: string;
}

export default function SelectForm({ formName, label, ...props }: SelectFormProps) {
  return (
    <section className="flex flex-col gap-1">
      {label && <p className="text-[14px] text-[#000000] ml-1 text-start">{label} *</p>}
      <Form.Item name={formName} noStyle rules={[{ required: true, message: 'Please select an option ' }]}>
        <Select
          {...props}
          showSearch
          filterOption={(input, option) =>
            option?.props.label.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
            option?.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        />
      </Form.Item>
    </section>
  );
}
