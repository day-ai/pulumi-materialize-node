import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getDatabase(args?: GetDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseResult>;
/**
 * A collection of arguments for invoking getDatabase.
 */
export interface GetDatabaseArgs {
    id?: string;
    region?: string;
}
/**
 * A collection of values returned by getDatabase.
 */
export interface GetDatabaseResult {
    readonly databases: outputs.GetDatabaseDatabase[];
    readonly id: string;
    readonly region: string;
}
export declare function getDatabaseOutput(args?: GetDatabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatabaseResult>;
/**
 * A collection of arguments for invoking getDatabase.
 */
export interface GetDatabaseOutputArgs {
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
