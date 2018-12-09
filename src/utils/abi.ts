export const abi = [
  {
    inputs: [
      {
        name: "_authorities",
        type: "address[]"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "companyAddress",
        type: "address"
      },
      {
        indexed: false,
        name: "name",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "id",
        type: "uint256"
      }
    ],
    name: "companyRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "companyID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "login",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "password",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "companyEmployeeID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "systemEmployeeID",
        type: "uint256"
      }
    ],
    name: "companyRegistersNewEmployee",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        name: "when",
        type: "uint256"
      },
      {
        indexed: true,
        name: "speditionID",
        type: "uint256"
      }
    ],
    name: "newSpedition",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "speditionID",
        type: "uint256"
      }
    ],
    name: "speditionConfirmed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "documentID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "forwardedFromEmployeeID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "forwardedToEmployeeID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "when",
        type: "uint256"
      },
      {
        indexed: false,
        name: "stepLatitude",
        type: "uint256"
      },
      {
        indexed: false,
        name: "stepLongitude",
        type: "uint256"
      }
    ],
    name: "newStepAppendedToDocument",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "documentID",
        type: "uint256"
      },
      {
        indexed: false,
        name: "when",
        type: "uint256"
      }
    ],
    name: "speditionCompleted",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_address",
        type: "address"
      },
      {
        name: "_name",
        type: "bytes32"
      }
    ],
    name: "registerNewCompany",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_companyID",
        type: "uint256"
      },
      {
        name: "_login",
        type: "bytes32"
      },
      {
        name: "_password",
        type: "bytes32"
      }
    ],
    name: "registerNewEmployee",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_speditorCompanyID",
        type: "uint256"
      },
      {
        name: "_senderCompanyID",
        type: "uint256"
      },
      {
        name: "_recipientCompanyID",
        type: "uint256"
      },
      {
        name: "_originLatitude",
        type: "uint256"
      },
      {
        name: "_originLongitude",
        type: "uint256"
      },
      {
        name: "_destinationLatitude",
        type: "uint256"
      },
      {
        name: "_destinationLongitude",
        type: "uint256"
      },
      {
        name: "_transferedItem",
        type: "bytes32"
      }
    ],
    name: "registerNewSpedition",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_speditionDocumentID",
        type: "uint256"
      },
      {
        name: "_senderCompanyID",
        type: "uint256"
      }
    ],
    name: "confirmSpeditionDocument",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_speditionDocumentID",
        type: "uint256"
      },
      {
        name: "_speditorCompanyID",
        type: "uint256"
      },
      {
        name: "_forwardedFromEmployee",
        type: "uint256"
      },
      {
        name: "_forwardedToEmployee",
        type: "uint256"
      },
      {
        name: "_transferLatitude",
        type: "uint256"
      },
      {
        name: "_transferLongitude",
        type: "uint256"
      },
      {
        name: "_comment",
        type: "string"
      }
    ],
    name: "appendStepToDocument",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_speditionDocumentID",
        type: "uint256"
      },
      {
        name: "_recieverCompanyID",
        type: "uint256"
      },
      {
        name: "_recievingEmployeeID",
        type: "uint256"
      }
    ],
    name: "markSpeditionAsCompleted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_session",
        type: "bytes32"
      }
    ],
    name: "getUserIDBySession",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
