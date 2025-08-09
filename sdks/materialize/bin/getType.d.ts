import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getType(args?: GetTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetTypeResult>;
/**
 * A collection of arguments for invoking getType.
 */
export interface GetTypeArgs {
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}
/**
 * A collection of values returned by getType.
 */
export interface GetTypeResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemaName?: string;
    readonly types: outputs.GetTypeType[];
}
export declare function getTypeOutput(args?: GetTypeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTypeResult>;
/**
 * A collection of arguments for invoking getType.
 */
export interface GetTypeOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
