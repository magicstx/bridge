import { ClarityAbi } from '@clarigen/core';

// prettier-ignore
export const ClarityBitcoinInterface: ClarityAbi = {
  "functions": [
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
      "name": "get-reversed-txid",
      "access": "read_only",
      "args": [
        {
          "name": "tx",
          "type": {
            "buffer": {
              "length": 1024
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 32
          }
        }
      }
    },
    {
      "name": "get-txid",
      "access": "read_only",
      "args": [
        {
          "name": "tx",
          "type": {
            "buffer": {
              "length": 1024
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 32
          }
        }
      }
    },
    {
      "name": "inner-buff32-permutation",
      "access": "read_only",
      "args": [
        {
          "name": "target-index",
          "type": "uint128"
        },
        {
          "name": "state",
          "type": {
            "tuple": [
              {
                "name": "hash-input",
                "type": {
                  "buffer": {
                    "length": 32
                  }
                }
              },
              {
                "name": "hash-output",
                "type": {
                  "buffer": {
                    "length": 32
                  }
                }
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "tuple": [
            {
              "name": "hash-input",
              "type": {
                "buffer": {
                  "length": 32
                }
              }
            },
            {
              "name": "hash-output",
              "type": {
                "buffer": {
                  "length": 32
                }
              }
            }
          ]
        }
      }
    },
    {
      "name": "inner-merkle-proof-verify",
      "access": "read_only",
      "args": [
        {
          "name": "ctr",
          "type": "uint128"
        },
        {
          "name": "state",
          "type": {
            "tuple": [
              {
                "name": "cur-hash",
                "type": {
                  "buffer": {
                    "length": 32
                  }
                }
              },
              {
                "name": "path",
                "type": "uint128"
              },
              {
                "name": "proof-hashes",
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
                "name": "root-hash",
                "type": {
                  "buffer": {
                    "length": 32
                  }
                }
              },
              {
                "name": "tree-depth",
                "type": "uint128"
              },
              {
                "name": "verified",
                "type": "bool"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "tuple": [
            {
              "name": "cur-hash",
              "type": {
                "buffer": {
                  "length": 32
                }
              }
            },
            {
              "name": "path",
              "type": "uint128"
            },
            {
              "name": "proof-hashes",
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
              "name": "root-hash",
              "type": {
                "buffer": {
                  "length": 32
                }
              }
            },
            {
              "name": "tree-depth",
              "type": "uint128"
            },
            {
              "name": "verified",
              "type": "bool"
            }
          ]
        }
      }
    },
    {
      "name": "inner-read-slice",
      "access": "read_only",
      "args": [
        {
          "name": "chunk_size",
          "type": "uint128"
        },
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "acc",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "buffer",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              },
              {
                "name": "remaining",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "tuple": [
            {
              "name": "acc",
              "type": {
                "buffer": {
                  "length": 1024
                }
              }
            },
            {
              "name": "buffer",
              "type": {
                "buffer": {
                  "length": 1024
                }
              }
            },
            {
              "name": "index",
              "type": "uint128"
            },
            {
              "name": "remaining",
              "type": "uint128"
            }
          ]
        }
      }
    },
    {
      "name": "inner-read-slice-1024",
      "access": "read_only",
      "args": [
        {
          "name": "ignored",
          "type": "bool"
        },
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "acc",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "tuple": [
            {
              "name": "acc",
              "type": {
                "buffer": {
                  "length": 1024
                }
              }
            },
            {
              "name": "data",
              "type": {
                "buffer": {
                  "length": 1024
                }
              }
            },
            {
              "name": "index",
              "type": "uint128"
            }
          ]
        }
      }
    },
    {
      "name": "is-bit-set",
      "access": "read_only",
      "args": [
        {
          "name": "val",
          "type": "uint128"
        },
        {
          "name": "bit",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": "bool"
      }
    },
    {
      "name": "parse-block-header",
      "access": "read_only",
      "args": [
        {
          "name": "headerbuff",
          "type": {
            "buffer": {
              "length": 80
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
                  "name": "merkle-root",
                  "type": {
                    "buffer": {
                      "length": 32
                    }
                  }
                },
                {
                  "name": "nbits",
                  "type": "uint128"
                },
                {
                  "name": "nonce",
                  "type": "uint128"
                },
                {
                  "name": "parent",
                  "type": {
                    "buffer": {
                      "length": 32
                    }
                  }
                },
                {
                  "name": "timestamp",
                  "type": "uint128"
                },
                {
                  "name": "version",
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
      "name": "parse-tx",
      "access": "read_only",
      "args": [
        {
          "name": "tx",
          "type": {
            "buffer": {
              "length": 1024
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
                  "name": "ins",
                  "type": {
                    "list": {
                      "type": {
                        "tuple": [
                          {
                            "name": "outpoint",
                            "type": {
                              "tuple": [
                                {
                                  "name": "hash",
                                  "type": {
                                    "buffer": {
                                      "length": 32
                                    }
                                  }
                                },
                                {
                                  "name": "index",
                                  "type": "uint128"
                                }
                              ]
                            }
                          },
                          {
                            "name": "scriptSig",
                            "type": {
                              "buffer": {
                                "length": 256
                              }
                            }
                          },
                          {
                            "name": "sequence",
                            "type": "uint128"
                          }
                        ]
                      },
                      "length": 8
                    }
                  }
                },
                {
                  "name": "locktime",
                  "type": "uint128"
                },
                {
                  "name": "outs",
                  "type": {
                    "list": {
                      "type": {
                        "tuple": [
                          {
                            "name": "scriptPubKey",
                            "type": {
                              "buffer": {
                                "length": 128
                              }
                            }
                          },
                          {
                            "name": "value",
                            "type": "uint128"
                          }
                        ]
                      },
                      "length": 8
                    }
                  }
                },
                {
                  "name": "version",
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
      "name": "read-hashslice",
      "access": "read_only",
      "args": [
        {
          "name": "old-ctx",
          "type": {
            "tuple": [
              {
                "name": "index",
                "type": "uint128"
              },
              {
                "name": "txbuff",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "hashslice",
                  "type": {
                    "buffer": {
                      "length": 32
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
      "name": "read-next-txin",
      "access": "read_only",
      "args": [
        {
          "name": "ignored",
          "type": "bool"
        },
        {
          "name": "state-res",
          "type": {
            "response": {
              "ok": {
                "tuple": [
                  {
                    "name": "ctx",
                    "type": {
                      "tuple": [
                        {
                          "name": "index",
                          "type": "uint128"
                        },
                        {
                          "name": "txbuff",
                          "type": {
                            "buffer": {
                              "length": 1024
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "name": "remaining",
                    "type": "uint128"
                  },
                  {
                    "name": "txins",
                    "type": {
                      "list": {
                        "type": {
                          "tuple": [
                            {
                              "name": "outpoint",
                              "type": {
                                "tuple": [
                                  {
                                    "name": "hash",
                                    "type": {
                                      "buffer": {
                                        "length": 32
                                      }
                                    }
                                  },
                                  {
                                    "name": "index",
                                    "type": "uint128"
                                  }
                                ]
                              }
                            },
                            {
                              "name": "scriptSig",
                              "type": {
                                "buffer": {
                                  "length": 256
                                }
                              }
                            },
                            {
                              "name": "sequence",
                              "type": "uint128"
                            }
                          ]
                        },
                        "length": 8
                      }
                    }
                  }
                ]
              },
              "error": "uint128"
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
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "remaining",
                  "type": "uint128"
                },
                {
                  "name": "txins",
                  "type": {
                    "list": {
                      "type": {
                        "tuple": [
                          {
                            "name": "outpoint",
                            "type": {
                              "tuple": [
                                {
                                  "name": "hash",
                                  "type": {
                                    "buffer": {
                                      "length": 32
                                    }
                                  }
                                },
                                {
                                  "name": "index",
                                  "type": "uint128"
                                }
                              ]
                            }
                          },
                          {
                            "name": "scriptSig",
                            "type": {
                              "buffer": {
                                "length": 256
                              }
                            }
                          },
                          {
                            "name": "sequence",
                            "type": "uint128"
                          }
                        ]
                      },
                      "length": 8
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
      "name": "read-next-txout",
      "access": "read_only",
      "args": [
        {
          "name": "ignored",
          "type": "bool"
        },
        {
          "name": "state-res",
          "type": {
            "response": {
              "ok": {
                "tuple": [
                  {
                    "name": "ctx",
                    "type": {
                      "tuple": [
                        {
                          "name": "index",
                          "type": "uint128"
                        },
                        {
                          "name": "txbuff",
                          "type": {
                            "buffer": {
                              "length": 1024
                            }
                          }
                        }
                      ]
                    }
                  },
                  {
                    "name": "remaining",
                    "type": "uint128"
                  },
                  {
                    "name": "txouts",
                    "type": {
                      "list": {
                        "type": {
                          "tuple": [
                            {
                              "name": "scriptPubKey",
                              "type": {
                                "buffer": {
                                  "length": 128
                                }
                              }
                            },
                            {
                              "name": "value",
                              "type": "uint128"
                            }
                          ]
                        },
                        "length": 8
                      }
                    }
                  }
                ]
              },
              "error": "uint128"
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
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "remaining",
                  "type": "uint128"
                },
                {
                  "name": "txouts",
                  "type": {
                    "list": {
                      "type": {
                        "tuple": [
                          {
                            "name": "scriptPubKey",
                            "type": {
                              "buffer": {
                                "length": 128
                              }
                            }
                          },
                          {
                            "name": "value",
                            "type": "uint128"
                          }
                        ]
                      },
                      "length": 8
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
      "name": "read-slice",
      "access": "read_only",
      "args": [
        {
          "name": "data",
          "type": {
            "buffer": {
              "length": 1024
            }
          }
        },
        {
          "name": "offset",
          "type": "uint128"
        },
        {
          "name": "size",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "buffer": {
                "length": 1024
              }
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "read-slice-1",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-slice-128",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-slice-16",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-slice-2",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-slice-256",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-slice-32",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-slice-4",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-slice-512",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-slice-64",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-slice-8",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "tuple": [
              {
                "name": "data",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              },
              {
                "name": "index",
                "type": "uint128"
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 1024
          }
        }
      }
    },
    {
      "name": "read-txins",
      "access": "read_only",
      "args": [
        {
          "name": "ctx",
          "type": {
            "tuple": [
              {
                "name": "index",
                "type": "uint128"
              },
              {
                "name": "txbuff",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "remaining",
                  "type": "uint128"
                },
                {
                  "name": "txins",
                  "type": {
                    "list": {
                      "type": {
                        "tuple": [
                          {
                            "name": "outpoint",
                            "type": {
                              "tuple": [
                                {
                                  "name": "hash",
                                  "type": {
                                    "buffer": {
                                      "length": 32
                                    }
                                  }
                                },
                                {
                                  "name": "index",
                                  "type": "uint128"
                                }
                              ]
                            }
                          },
                          {
                            "name": "scriptSig",
                            "type": {
                              "buffer": {
                                "length": 256
                              }
                            }
                          },
                          {
                            "name": "sequence",
                            "type": "uint128"
                          }
                        ]
                      },
                      "length": 8
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
      "name": "read-txouts",
      "access": "read_only",
      "args": [
        {
          "name": "ctx",
          "type": {
            "tuple": [
              {
                "name": "index",
                "type": "uint128"
              },
              {
                "name": "txbuff",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "remaining",
                  "type": "uint128"
                },
                {
                  "name": "txouts",
                  "type": {
                    "list": {
                      "type": {
                        "tuple": [
                          {
                            "name": "scriptPubKey",
                            "type": {
                              "buffer": {
                                "length": 128
                              }
                            }
                          },
                          {
                            "name": "value",
                            "type": "uint128"
                          }
                        ]
                      },
                      "length": 8
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
      "name": "read-uint16",
      "access": "read_only",
      "args": [
        {
          "name": "ctx",
          "type": {
            "tuple": [
              {
                "name": "index",
                "type": "uint128"
              },
              {
                "name": "txbuff",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "uint16",
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
      "name": "read-uint32",
      "access": "read_only",
      "args": [
        {
          "name": "ctx",
          "type": {
            "tuple": [
              {
                "name": "index",
                "type": "uint128"
              },
              {
                "name": "txbuff",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "uint32",
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
      "name": "read-uint64",
      "access": "read_only",
      "args": [
        {
          "name": "ctx",
          "type": {
            "tuple": [
              {
                "name": "index",
                "type": "uint128"
              },
              {
                "name": "txbuff",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "uint64",
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
      "name": "read-varint",
      "access": "read_only",
      "args": [
        {
          "name": "ctx",
          "type": {
            "tuple": [
              {
                "name": "index",
                "type": "uint128"
              },
              {
                "name": "txbuff",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "varint",
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
      "name": "read-varslice",
      "access": "read_only",
      "args": [
        {
          "name": "old-ctx",
          "type": {
            "tuple": [
              {
                "name": "index",
                "type": "uint128"
              },
              {
                "name": "txbuff",
                "type": {
                  "buffer": {
                    "length": 1024
                  }
                }
              }
            ]
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "tuple": [
                {
                  "name": "ctx",
                  "type": {
                    "tuple": [
                      {
                        "name": "index",
                        "type": "uint128"
                      },
                      {
                        "name": "txbuff",
                        "type": {
                          "buffer": {
                            "length": 1024
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  "name": "varslice",
                  "type": {
                    "buffer": {
                      "length": 1024
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
      "name": "reverse-buff32",
      "access": "read_only",
      "args": [
        {
          "name": "input",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "buffer": {
            "length": 32
          }
        }
      }
    },
    {
      "name": "verify-block-header",
      "access": "read_only",
      "args": [
        {
          "name": "headerbuff",
          "type": {
            "buffer": {
              "length": 80
            }
          }
        },
        {
          "name": "expected-block-height",
          "type": "uint128"
        }
      ],
      "outputs": {
        "type": "bool"
      }
    },
    {
      "name": "verify-merkle-proof",
      "access": "read_only",
      "args": [
        {
          "name": "reversed-txid",
          "type": {
            "buffer": {
              "length": 32
            }
          }
        },
        {
          "name": "merkle-root",
          "type": {
            "buffer": {
              "length": 32
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
      "name": "verify-prev-block",
      "access": "read_only",
      "args": [
        {
          "name": "block",
          "type": {
            "buffer": {
              "length": 80
            }
          }
        },
        {
          "name": "parent",
          "type": {
            "buffer": {
              "length": 80
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
      "name": "verify-prev-blocks",
      "access": "read_only",
      "args": [
        {
          "name": "block",
          "type": {
            "buffer": {
              "length": 80
            }
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
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "buffer": {
                "length": 80
              }
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "verify-prev-blocks-fold",
      "access": "read_only",
      "args": [
        {
          "name": "parent",
          "type": {
            "buffer": {
              "length": 80
            }
          }
        },
        {
          "name": "next-resp",
          "type": {
            "response": {
              "ok": {
                "buffer": {
                  "length": 80
                }
              },
              "error": "uint128"
            }
          }
        }
      ],
      "outputs": {
        "type": {
          "response": {
            "ok": {
              "buffer": {
                "length": 80
              }
            },
            "error": "uint128"
          }
        }
      }
    },
    {
      "name": "was-tx-mined-prev?",
      "access": "read_only",
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
      "name": "was-tx-mined?",
      "access": "read_only",
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
      "name": "ERR-BAD-HEADER",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "ERR-INVALID-PARENT",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "ERR-OUT-OF-BOUNDS",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "ERR-PROOF-TOO-SHORT",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "ERR-TOO-MANY-TXINS",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "ERR-TOO-MANY-TXOUTS",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "ERR-VARSLICE-TOO-LONG",
      "type": "uint128",
      "access": "constant"
    },
    {
      "name": "LIST_128",
      "type": {
        "list": {
          "type": "bool",
          "length": 128
        }
      },
      "access": "constant"
    },
    {
      "name": "LIST_16",
      "type": {
        "list": {
          "type": "bool",
          "length": 16
        }
      },
      "access": "constant"
    },
    {
      "name": "LIST_256",
      "type": {
        "list": {
          "type": "bool",
          "length": 256
        }
      },
      "access": "constant"
    },
    {
      "name": "LIST_32",
      "type": {
        "list": {
          "type": "bool",
          "length": 32
        }
      },
      "access": "constant"
    },
    {
      "name": "LIST_512",
      "type": {
        "list": {
          "type": "bool",
          "length": 512
        }
      },
      "access": "constant"
    },
    {
      "name": "LIST_64",
      "type": {
        "list": {
          "type": "bool",
          "length": 64
        }
      },
      "access": "constant"
    }
  ],
  "maps": [],
  "fungible_tokens": [],
  "non_fungible_tokens": []
};
