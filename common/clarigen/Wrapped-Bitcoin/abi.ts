import { ClarityAbi } from '@clarigen/core';

// prettier-ignore
export const WrappedBitcoinInterface: ClarityAbi = {
  "functions": [
    {
      "name": "add-principal-to-role",
      "access": "public",
      "args": [
        {
          "name": "role-to-add",
          "type": "uint128"
        },
        {
          "name": "principal-to-add",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "burn-tokens",
      "access": "public",
      "args": [
        {
          "name": "burn-amount",
          "type": "uint128"
        },
        {
          "name": "burn-from",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "initialize",
      "access": "public",
      "args": [
        {
          "name": "name-to-set",
          "type": {
            "string-ascii": {
              "length": 32
            }
          }
        },
        {
          "name": "symbol-to-set",
          "type": {
            "string-ascii": {
              "length": 32
            }
          }
        },
        {
          "name": "decimals-to-set",
          "type": "uint128"
        },
        {
          "name": "initial-owner",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "mint-tokens",
      "access": "public",
      "args": [
        {
          "name": "mint-amount",
          "type": "uint128"
        },
        {
          "name": "mint-to",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "remove-principal-from-role",
      "access": "public",
      "args": [
        {
          "name": "role-to-remove",
          "type": "uint128"
        },
        {
          "name": "principal-to-remove",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "revoke-tokens",
      "access": "public",
      "args": [
        {
          "name": "revoke-amount",
          "type": "uint128"
        },
        {
          "name": "revoke-from",
          "type": "principal"
        },
        {
          "name": "revoke-to",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "set-token-uri",
      "access": "public",
      "args": [
        {
          "name": "updated-uri",
          "type": {
            "string-utf8": {
              "length": 256
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "transfer",
      "access": "public",
      "args": [
        {
          "name": "amount",
          "type": "uint128"
        },
        {
          "name": "sender",
          "type": "principal"
        },
        {
          "name": "recipient",
          "type": "principal"
        },
        {
          "name": "memo",
          "type": {
            "optional": {
              "buffer": {
                "length": 34
              }
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "update-blacklisted",
      "access": "public",
      "args": [
        {
          "name": "principal-to-update",
          "type": "principal"
        },
        {
          "name": "set-blacklisted",
          "type": "bool"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "detect-transfer-restriction",
      "access": "read_only",
      "args": [
        {
          "name": "amount",
          "type": "uint128"
        },
        {
          "name": "sender",
          "type": "principal"
        },
        {
          "name": "recipient",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "uint128",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "get-balance",
      "access": "read_only",
      "args": [
        {
          "name": "owner",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": "uint128",
            "error": "none"
          }
        }
      }
    },
    {
      "name": "get-decimals",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": {
          "response": {
            "ok": "uint128",
            "error": "none"
          }
        }
      }
    },
    {
      "name": "get-name",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "string-ascii": {
                "length": 32
              }
            },
            "error": "none"
          }
        }
      }
    },
    {
      "name": "get-symbol",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "string-ascii": {
                "length": 32
              }
            },
            "error": "none"
          }
        }
      }
    },
    {
      "name": "get-token-uri",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "optional": {
                "string-utf8": {
                  "length": 256
                }
              }
            },
            "error": "none"
          }
        }
      }
    },
    {
      "name": "get-total-supply",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": {
          "response": {
            "ok": "uint128",
            "error": "none"
          }
        }
      }
    },
    {
      "name": "has-role",
      "access": "read_only",
      "args": [
        {
          "name": "role-to-check",
          "type": "uint128"
        },
        {
          "name": "principal-to-check",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": "bool"
      }
    },
    {
      "name": "is-blacklisted",
      "access": "read_only",
      "args": [
        {
          "name": "principal-to-check",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": "bool"
      }
    },
    {
      "name": "message-for-restriction",
      "access": "read_only",
      "args": [
        {
          "name": "restriction-code",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "string-ascii": {
                "length": 70
              }
            },
            "error": "none"
          }
        }
      }
    }
  ],
  "variables": [
    {
      "name": "BLACKLISTER_ROLE",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "BURNER_ROLE",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "MINTER_ROLE",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "OWNER_ROLE",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "PERMISSION_DENIED_ERROR",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "RESTRICTION_BLACKLIST",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "RESTRICTION_NONE",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "REVOKER_ROLE",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "deployer-principal",
      "type": "principal",
      "access": "variable"
    },
    {
      "name": "is-initialized",
      "type": "bool",
      "access": "variable"
    },
    {
      "name": "token-decimals",
      "type": "uint128",
      "access": "variable"
    },
    {
      "name": "token-name",
      "type": {
        "string-ascii": {
          "length": 32
        }
      },
      "access": "variable"
    },
    {
      "name": "token-symbol",
      "type": {
        "string-ascii": {
          "length": 32
        }
      },
      "access": "variable"
    },
    {
      "name": "uri",
      "type": {
        "string-utf8": {
          "length": 256
        }
      },
      "access": "variable"
    }
  ],
  "maps": [
    {
      "name": "blacklist",
      "key": {
        "tuple": [
          {
            "name": "account",
            "type": "principal"
          }
        ]
      },
      "value": {
        "tuple": [
          {
            "name": "blacklisted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "roles",
      "key": {
        "tuple": [
          {
            "name": "account",
            "type": "principal"
          },
          {
            "name": "role",
            "type": "uint128"
          }
        ]
      },
      "value": {
        "tuple": [
          {
            "name": "allowed",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "fungible_tokens": [
    {
      "name": "wrapped-bitcoin"
    }
  ],
  "non_fungible_tokens": []
};
