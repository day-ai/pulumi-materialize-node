/**
 * The base endpoint for Materialize.
 */
export declare const baseEndpoint: string | undefined;
/**
 * The endpoint for the Materialize Cloud API.
 */
export declare const cloudEndpoint: string | undefined;
/**
 * The Materialize database. Can also come from the `MZ_DATABASE` environment variable. Defaults to <span pulumi-lang-nodejs="`materialize`" pulumi-lang-dotnet="`Materialize`" pulumi-lang-go="`materialize`" pulumi-lang-python="`materialize`" pulumi-lang-yaml="`materialize`" pulumi-lang-java="`materialize`">`materialize`</span>.
 */
export declare const database: string | undefined;
/**
 * The default region if not specified in the resource
 */
export declare const defaultRegion: string | undefined;
/**
 * The endpoint for the Materialize API.
 */
export declare const endpoint: string | undefined;
/**
 * The Materialize host. Can also come from the `MZ_HOST` environment variable.
 */
export declare const host: string | undefined;
/**
 * Materialize host. Can also come from the `MZ_PASSWORD` environment variable.
 */
export declare const password: string | undefined;
/**
 * The Materialize SQL port. Can also come from the `MZ_PORT` environment variable.
 */
export declare const port: number | undefined;
/**
 * For testing purposes, the SSL mode to use.
 */
export declare const sslmode: string | undefined;
/**
 * The Materialize username. Can also come from the `MZ_USERNAME` environment variable.
 */
export declare const username: string | undefined;
