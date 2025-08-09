import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getTable(args?: GetTableArgs, opts?: pulumi.InvokeOptions): Promise<GetTableResult>;
/**
 * A collection of arguments for invoking getTable.
 */
export interface GetTableArgs {
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}
/**
 * A collection of values returned by getTable.
 */
export interface GetTableResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemaName?: string;
    readonly tables: outputs.GetTableTable[];
}
export declare function getTableOutput(args?: GetTableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTableResult>;
/**
 * A collection of arguments for invoking getTable.
 */
export interface GetTableOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
