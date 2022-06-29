import { ClarityAbi } from '@clarigen/core';

// prettier-ignore
export const BridgeInterface: ClarityAbi = {
  "functions": [
    {
      "name": "concat-buffs-fold",
      "access": "private",
      "args": [
        {
          "name": "b",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        },
        {
          "name": "result",
          "type": {
            "buffer": {
              "length": 192
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 192
          }
        }
      }
    },
    {
      "name": "transfer",
      "access": "private",
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
            "ok": "bool",
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "update-user-inbound-volume",
      "access": "private",
      "args": [
        {
          "name": "user",
          "type": "principal"
        },
        {
          "name": "amount",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": "bool"
      }
    },
    {
      "name": "update-user-outbound-volume",
      "access": "private",
      "args": [
        {
          "name": "user",
          "type": "principal"
        },
        {
          "name": "amount",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": "bool"
      }
    },
    {
      "name": "add-funds",
      "access": "public",
      "args": [
        {
          "name": "amount",
          "type": "uint128"
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
      "name": "escrow-swap",
      "access": "public",
      "args": [
        {
          "name": "block",
          "type": {
            "tuple": [
              {
                "name": "header",
                "type": {
                  "buffer": {
                    "length": 80
                  }
                }
              },
              {
                "name": "height",
                "type": "uint128"
              }
            ]
          }
        },
        {
          "name": "prev-blocks",
          "type": {
            "list": {
              "type": {
                "buffer": {
                  "length": 80
                }
              },
              "length": 10
            }
          }
        },
        {
          "name": "tx",
          "type": {
            "buffer": {
              "length": 1024
            }
          }
        },
        {
          "name": "proof",
          "type": {
            "tuple": [
              {
                "name": "hashes",
                "type": {
                  "list": {
                    "type": {
                      "buffer": {
                        "length": 32
                      }
                    },
                    "length": 12
                  }
                }
              },
              {
                "name": "tree-depth",
                "type": "uint128"
              },
              {
                "name": "tx-index",
                "type": "uint128"
              }
            ]
          }
        },
        {
          "name": "output-index",
          "type": "uint128"
        },
        {
          "name": "sender",
          "type": {
            "buffer": {
              "length": 33
            }
          }
        },
        {
          "name": "recipient",
          "type": {
            "buffer": {
              "length": 33
            }
          }
        },
        {
          "name": "expiration-buff",
          "type": {
            "buffer": {
              "length": 4
            }
          }
        },
        {
          "name": "hash",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        },
        {
          "name": "swapper-buff",
          "type": {
            "buffer": {
              "length": 4
            }
          }
        },
        {
          "name": "supplier-id",
          "type": "uint128"
        },
        {
          "name": "min-to-receive",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "csv",
                  "type": "uint128"
                },
                {
                  "name": "output-index",
                  "type": "uint128"
                },
                {
                  "name": "redeem-script",
                  "type": {
                    "buffer": {
                      "length": 120
                    }
                  }
                },
                {
                  "name": "sats",
                  "type": "uint128"
                },
                {
                  "name": "sender-public-key",
                  "type": {
                    "buffer": {
                      "length": 33
                    }
                  }
                }
              ]
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "finalize-outbound-swap",
      "access": "public",
      "args": [
        {
          "name": "block",
          "type": {
            "tuple": [
              {
                "name": "header",
                "type": {
                  "buffer": {
                    "length": 80
                  }
                }
              },
              {
                "name": "height",
                "type": "uint128"
              }
            ]
          }
        },
        {
          "name": "prev-blocks",
          "type": {
            "list": {
              "type": {
                "buffer": {
                  "length": 80
                }
              },
              "length": 10
            }
          }
        },
        {
          "name": "tx",
          "type": {
            "buffer": {
              "length": 1024
            }
          }
        },
        {
          "name": "proof",
          "type": {
            "tuple": [
              {
                "name": "hashes",
                "type": {
                  "list": {
                    "type": {
                      "buffer": {
                        "length": 32
                      }
                    },
                    "length": 12
                  }
                }
              },
              {
                "name": "tree-depth",
                "type": "uint128"
              },
              {
                "name": "tx-index",
                "type": "uint128"
              }
            ]
          }
        },
        {
          "name": "output-index",
          "type": "uint128"
        },
        {
          "name": "swap-id",
          "type": "uint128"
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
      "name": "finalize-swap",
      "access": "public",
      "args": [
        {
          "name": "txid",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        },
        {
          "name": "preimage",
          "type": {
            "buffer": {
              "length": 128
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "expiration",
                  "type": "uint128"
                },
                {
                  "name": "hash",
                  "type": {
                    "buffer": {
                      "length": 32
                    }
                  }
                },
                {
                  "name": "supplier",
                  "type": "uint128"
                },
                {
                  "name": "swapper",
                  "type": "uint128"
                },
                {
                  "name": "xbtc",
                  "type": "uint128"
                }
              ]
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "initialize-swapper",
      "access": "public",
      "args": [],
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
      "name": "initiate-outbound-swap",
      "access": "public",
      "args": [
        {
          "name": "xbtc",
          "type": "uint128"
        },
        {
          "name": "btc-version",
          "type": {
            "buffer": {
              "length": 1
            }
          }
        },
        {
          "name": "btc-hash",
          "type": {
            "buffer": {
              "length": 20
            }
          }
        },
        {
          "name": "supplier-id",
          "type": "uint128"
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
      "name": "register-supplier",
      "access": "public",
      "args": [
        {
          "name": "public-key",
          "type": {
            "buffer": {
              "length": 33
            }
          }
        },
        {
          "name": "inbound-fee",
          "type": {
            "optional": "int128"
          }
        },
        {
          "name": "outbound-fee",
          "type": {
            "optional": "int128"
          }
        },
        {
          "name": "outbound-base-fee",
          "type": "int128"
        },
        {
          "name": "inbound-base-fee",
          "type": "int128"
        },
        {
          "name": "funds",
          "type": "uint128"
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
      "name": "remove-funds",
      "access": "public",
      "args": [
        {
          "name": "amount",
          "type": "uint128"
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
      "name": "revoke-expired-inbound",
      "access": "public",
      "args": [
        {
          "name": "txid",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "expiration",
                  "type": "uint128"
                },
                {
                  "name": "hash",
                  "type": {
                    "buffer": {
                      "length": 32
                    }
                  }
                },
                {
                  "name": "supplier",
                  "type": "uint128"
                },
                {
                  "name": "swapper",
                  "type": "uint128"
                },
                {
                  "name": "xbtc",
                  "type": "uint128"
                }
              ]
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "revoke-expired-outbound",
      "access": "public",
      "args": [
        {
          "name": "swap-id",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "created-at",
                  "type": "uint128"
                },
                {
                  "name": "hash",
                  "type": {
                    "buffer": {
                      "length": 20
                    }
                  }
                },
                {
                  "name": "sats",
                  "type": "uint128"
                },
                {
                  "name": "supplier",
                  "type": "uint128"
                },
                {
                  "name": "swapper",
                  "type": "principal"
                },
                {
                  "name": "version",
                  "type": {
                    "buffer": {
                      "length": 1
                    }
                  }
                },
                {
                  "name": "xbtc",
                  "type": "uint128"
                }
              ]
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "update-supplier-fees",
      "access": "public",
      "args": [
        {
          "name": "inbound-fee",
          "type": {
            "optional": "int128"
          }
        },
        {
          "name": "outbound-fee",
          "type": {
            "optional": "int128"
          }
        },
        {
          "name": "outbound-base-fee",
          "type": "int128"
        },
        {
          "name": "inbound-base-fee",
          "type": "int128"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "controller",
                  "type": "principal"
                },
                {
                  "name": "inbound-base-fee",
                  "type": "int128"
                },
                {
                  "name": "inbound-fee",
                  "type": {
                    "optional": "int128"
                  }
                },
                {
                  "name": "outbound-base-fee",
                  "type": "int128"
                },
                {
                  "name": "outbound-fee",
                  "type": {
                    "optional": "int128"
                  }
                },
                {
                  "name": "public-key",
                  "type": {
                    "buffer": {
                      "length": 33
                    }
                  }
                }
              ]
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "update-supplier-public-key",
      "access": "public",
      "args": [
        {
          "name": "public-key",
          "type": {
            "buffer": {
              "length": 33
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "controller",
                  "type": "principal"
                },
                {
                  "name": "inbound-base-fee",
                  "type": "int128"
                },
                {
                  "name": "inbound-fee",
                  "type": {
                    "optional": "int128"
                  }
                },
                {
                  "name": "outbound-base-fee",
                  "type": "int128"
                },
                {
                  "name": "outbound-fee",
                  "type": {
                    "optional": "int128"
                  }
                },
                {
                  "name": "public-key",
                  "type": {
                    "buffer": {
                      "length": 33
                    }
                  }
                }
              ]
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "buff-to-u8",
      "access": "read_only",
      "args": [
        {
          "name": "byte",
          "type": {
            "buffer": {
              "length": 1
            }
          }
        }
      ],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "bytes-len",
      "access": "read_only",
      "args": [
        {
          "name": "bytes",
          "type": {
            "buffer": {
              "length": 4
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1
          }
        }
      }
    },
    {
      "name": "concat-buffs",
      "access": "read_only",
      "args": [
        {
          "name": "buffs",
          "type": {
            "list": {
              "type": {
                "buffer": {
                  "length": 32
                }
              },
              "length": 6
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 192
          }
        }
      }
    },
    {
      "name": "generate-htlc-script",
      "access": "read_only",
      "args": [
        {
          "name": "sender",
          "type": {
            "buffer": {
              "length": 33
            }
          }
        },
        {
          "name": "recipient",
          "type": {
            "buffer": {
              "length": 33
            }
          }
        },
        {
          "name": "expiration",
          "type": {
            "buffer": {
              "length": 4
            }
          }
        },
        {
          "name": "hash",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        },
        {
          "name": "swapper",
          "type": {
            "buffer": {
              "length": 4
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 120
          }
        }
      }
    },
    {
      "name": "generate-htlc-script-hash",
      "access": "read_only",
      "args": [
        {
          "name": "sender",
          "type": {
            "buffer": {
              "length": 33
            }
          }
        },
        {
          "name": "recipient",
          "type": {
            "buffer": {
              "length": 33
            }
          }
        },
        {
          "name": "expiration",
          "type": {
            "buffer": {
              "length": 4
            }
          }
        },
        {
          "name": "hash",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        },
        {
          "name": "swapper",
          "type": {
            "buffer": {
              "length": 4
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 23
          }
        }
      }
    },
    {
      "name": "generate-output",
      "access": "read_only",
      "args": [
        {
          "name": "version",
          "type": {
            "buffer": {
              "length": 1
            }
          }
        },
        {
          "name": "hash",
          "type": {
            "buffer": {
              "length": 20
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 25
          }
        }
      }
    },
    {
      "name": "generate-p2pkh-output",
      "access": "read_only",
      "args": [
        {
          "name": "hash",
          "type": {
            "buffer": {
              "length": 20
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 25
          }
        }
      }
    },
    {
      "name": "generate-p2sh-output",
      "access": "read_only",
      "args": [
        {
          "name": "hash",
          "type": {
            "buffer": {
              "length": 20
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 23
          }
        }
      }
    },
    {
      "name": "generate-script-hash",
      "access": "read_only",
      "args": [
        {
          "name": "script",
          "type": {
            "buffer": {
              "length": 120
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 23
          }
        }
      }
    },
    {
      "name": "get-amount-with-fee-rate",
      "access": "read_only",
      "args": [
        {
          "name": "amount",
          "type": "uint128"
        },
        {
          "name": "fee-rate",
          "type": "int128"
        }
      ],
      "outputs": {
        "type": "int128"
      }
    },
    {
      "name": "get-completed-outbound-swap-by-txid",
      "access": "read_only",
      "args": [
        {
          "name": "txid",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "optional": "uint128"
        }
      }
    },
    {
      "name": "get-completed-outbound-swap-txid",
      "access": "read_only",
      "args": [
        {
          "name": "id",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "optional": {
            "buffer": {
              "length": 32
            }
          }
        }
      }
    },
    {
      "name": "get-escrow",
      "access": "read_only",
      "args": [
        {
          "name": "id",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "optional": "uint128"
        }
      }
    },
    {
      "name": "get-full-inbound",
      "access": "read_only",
      "args": [
        {
          "name": "txid",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "csv",
                  "type": "uint128"
                },
                {
                  "name": "expiration",
                  "type": "uint128"
                },
                {
                  "name": "hash",
                  "type": {
                    "buffer": {
                      "length": 32
                    }
                  }
                },
                {
                  "name": "output-index",
                  "type": "uint128"
                },
                {
                  "name": "redeem-script",
                  "type": {
                    "buffer": {
                      "length": 120
                    }
                  }
                },
                {
                  "name": "sats",
                  "type": "uint128"
                },
                {
                  "name": "sender-public-key",
                  "type": {
                    "buffer": {
                      "length": 33
                    }
                  }
                },
                {
                  "name": "supplier",
                  "type": "uint128"
                },
                {
                  "name": "swapper",
                  "type": "uint128"
                },
                {
                  "name": "swapper-principal",
                  "type": "principal"
                },
                {
                  "name": "xbtc",
                  "type": "uint128"
                }
              ]
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "get-full-supplier",
      "access": "read_only",
      "args": [
        {
          "name": "id",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "controller",
                  "type": "principal"
                },
                {
                  "name": "escrow",
                  "type": "uint128"
                },
                {
                  "name": "funds",
                  "type": "uint128"
                },
                {
                  "name": "inbound-base-fee",
                  "type": "int128"
                },
                {
                  "name": "inbound-fee",
                  "type": {
                    "optional": "int128"
                  }
                },
                {
                  "name": "outbound-base-fee",
                  "type": "int128"
                },
                {
                  "name": "outbound-fee",
                  "type": {
                    "optional": "int128"
                  }
                },
                {
                  "name": "public-key",
                  "type": {
                    "buffer": {
                      "length": 33
                    }
                  }
                }
              ]
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "get-funds",
      "access": "read_only",
      "args": [
        {
          "name": "id",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "get-inbound-meta",
      "access": "read_only",
      "args": [
        {
          "name": "txid",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "optional": {
            "tuple": [
              {
                "name": "csv",
                "type": "uint128"
              },
              {
                "name": "output-index",
                "type": "uint128"
              },
              {
                "name": "redeem-script",
                "type": {
                  "buffer": {
                    "length": 120
                  }
                }
              },
              {
                "name": "sats",
                "type": "uint128"
              },
              {
                "name": "sender-public-key",
                "type": {
                  "buffer": {
                    "length": 33
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "name": "get-inbound-swap",
      "access": "read_only",
      "args": [
        {
          "name": "txid",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "optional": {
            "tuple": [
              {
                "name": "expiration",
                "type": "uint128"
              },
              {
                "name": "hash",
                "type": {
                  "buffer": {
                    "length": 32
                  }
                }
              },
              {
                "name": "supplier",
                "type": "uint128"
              },
              {
                "name": "swapper",
                "type": "uint128"
              },
              {
                "name": "xbtc",
                "type": "uint128"
              }
            ]
          }
        }
      }
    },
    {
      "name": "get-next-outbound-id",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "get-next-supplier-id",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "get-next-swapper-id",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "get-outbound-swap",
      "access": "read_only",
      "args": [
        {
          "name": "id",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "optional": {
            "tuple": [
              {
                "name": "created-at",
                "type": "uint128"
              },
              {
                "name": "hash",
                "type": {
                  "buffer": {
                    "length": 20
                  }
                }
              },
              {
                "name": "sats",
                "type": "uint128"
              },
              {
                "name": "supplier",
                "type": "uint128"
              },
              {
                "name": "swapper",
                "type": "principal"
              },
              {
                "name": "version",
                "type": {
                  "buffer": {
                    "length": 1
                  }
                }
              },
              {
                "name": "xbtc",
                "type": "uint128"
              }
            ]
          }
        }
      }
    },
    {
      "name": "get-preimage",
      "access": "read_only",
      "args": [
        {
          "name": "txid",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "optional": {
            "buffer": {
              "length": 128
            }
          }
        }
      }
    },
    {
      "name": "get-supplier",
      "access": "read_only",
      "args": [
        {
          "name": "id",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "optional": {
            "tuple": [
              {
                "name": "controller",
                "type": "principal"
              },
              {
                "name": "inbound-base-fee",
                "type": "int128"
              },
              {
                "name": "inbound-fee",
                "type": {
                  "optional": "int128"
                }
              },
              {
                "name": "outbound-base-fee",
                "type": "int128"
              },
              {
                "name": "outbound-fee",
                "type": {
                  "optional": "int128"
                }
              },
              {
                "name": "public-key",
                "type": {
                  "buffer": {
                    "length": 33
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "name": "get-supplier-id-by-controller",
      "access": "read_only",
      "args": [
        {
          "name": "controller",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "optional": "uint128"
        }
      }
    },
    {
      "name": "get-supplier-id-by-public-key",
      "access": "read_only",
      "args": [
        {
          "name": "public-key",
          "type": {
            "buffer": {
              "length": 33
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "optional": "uint128"
        }
      }
    },
    {
      "name": "get-swap-amount",
      "access": "read_only",
      "args": [
        {
          "name": "amount",
          "type": "uint128"
        },
        {
          "name": "fee-rate",
          "type": "int128"
        },
        {
          "name": "base-fee",
          "type": "int128"
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
      "name": "get-swapper-id",
      "access": "read_only",
      "args": [
        {
          "name": "swapper",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": {
          "optional": "uint128"
        }
      }
    },
    {
      "name": "get-swapper-principal",
      "access": "read_only",
      "args": [
        {
          "name": "id",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "optional": "principal"
        }
      }
    },
    {
      "name": "get-total-inbound-volume",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "get-total-outbound-volume",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "get-total-volume",
      "access": "read_only",
      "args": [],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "get-user-inbound-volume",
      "access": "read_only",
      "args": [
        {
          "name": "user",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "get-user-outbound-volume",
      "access": "read_only",
      "args": [
        {
          "name": "user",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "get-user-total-volume",
      "access": "read_only",
      "args": [
        {
          "name": "user",
          "type": "principal"
        }
      ],
      "outputs": {
        "type": "uint128"
      }
    },
    {
      "name": "read-uint32",
      "access": "read_only",
      "args": [
        {
          "name": "num",
          "type": {
            "buffer": {
              "length": 4
            }
          }
        },
        {
          "name": "length",
          "type": "uint128"
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
      "name": "validate-btc-addr",
      "access": "read_only",
      "args": [
        {
          "name": "version",
          "type": {
            "buffer": {
              "length": 1
            }
          }
        },
        {
          "name": "hash",
          "type": {
            "buffer": {
              "length": 20
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
      "name": "validate-expiration",
      "access": "read_only",
      "args": [
        {
          "name": "expiration",
          "type": "uint128"
        },
        {
          "name": "mined-height",
          "type": "uint128"
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
      "name": "validate-fee",
      "access": "read_only",
      "args": [
        {
          "name": "fee-opt",
          "type": {
            "optional": "int128"
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
      "name": "validate-outbound-revocable",
      "access": "read_only",
      "args": [
        {
          "name": "swap-id",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "created-at",
                  "type": "uint128"
                },
                {
                  "name": "hash",
                  "type": {
                    "buffer": {
                      "length": 20
                    }
                  }
                },
                {
                  "name": "sats",
                  "type": "uint128"
                },
                {
                  "name": "supplier",
                  "type": "uint128"
                },
                {
                  "name": "swapper",
                  "type": "principal"
                },
                {
                  "name": "version",
                  "type": {
                    "buffer": {
                      "length": 1
                    }
                  }
                },
                {
                  "name": "xbtc",
                  "type": "uint128"
                }
              ]
            },
            "error": "uint128"
          }
        }
      }
    }
  ],
  "variables": [
    {
      "name": "BUFF_TO_BYTE",
      "type": {
        "list": {
          "type": {
            "buffer": {
              "length": 1
            }
          },
          "length": 256
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_ADD_FUNDS",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_ALREADY_FINALIZED",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_ESCROW_EXPIRED",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_FEE_INVALID",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INCONSISTENT_FEES",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INSUFFICIENT_AMOUNT",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INSUFFICIENT_FUNDS",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INVALID_BTC_ADDR",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INVALID_ESCROW",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INVALID_EXPIRATION",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INVALID_HASH",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INVALID_OUTPUT",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INVALID_PREIMAGE",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INVALID_SUPPLIER",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_INVALID_TX",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_PANIC",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_READ_UINT",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_REVOKE_INBOUND_IS_FINALIZED",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_REVOKE_INBOUND_NOT_EXPIRED",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_REVOKE_OUTBOUND_IS_FINALIZED",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_REVOKE_OUTBOUND_NOT_EXPIRED",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_SUPPLIER_EXISTS",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_SUPPLIER_NOT_FOUND",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_SWAPPER_EXISTS",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_SWAPPER_NOT_FOUND",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_SWAP_NOT_FOUND",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_TRANSFER",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_TXID_USED",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_TX_NOT_MINED",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ERR_UNAUTHORIZED",
      "type": {
        "response": {
          "ok": "none",
          "error": "uint128"
        }
      },
      "access": "constant"
    },
    {
      "name": "ESCROW_EXPIRATION",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "MIN_EXPIRATION",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "OUTBOUND_EXPIRATION",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "P2PKH_VERSION",
      "type": {
        "buffer": {
          "length": 1
        }
      },
      "access": "constant"
    },
    {
      "name": "P2SH_VERSION",
      "type": {
        "buffer": {
          "length": 1
        }
      },
      "access": "constant"
    },
    {
      "name": "REVOKED_INBOUND_PREIMAGE",
      "type": {
        "buffer": {
          "length": 1
        }
      },
      "access": "constant"
    },
    {
      "name": "REVOKED_OUTBOUND_TXID",
      "type": {
        "buffer": {
          "length": 1
        }
      },
      "access": "constant"
    },
    {
      "name": "next-outbound-id",
      "type": "uint128",
      "access": "variable"
    },
    {
      "name": "next-supplier-id",
      "type": "uint128",
      "access": "variable"
    },
    {
      "name": "next-swapper-id",
      "type": "uint128",
      "access": "variable"
    },
    {
      "name": "total-inbound-volume-var",
      "type": "uint128",
      "access": "variable"
    },
    {
      "name": "total-outbound-volume-var",
      "type": "uint128",
      "access": "variable"
    }
  ],
  "maps": [
    {
      "name": "completed-outbound-swap-txids",
      "key": {
        "buffer": {
          "length": 32
        }
      },
      "value": "uint128"
    },
    {
      "name": "completed-outbound-swaps",
      "key": "uint128",
      "value": {
        "buffer": {
          "length": 32
        }
      }
    },
    {
      "name": "inbound-meta",
      "key": {
        "buffer": {
          "length": 32
        }
      },
      "value": {
        "tuple": [
          {
            "name": "csv",
            "type": "uint128"
          },
          {
            "name": "output-index",
            "type": "uint128"
          },
          {
            "name": "redeem-script",
            "type": {
              "buffer": {
                "length": 120
              }
            }
          },
          {
            "name": "sats",
            "type": "uint128"
          },
          {
            "name": "sender-public-key",
            "type": {
              "buffer": {
                "length": 33
              }
            }
          }
        ]
      }
    },
    {
      "name": "inbound-preimages",
      "key": {
        "buffer": {
          "length": 32
        }
      },
      "value": {
        "buffer": {
          "length": 128
        }
      }
    },
    {
      "name": "inbound-swaps",
      "key": {
        "buffer": {
          "length": 32
        }
      },
      "value": {
        "tuple": [
          {
            "name": "expiration",
            "type": "uint128"
          },
          {
            "name": "hash",
            "type": {
              "buffer": {
                "length": 32
              }
            }
          },
          {
            "name": "supplier",
            "type": "uint128"
          },
          {
            "name": "swapper",
            "type": "uint128"
          },
          {
            "name": "xbtc",
            "type": "uint128"
          }
        ]
      }
    },
    {
      "name": "outbound-swaps",
      "key": "uint128",
      "value": {
        "tuple": [
          {
            "name": "created-at",
            "type": "uint128"
          },
          {
            "name": "hash",
            "type": {
              "buffer": {
                "length": 20
              }
            }
          },
          {
            "name": "sats",
            "type": "uint128"
          },
          {
            "name": "supplier",
            "type": "uint128"
          },
          {
            "name": "swapper",
            "type": "principal"
          },
          {
            "name": "version",
            "type": {
              "buffer": {
                "length": 1
              }
            }
          },
          {
            "name": "xbtc",
            "type": "uint128"
          }
        ]
      }
    },
    {
      "name": "supplier-by-controller",
      "key": "principal",
      "value": "uint128"
    },
    {
      "name": "supplier-by-id",
      "key": "uint128",
      "value": {
        "tuple": [
          {
            "name": "controller",
            "type": "principal"
          },
          {
            "name": "inbound-base-fee",
            "type": "int128"
          },
          {
            "name": "inbound-fee",
            "type": {
              "optional": "int128"
            }
          },
          {
            "name": "outbound-base-fee",
            "type": "int128"
          },
          {
            "name": "outbound-fee",
            "type": {
              "optional": "int128"
            }
          },
          {
            "name": "public-key",
            "type": {
              "buffer": {
                "length": 33
              }
            }
          }
        ]
      }
    },
    {
      "name": "supplier-by-public-key",
      "key": {
        "buffer": {
          "length": 33
        }
      },
      "value": "uint128"
    },
    {
      "name": "supplier-escrow",
      "key": "uint128",
      "value": "uint128"
    },
    {
      "name": "supplier-funds",
      "key": "uint128",
      "value": "uint128"
    },
    {
      "name": "swapper-by-id",
      "key": "uint128",
      "value": "principal"
    },
    {
      "name": "swapper-by-principal",
      "key": "principal",
      "value": "uint128"
    },
    {
      "name": "user-inbound-volume-map",
      "key": "principal",
      "value": "uint128"
    },
    {
      "name": "user-outbound-volume-map",
      "key": "principal",
      "value": "uint128"
    }
  ],
  "fungible_tokens": [],
  "non_fungible_tokens": []
};
