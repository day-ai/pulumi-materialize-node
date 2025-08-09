import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getScimConfigs(args?: GetScimConfigsArgs, opts?: pulumi.InvokeOptions): Promise<GetScimConfigsResult>;
/**
 * A collection of arguments for invoking getScimConfigs.
 */
export interface GetScimConfigsArgs {
    id?: string;
}
/**
 * A collection of values returned by getScimConfigs.
 */
export interface GetScimConfigsResult {
    readonly configurations: outputs.GetScimConfigsConfiguration[];
    readonly id: string;
}
export declare function getScimConfigsOutput(args?: GetScimConfigsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScimConfigsResult>;
/**
 * A collection of arguments for invoking getScimConfigs.
 */
export interface GetScimConfigsOutputArgs {
    id?: pulumi.Input<string>;
}
