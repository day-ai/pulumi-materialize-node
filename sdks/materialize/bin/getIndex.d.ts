import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getIndex(args?: GetIndexArgs, opts?: pulumi.InvokeOptions): Promise<GetIndexResult>;
/**
 * A collection of arguments for invoking getIndex.
 */
export interface GetIndexArgs {
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}
/**
 * A collection of values returned by getIndex.
 */
export interface GetIndexResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly indexes: outputs.GetIndexIndex[];
    readonly region: string;
    readonly schemaName?: string;
}
export declare function getIndexOutput(args?: GetIndexOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIndexResult>;
/**
 * A collection of arguments for invoking getIndex.
 */
export interface GetIndexOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
