[**scrypt-ts-opcat v1.0.1**](../../../../../README.md)

***

[scrypt-ts-opcat](../../../../../README.md) / [crypto](../../../README.md) / [Signature](../README.md) / isTxDER

# Function: isTxDER()

> **isTxDER**(`buf`): `boolean`

Defined in: node\_modules/@opcat-labs/opcat/types/crypto/signature.d.cts:145

This function is translated from bitcoind's IsDERSignature and is used in
the script interpreter.  This "DER" format actually includes an extra byte,
the nhashtype, at the end. It is really the tx format, not DER format.

A canonical signature exists of: [30] [total len] [02] [len R] [R] [02] [len S] [S] [hashtype]
Where R and S are not negative (their first byte has its highest bit not set), and not
excessively padded (do not start with a 0 byte, unless an otherwise negative number follows,
in which case a single 0 byte is necessary and even required).

See https://bitcointalk.org/index.php?topic=8392.msg127623#msg127623

## Parameters

### buf

`Buffer`

The buffer containing the signature to verify

## Returns

`boolean`

True if the signature is valid DER-encoded, false otherwise

## Static
