import { DatePicker, Form, type DatePickerProps } from "antd";

interface DatePickerFormProps extends DatePickerProps {
  formName: string;
  label?: string;
}

export default function DatePickerForm({ formName, label, ...props }: DatePickerFormProps) {
  const today = new Date()
  const handleDisabled = (current: any) => {
    return current < today
  }
  return (
    <section className="flex flex-col gap-1">
      {label && <p className="text-[14px] text-[#000000] ml-1 text-start">{label} *</p>}
      <Form.Item name={formName} noStyle rules={[{ required: true, message: 'Please fill with this field' }]}>
        <DatePicker
          disabledDate={handleDisabled}
          className="!h-[40px]"
          {...props}
        />
      </Form.Item>
    </section>
  );
}
