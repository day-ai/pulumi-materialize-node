import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSecret(args?: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult>;
/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretArgs {
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}
/**
 * A collection of values returned by getSecret.
 */
export interface GetSecretResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemaName?: string;
    readonly secrets: outputs.GetSecretSecret[];
}
export declare function getSecretOutput(args?: GetSecretOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSecretResult>;
/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
