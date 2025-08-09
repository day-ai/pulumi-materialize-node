import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getScimGroups(args?: GetScimGroupsArgs, opts?: pulumi.InvokeOptions): Promise<GetScimGroupsResult>;
/**
 * A collection of arguments for invoking getScimGroups.
 */
export interface GetScimGroupsArgs {
    id?: string;
}
/**
 * A collection of values returned by getScimGroups.
 */
export interface GetScimGroupsResult {
    readonly groups: outputs.GetScimGroupsGroup[];
    readonly id: string;
}
export declare function getScimGroupsOutput(args?: GetScimGroupsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScimGroupsResult>;
/**
 * A collection of arguments for invoking getScimGroups.
 */
export interface GetScimGroupsOutputArgs {
    id?: pulumi.Input<string>;
}
