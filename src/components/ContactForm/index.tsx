import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Row, Col , message, Form , Input} from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide, Zoom } from 'react-awesome-reveal';
import { ContactProps, ValidationTypeProps } from './types';
import { Button } from "../../common/Button";
import Block from "../Block";
// import Input from "../../common/Input";
// import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from './styles';


const Contact = ({ title, content, id, t }: ContactProps) => {
  const [state, handleSubmit] = useForm("xjvqwzyj");
  if (state.succeeded) {
      message.success("Thanks For Contact Us")
  }

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup 
              action="https://formspree.io/f/xjvqwzyj"
              method="POST" 
              autoComplete="off" 
              onSubmit={handleSubmit}>
                
              <Col span={24}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
              </Col>
              <br />
              <Col span={24}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
              </Col>
              <br />
              <Col span={24}>
                <label>Message</label>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  required
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
              </Col>
              <ButtonContainer>
                  <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
