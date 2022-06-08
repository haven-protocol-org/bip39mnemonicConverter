export function sc_reduce32(data: any): Uint8Array;
export function secret_key_to_public_key(data: any): Uint8Array | null;
export function hash_to_scalar(data: any): Uint8Array;
export function get_subaddress_secret_key(data: any, major: any, minor: any): Uint8Array;
export function sc_add(data1: any, data2: any): Uint8Array;
export function scalarmultKey(P: any, a: any): Uint8Array | null;
export const MONERO_MAINNET: 0;
export const MONERO_TESTNET: 1;
export const MONERO_STAGENET: 2;
export function pub_keys_to_address(net: any, is_subaddress: any, public_spend_key: any, public_view_key: any): string;
export function secret_spend_key_to_words(secret_spend_key: any): string;