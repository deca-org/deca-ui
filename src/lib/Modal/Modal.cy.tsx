import { Test } from '../Utils';
import _cyp from '../../../cypress';
import React from 'react';
import Modal, {
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
} from '.';
import Button from '../Button';
import Text from '../Text';
import Input from '../Input';

interface ModalComposerProps extends ModalProps {
  header?: ModalHeaderProps;
  body?: ModalBodyProps;
  footer?: ModalFooterProps;
}

const ModalComposer = (props: ModalComposerProps) => (
  <Modal closeButton {...props} data-testid="test.modal">
    <Modal.Header {...props.header}>
      <Text as="p" size="$h6" center>
        Welcome to <b>DecaUI</b>
      </Text>
    </Modal.Header>
    <Modal.Body {...props.body}>
      <Input variant="outlined" placeholder="Email Address" size="lg" />
      <Input variant="outlined" placeholder="Password" size="lg" />
    </Modal.Body>
    <Modal.Footer {...props.footer}>
      <Button variant="flat" color="error">
        Close
      </Button>
      <Button>Sign Up</Button>
    </Modal.Footer>
  </Modal>
);

const modalSelector = '[data-testid="test.modal"]';

describe('components/Modal', () => {
  describe('state', () => {
    it('not exist in DOM when not open', () => {
      cy.mount(<ModalComposer open={false} />);
      cy.get(modalSelector).should('not.exist');
    });
    it('exists in DOM when open', () => {
      cy.mount(<ModalComposer open={true} />);
      cy.get(modalSelector).should('exist');
    });
  });
  describe('autoGap', () => {
    it('container', () => {
      cy.mount(<ModalComposer open={true} />);
      cy.get('.decaModal-flexbox').should('have.css', 'gap', Test.space('4'));
    });
    it('header', () => {
      cy.mount(<ModalComposer open={true} />);
      cy.get('.decaModalHeader-root').should(
        'have.css',
        'gap',
        Test.space('2')
      );
    });
    it('body', () => {
      cy.mount(<ModalComposer open={true} />);
      cy.get('.decaModalBody-root').should('have.css', 'gap', Test.space('2'));
    });
    it('footer', () => {
      cy.mount(<ModalComposer open={true} />);
      cy.get('.decaModalFooter-root').should(
        'have.css',
        'gap',
        Test.space('2')
      );
    });
  });
  describe('disabled autoGap', () => {
    it('container', () => {
      cy.mount(<ModalComposer open={true} autoGap={false} />);
      cy.get('.decaModal-flexbox').should('have.css', 'gap', Test.space('n'));
    });
    it('header', () => {
      cy.mount(<ModalComposer open={true} header={{ autoGap: false }} />);
      cy.get('.decaModalHeader-root').should(
        'have.css',
        'gap',
        Test.space('n')
      );
    });
    it('body', () => {
      cy.mount(<ModalComposer open={true} body={{ autoGap: false }} />);
      cy.get('.decaModalBody-root').should('have.css', 'gap', Test.space('n'));
    });
    it('footer', () => {
      cy.mount(<ModalComposer open={true} footer={{ autoGap: false }} />);
      cy.get('.decaModalFooter-root').should(
        'have.css',
        'gap',
        Test.space('n')
      );
    });
  });

  describe('padding', () => {
    it('default padding', () => {
      cy.mount(<ModalComposer open={true} />);
      cy.get(modalSelector).should('have.css', 'padding', Test.space('3'));
    });
    it('noPadding', () => {
      cy.mount(<ModalComposer open={true} noPadding />);
      cy.get(modalSelector).should('have.css', 'padding', Test.space('n'));
    });
  });
});
