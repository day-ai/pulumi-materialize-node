import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getNetworkPolicy(args?: GetNetworkPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkPolicyResult>;
/**
 * A collection of arguments for invoking getNetworkPolicy.
 */
export interface GetNetworkPolicyArgs {
    id?: string;
    region?: string;
}
/**
 * A collection of values returned by getNetworkPolicy.
 */
export interface GetNetworkPolicyResult {
    readonly id: string;
    readonly networkPolicies: outputs.GetNetworkPolicyNetworkPolicy[];
    readonly region: string;
}
export declare function getNetworkPolicyOutput(args?: GetNetworkPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNetworkPolicyResult>;
/**
 * A collection of arguments for invoking getNetworkPolicy.
 */
export interface GetNetworkPolicyOutputArgs {
    id?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
