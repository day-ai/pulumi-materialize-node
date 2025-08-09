import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSource(args?: GetSourceArgs, opts?: pulumi.InvokeOptions): Promise<GetSourceResult>;
/**
 * A collection of arguments for invoking getSource.
 */
export interface GetSourceArgs {
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}
/**
 * A collection of values returned by getSource.
 */
export interface GetSourceResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemaName?: string;
    readonly sources: outputs.GetSourceSource[];
}
export declare function getSourceOutput(args?: GetSourceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSourceResult>;
/**
 * A collection of arguments for invoking getSource.
 */
export interface GetSourceOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
