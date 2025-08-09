import * as pulumi from "@pulumi/pulumi";
export declare function getCurrentDatabase(args?: GetCurrentDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetCurrentDatabaseResult>;
/**
 * A collection of arguments for invoking getCurrentDatabase.
 */
export interface GetCurrentDatabaseArgs {
    id?: string;
    region?: string;
}
/**
 * A collection of values returned by getCurrentDatabase.
 */
export interface GetCurrentDatabaseResult {
    readonly id: string;
    readonly name: string;
    readonly region: string;
}
export declare function getCurrentDatabaseOutput(args?: GetCurrentDatabaseOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCurrentDatabaseResult>;
/**
 * A collection of arguments for invoking getCurrentDatabase.
 */
export interface GetCurrentDatabaseOutputArgs {
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
