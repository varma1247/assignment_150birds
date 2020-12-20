const transactions = [
  {
    date: "Oct 25, 2020",
    type: "Payment completed to Project",
    amount: "$299.00",
    balance: "$299.00",
    invoice: [
      {
        company: "Company #1",
        hour: "8 hours",
        rate: "$60/hour",
        subtotal: "$480",
      },
      {
        company: "Company #1",
        hour: "8 hours",
        rate: "$60/hour",
        subtotal: "$480",
      },
      {
        company: "Company #1",
        hour: "8 hours",
        rate: "$60/hour",
        subtotal: "$480",
      },
    ],
    total: "$1440",
  },
  {
    date: "Oct 26, 2020",
    type: "First Payment",
    amount: "$399.00",
    balance: "$399.00",
    invoice: [
      {
        company: "Company #2",
        hour: "8 hours",
        rate: "$60/hour",
        subtotal: "$380",
      },
      {
        company: "Company #2",
        hour: "8 hours",
        rate: "$60/hour",
        subtotal: "$380",
      },
      {
        company: "Company #2",
        hour: "8 hours",
        rate: "$60/hour",
        subtotal: "$380",
      },
    ],
    total: "$1140",
  },
  {
    date: "Oct 27, 2020",
    type: "Second Payment",
    amount: "$499.00",
    balance: "$499.00",
    invoice: [
      {
        company: "Company #3",
        hour: "8 hours",
        rate: "$60/hour",
        subtotal: "$280",
      },
      {
        company: "Company #3",
        hour: "8 hours",
        rate: "$60/hour",
        subtotal: "$280",
      },
      {
        company: "Company #3",
        hour: "8 hours",
        rate: "$60/hour",
        subtotal: "$280",
      },
    ],
    total: "$840",
  },
];

const apiResponse = () => {
  return new Promise((resolve, reject) => {
    resolve(transactions);
  });
};

export default apiResponse;
