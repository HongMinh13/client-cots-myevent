import {
    ChangePasswordInput,
    refetchGetMeQuery,
    useChangePasswordMutation,
    UserUpdateInput,
  } from '#/generated/schemas';
  import { userVar } from '#/graphql/cache';
  import PrimaryButton from '#/shared/components/buttons/PrimaryButton';
  import OutlineButton from '#/shared/components/Styled/OutlineButton';
  import { showError, showSuccess } from '#/shared/utils/tools';
  import { useReactiveVar } from '@apollo/client';
  import { Col, Form, Input, Row, Typography } from 'antd';
  import { useEffect, useState } from 'react';
  
  function ChangePassword() {
    const [form] = Form.useForm();
    const userProfile = useReactiveVar(userVar);
    const [isEdit, setIsEdit] = useState(false);
  
    const [ChangePassword, { loading: updateLoading }] = useChangePasswordMutation({
      onCompleted() {
        showSuccess('Đổi mật khẩu thành công');
        setIsEdit(false);
      },
      onError: showError,
      refetchQueries: [refetchGetMeQuery()],
    });
  
    const onSubmit = ({
      newPassword,
      password,
    }: ChangePasswordInput) => {
      if (isEdit){
        if (newPassword !== form.getFieldValue('confirmNewPassword')) {
          showError('Mật khẩu mới không khớp');
          return;
        }
        ChangePassword({
          variables: {
            changePasswordInput: {
              newPassword: newPassword,
              password: password,
            },
          },
        });
      }
        
    };
  
    useEffect(() => {
      form.setFieldsValue(userProfile);
    }, [userProfile, form]);
  
    return (
      <div className="mb-8 flex h-screen flex-col items-center justify-center gap-8 ">
        <div className="${className} relative w-[40%] rounded-2xl bg-[#242424]  px-8 px-8 py-12 backdrop-blur-3xl md:w-full">
          <Typography.Title
            className="mt-0 w-full py-3 text-center text-white"
            level={3}
          >
            ĐỔI MẬT KHẨU
          </Typography.Title>
          <Form
            form={form}
            onFinish={onSubmit}
            initialValues={{
              firstName: userProfile?.firstName,
              lastName: userProfile?.lastName,
              email: userProfile?.email,
              phoneNumber: userProfile?.phoneNumber,
            }}
          >
            <Row className="w-full">
              <Col span={24} className="mt-4">
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    className="text-white"
                    placeholder="Nhập mật khẩu cũ..."
                  />
                </Form.Item>
              </Col>
              <Col span={24} className="mt-4">
                <Form.Item
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    className="text-white"
                    placeholder="Nhập mật khẩu mới..."
                  />
                </Form.Item>
              </Col>
              <Col span={24} className="mt-4">
                <Form.Item
                  name="confirmNewPassword"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    className="text-white"
                    placeholder="Nhập lại mật khẩu mới..."
                  />
                </Form.Item>
              </Col>
  
              <Col span={24} className="mt-8 flex justify-center gap-4">
                {isEdit ? (
                  <>
                    <PrimaryButton htmlType="submit" loading={updateLoading}>
                      Lưu
                    </PrimaryButton>
                    <OutlineButton
                      disabled={updateLoading}
                      onClick={() => {
                        form.setFieldsValue(userProfile);
                        setIsEdit(prev => !prev);
                      }}
                    >
                      Hủy
                    </OutlineButton>
                  </>
                ) : (
                  <OutlineButton
                    onClick={() => setIsEdit(prev => !prev)}
                    className="rounded-md px-8"
                    data-testid="edit-btn"
                  >
                    Cập nhật
                  </OutlineButton>
                )}
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
  
  export default ChangePassword;
  