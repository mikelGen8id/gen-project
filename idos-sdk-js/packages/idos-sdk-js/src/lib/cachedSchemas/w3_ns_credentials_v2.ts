export default {
  "@context": {
    "@protected": true,
    "@vocab": "https://www.w3.org/ns/credentials/issuer-dependent#",

    id: "@id",
    type: "@type",

    kid: {
      "@id": "https://www.iana.org/assignments/jose#kid",
      "@type": "@id",
    },
    iss: {
      "@id": "https://www.iana.org/assignments/jose#iss",
      "@type": "@id",
    },
    sub: {
      "@id": "https://www.iana.org/assignments/jose#sub",
      "@type": "@id",
    },
    jku: {
      "@id": "https://www.iana.org/assignments/jose#jku",
      "@type": "@id",
    },
    x5u: {
      "@id": "https://www.iana.org/assignments/jose#x5u",
      "@type": "@id",
    },
    aud: {
      "@id": "https://www.iana.org/assignments/jwt#aud",
      "@type": "@id",
    },
    exp: {
      "@id": "https://www.iana.org/assignments/jwt#exp",
      "@type": "https://www.w3.org/2001/XMLSchema#nonNegativeInteger",
    },
    nbf: {
      "@id": "https://www.iana.org/assignments/jwt#nbf",
      "@type": "https://www.w3.org/2001/XMLSchema#nonNegativeInteger",
    },
    iat: {
      "@id": "https://www.iana.org/assignments/jwt#iat",
      "@type": "https://www.w3.org/2001/XMLSchema#nonNegativeInteger",
    },
    cnf: {
      "@id": "https://www.iana.org/assignments/jwt#cnf",
      "@context": {
        "@protected": true,
        kid: {
          "@id": "https://www.iana.org/assignments/jwt#kid",
          "@type": "@id",
        },
        jwk: {
          "@id": "https://www.iana.org/assignments/jwt#jwk",
          "@type": "@json",
        },
      },
    },
    _sd_alg: {
      "@id": "https://www.iana.org/assignments/jwt#_sd_alg",
    },
    _sd: {
      "@id": "https://www.iana.org/assignments/jwt#_sd",
    },
    "...": {
      "@id": "https://www.iana.org/assignments/jwt#...",
    },

    digestSRI: {
      "@id": "https://www.w3.org/2018/credentials#digestSRI",
      "@type": "https://www.w3.org/2018/credentials#sriString",
    },
    mediaType: {
      "@id": "https://schema.org/encodingFormat",
    },

    VerifiableCredential: {
      "@id": "https://www.w3.org/2018/credentials#VerifiableCredential",
      "@context": {
        "@protected": true,

        id: "@id",
        type: "@type",

        credentialSchema: {
          "@id": "https://www.w3.org/2018/credentials#credentialSchema",
          "@type": "@id",
        },
        credentialStatus: {
          "@id": "https://www.w3.org/2018/credentials#credentialStatus",
          "@type": "@id",
        },
        credentialSubject: {
          "@id": "https://www.w3.org/2018/credentials#credentialSubject",
          "@type": "@id",
        },
        description: {
          "@id": "https://schema.org/description",
          "@context": {
            value: "@value",
            lang: "@language",
            dir: "@direction",
          },
        },
        evidence: {
          "@id": "https://www.w3.org/2018/credentials#evidence",
          "@type": "@id",
        },
        validFrom: {
          "@id": "https://www.w3.org/2018/credentials#validFrom",
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        },
        validUntil: {
          "@id": "https://www.w3.org/2018/credentials#validUntil",
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        },
        issuer: {
          "@id": "https://www.w3.org/2018/credentials#issuer",
          "@type": "@id",
          "@context": {
            "@protected": true,

            id: "@id",
            type: "@type",

            description: {
              "@id": "https://schema.org/description",
              "@context": {
                value: "@value",
                lang: "@language",
                dir: "@direction",
              },
            },
            name: {
              "@id": "https://schema.org/name",
              "@context": {
                value: "@value",
                lang: "@language",
                dir: "@direction",
              },
            },
          },
        },
        name: {
          "@id": "https://schema.org/name",
          "@context": {
            value: "@value",
            lang: "@language",
            dir: "@direction",
          },
        },
        proof: {
          "@id": "https://w3id.org/security#proof",
          "@type": "@id",
          "@container": "@graph",
        },
        refreshService: {
          "@id": "https://www.w3.org/2018/credentials#refreshService",
          "@type": "@id",
        },
        termsOfUse: {
          "@id": "https://www.w3.org/2018/credentials#termsOfUse",
          "@type": "@id",
        },
        confidenceMethod: {
          "@id": "https://www.w3.org/2018/credentials#confidenceMethod",
          "@type": "@id",
        },
        relatedResource: {
          "@id": "https://www.w3.org/2018/credentials#relatedResource",
          "@type": "@id",
        },
      },
    },

    VerifiablePresentation: {
      "@id": "https://www.w3.org/2018/credentials#VerifiablePresentation",
      "@context": {
        "@protected": true,

        id: "@id",
        type: "@type",
        holder: {
          "@id": "https://www.w3.org/2018/credentials#holder",
          "@type": "@id",
        },
        proof: {
          "@id": "https://w3id.org/security#proof",
          "@type": "@id",
          "@container": "@graph",
        },
        verifiableCredential: {
          "@id": "https://www.w3.org/2018/credentials#verifiableCredential",
          "@type": "@id",
          "@container": "@graph",
          "@context": null,
        },
        termsOfUse: {
          "@id": "https://www.w3.org/2018/credentials#termsOfUse",
          "@type": "@id",
        },
      },
    },

    JsonSchemaCredential: "https://w3.org/2018/credentials#JsonSchemaCredential",

    JsonSchema: {
      "@id": "https://w3.org/2018/credentials#JsonSchema",
      "@context": {
        "@protected": true,

        id: "@id",
        type: "@type",

        jsonSchema: {
          "@id": "https://w3.org/2018/credentials#jsonSchema",
          "@type": "@json",
        },
      },
    },

    StatusList2021Credential: {
      "@id": "https://w3id.org/vc/status-list#StatusList2021Credential",
      "@context": {
        "@protected": true,

        id: "@id",
        type: "@type",

        description: "https://schema.org/description",
        name: "https://schema.org/name",
      },
    },

    StatusList2021: {
      "@id": "https://w3id.org/vc/status-list#StatusList2021",
      "@context": {
        "@protected": true,

        id: "@id",
        type: "@type",

        statusPurpose: "https://w3id.org/vc/status-list#statusPurpose",
        encodedList: "https://w3id.org/vc/status-list#encodedList",
      },
    },

    StatusList2021Entry: {
      "@id": "https://w3id.org/vc/status-list#StatusList2021Entry",
      "@context": {
        "@protected": true,

        id: "@id",
        type: "@type",

        statusPurpose: "https://w3id.org/vc/status-list#statusPurpose",
        statusListIndex: "https://w3id.org/vc/status-list#statusListIndex",
        statusListCredential: {
          "@id": "https://w3id.org/vc/status-list#statusListCredential",
          "@type": "@id",
        },
      },
    },

    DataIntegrityProof: {
      "@id": "https://w3id.org/security#DataIntegrityProof",
      "@context": {
        "@protected": true,
        id: "@id",
        type: "@type",
        challenge: "https://w3id.org/security#challenge",
        created: {
          "@id": "http://purl.org/dc/terms/created",
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        },
        domain: "https://w3id.org/security#domain",
        expires: {
          "@id": "https://w3id.org/security#expiration",
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
        },
        nonce: "https://w3id.org/security#nonce",
        previousProof: {
          "@id": "https://w3id.org/security#previousProof",
          "@type": "@id",
        },
        proofPurpose: {
          "@id": "https://w3id.org/security#proofPurpose",
          "@type": "@vocab",
          "@context": {
            "@protected": true,
            id: "@id",
            type: "@type",
            assertionMethod: {
              "@id": "https://w3id.org/security#assertionMethod",
              "@type": "@id",
              "@container": "@set",
            },
            authentication: {
              "@id": "https://w3id.org/security#authenticationMethod",
              "@type": "@id",
              "@container": "@set",
            },
            capabilityInvocation: {
              "@id": "https://w3id.org/security#capabilityInvocationMethod",
              "@type": "@id",
              "@container": "@set",
            },
            capabilityDelegation: {
              "@id": "https://w3id.org/security#capabilityDelegationMethod",
              "@type": "@id",
              "@container": "@set",
            },
            keyAgreement: {
              "@id": "https://w3id.org/security#keyAgreementMethod",
              "@type": "@id",
              "@container": "@set",
            },
          },
        },
        cryptosuite: {
          "@id": "https://w3id.org/security#cryptosuite",
          "@type": "https://w3id.org/security#cryptosuiteString",
        },
        proofValue: {
          "@id": "https://w3id.org/security#proofValue",
          "@type": "https://w3id.org/security#multibase",
        },
        verificationMethod: {
          "@id": "https://w3id.org/security#verificationMethod",
          "@type": "@id",
        },
      },
    },
  },
};
