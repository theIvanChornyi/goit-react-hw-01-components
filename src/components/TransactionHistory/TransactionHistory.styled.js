import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 750px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  background-color: white;
  color: #757575;

  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: ${19 / 16};

  border-collapse: collapse;

  td {
    height: 50px;
  }
  th {
    background-color: rgb(183, 250, 228);

    height: 50px;
    :first-child {
      border-top-left-radius: 10px;
      border-right: 2px solid #f5f4fa;
    }
    :last-child {
      border-top-right-radius: 10px;
      border-left: 2px solid #f5f4fa;
    }
  }
  tbody td {
    :first-child {
      border-right: 2px solid #f5f4fa;
    }
    :last-child {
      border-left: 2px solid #f5f4fa;
    }
  }
  tbody tr:nth-child(odd) {
    background-color: white;
    color: #9a91c7;
  }

  tbody tr:nth-child(even) {
    background-color: #9a91c7;
    color: white;
  }
  tbody tr:last-child {
    td:first-child {
      border-bottom-left-radius: 10px;
    }
    td:last-child {
      border-bottom-right-radius: 10px;
    }
  }
`;
