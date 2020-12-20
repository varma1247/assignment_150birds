import React, { useState, useEffect } from "react";
import { Col, Table } from "react-bootstrap";
import transactionApi from "../data/transactionsData";
import styled from "styled-components";

const TransactionWrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  padding-right: 0px;
  overflow-y: auto;
  height: ${(props) => (props.expanded ? "300px" : "600px")};
`;
const InvoiveWrapper = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  padding-right: 0px;
  height: 300px;
  margin-top: 50px;
`;
const ExpandButton = styled.button`
  border: 1px solid lightgrey;
  height: 20px;
  padding-top: 0px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const Transactions = () => {
  const [transactionDataExpanded, setTransactionDataExpanded] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [invoiceData, setInvoiceData] = useState([]);
  const getTransactionData = async () => {
    const response = await transactionApi();
    setTransactionDataExpanded(response);
    setTransactionData(response);
  };
  const onExpand = (index) => {
    if (invoiceData.length > 0) {
      setTransactionDataExpanded([...transactionData]);
      setInvoiceData([]);
    } else {
      setTransactionDataExpanded([transactionData[index]]);
      setInvoiceData([
        ...transactionDataExpanded[index].invoice,
        { total: transactionDataExpanded[index].total },
      ]);
    }
  };
  useEffect(() => {
    getTransactionData();
  }, []);
  return (
    <Col xs={10} sm={10} md={9} className="mt-5 ml-4">
      <TransactionWrapper expanded={invoiceData.length > 0}>
        <h3>Transactions</h3>
        <Table>
          <thead>
            <tr>
              <th style={{ borderBottom: "none" }}></th>
              <th style={{ borderBottom: "none" }}>Date</th>
              <th style={{ borderBottom: "none" }}>Type</th>
              <th style={{ borderBottom: "none" }}>Amount</th>
              <th style={{ borderBottom: "none" }}>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactionDataExpanded.length > 0 &&
              transactionDataExpanded.map((transaction, transactionIndex) => {
                return (
                  <tr key={transactionIndex}>
                    <td>
                      <ExpandButton
                        onClick={(e) => {
                          onExpand(transactionIndex);
                        }}
                      >
                        -
                      </ExpandButton>
                    </td>
                    <td>{transaction.date}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.balance}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </TransactionWrapper>
      {invoiceData.length > 0 ? (
        <InvoiveWrapper>
          <h3>Invoice</h3>
          <Table>
            <thead>
              <tr>
                <th style={{ borderBottom: "none" }}>Company</th>
                <th style={{ borderBottom: "none" }}>Hour</th>
                <th style={{ borderBottom: "none" }}>Rate</th>
                <th style={{ borderBottom: "none" }}>Subtotal</th>
                <th style={{ borderBottom: "none" }}>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.length > 0 &&
                invoiceData.map((invoice, invoiceIndex) => {
                  return (
                    <tr key={invoiceIndex}>
                      <td>{invoice.company}</td>
                      <td>{invoice.hour}</td>
                      <td>{invoice.rate}</td>
                      <td>{invoice.subtotal}</td>
                      <td>{invoice.total}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </InvoiveWrapper>
      ) : null}
    </Col>
  );
};

export default Transactions;
