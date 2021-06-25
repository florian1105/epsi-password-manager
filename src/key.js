import NodeRSA from 'node-rsa'
const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC3T9JYwx7CrForpcdiQ1aMlvMpIASknVX3Xi+kDLIWIiJZ3Vj06v6x65nHhmeiqAXtwuxx0mFK6YDDSFbYP4aLd0RaUh/EqDQlCHFK+7dtRviFsRRcIjfc2xe+SNNhyYJlKnotfuY/itwpe9+XsBq9uli2e5Xvd+U/czdj7FTfawIDAQAB-----END PUBLIC KEY-----`
export const key = new NodeRSA(PUBLIC_KEY,'pkcs8') 