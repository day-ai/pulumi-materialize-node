import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getConnection(args?: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult>;
/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionArgs {
    connectionId?: string;
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}
/**
 * A collection of values returned by getConnection.
 */
export interface GetConnectionResult {
    readonly connectionId?: string;
    readonly connections: outputs.GetConnectionConnection[];
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemaName?: string;
}
export declare function getConnectionOutput(args?: GetConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetConnectionResult>;
/**
 * A collection of arguments for invoking getConnection.
 */
export interface GetConnectionOutputArgs {
    connectionId?: pulumi.Input<string>;
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
