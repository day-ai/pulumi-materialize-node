import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSink(args?: GetSinkArgs, opts?: pulumi.InvokeOptions): Promise<GetSinkResult>;
/**
 * A collection of arguments for invoking getSink.
 */
export interface GetSinkArgs {
    databaseName?: string;
    id?: string;
    region?: string;
    schemaName?: string;
}
/**
 * A collection of values returned by getSink.
 */
export interface GetSinkResult {
    readonly databaseName?: string;
    readonly id: string;
    readonly region: string;
    readonly schemaName?: string;
    readonly sinks: outputs.GetSinkSink[];
}
export declare function getSinkOutput(args?: GetSinkOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSinkResult>;
/**
 * A collection of arguments for invoking getSink.
 */
export interface GetSinkOutputArgs {
    databaseName?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    schemaName?: pulumi.Input<string>;
}
