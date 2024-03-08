import { Modal } from "antd";

import { Button, Form, Input, type FormProps } from "antd";
import { IBookDTO } from "../../../dto/book";

export default function EditBookModal(props: IEditBookModalProps) {
  const onFinish: FormProps<IBookDTO>["onFinish"] = (values) => {
    props.onSubmitForm(values);
  };

  return (
    <>
      <Modal
        centered
        title={props.header}
        open={true}
        width={800}
        footer={null}
        onCancel={() => props.onClose()}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={props.data || {}}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {props?.data?.id && (
            <Form.Item<IBookDTO> label="Id" name="id">
              <Input contentEditable={false} disabled value={props.data.id} />
            </Form.Item>
          )}
          <Form.Item<IBookDTO>
            label="Title"
            name="title"
            rules={[
              { required: true, message: "Please input the book title!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<IBookDTO> label="Author" name="author">
            <Input />
          </Form.Item>

          <Form.Item<IBookDTO> label="Publication Year" name="publicationYear">
            <Input />
          </Form.Item>

          <Form.Item<IBookDTO> label="ISBN" name="isbn">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export interface IEditBookModalProps {
  header: string;
  data?: IBookDTO | null;
  onClose: () => void;
  onSubmitForm: (bookRequestDTO: IBookDTO) => void;
}
